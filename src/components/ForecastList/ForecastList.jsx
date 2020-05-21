import React, { useState, useEffect } from 'react';
import './ForecastList.scss';

import { ForecastCard } from '../ForecastCard/ForecastCard';
import { API_KEY, LATITUDE, LONGITUDE } from '../../utils/api';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;


export const ForecastList = () => {
    const [dailyForecasts, setDailyForecasts] = useState([]);

    useEffect(() => {
        fetch(FORECAST_API)
            .then(response => response.json())
            .then(json => setDailyForecasts(json.daily));
    }, []);

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
