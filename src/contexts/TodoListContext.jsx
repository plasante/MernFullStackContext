import React, {createContext} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {

  const [todos, setTodos] = React.useState([
    {id: 1, text: 'Todo 1'},
    {id: 2, text: 'Todo 2'},
    {id: 3, text: 'Todo 3'},
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, {id: todos.length + 1, text: newTodo}]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <TodoListContext.Provider value={{todos, addTodo, removeTodo}}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;