import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/userSlice';
import { useEffect } from 'react';


// temporary component used to test the Redux store
// and make sure we're getting users data;
// integrate into other components and delete this component as necessary
const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log('USERS:', users);  
}

export default Users;