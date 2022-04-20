import React, { Component } from 'react';
import './AddTask.css';

export default class AddTask extends Component {
  state={
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  }

  handleText =(e)=>{
    this.setState({
      text: e.target.value
    })
  }

  handleCheckbox = (e)=>{
    this.setState({
      checked: e.target.checked
    })
  }

  handleDate =(e)=>{
    this.setState({
      date: e.target.value
    })
  }

  handleClick = ()=>{

    const {text, date, checked} = this.state;
    if(text.length > 2){
      const add = this.props.addTaks(text, checked, date);
      if(add){
        this.setState({
          text: '',
          checked: false,
          date: new Date().toISOString().slice(0, 10),
        })
      }
    }else{
      alert("too short name")
    }

    
  }

  render() {
    return (
      <>
        <div className='form'>
          <input type="text" placeholder='Add task' value={this.state.text} onChange={this.handleText}/>  
          <br></br>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} id="important"/>
          <label htmlFor='important' name="checkbox">Important</label>
          <br></br>
          <label htmlFor='date'>Execution date: </label>
          <input type="date" value={this.state.date} onChange={this.handleDate}/>
          <br></br>
          <button onClick={this.handleClick} >Add Taks</button>
        </div>
        <hr/>
      </>

    )
  }
}
