import { ErrorType, InputType } from "../type";

export const getSymbols = (addressWithAmount: String) => {
  if (addressWithAmount.includes("=")) {
    return "=";
  } else if (addressWithAmount.includes(",")) {
    return ",";
  } else {
    return " ";
  }
};

export const keepFirstFromDuplicates = (inputArray: InputType[]) => {
  const seenStrings: any = {};
  const resultArray: InputType[] = [];

  inputArray?.forEach(({ lineNo, address, amount, splitingOperater }) => {
    if (!seenStrings[address]) {
      resultArray.push({ lineNo, address, amount, splitingOperater });
      seenStrings[address] = true;
    }
  });

  return resultArray;
};

export const combineBalanceFromDuplicates = (inputArray: InputType[]) => {
  const resultMap: { [key: string]: InputType } = {};
  inputArray.forEach(({ lineNo, address, amount, splitingOperater }) => {
    const key = address;
    if (resultMap[key]) {
      resultMap[key].amount = (
        parseInt(resultMap[key].amount) + parseInt(amount)
      ).toString();
    } else {
      resultMap[key] = { lineNo, address, amount, splitingOperater };
    }
  });
  const resultArray: InputType[] = Object.values(resultMap);
  return resultArray;
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

  validatedTokenArray.forEach(({ address, amount }, index) => {
    if (addressMap.has(address)) {
      const prevIndices = addressMap.get(address);
      prevIndices.push(index + 1);
    } else {
      addressMap.set(address, [index + 1]);
    }

    const isValidAmount = /^[0-9]+$/.test(amount);
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
