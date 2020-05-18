import React from 'react';

import './Overview.scss';

export const Overview = () => {
    return (
        <div className="flex-container">
            <h2>Overview</h2>
            <div className="flex-container">
                <div className="city">New York City</div>
                <div className="country">USA</div>
            </div>
        </div>
    )
}
