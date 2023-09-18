import React from "react";
import { TextInput } from "./TextInput";
import { InputType } from "../../type";

interface DynamicInputProps {
  title: string;
  inputList: InputType[];
  setInputList: React.Dispatch<React.SetStateAction<InputType[]>>;
}

export const DynamicInput: React.FC<DynamicInputProps> = ({
  inputList,
  setInputList,
  title,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const list: InputType[] = [...inputList];
    list[index] = { ...list[index], [name]: value };
    setInputList(list);
  };

  const handleRemoveClick = (index: number) => {
    const list: InputType[] = inputList.filter((_, i) => i !== index);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { addressWithAmount: "" }]);
  };

  return (
    <div className="w-full space-y-4">
      {title && (
        <label htmlFor={title} className="font-bold block ">
          {title}
        </label>
      )}
      {inputList.map((x, i) => (
        <div
          key={i}
          className="w-full space-y-3 md:space-y-0 md:flex md:items-end lg:items-center md:space-x-4"
        >
          <TextInput
            name="addressWithAmount"
            placeholder="Enter the address with amount"
            value={x.addressWithAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e, i)
            }
            className="w-full h-10 focus:outline-none py-1 px-1  rounded border border-gray-300"
          >
            <label
              htmlFor="addressWithAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Address with amount
            </label>
          </TextInput>

          <div className="flex space-x-2">
            {inputList.length !== 1 && (
              <button
                type="button"
                onClick={() => handleRemoveClick(i)}
                className="bg-red-500 text-white px-2 py-1 lg:mt-[23px] rounded"
              >
                Remove
              </button>
            )}

            <button
              type="button"
              onClick={handleAddClick}
              className={`bg-green-500 ${
                inputList.length - 1 === i ? "visible" : "invisible"
              } text-white px-2 py-1 lg:mt-[23px] rounded`}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
