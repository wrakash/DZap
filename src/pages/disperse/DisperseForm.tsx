import React, { useContext } from "react";
import { InputType } from "../../type";
import { InputBoxContainer } from "../../components";
import { MyContext } from "../../store/MyContext";

interface Props {
  tokenList: InputType[];
  setTokenList: React.Dispatch<React.SetStateAction<InputType[]>>;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
  onPreviewClick:()=>void
}

const DisperseForm: React.FC<Props> = ({ tokenList, setTokenList, submit, onPreviewClick }) => {
  const { store } = useContext(MyContext);
  return (
    <form onSubmit={submit} className="space-y-4">
      <InputBoxContainer inputList={tokenList} setInputList={setTokenList} />
      <div className="w-full flex justify-center items-center">
       {
         !!!store.errors?.length && !!store.validatedToken?.length ? (
          <button
          type="button"
          onClick={onPreviewClick}
          className={`w-full p-2  bg-violet-700 rounded text-white`}
        >
          Next
        </button>
         ):(<button
          type="submit"
          disabled={!!!tokenList[0]?.address}
          className={`w-full p-2  bg-blue-700 rounded text-white`}
        >
          Next
        </button>)
       }
      </div>
    </form>
  );
};

export default DisperseForm;
