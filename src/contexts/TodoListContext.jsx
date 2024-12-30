import React, {createContext, useReducer} from 'react';
import {todoListReducer} from '../reducers/todosReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {

  const [todos, dispatch] = useReducer(todoListReducer,[
    {id: 1, text: 'Todo 1'},
    {id: 2, text: 'Todo 2'},
    {id: 3, text: 'Todo 3'},
  ])

  return (
    <TodoListContext.Provider value={{todos, dispatch}}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;