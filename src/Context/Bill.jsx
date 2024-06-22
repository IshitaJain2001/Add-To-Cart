import React, { useContext } from 'react'
import { Cartcontext } from './Cartcontext'
export default function Bill() {

   const {items,setItems}= useContext(Cartcontext)
   console.log(items.name)
  return (
    <>
       <h2>Cart</h2>
       {
        items.length>0? items.map((item,index)=>{
            return <li key={index}>{item.name}:{item.price}</li>
        }) 
        : <p>Nothing added</p>

       }
    </>
 


  )
}
