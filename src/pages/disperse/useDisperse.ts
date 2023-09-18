import React, { useCallback, useContext, useEffect, useState } from "react";
import { ErrorType, InputType } from "../../type";
import { MyContext } from "../../store/MyContext";
import {
  combineBalanceFromDuplicates,
  groupData,
  keepFirstFromDuplicates,
  validationCheck,
} from "../../helper/common.logic";

//all business logic here for disperse component
export const useDisperse = () => {
  const { store, setStore } = useContext(MyContext);

  const [tokenList, setTokenList] = useState<InputType[]>([
    { lineNo: 1, address: "", amount: "", splitingOperater: "" },
  ]);

  const keepFirst = useCallback(() => {
    const validatedToken = keepFirstFromDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setTokenList(validatedToken);
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  }, [store, setStore]);

  const combineBalance = useCallback(() => {
    const validatedToken = combineBalanceFromDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setTokenList(validatedToken);
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  }, [store, setStore]);

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const filteredTokens = tokenList.filter(
        (token) => token.address !== "" && token.address !== ""
      );
      const errors = groupData(validationCheck(filteredTokens));

      let error = !!errors.length;

      setStore({
        ...store,
        errors,
        preview: error === false ? true : false,
        validatedToken: filteredTokens,
      });
    },
    [tokenList, store, setStore]
  );

  return {
    tokenList,
    setTokenList,
    submit,
    keepFirst,
    combineBalance,
  };
};
