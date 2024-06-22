import React,{ createContext, useState } from "react"
 const Cartcontext=createContext(null)

  const Cartprovider=(props)=>{
   const [items,setItems] = useState([])
return (
    <Cartcontext.Provider value={{items,setItems}}>
{props.children}
    </Cartcontext.Provider>
)
}

export {Cartcontext,Cartprovider}