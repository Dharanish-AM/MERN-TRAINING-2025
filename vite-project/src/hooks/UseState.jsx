import { useState } from "react";

 const UseState = () =>{
    var [num,setNum]=useState()
    return(
        <div>
            <h1>This is useState </h1>
            <button onMouseEnter={()=> setNum(num-1)}> -</button>
            <h4>The number is{num}</h4>
            <button onKeyDown={()=> setNum(num+1 )}>+</button>
            <button onDoubleClick={()=> setNum(0)}>Reset</button>
        </div>
    )
}

export default UseState