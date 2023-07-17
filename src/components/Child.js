import React from "react";

const Child=(prop)=>{
    let items=prop.addItem
    return(
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {
                    items.map((element,index)=>(
                        <li key={index}>
                            <span>{element.name} - {element.price}</span>
                            <button onClick={()=>prop.removeItem(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Child