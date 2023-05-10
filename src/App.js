import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Navbar'
import './App.css';
import Soda from './Soda'
import Sardines from './Sardines'
import Chips from './Chips'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Navbar />
          </Route>
          <Route exact path='/soda'>
            <Soda />
          </Route>
          <Route exact path='/chips'>
            <Chips />
          </Route>
          <Route exact path='/sardines'>
            <Sardines />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
