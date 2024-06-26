import { createContext, useState, useEffect} from "react";

export const ContextOrderTable = createContext({})

function OrderContext ({children}) {


  
  return (
    <ContextOrderTable.Provider value={{

    }}>
      {children}
    </ContextOrderTable.Provider>
  )
}