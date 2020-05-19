import React from 'react';

import './Overview.scss';

export const Overview = () => {
    return (
        <div className="flex-container">
            <span className="overview">Overview</span>
            <div className="flex-container">
                <span className="city">New York City</span>
                <span className="country">USA</span>
            </div>
        </div>
    )
}
