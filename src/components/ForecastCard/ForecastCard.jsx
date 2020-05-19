import React from 'react';

import './ForecastCard.scss';

export const ForecastCard = ({ forecast }) => {

    const imgUrl = `http://openweathermap.org/img/wn/${forecast.icon}@2x.png`;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{forecast.day}</h5>
                <img className="forecast-img" src={imgUrl} alt="forecast icon" />
                <div className="temperature-container">
                    <span className="max-temp card-text">{forecast.maxTemp}&deg;</span>
                    <span className="min-temp card-text">{forecast.minTemp}&deg;</span>
                </div>
            </div>
        </div>
    );
}
