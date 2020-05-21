import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Overview } from './components/Overview/Overview';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { Forecast } from './components/Forecast/Forecast';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row overview-container mt-4">
          <Overview />
          <CurrentWeather />
        </div>
      </div>
      <hr className="my-4" />
      <div className="container">
        <div className="row overview-container">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
