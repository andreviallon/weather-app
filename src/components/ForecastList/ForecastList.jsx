import React, { useState, useEffect } from 'react';
import './ForecastList.scss';

import { ForecastCard } from '../ForecastCard/ForecastCard';
import { API_KEY } from '../../utils/api';

const LATITUDE = '55.6761';
const LONGITUDE = '12.5683';
const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;


export const ForecastList = () => {

    const [dailyForecasts, setDailyForecasts] = useState([]);

    useEffect(() => {
        fetch(FORECAST_API)
            .then(response => response.json())
            .then(json => setDailyForecasts(json.daily));
    }, []);

    console.log('dailyForecasts', dailyForecasts);

    return (
        <div className="forecast-list-container">
            {dailyForecasts.map((forecast, index) => (
                <ForecastCard
                    key={index}
                    forecast={forecast} />
            ))}
        </div>
    );
}
