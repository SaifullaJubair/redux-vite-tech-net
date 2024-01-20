import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  //   initialState: {count: 0},
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: () => {},
  },
});

export default counterSlice;
