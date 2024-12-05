import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderForm from './components/OrderForm'; // Sipariş formu
import Confirmation from './components/Confirmation'; // Sipariş onay sayfası
import Home from './components/Home';

export default function App() {

  const [formData, setFormData] = useState();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setFormData={setFormData} />
        </Route>
        <Route path="/order">
          <OrderForm setFormData={setFormData} />
        </Route>
        <Route path="/confirmation">
          <Confirmation formData={formData} />
        </Route>
      </Switch>
    </Router>


  );
}

