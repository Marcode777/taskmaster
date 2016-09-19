import React from "react";

export default class Featured extends React.Component {
  constructor(){
    super();
    this.state={
      todos: [
        {
          id: 12345,
          text:"Go Shopping",
          complete: false
        },
        {
          id: 123456,
          text: "Pay Bills",
          complete: false
        },
      ],
    };
  }

  render(){
    const {todos} = this.state;

    const TodoComponents = todos.map((todo)=>{
      return <Todo key= {todo.id} {...todo}/>;
    });
    return(
      <div>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
      );
  }

}