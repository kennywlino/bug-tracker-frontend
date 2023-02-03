import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

    const _validateToken = token => {
        try {
          let validUser = jwt_decode(token);
          if(validUser){
            setUser(validUser);
            setLoggedIn(true);
            cookie.set('userToken', token, {path: '/'});
            console.log('User Logged In')
          }
        }
        catch (e) {
          setError(e);
          console.log('Token Validation Error', e);
        }
    };

 
  const login = async (username, password) => {
    console.log('response data');
    const config = {
      url: '/signin',
      baseURL: 'https://chjkt-bug-tracker-backend.onrender.com',
      method: 'post',
      auth: {username, password}
    }
    
    let response = await axios(config);
    const { token } = response.data;
 
    if(token){
        try {
            _validateToken(token);
        } catch(e) {
            setError(e);
            console.error(e);
        }
    }
  };


 const logout = () => {
    setUser({});
    setLoggedIn(false, null, {});
    setError(null);
    cookie.remove('userToken');
  };

  useEffect(() => {
    const token = cookie.get('userToken');
    console.log(token);
    if(token){
        _validateToken(token);
    }
  }, [])

  let values = {
    can,
    login,
    logout,
    error,
    loggedIn,
    user
  };

    return (
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    );
  
};

export default AuthProvider;