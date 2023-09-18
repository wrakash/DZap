import { createContext } from "react";
import { MyContextType } from "./type";
import { initialStore } from "./store";

export const MyContext = createContext<MyContextType>({
    store:initialStore,
    setStore:() => {}
})