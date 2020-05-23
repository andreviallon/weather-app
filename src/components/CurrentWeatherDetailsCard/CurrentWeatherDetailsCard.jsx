import React from 'react';
import './CurrentWeatherDetailsCard.scss';

export const CurrentWeatherDetailsCard = ({ weather }) => {

    const imgUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Weather Details</h5>

                <img className="forecast-img" src={imgUrl} alt="forecast icon" />
                <div className="temperature-container mt-2">
                    <div className="flex-container center">
                        <span className="max-temp card-text">{weather.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
