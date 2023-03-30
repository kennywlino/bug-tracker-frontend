import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_SERVER = import.meta.env.VITE_APP_SERVER;

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => action.payload,
    updateUsers: (state, action) => state.map(user => (user.username !== action.payload.username ? user : user.payload)),
  }
})

const { setUsers, updateUsers } = usersSlice.actions;

export const getUsers = () => async (dispatch, getState) => {
  let response = await axios.get(`${REACT_APP_SERVER}/users`);
  dispatch(setUsers(response.data)); 
}

export const adjustUsers = (user) => async (dispatch, getState) => {
  let response = await axios.put(`${REACT_APP_SERVER}/users/${user.id}`, user);
  dispatch(updateUsers(response.data));
}

export default usersSlice.reducer;