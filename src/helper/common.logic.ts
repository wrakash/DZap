import { ErrorType, InputType } from "../type";

export const keepFirstFromDuplicates = (inputArray: InputType[]) => {
  const seenStrings: any = {};
  const resultArray: InputType[] = [];

  inputArray?.forEach(({ addressWithAmount }, index) => {
    const [address, amount] = addressWithAmount.split(/,| |=/);

    if (!seenStrings[address]) {
      resultArray.push({ addressWithAmount });
      seenStrings[address] = true;
    }
  });

  return resultArray;
};

const getSymbols = (addressWithAmount: String) => {
  if (addressWithAmount.includes("=")) {
    return "=";
  } else if (addressWithAmount.includes(",")) {
    return ",";
  } else {
    return " ";
  }
};

export const combineBalanceFromDuplicates = (inputArray: InputType[]) => {
  const combineBalance: any = {};
  let symbol: string;
  inputArray.forEach(({ addressWithAmount }) => {
    const [address, amount] = addressWithAmount.split(/,| |=/);
    symbol = getSymbols(addressWithAmount)
    if (combineBalance[address]) {
      combineBalance[address] += parseInt(amount);
    } else {
      combineBalance[address] = parseInt(amount);
    }
  });
  const combinedArray = Object.keys(combineBalance).map((address) => ({
    addressWithAmount: `${address}${symbol}${combineBalance[address]}`,
  }));
  return combinedArray;
};

export const groupData = (inputArray: ErrorType[]) => {
  const groupedData = new Map();

  inputArray.forEach((item: ErrorType) => {
    if (groupedData.has(item.type)) {
      const existingItem = groupedData.get(item.type);
      existingItem.details.push(item.details[0]);
    } else {
      groupedData.set(item.type, { ...item });
    }
  });

  return Array.from(groupedData.values());
};

export const validationCheck = (validatedTokenArray: InputType[]) => {
  const errors: ErrorType[] = [];
  const addressMap = new Map();

  validatedTokenArray.forEach(({ addressWithAmount }, index) => {
    const [address, amount] = addressWithAmount.split(/,| |=/);
    const isValidAmount = /^[0-9]+$/.test(amount);

    if (addressMap.has(address)) {
      const prevIndices = addressMap.get(address);
      prevIndices.push(index + 1);
    } else {
      addressMap.set(address, [index + 1]);
    }

    if (!isValidAmount) {
      errors.push({
        type: "Wrong Amount",
        details: [`Line ${index + 1} wrong amount`],
      });
    }
  });

  // Group errors by address with duplicates
  addressMap.forEach((indices, address) => {
    if (indices.length > 1) {
      const duplicateDetails = `Address ${address} encountered duplicate in Line: ${indices.join(
        ", "
      )}`;
      errors.push({
        type: "Duplicated",
        details: [duplicateDetails],
      });
    }
  });

  return groupData(errors);
};
