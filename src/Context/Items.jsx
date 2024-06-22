import React, { useContext } from 'react'
import { Cartcontext } from './Cartcontext'
export default function Items(props) {
const {items,setItems}=useContext(Cartcontext)
function additem() {
    setItems([...items,{
        name:props.name,
        price:props.price
    }])
}
  return (
    <>
    <h3>{props.name} : {props.price} <button onClick={additem}>add</button></h3>

    </>
    
  )
}
