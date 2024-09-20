import React, { createContext, useContext, useState } from "react";

const Context = createContext()

export const ContextProvider =({children}) =>{

    const [cards] = useState([
        { id: 1, name: "Prova" },
        { id: 2, name: "Prova" },
        { id: 3, name: "Prova" },
        { id: 4, name: "Prova" },
    ]);

    const value = { cards };

    return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
    );
}
export const myContextApp =()=>{ 
    return   useContext(Context)
}

