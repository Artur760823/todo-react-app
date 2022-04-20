import React, { Component } from 'react'
import AddTask from './AddTask';
import TaksList from './TaskList';
import './App.css';



export default class App extends Component {
  counter = 4;
  state={
    tasks:[
      {
        id: 0, text: 'zagrać wreszcie w Skyrim',
        date: '2022-04-20', important: true,
        active: true, finishDate: null
      },
      {
        id: 1, text: 'zrobić porządek w ogrodzie',
        date: '2022-04-21', important: false,
        active: true, finishDate: null
      },
      {
        id: 2,text: 'przebiec koleje 10 kilometrów',
        date: '2022-04-21',important: true,
        active: true, finishDate: null
      },
      {
        id: 3,text: 'powtórzyć najważniejsze zagadnienia z react', date: '2022-04-30', important: true,
        active: true,finishDate: null
      },

    ]

  }

  deleteTask = (id)=>{
    //alternative:

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // console.log(index)
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks: tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task=> task.id !== id);
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id)=>{
    let tasks = [...this.state.tasks];
    tasks = tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      this.setState({
        tasks
      })
    });
  }

  addTask = (text, date, important)=>{
    const task ={
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++;

    this.setState(prevState =>({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  }
  render() {
    return (
      <>
        <h1>TODO APP</h1>
        <AddTask addTaks={this.addTask}/>
        <TaksList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </>
    )
  }
}

