import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const res = await axios.get(
    `https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks`
  );
  console.log("Data:: , ", res.data);
  return res.data;
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      // {
      //   taskId: "T001",
      //   taskDate: "15/07/2024",
      //   taskList: [
      //     {
      //       taskId: "T001-1",
      //       task: "Get Groceries from the Market.",
      //       status: "Pending",
      //     },
      //     {
      //       taskId: "T001-2",
      //       task: "Go to Gym.",
      //       status: "Completed",
      //     },
      //     {
      //       taskId: "T001-3",
      //       task: "Water the plants.",
      //       status: "Completed",
      //     },
      //   ],
      // },
      // {
      //   taskId: "T002",
      //   taskDate: "16/07/2024",
      //   taskList: [
      //     {
      //       taskId: "T002-1",
      //       task: "Go to the Park.",
      //       status: "Completed",
      //     },
      //     {
      //       taskId: "T002-2",
      //       task: "Clean my room.",
      //       status: "Pending",
      //     },
      //     {
      //       taskId: "T002-3",
      //       task: "Go to the Dentist.",
      //       status: "Pending",
      //     },
      //   ],
      // },
    ],
    status: "idle",
    error: null,
  },
  reducers: {
    statusButtonPressed: (state, action) => {
      state.tasks.forEach((taskGroup) =>
        taskGroup.tasks.forEach((task) => {
          if (task.taskId === action.payload) {
            task.taskStatus =
              task.taskStatus === "Completed" ? "Pending" : "Completed";
          }
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "success";
      state.tasks = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });
  },
});
export const { statusButtonPressed } = tasksSlice.actions;

export default tasksSlice.reducer;
