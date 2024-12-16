import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrderForm from './components/OrderForm'; // Sipariş formu
import Confirmation from './components/Confirmation'; // Sipariş onay sayfası
import Home from './components/Home';
import menuData from './assets/DummyData';


const initialForm = {
  name: "",
  price: 85.50,
  boyut: "",
  hamur: "",
  ekMalzemeler: [],
  terms: false
};

export default function App() {


  const [formData, setFormData] = useState(initialForm);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setFormData={setFormData} />
        </Route>
        <Route path="/order">
          <OrderForm setFormData={setFormData} formData={formData} menuData={menuData} />
        </Route>
        <Route path="/confirmation">
          <Confirmation formData={formData} />
        </Route>
      </Switch>
    </Router>
  );
}

