import { useState,useEffect } from "react";
const ListItems=({func})=>{
    var[numbers,setNumbers]=useState([])
    useEffect(()=>{
        setNumbers(func(1000))
        console.log("Event is happening")
        {/*console.log(numbers)*/} 
     
    },[func]);

    return(
        <div>
            <h3>This number List is as follows according to the number present in input box</h3>
            {numbers.map((number,index)=>(<h4 key={index}>{number}</h4>))}

        
        </div>
    );
};
export default ListItems;