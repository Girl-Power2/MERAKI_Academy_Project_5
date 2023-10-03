import { createSlice } from "@reduxjs/toolkit";

export const schedule = createSlice({
  name: "schedule",
  initialState: {
    schedule: [],
  },
  reducers: {
    setSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    addSchedule: (state, action) => {
      state.schedule.push(action.payload);
    },
    deleteSchedule: (state, action) => {
      console.log("from slice",action.payload.id);
      state.schedule = state.schedule.filter((sched) => {
        return sched.schedule_id !== action.payload.id;
      });
    },
  },
});

export const { setSchedule, addSchedule, deleteSchedule } = schedule.actions;
export default schedule.reducer;
