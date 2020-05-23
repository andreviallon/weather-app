import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Overview } from './components/Overview/Overview';
import { CurrentWeatherOverview } from './components/CurrentWeatherOverview/CurrentWeatherOverview';
import { Forecast } from './components/Forecast/Forecast';

import { WeatherProvider } from './context/WeatherState';

function App() {
  return (
    <WeatherProvider className="App">
      <Header />
      <div className="container">
        <div className="row overview-container mt-4">
          <Overview />
          <CurrentWeatherOverview />
        </div>
      </div>
      <hr className="my-4" />
      <div className="container">
        <div className="row overview-container">
          <Forecast />
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
