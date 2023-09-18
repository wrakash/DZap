import { InputType, ErrorType } from "../type";

export interface StoreType {
  preview: boolean;
  errors: ErrorType[];
  validatedToken: InputType[];
}

export interface MyContextType {
  store: StoreType;
  setStore: React.Dispatch<React.SetStateAction<StoreType>>;
}
