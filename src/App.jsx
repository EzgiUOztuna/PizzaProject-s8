import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderForm from './components/OrderForm'; // Sipariş formu
import Confirmation from './components/Confirmation'; // Sipariş onay sayfası

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={OrderForm} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}
