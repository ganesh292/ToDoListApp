import React, { Component } from "react";
import "./TodoList.css";
import TodoItems from "./TodoItems";
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ''
    };
   
 
    this.addItem = this.addItem.bind(this);
  }

  onInputChange = e => {
    this.setState({ value: e.target.value })
  }

  addItem(e) {
    e.preventDefault()

    const newItem = {
      text: this.state.value,
      key: Date.now()
    }
  
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        newItem
      ],
      value: ''
    }))
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
          <input value={this.state.value} 
            onChange={this.onInputChange} 
            placeholder="Enter Task" 
            required/>
          <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}
 
export default TodoList;