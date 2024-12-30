export const todoListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: action.payload}];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}