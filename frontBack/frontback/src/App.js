import './App.css';
import {AuthProvider} from "./context/AuthContext";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import Header from "./components/NavBar";
import Home from './pages/Home';
import UsersList from './pages/UsersList';
import Orders from './pages/Orders';
import ForSale from './pages/ForSale';
import MessagesList from './pages/MessagesList';
import Cart from './pages/Cart';

import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "oQT9NFoGJ9HQWefMSlnkns8V9cudTjsXsyhXOTwr";
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = "7pCPR3fcdQpvYeOdNYi1QktQEyr51eiXel59TOwY";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
      <AuthProvider>
        <Header />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/admin" component={UsersList} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/seller" component={ForSale} />
              <Route exact path="/messages" component={MessagesList} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
        </Container>
      </AuthProvider>
  );
}

export default App;