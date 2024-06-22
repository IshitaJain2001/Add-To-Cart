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
       
       <h3>AMOUNT PAYABLE [incl. of taxes] : {   items.reduce((acc,cv)=>{
      return acc+cv.price
    },100)}  </h3>
    </>
 


  )
}
