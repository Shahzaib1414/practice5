import React, {useState} from 'react';
import Parent from './Parent.js'
import './App.css';
import countercontext from './CounterContext.js';



function App() {
  let countState = useState(20)
  return (
    
    <countercontext.Provider value = {countState}>
      <div>
         <Parent />

      </div>
    </countercontext.Provider>
  );
}

export default App;
