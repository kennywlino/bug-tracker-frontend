import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];


const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTickets: (state, action) => action.payload,
    updateTicket: (state, action) => state.map(ticket => (ticket.name !== action.payload.name ? ticket : action.payload)),
  },
});

const { setTickets, updateTicket } = ticketSlice.actions;

export const getTickets = () => async ( dispatch, getState ) => {
  let response = await axios.get('https://chjkt-bug-tracker-backend.onrender.com');
  dispatch(setTickets(response.data.results));
};

export const adjustTickets = (ticket) => async (dispatch, getState) => {
  let updatedTicket = {...ticket, available: ticket.available -1};
  let response = await axios.put(`https://chjkt-bug-tracker-backend.onrender.com/tickets${ticket.id}`, updatedTicket);
  dispatch(updateTicket(response.data));
};


export default ticketSlice.reducer;



