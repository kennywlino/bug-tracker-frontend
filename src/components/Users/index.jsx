import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/userSlice';
import { useEffect } from 'react';
import { getTickets } from '../../store/ticketSlice';


// temporary component used to test the Redux store
// and make sure we're getting users data;
// integrate into other components and delete this component as necessary
const Users = () => {
  const dispatch = useDispatch();
  const { users, tickets } = useSelector(state => state);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTickets());
  }, []);

  console.log('USERS:', users); 
  console.log('Tickets:', tickets); 
}

export default Users;