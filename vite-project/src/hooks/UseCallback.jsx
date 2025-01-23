import { useState } from "react";
import ListItems from "../components/List";
import { useCallback } from "react";
const UseCallback=()=>{
    var[num,setNum]=useState(0);
    var[dark,setDark]=useState(true);
    var styling={
      backgroundColor:dark?"black":"white",
      color:dark?"white":"black"
    }
    var getItems=useCallback((inc)=>{return[num+inc+1,num+inc+2,num+inc+3]},[num])

    return(
        <div style={styling}>
          <button onClick={()=>setDark(dark =>!dark)}>Theme Change</button>
            <h2>This Page is meant for UseCallback Hooks!!</h2>
            <input 
              type="number" 
              value={num} 
              onChange={
                (e)=>{setNum(parseInt(e.target.value))
                }}/>

               <h4> The number is {num}</h4>
               <ListItems func={getItems}/>
        </div>
    );

};
export default UseCallback;