import axios from 'axios';



export const reset = () => {
  return {
    type: 'RESET',
    payload: {},
  }
}

export const addItem = (ticketForm) => {
  return {
    type: 'ADD', 
    payload: ticketForm
  }
}

export const removeItem = (ticketForm) => {
  return {
    type: 'REMOVE', 
    payload: ticketForm
  }
}

export const setProducts = (ticketForm) => {
  return {
    type: 'SET-TICKETS',
    payload: ticketForm
  }
}

export const setCategories = (ticketForm) => {
  return {
    type: 'SET-CATAGORIES',
    payload: ticketForm
  }
}

export const updateProduct = (ticketForm) => {
  return {
    type: 'UPDATE-TICKETS',
    payload: ticketForm
  }
}

export const getTickets = () => async (dispatch, getState) => {
  let response = await axios.get('http://localhost:3000');
  dispatch(setProducts(response.data.results));
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('http://localhost:3000');
  dispatch(setCategories(response.data.results));
}

export const adjustTickets = (ticketForm) => async (dispatch, getState) => {
  ticketForm.ready--;
  let response = await axios.put(`http://localhost:3000/${ticketForm._id}`, ticketForm);
  dispatch(updateProduct(response.data));
}