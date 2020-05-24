/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import './CurrentWeatherOverview.scss';
import { WeatherContext } from '../../context/WeatherState';
import { convertToCelcius } from '../../utils/tempFormater';
import Clock from 'react-live-clock';

export const CurrentWeatherOverview = () => {
    const { weather, getWeather } = useContext(WeatherContext);

    useEffect(() => {
        getWeather();
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

    const displayTemp = () => {
        if (weather.current) return <span className="degrees">{convertToCelcius(weather.current.temp)}</span>;
    }

    return (
        <div className="flex-container current-container">
            <div className="current-date-hour">
                <p className="current-day">{displayDate()},</p>
                <p className="current-hour">
                    <Clock format="HH.mm" interval={1000} ticking={true} />
                </p>
            </div>
            <div className="current-weather-container">
                {displayTemp()}
                <span className="unit">&#8451;</span>
            </div>
        </div>
    )
}
