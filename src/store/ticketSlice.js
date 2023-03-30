import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const REACT_APP_SERVER = import.meta.env.VITE_APP_SERVER;

const initialState = [];

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets: (state, action) => action.payload,
    updateTicket: (state, action) => state.map(ticket => (ticket.name !== action.payload.name ? ticket : action.payload)),
    removeTicket: (state, action) => state.filter(ticket => ticket.id !== action.payload.id),
  }
})


const { setTickets, updateTicket, removeTicket } = ticketSlice.actions;

export const getTickets = () => async ( dispatch, getState ) => {
  let response = await axios.get(`${REACT_APP_SERVER}/api/tickets`);
  dispatch(setTickets(response.data));
};

export const adjustTickets = (ticket) => async (dispatch, getState) => {
  let updatedTicket = {...ticket, available: ticket.available -1};
  let response = await axios.put(`${REACT_APP_SERVER}/api/tickets/${ticket.id}`, updatedTicket);
  dispatch(updateTicket(response.data));
};

export const deleteTicket = (ticket) => async (dispatch, getState) => {
console.log(ticket);
let response = await axios.delete(`${REACT_APP_SERVER}/api/tickets/${ticket.id}`);
dispatch(removeTicket(response.data));
};


export default ticketSlice.reducer;



