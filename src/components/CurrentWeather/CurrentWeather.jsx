import React, { useState, useEffect } from 'react';
import './CurrentWeather.scss';
import { API_KEY, LATITUDE, LONGITUDE } from '../../utils/api';
import { convertToCelcius } from '../../utils/tempFormater';
import Clock from 'react-live-clock';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;

export const CurrentWeather = () => {
    const [currentTemperature, setCurrentTemperature] = useState([]);


    useEffect(() => {
        fetch(FORECAST_API)
            .then(response => response.json())
            .then(json => setCurrentTemperature(json.current.temp));
    }, []);

    const date = new Date();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <div className="flex-container current-container">
            <div className="current-date-hour">
                <p className="current-day">{weekday[date.getDay()]},</p>
                <p className="current-hour">
                    <Clock format="HH.mm" interval={1000} ticking={true} />
                </p>
            </div>
            <div className="current-weather-container">
                <span className="degrees">{convertToCelcius(currentTemperature)}</span>
                <span className="unit">&#8451;</span>
            </div>
        </div>
    )
}
