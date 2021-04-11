import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Beneficiaries from './pages/Beneficiaries'
import NewTransaction from './pages/NewTransaction'
import TransactionHistory from './pages/TransactionHistory'
import {UserContext} from './provider'

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
    <Switch>
      <RouteWithContext exact path="/" component={Home} />
      <RouteWithContext path="/favorecidos" component={Beneficiaries} />
      <RouteWithContext path="/transferir" component={NewTransaction} />
      <RouteWithContext path="/historico-de-transacoes" component={TransactionHistory} />
      <Route path="*">
        <pre>error</pre>
      </Route>
    </Switch>
  );
}

export default App;
