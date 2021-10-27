import { useEffect, useState } from "react";



export function Todo(){
    
    const [data,setData]=useState([]);
    const [text,setText]=useState("");
    const [page,setPage]=useState(1);



    const getTodo=()=>(fetch(`http://localhost:3001/todos?_page=${page}&_limit=5`).then((d)=>d.json()).then(setData))
    useEffect(()=>{
          getTodo()
    },[page,setPage])
     
    
    const handleTodo=()=>{
        fetch("http://localhost:3001/todos",{
            method:"POST",
            body:JSON.stringify(
                {
                    title:text,
                    status:false,
                }
            ),headers:{
                "Content-Type":"application/json"
            }
        }).then(getTodo)
    }


//   useEffect(()=>{
//     console.log("calling use effect")
//     fetch("http://localhost:3001/todos").then(d=>d.json()).then(res=>setData(res))
//   },[])
  return(
    <div  style={{textAlign:"center",padding:"5px"}}>
        <input type="text" onChange={e=>setText(e.target.value)} placeholder="enter text here" />
        <button onClick={handleTodo}>Add todo</button>
   {
     data.map(e=>
      <div key={e.id}>{e.title}</div>)
   }
   <button onClick={()=>setPage(prev=>prev < 1?1:prev-1)}>Previous</button>
   <button onClick={()=>setPage(prev=>prev+1)}>Next</button>

    </div>
  )
}