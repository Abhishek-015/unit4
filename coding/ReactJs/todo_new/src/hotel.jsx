const Hotel = ({imgsrc,title,text,btn}) => {
  return( <>
   <div className="hotelCards">
            <img src={imgsrc} alt="" />
            <h2 className="title">{title}</h2>
            <p>{text}</p>
            <div className="btn">
              <button>{btn}</button>
            </div>
          </div>
  </>);
};


export default Hotel
