import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Overview } from './components/Overview/Overview';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Overview />
        <CurrentWeather />
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default App;
