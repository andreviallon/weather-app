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

    if (dailyForecasts) {
        return (
            <div className="container">
                <div className="row">
                    <h5 className="mb-4">Next week's forecast</h5>
                    <div className="forecast-list-container">
                        {dailyForecasts.map((forecast, index) => (
                            <ForecastCard
                                key={index}
                                forecast={forecast} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>loading...</div>
        )
    }
}
