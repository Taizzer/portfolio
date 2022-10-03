import { createSlice } from "@reduxjs/toolkit";

//the export here is seems is not important, i f removed sapp still worksl
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Guest",
    // email: "email default",
    id: null,
  },
  reducers: {
    update: (state, action) => {
      //action.payload ={'namess','sdsdd'}
      state.name = action.payload.name;
      // state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
});
//export action
export const { update } = userSlice.actions;

//export so we can call it in any name
export default userSlice.reducer;
