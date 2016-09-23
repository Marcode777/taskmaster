import {EventEmitter} from "events";
import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super()
    this.todos = [
      {
        id:12345,
        text: "Make Money",
        complete: false
      },
      {
        id:12346,
        text:"Go Shopping",
        complete: false
      },
    ];
  }

  createTodo(text){
    const id = Date.now();

    this.todos.push({
      id, 
      text,
      complete: false
    });

    this.emit("change");
  }

  getAll(){
    return this.todos;
  }


  handleActions(action){
    switch(action.type){
      case "CREATE_TODO":{
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS":{
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;

