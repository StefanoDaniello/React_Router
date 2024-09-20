import React, { createContext, useContext, useState } from "react";

const Context = createContext()

export const ContextProvider =({children}) =>{

    const value = {}

    return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
    );
}
export const myContextApp =()=>{ 
    return   useContext(Context)
}

