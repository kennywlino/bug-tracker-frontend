import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const fakeUser = {
  admin: {
    username: 'camillarees',
    password: '12345',
  }
}
const AuthProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  // const can = (capability) => {
  //   return user?.capabilities?.includes(capability);
  // }

    // const _validateToken = token => {
    //     try {
    //       let validUser = jwt_decode(token);
    //       setLoggedIn(true, token, validUser);
    //       if(validUser){
    //         setUser(validUser);
    //         setLoggedIn(true);
    //         console.log('User Logged In')
    //       }
    //     }
    //     catch (e) {
    //       setLoggedIn(false, null, {}, e);
    //       console.log('Token Validation Error', e);
    //     }
    // };

  // const login = async (username, password) => {
  //   let authCredentials = fakeUser[username];

  //   if(authCredentials && authCredentials.password === password){
  //       try {
  //           _validateToken(authCredentials.token);
  //       } catch(e) {
  //           setError(e);
  //           console.error(e);
  //       }
  //   }
  // };

  const login = async (username, password) => {
    let authCredentials = fakeUser[username];
    if(authCredentials && authCredentials.password === password){
      try {
        setLoggedIn(true, validUser);
        if(validUser){
          setUser(validUser);
          setLoggedIn(true);
        }
      } catch (e)
 {
  setLoggedIn(false, {}, e);
  console.log('Username or password error')
 } 
 }
}

 const logout = () => {
    setUser({});
    setLoggedIn(false, null, {});
    setError(null);
  };


  let values = {
    // can,
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