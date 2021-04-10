import React from 'react';
//CSS
import './App.css';
//Components
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';
import Mail from "../mail/Mail";
import EmailList from "../emailList/EmailList";
//React Router dom
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">
      <Header/>

      <div className="app__body">
      <Sidebar/>
      <Switch>
        <Route path="/mail">
          <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
