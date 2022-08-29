import React, { Component } from 'react';
import './styles/App.css';
import GeneralInfo, { HeaderInfo } from './components/Overview';
import Overview from './components/Overview'

function App() {
  
  return (
  <div>
    <GeneralInfo/>
    <HeaderInfo/>
  </div>
  )
}

export default App;
