import React from "react";
import { DynamicInput } from "../../components";
import { InputType } from "../../type";

interface Props {
  tokenList: InputType[];
  setTokenList: React.Dispatch<React.SetStateAction<InputType[]>>;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DisperseForm: React.FC<Props> = ({ tokenList, setTokenList, submit }) => {
  return (
    <form onSubmit={submit} className="space-y-4">
      <DynamicInput
        inputList={tokenList}
        setInputList={setTokenList}
        title=""
      />
      <div className="w-full flex justify-center items-center">
        <button
          type="submit"
          disabled={!!!tokenList[0]?.addressWithAmount}
          className={`w-full p-2 ${
            !!!tokenList[0]?.addressWithAmount ? "bg-gray-300" : "bg-blue-700"
          } rounded text-white`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DisperseForm;
