import React from 'react';
import Courses from "./bd/courses";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from './components/login'
import Home from './components/home'

function App() {
  return (
    <Router>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/home'} component={Home} />
    </Router>
  );
}

export default App;