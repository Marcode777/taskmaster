import React from "react";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Featured extends React.Component {
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      loading: true, 
    };
  }

  componentWillMount(){
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount(){
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos(){
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos(){
    TodoActions.reloadTodos();
  }

  render(){
    const {todos} = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return(
      <div>
      <button onClick={this.reloadTodos.bind(this)}>RELOAD</button>
      <input/>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
      );
  }
}