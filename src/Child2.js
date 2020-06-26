import React, {useReducer} from 'react';
import counterReducer from './CounterReducer.js'
function Child2(){
    let [state, dispatch] = useReducer(counterReducer, 10);
    return(
        <div>
           <h3>value of reducer is : {state} </h3>
           <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )

}
export default Child2;