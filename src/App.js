import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Beneficiaries from './pages/Beneficiaries'
import NewTransaction from './pages/NewTransaction'
import TransactionHistory from './pages/TransactionHistory'

const App = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorecidos" component={Beneficiaries} />
      <Route path="/transferir" component={NewTransaction} />
      <Route path="/historico-de-transacoes" component={TransactionHistory} />
      <Route path="*">
        <pre>error</pre>
      </Route>
    </Switch>
  );
}

export default App;
