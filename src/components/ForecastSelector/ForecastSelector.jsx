import React from 'react';

import './ForecastSelector.scss';

export const ForecastSelector = () => {
    return (
        <div className="forecast-selector-container">
            <span className="forecast-selector">Today</span>
            <span className="forecast-selector active">Week</span>
        </div>
    );
}
