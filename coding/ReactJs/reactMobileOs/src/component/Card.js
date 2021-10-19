function Card({heading,l1,l2,l3,l4}){
    return (
        <>
        <h1>{heading}</h1>
        <ul>
            <li>{l1}</li>
            <li>{l2}</li>
            <li>{l3}</li>
            <li>{l4}</li>
        </ul>
        </>
    )
}

export default Card