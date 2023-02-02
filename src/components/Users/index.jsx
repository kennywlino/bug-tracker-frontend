import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/userSlice';
import { useEffect } from 'react';

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log('USERS:', users);  
}

export default Users;