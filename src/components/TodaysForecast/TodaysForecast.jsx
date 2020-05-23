/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../../context/WeatherState';
import { ForecastChart } from '../ForecastChart/ForecastChart';
import { CurrentWeatherDetailsCard } from '../CurrentWeatherDetailsCard/CurrentWeatherDetailsCard';

export const TodaysForecast = () => {
    const { weather, getWeather } = useContext(WeatherContext);

    useEffect(() => {
        getWeather();
    }, []);

    function displayCards() {
        console.log('weather', weather);
        if (weather.current) {
            console.log('in if statement');
            return (
                <CurrentWeatherDetailsCard weather={weather.current.weather[0]} />
            );
        }
    }


    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        {displayCards()}
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <ForecastChart />
                </div>
            </div>
        </React.Fragment>
    );
}
