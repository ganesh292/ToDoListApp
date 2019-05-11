import React from "react";


const TodoItems = (props) => {
  
  const createTasks  = (item) => {
    return <li key={item.key}>{item.text}</li>
  }
  let listItems = props.entries.map(createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
 
export default TodoItems;