import React from "react";
import DisperseForm from "./DisperseForm";
import DisperseError from "./DisperseError";
import DispersePreview from "./DispersePreview";
import { useDisperse } from "./useDisperse";

export const Disperse = () => {
  const { tokenList, setTokenList, submit, keepFirst, combineBalance } =
    useDisperse();

  return (
    <div className="py-8 space-y-8">
      <DisperseForm
        tokenList={tokenList}
        setTokenList={setTokenList}
        submit={submit}
      />

      <DisperseError keepFirst={keepFirst} combineBalance={combineBalance} />
      <DispersePreview />
    </div>
  );
};
