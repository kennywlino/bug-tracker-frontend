import axios from 'axios';

export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  };
};

export const addItem = (ticket) => {
  return {
    type: 'ADD', 
    payload: ticket,
  };
};

export const removeItem = (ticket) => {
  return {
    type: 'REMOVE', 
    payload: ticket,
  };
};

export const setTickets = (ticket) => {
  return {
    type: 'SET-TICKETS',
    payload: ticket,
  };
};

export const setCategories = (ticket) => {
  return {
    type: 'SET-CATEGORIES',
    payload: ticket,
  };
};

export const updateTicket = (ticket) => {
  return {
    type: 'UPDATE-TICKETS',
    payload: ticket,
  };
};

export const getTickets = () => async (dispatch, getState) => {
  let response = await axios.get('https://chjkt-bug-tracker-backend.onrender.com');
  dispatch(setTickets(response.data.results));
};

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://chjkt-bug-tracker-backend.onrender.com');
  dispatch(setCategories(response.data.results));
};

export const adjustTickets = (ticket) => async (dispatch, getState) => {
  ticket.ready--;
  let response = await axios.put(`https://chjkt-bug-tracker-backend.onrender.com/${ticket._id}`, ticket);
  dispatch(updateTicket(response.data));
};