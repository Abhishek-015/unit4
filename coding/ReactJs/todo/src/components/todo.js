

const Todo=({
    todoText, deletingItems, isCompleted, id,complete
})=>{
     
    

    return(
        <>
        <div className="addedItems">
        <li>{todoText}</li>
        <div className="icons">
        <button style={{ background: complete ? 'black' : 'blue' }} className="pending" onClick={()=>{
            isCompleted(id)
        }} >{complete ?  'Completed' : 'Pending'}</button>
        <i className="fas fa-trash" onClick={()=>{
            deletingItems(id)
        }}></i>
        </div>
       
        </div>
        
        </>
    )
}

export default Todo