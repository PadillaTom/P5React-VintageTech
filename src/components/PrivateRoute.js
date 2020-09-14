import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/user';

// Importamos todo lo que contenga PrivareRoute (<Checkout> + ...Props para ingresar al Path)
export default function PrivateRoute({ children, ...rest }) {
  const { user } = React.useContext(UserContext);
  // Accedemos a los Props(path), ademas --> Si USER tiene TOKEN: vamos a children, si NO a Login
  return (
    <Route
      {...rest}
      render={() => {
        return user.token ? children : <Redirect to='/login'></Redirect>;
      }}
    ></Route>
  );
}
