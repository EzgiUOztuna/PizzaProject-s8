import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderForm from './components/OrderForm'; // Sipariş formu
import Confirmation from './components/Confirmation'; // Sipariş onay sayfası
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={OrderForm} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </Router>
  );
}