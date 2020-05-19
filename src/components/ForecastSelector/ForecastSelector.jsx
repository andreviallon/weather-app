import React from 'react';

import './ForecastSelector.scss';

export const ForecastSelector = () => {
    return (
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" href="/" role="tab">Today</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" href="/" role="tab">Next 7 days</a>
            </li>
        </ul>
    );
}
