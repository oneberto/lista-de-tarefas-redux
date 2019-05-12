export const addTodo = (text, color) => ({
  type: "ADD_TODO",
  payload: { text, color }
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: { id }
});
