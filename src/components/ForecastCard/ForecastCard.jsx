import React from 'react';

import './ForecastCard.scss';

export const ForecastCard = ({ forecast }) => {

    const imgUrl = `http://openweathermap.org/img/wn/${forecast.icon}@2x.png`;

    return (
        <div className="card-container">
            <span className="title">{forecast.day}</span>
            <img className="forecast-img" src={imgUrl} alt="forecast icon"/>
            <div className="temperature-container">
                <span className="max-temp">{forecast.maxTemp}</span>
                <span className="min-temp">{forecast.minTemp}</span>
            </div>
        </div>
    );
}
