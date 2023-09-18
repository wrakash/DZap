import React, { useContext } from "react";
import { InputType } from "../../type";
import { InputBoxContainer } from "../../components";
import { MyContext } from "../../store/MyContext";

interface Props {
  tokenList: InputType[];
  setTokenList: React.Dispatch<React.SetStateAction<InputType[]>>;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DisperseForm: React.FC<Props> = ({ tokenList, setTokenList, submit }) => {
  const { store, setStore } = useContext(MyContext);

  return (
    <form onSubmit={submit} className="space-y-4">
      <InputBoxContainer inputList={tokenList} setInputList={setTokenList} />
      <div className="w-full flex justify-center items-center">
        <button
          type="submit"
          disabled={!!!tokenList[0]?.address}
          className={`w-full p-2 ${!!!store.errors?.length && !!store.validatedToken?.length ? "bg-violet-900":"bg-blue-700"}  rounded text-white`}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default DisperseForm;
