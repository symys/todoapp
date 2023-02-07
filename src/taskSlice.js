import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { task: "buy water", category: "Do First" },
    { task: "buy egg", category: "Do First" },
    { task: "call Jane", category: "Schedule" },
    { task: "biology 101 tutorial", category: "Don't Do" },
    { task: "buy dog food", category: "Delegate" },
    { task: "finish todo app", category: "Do First" },
    { task: "lunch with Sam", category: "Schedule" },
  ],
  nightMode: false,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    toggleMode: (state) => {
      state.nightMode = !state.nightMode;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => `${task.category}${task.task}` !== action.payload
      );
    },
  },
});

export const { addTask, toggleMode, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
