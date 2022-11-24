import React from "react";
import  { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(5);
    const handleOnClick=()=>{
        if(count===0){
            return

        }
        setCount(count -1);
    }
    
  return (
    <div>
    <button onClick={() => handleOnClick()}>
     
          Минус
      </button>
    </div>
  );
}


































































































































































