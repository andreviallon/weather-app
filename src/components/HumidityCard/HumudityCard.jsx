import React from 'react';
import './HumudityCard.scss';

export const HumidityCard = ({ weather }) => {

    console.log('weather', weather);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Humidity</h5>
                <div className="mt-4">
                    <div className="humidity-container">
                        <span className="humidity-level">{weather.humidity}</span>
                        <span className="unit">%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
