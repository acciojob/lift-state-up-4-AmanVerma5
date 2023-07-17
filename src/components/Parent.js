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
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id='itemName' value={itemName} onChange={(e) => setItemName(e.target.value)} />
            <label htmlFor="itemPrice">Item Price:</label>
            <input type="number" id='itemPrice' value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
            <button onClick={handleClick}>Add Item</button>
            <Child addItem={items} removeItem={removeItem}/>
        </div>
    )
}

export default Parent