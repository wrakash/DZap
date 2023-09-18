import React, { useState } from 'react'
import { MyContext } from "./MyContext";
import { StoreType } from "./type";
import { initialStore } from "./store";

interface Props {
  children: React.ReactNode;
}

const ContextProvider:React.FC<Props> = ({children}) => {
  const [store, setStore] = useState<StoreType>(initialStore);
  return (
    <MyContext.Provider value={{ store, setStore }}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider