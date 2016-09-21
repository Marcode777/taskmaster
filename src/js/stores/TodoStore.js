import {EventEmitter} from "events";

class TodoStore extends EventEmitter {
  constructor(){
    super()
    this.todos = [
      {
        id: 12345,
        text:"Go Shopping",
        complete: false
      },
      {
        id: 22345,
        text: "Pay Bills",
        complete: false
      },
    ];
  }

  getAll(){
    return this.todos;
  }
}

const todoStore = new TodoStore;

export default todoStore;