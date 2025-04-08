import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        taskId: "T001",
        taskDate: "15/07/2024",
        taskList: [
          {
            taskId: "T001-1",
            task: "Get Groceries from the Market.",
            status: "Pending",
          },
          {
            taskId: "T001-2",
            task: "Go to Gym.",
            status: "Completed",
          },
          {
            taskId: "T001-3",
            task: "Water the plants.",
            status: "Completed",
          },
        ],
      },
      {
        taskId: "T002",
        taskDate: "16/07/2024",
        taskList: [
          {
            taskId: "T002-1",
            task: "Go to the Park.",
            status: "Completed",
          },
          {
            taskId: "T002-2",
            task: "Clean my room.",
            status: "Pending",
          },
          {
            taskId: "T002-3",
            task: "Go to the Dentist.",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {},
});

export default tasksSlice.reducer;
