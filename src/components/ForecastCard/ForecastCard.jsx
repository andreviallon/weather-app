import React from 'react';
import Moment from 'react-moment';

import './ForecastCard.scss';

export const ForecastCard = ({ forecast }) => {

    const imgUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

    // const date = moment(forecast.dt);

    // console.log('date', date);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><Moment unix format="DD MMM">{forecast.dt}</Moment></h5>
                <img className="forecast-img" src={imgUrl} alt="forecast icon" />
                <div className="temperature-container">
                    <span className="max-temp card-text">{forecast.temp.max}&deg;</span>
                    <span className="min-temp card-text">{forecast.temp.min}&deg;</span>
                </div>
            </div>
        </div>
    );
}
