import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
        console.log("set")

      setCount((prev) => {
        if (prev === 1) {
           
          clearInterval(id);
          return "counts end";
        }
        console.log(prev)
        return prev - 1;
      });
    }, 1000);
    //cleaning the unmounted things
    return ()=>{
        console.log("clearing the unmounted things")
        clearInterval(id)
       
    }
    
  }, []);

  return <h1>counter:{count}</h1>;
}
