import React from 'react';
//CSS
import './App.css';
//Components
import Header from "../header/Header";
import Sidebar from '../sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <Sidebar/>
      <h2>Lets build gmail</h2>
    </div>
  );
}

export default App;
