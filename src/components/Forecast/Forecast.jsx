import React from 'react';
import './Forecast.scss';

import { ForecastSelector } from '../ForecastSelector/ForecastSelector';
import { ForecastList } from '../ForecastList/ForecastList';

export const Forecast = () => {
    return (
        <div className="forecast-container">
            <ForecastSelector />
            <ForecastList />
        </div>
    );
}
