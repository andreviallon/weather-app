import React from 'react';
import './Forecast.scss';

import { ForecastList } from '../ForecastList/ForecastList';
import { ForecastChart } from '../ForecastChart/ForecastChart';

export const Forecast = () => {
    return (
        <div className="forecast-container mb-5">
            <h5 className="mb-4">Next week's forecast</h5>
            <ForecastList/>
            <h5 className="mb-4">Next 48 hours</h5>
            <ForecastChart />
        </div>
    );
}
