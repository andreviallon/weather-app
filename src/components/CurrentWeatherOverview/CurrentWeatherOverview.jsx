import React, { useState, useEffect } from 'react';
import './CurrentWeatherOverview.scss';
import { API_KEY, LATITUDE, LONGITUDE } from '../../utils/api';
import { convertToCelcius } from '../../utils/tempFormater';
import Clock from 'react-live-clock';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;

export const CurrentWeatherOverview = () => {
    const [currentTemperature, setCurrentTemperature] = useState([]);


    useEffect(() => {
        fetch(FORECAST_API)
            .then(response => response.json())
            .then(json => setCurrentTemperature(json.current.temp));
    }, []);

    const currentDate = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const displayDate = () => {
        const day = weekdays[currentDate.getDay()];
        const month = months[currentDate.getMonth()];
        const date = currentDate.getDate();
        return `${day} ${month} ${date}`;
    }

    return (
        <div className="flex-container current-container">
            <div className="current-date-hour">
                 <p className="current-day"> {displayDate()},</p>
                <p className="current-hour">
                    <Clock format="HH.mm" interval={1000} ticking={true} />
                </p>
            </div>
            <div className="current-weather-container">
                <span className="degrees">{convertToCelcius(currentTemperature)}</span>
                <span className="unit">&#8451;</span>
            </div>
        </div>
    )
}
