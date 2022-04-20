import React, { Component } from 'react';
import './AddTask.css';

export default class AddTask extends Component {
  state={
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  }
  render() {
    return (
      <>
        <div className='form'>
          <input type="text" placeholder='Add task' value={this.state.text}/>  
          <input type="checkbox" checked={this.state.checked}/>
          <label htmlFor='important'>Important</label>
          <br></br>
          <label htmlFor='date'>Execution date: </label>
          <input type="date" value={this.state.date}/>
          <br></br>
          <button>Add Taks</button>
        </div>
        <hr/>
      </>

    )
  }
}
