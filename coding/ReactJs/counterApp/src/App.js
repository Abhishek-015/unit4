import { useState } from "react"
import "./App.css"


const App=()=>{

  let [myNumber,setmyNumber]=useState(0)
 
  return(
    <>
    <h1 className="heading">Counter App</h1>
    <h1 className="heading">{myNumber}</h1>

    <div className="btn">  <button onClick={()=>{setmyNumber(++myNumber)}}> Increase Number
    </button>
    <button onClick={()=>{if(myNumber>0)setmyNumber(--myNumber)
      else{setmyNumber(0);alert("I hate -ve numbers😎" )}}}> Decrease Number
    </button>
    <button onClick={()=>{setmyNumber(myNumber*2)}}> Double the Number
    </button>
    <button className="reset" onClick={()=>{setmyNumber(0)}}> Reset
    </button>
    </div>
  
    </>
  )
}



export default App