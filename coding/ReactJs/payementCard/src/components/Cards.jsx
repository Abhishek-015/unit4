import Props from "./Props"
import "../App.css"

 const cards=({date,heading,subheading,logo,color,device})=>{
    return(
        <>
        <div className="main">
        <div className="child" style={{background:color}}>
            <div className="pic">
            <h3>{date}</h3>
            <img src={logo} alt="" />
            </div>
        <p style={{background:"black",color:"white",width:"90px",padding:"5px"}}>Case Study</p>
        <h1>{heading}</h1>
        <h1>{subheading}</h1>
       
        
         <h3>{device}</h3>
        </div>
        </div>
        
        </>
    )
}

export default cards