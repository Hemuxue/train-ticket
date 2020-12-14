import React, { useState, useCallback, memo, useMemo, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


function App () {

  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/other">other</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Other />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

function About () {
  return (
    <div>about</div>
  )
}

function Home () {
  return (
    <div>home</div>
  )
}
function Other () {
  return (
    <div>other</div>
  )
}


export default App;
