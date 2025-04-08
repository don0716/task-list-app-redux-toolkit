import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../features/tasks/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
