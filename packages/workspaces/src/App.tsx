import React, { useState, useEffect } from 'react';
import { Header } from '@tickle/ui-kit';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header>
          Tickle UI
        </Header>
      </header>
    </div>
  );
}

export default App;
