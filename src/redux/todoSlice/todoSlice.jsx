import { createSlice, current } from "@reduxjs/toolkit";

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
            const id = action.payload.id
            const filterState = state.todoList.filter((todo)=> todo.id != id)
            state.todoList = filterState
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