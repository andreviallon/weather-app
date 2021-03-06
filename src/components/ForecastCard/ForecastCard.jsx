import React from 'react';
import Moment from 'react-moment';
import { convertToCelcius } from '../../utils/tempFormater';

import './ForecastCard.scss';

export const ForecastCard = ({ forecast }) => {
    
    const imgUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><Moment unix format="DD MMM">{forecast.dt}</Moment></h5>
                <div className="card-content">
                    <img className="forecast-img" src={imgUrl} alt="forecast icon" />
                    <div className="temperature-container mt-2">
                        <div className="flex-container center">
                            <span>max</span>
                            <span className="max-temp card-text">{convertToCelcius(forecast.temp.max)}&deg;</span>
                        </div>
                        <div className="flex-container center">
                            <span className="min-temp">min</span>
                            <span className="min-temp card-text">{convertToCelcius(forecast.temp.min)}&deg;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
