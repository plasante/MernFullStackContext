import React, {createContext, useReducer} from 'react';

export const TodoListContext = createContext();

const todoListReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TODO':
          return [...state, {id: Math.random(), text: action.payload}];
      case 'REMOVE_TODO':
          return state.filter(todo => todo.id !== action.id);
      default:
          return state;
  }
}

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