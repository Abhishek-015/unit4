import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "./App.css"



import Todo from "./components/todo"

const App=()=>{
  const [text,setValue]=useState("");
  const [data,setData]=useState([]);


  const handleValue=(e)=>{
      setValue(e.target.value)
  }

  const showData=()=>{

   if(text !== '') {
    const data = {
        text, complete : false, id : uuidv4()
    }
     
    setData(preData=>{
        return [...preData,data]
        })

    setValue("")
   } 
  }


  const deleteList=(id)=>{
   setData(oldvalues=>{
       return oldvalues.filter((el,index)=>{
           return el.id!==id
       })
   })
}

const isCompleted=(id)=>{

  let objIndex = data.findIndex((obj => obj.id == id));
  data[objIndex].complete = true;

  setData(prev => [...data])
}

console.log(data)

    return(
      <>
     <div className="container">
         <div className="todoList">
             <h1>To-Do List</h1>
             <input type="text" placeholder="Enter new items" onChange={handleValue} value={text} />
             <button onClick={showData}><i className="fas fa-plus"></i></button>
        <ol>
            {data.map((el,index)=>{
               return(
                   <>
                
                 <Todo 
                    key={el.id}
                    id={el.id}
                    complete={el.complete}
                    todoText={el.text}
                    deletingItems={deleteList}
                    isCompleted={isCompleted}
                  />
                 </>
               )
                    
            })}
            
        </ol>
         </div>
     </div>
      </>
    )
  }

export default App

