import "../index.css"

const card =()=>{
    return(
        <>
  <div className="container">
    <div className="card">
      <img className="mainImage" src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image"/>
      <div className="headingImage">
          <div className="head">pepporoni pizza</div>
          <div className="small">
              <img className="smallImage" src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="smallImage"/>
              <img className="smallImage" src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="smallImage"/>
         </div>
      </div>
      <div className="description"><p>I m paragraph and i contain all the infornmation about the food displayed at the top of this Designer card</p></div>
      <div className="para">
          <p>265cal</p>
          <p>P/F/C:12/10/31</p>
          <p>58.3 c</p>
    </div>
      <div className="last">
          <div className="price">
              <h1>$25.45</h1>
              <h1 className="cut"><strike>$18.25</strike> </h1>
             
              
          </div>
          <div><button>Order</button></div>

      </div>

    </div>
  </div>
  </>
    )
    }
    export default card