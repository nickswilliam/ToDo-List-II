import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    visible: true,
    errorMsg: ''
}

const todoSlices = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const newTask = {
                id: Date.now(),
                task: action.payload.task
            }
            state.todoList.push(newTask)
        },
        deleteItem: (state, action) => {
            return state.todoList.filter((task) => task.id !== action.payload.id)
        },
        deleteItems: state => {
            return initialState
        },
        setError: (state, action) => {
            state.errorMsg = action.payload
        },
        visibility: (state, action) => {
            state.visible = action.payload
        }
    }
})

export const { addItems, deleteItems, deleteItem, setError, visibility } = todoSlices.actions;
export default todoSlices.reducer;