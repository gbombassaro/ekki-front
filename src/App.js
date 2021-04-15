import React from 'react';
import {Switch, Route} from 'react-router-dom';

import UnauthorizedUser from './components/unauthorizedUser';
import {SelectUser, Home, Beneficiaries, NewTransaction, TransactionHistory, NewUser} from './pages';
import {UserContext} from './provider';

const App = () => {

  const checkAuthentication = ({userData}, currentPath) => {
    if (!userData._id && currentPath !== '/' && currentPath !== '/novo-usuario') return false;
    return true;
  }

  const RouteWithContext = ({path, exact = false, component}) => {
    const Component = component;
    return (
      <Route exact={exact} path={path}>
        <UserContext.Consumer>
          {contextProps => checkAuthentication(contextProps, path) ? <Component {...contextProps} /> : <UnauthorizedUser/>}
        </UserContext.Consumer>
      </Route>
    );
  };

  return (
    <Switch>
      <RouteWithContext exact path="/" component={SelectUser} />
      <RouteWithContext path="/novo-usuario" component={NewUser} />
      <RouteWithContext path="/home" component={Home} />
      <RouteWithContext path="/favorecidos" component={Beneficiaries} />
      <RouteWithContext path="/transferir" component={NewTransaction} />
      <RouteWithContext path="/historico-de-transacoes" component={TransactionHistory} />
      <Route path="*">
        <pre>error</pre>
      </Route>
    </Switch>
  );
};

export default App;
