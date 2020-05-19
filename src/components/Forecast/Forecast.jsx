import React from 'react';
import './Forecast.scss';

import { ForecastList } from '../ForecastList/ForecastList';

export const Forecast = () => {

    return (
        <div className="forecast-container">
            <h5 className="mb-4">Next 7 days forecast</h5>
            <ForecastList />
        </div>
    );
}
