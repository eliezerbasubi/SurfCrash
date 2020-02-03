import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomePage from './components/homepage/homepage';
import Login from './components/login/login';
import SignUp from './components/register/register';
import Profile from './components/profile/profile';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
  );
}
