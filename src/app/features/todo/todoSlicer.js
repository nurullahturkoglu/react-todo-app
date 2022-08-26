import { createSlice } from "@reduxjs/toolkit";

export const todoSlicer = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:((state,action) => {
            state.todos.push(action.payload)
        }),
        newTodoList: ((state,action) => {
            state.todos = action.payload;
        })
    }
})

export const {addTodo,newTodoList} = todoSlicer.actions;
export default todoSlicer.reducer;