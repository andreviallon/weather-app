import React from 'react';
import './ForecastList.scss';

import { ForecastCard } from '../ForecastCard/ForecastCard';

export const ForecastList = () => {

    const forecasts = [
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "01n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        },
        {
            day: 'Sunday',
            maxTemp: "15",
            minTemp: "-3",
            main: "Rain",
            icon: "10n"
        }
    ]

    return (
        <div className="forecast-list-container">
            {forecasts.map((forecast, index) => (
                <ForecastCard
                    key={index}
                    forecast={forecast}
                />
            ))}
        </div>
    );
}
