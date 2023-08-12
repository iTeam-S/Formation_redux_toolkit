import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            // action: {type: "todo/addTask", payload: "Apprendre"}
            const newTask = {
                text: action.payload,
                id: Date.now(),
                done: false,
            };
            state.push(newTask);
        },
        toggleTask: (state, action) => {
            // action: {type: "todo/toggleTask", payload: 2}
            const realTask = state.find(task => task.id === action.payload);
            realTask.done = !realTask.done;
        },
        deleteTask: (state, action) => {
            // action: {type: "todo/deleteTask", payload: 2}
            state = state.filter(task => task.id !== action.payload);
            return state;
        }
    }
});

export const {toggleTask, deleteTask, addTask} = todoSlice.actions;