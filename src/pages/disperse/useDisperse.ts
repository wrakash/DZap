import React, { useCallback, useContext, useState } from "react";
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
    { addressWithAmount: "" },
  ]);

  const keepFirst = () => {
    const validatedToken = keepFirstFromDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  };

  const combineBalance = () => {
    const validatedToken = combineBalanceFromDuplicates(store.validatedToken);
    const errors = groupData(validationCheck(validatedToken));
    setStore({
      ...store,
      errors,
      validatedToken: validatedToken,
    });
  };

  const onPreviewClick = () => {
    setStore({
      ...store,
      preview: true,
    });
  };

  const submit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = groupData(validationCheck(tokenList));

      setStore({
        ...store,
        errors,
        preview: false,
        validatedToken: tokenList.filter(
          (token) => token.addressWithAmount !== ""
        ),
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
    onPreviewClick
  };
};
