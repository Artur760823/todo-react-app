import React from 'react'
import Task from './Task'

const TaksList = (props)=> {

  const active = props.tasks.filter(task => task.active);
  const finished = props.tasks.filter(task => !task.active);
  console.log("aktywne: " + active)
  console.log("zrobione: " + finished)
  const activeTasks = active.map(task =>{
    return(
      <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
    )
  })

  const finishedTasks = finished.map(task =>{
    return(
      <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
    )
  })


  return (
    <>
      <div className='active'>
        <h2>Tasks to do: </h2>
          {activeTasks.length > 0 ? activeTasks : "Brak zadań do zrobienia."}
      </div>
      <hr/>
      <div className='done'>
        <h3>Tasks finished: ({finished.length})</h3>
        {finishedTasks.length>5 && <span style={{fontSize: '10px'}}>Only five last task will show</span>}
        {finishedTasks.slice(0, 5)}
      </div>
    </>

  )
}

export default TaksList;