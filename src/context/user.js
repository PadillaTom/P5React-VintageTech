// user context
// To display different stuff on DOM
//
import React from 'react';

const UserContext = React.createContext();
//
// Get User From Local Storage:
function getUserFromLocalStorage() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')) // TRUE: Return User
    : { username: null, token: null }; // FALSE: Empty user
}
//
function UserProvider({ children }) {
  // Set up User:
  const [user, setUser] = React.useState({ username: null, token: null });
  const [alert, setAlert] = React.useState({
    show: false,
    msg: '',
    type: 'success',
  });
  // User Login: Function que SetUser y lo guarde en Local Storage
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };
  // User Logout: Cleanup the function, and remove Local Storage
  const userLogout = () => {
    setUser({ username: null, toke: null });
    localStorage.removeItem('user');
  };
  // SHOW Alert: By default: Success, Mensaje.
  const showAlert = ({ type = 'success', msg }) => {
    setAlert({ show: true, msg, type }); // Cambiamos alert a True, por supuesto.
  };
  // HIDE Alert:
  const hideAlert = () => {
    setAlert({ ...alert, show: false }); // Pasamos Spread de ALERT + Show False
  };
  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
