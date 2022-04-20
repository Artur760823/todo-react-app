import React from 'react'

const Task = (props)=> {

  const styleImportant = {
    color: 'red',
  }

  const {text, date, active, finishDate, important, id} = props.task;
  if(active){
    return (
      <div>
        <p>
          <strong style={important ? styleImportant : null }>{text}</strong> - finish until: <span>{date} </span> 
          <button onClick={()=>props.change(id)}>Done</button>  
          <button onClick={()=> props.delete(id)}>X</button>
        </p>
      </div>
    )
  }else{
    const finishTime = new Date(finishDate).toLocaleString();
    return(
      <div>
        <p>
          <strong>{text}</strong> - done: <span>{finishTime} </span> 
         <button onClick={()=> props.delete(id)}>X</button>
        </p>
    </div>
    )
  }

}

export default Task;
