import React, {useContext, useState} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {TodoListContext} from "../contexts/TodoListContext";

const TodoList = () => {

  const [todo, setTodo] = useState('');

  const {todos, dispatch}  = useContext(TodoListContext);
  // We destructure those states from ThemeContext
  const {isDarkTheme,darkTheme,lightTheme, changeTheme} = useContext(ThemeContext);
  // We check if dark or light
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const onChange = (e) => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(todo.trim() !== '') {
      dispatch({type: 'ADD_TODO', payload: todo});
      setTodo('');
    } else {
      alert("please enter some text");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({type: 'REMOVE_TODO', id});
  }

  return (
    <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
      {
        todos.length > 0 ? (
          todos.map((todo) => {
            return <p
              id={todo.id}
              key={todo.id}
              className={'item'}
              onClick={() => handleRemoveTodo(todo.id)}
            >
              {todo.text}
            </p>
          })
        ) : (
          <span>No Todos</span>
        )
      }
      <form onSubmit={handleFormSubmit}>
        <label htmlFor={'todo'}>Todo :</label>
        <input type={'text'} id={'todo'} onChange={onChange} value={todo}/>
        <input type={'submit'} value={'Add new todo'}/>
      </form>
      <button className={'ui button primary'} onClick={changeTheme}>change the theme</button>
    </div>
  );
};

export default TodoList;