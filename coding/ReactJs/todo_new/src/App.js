// import { useState } from "react"

import "./App.css";

// import { Counter } from "./components/counter";
import { Todo } from "./components/todo";

const App = () => {
  // const [show,setShow]=useState(true)

  return (
    <div style={{textAlign:"center"}}>
      <Todo/>
     {/* {
       show?(
         <>
         <Counter/> <button onClick={()=>setShow(false)}>Hide</button>
         </>
       ):(
         <>
         <button onClick={()=>setShow(true)}>Show</button>
         </>
       )
     } */}
    </div>
  );
};

export default App;
