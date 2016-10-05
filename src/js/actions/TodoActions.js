import dispatcher from "../dispatcher";

export function createTodo(text,id){
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
    id,
  });
}

export function deleteTodo(id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos(){

  
  dispatcher.dispatch({type:"FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos:[
      {
        id:1234567,
        text: "Make Money Again",
        complete: false
      },
      {
        id:1234679,
        text:"Go Shopping and Enjoy It Again!",
        complete: true
      },
    ]});
  }, 1000);
}