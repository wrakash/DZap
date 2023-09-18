import React from "react";
import DisperseForm from "./DisperseForm";
import DisperseOutput from "./DisperseOutput";
import DisperseError from "./DisperseError";
import DispersePreview from "./DispersePreview";
import { useDisperse } from "./useDisperse";

export const Disperse = () => {
  const {
    tokenList,
    setTokenList,
    submit,
    onPreviewClick,
    keepFirst,
    combineBalance,
  } = useDisperse();

  return (
    <div className="py-8 space-y-8">
      <DisperseForm
        tokenList={tokenList}
        setTokenList={setTokenList}
        submit={submit}
      />
      <DisperseOutput />
      <DisperseError keepFirst={keepFirst} combineBalance={combineBalance} />
      <DispersePreview onPreviewClick={onPreviewClick} />
    </div>
  );
};
