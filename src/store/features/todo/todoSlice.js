import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text: "Hello world!"
    }]
}

// Creating slice
export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers: {
    addTodo: (state, action) => {
        const todo = {
            id: nanoid(),
            text: action.payload
        }
        state.todos.push(todo)
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo =>  todo.id !== action.payload)
    }
   }
})

// always export the fucntionalities individually
export const  {addTodo, removeTodo}= todoSlice.actions

export default todoSlice.reducer