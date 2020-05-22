import React, { useState, useEffect } from 'react';
import { convertToCelcius } from '../../utils/tempFormater';
import { API_KEY, LATITUDE, LONGITUDE } from '../../utils/api';
import './CurrentWeatherCard.scss';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;

export const CurrentWeatherCard = () => {

const [overview, setOverview] = useState([]);
const [icon, setIcon] = useState('');

useEffect(() => {
    fetch(FORECAST_API)
        .then(response => response.json())
        .then(json => {
            console.log('json.current', json.current);
            setOverview(json.current);
            setIcon(`http://openweathermap.org/img/wn/${json.current.weather[0].icon}@2x.png`)
        });
}, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Current Weather</h5>
                <img className="forecast-img" src={icon} alt="forecast icon" />
                <div className="temperature-container mt-2">
                    <div className="flex-container center">
                        <span>Temperature</span>
                        <span className="max-temp card-text">{convertToCelcius(overview.temp)}&deg;</span>
                    </div>
                    <div className="flex-container center">
                        <span className="min-temp">Feels Like</span>
                        <span className="min-temp card-text">{convertToCelcius(overview.feels_like)}&deg;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
