import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.loggedIn = true;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setLoggedIn, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;