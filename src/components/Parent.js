import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{
    let [items,setItems]=useState([]);
    let [itemName,setItemName]=useState('');
    let [itemPrice, setItemPrice]=useState('');

    function handleClick(){
        const newItem={
            name:itemName,
            price:itemPrice
        };
        setItems([...items,newItem])
        setItemName('')
        setItemPrice('')
    }

    function removeItem(index){
        let updatedItems=[...items]
        updatedItems.splice(index,1);
        setItems(updatedItems);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="itemName">Item Name<input type="text" id="itemName" value={itemName} onChange={(event)=>setItemName(event.target.value)}/></div>
            <div className="itemPrice">Item Price<input type="text" id="itemPrice" value={itemPrice} onChange={(event)=>setItemPrice(event.target.value)}/></div>
            <button onClick={handleClick}>Add Item</button>
            <Child addItem={items} removeItem={removeItem}/>
        </div>
    )
}

export default Parent