import { createContext, useState } from "react";

export const ShoppingContext = createContext();

export const ShoppingContextProvider = ({children})=>{

    const[isPrductDetailOpen, setisPrductDetailOpen]= useState(false)

    const [count, setCount]= useState(0)
    console.log('Count', count)

    return (
        <ShoppingContext.Provider value={{
            count,
            setCount
        }}>
        {children}
        </ShoppingContext.Provider>
    )

}

