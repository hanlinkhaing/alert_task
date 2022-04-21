import { createSlice } from "@reduxjs/toolkit";

const initial = [
  {
    id: "1650524512131",
    title: "Alert",
    timeLimit: 10,
    text: "Hello World",
    link: "www.google.com",
    type: "success",
  },
];

export const reducer = createSlice({
  name: "alerts",
  initialState: [],
  reducers: {
    addAlert: (state, action) => {
      return [action.payload, ...state];
    },
    removeAlert: (state, action) => {
      return state.filter((s) => action.payload !== s.id);
    },
  },
});

export const { addAlert, removeAlert } = reducer.actions;

export default reducer.reducer;
