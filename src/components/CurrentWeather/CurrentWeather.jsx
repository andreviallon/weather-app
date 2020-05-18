import React from 'react';

import './CurrentWeather.scss';

export const CurrentWeather = () => {
    return (
        <div className="flex-container current-container">
            <div className="current-date-hour">
                <p className="current-day">Monday,</p>
                <p className="current-hour">16.22</p>
            </div>
            <div className="current-weather-container">
                <span className="degrees">12</span>
                <span className="unit">&#8451;</span>
            </div>
        </div>
    )
}
