import React, {useContext} from 'react';
import countercontext from './CounterContext.js';
function Child(){
    let countervalue = useContext(countercontext)
    return(
     <div>
        <h2> This is the Child component </h2>
        <h3> CounterValue : {countervalue[0]}</h3>
        <button onClick={()=> {countervalue[1](++countervalue[0])}}> Increment </button>
     </div>
    )
}
export default Child;