import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {SelectUser, Home, Beneficiaries, NewTransaction, TransactionHistory} from './pages';
import {UserContext} from './provider';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';

const App = () => {

  const RouteWithContext = ({path, exact = false, component}) => {
    const Component = component;
    return (
      <Route exact={exact} path={path}>
        <UserContext.Consumer>
          {props => <Component {...props} />}
        </UserContext.Consumer>
      </Route>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <RouteWithContext exact path="/" component={SelectUser} />
        <RouteWithContext path="/home" component={Home} />
        <RouteWithContext path="/favorecidos" component={Beneficiaries} />
        <RouteWithContext path="/transferir" component={NewTransaction} />
        <RouteWithContext path="/historico-de-transacoes" component={TransactionHistory} />
        <Route path="*">
          <pre>error</pre>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
