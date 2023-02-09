import axios from 'axios';

const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

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
  let response = await axios.get({REACT_APP_SERVER});
  dispatch(setTickets(response.data.results));
};

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get({REACT_APP_SERVER});
  dispatch(setCategories(response.data.results));
};

export const adjustTickets = (ticket) => async (dispatch, getState) => {
  ticket.ready--;
  let response = await axios.put(`${REACT_APP_SERVER}/${ticket._id}`, ticket);
  dispatch(updateTicket(response.data));
};