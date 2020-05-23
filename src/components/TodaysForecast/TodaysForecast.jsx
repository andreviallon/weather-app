/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../../context/WeatherState';
import { ForecastChart } from '../ForecastChart/ForecastChart';
import { CurrentWeatherDetailsCard } from '../CurrentWeatherDetailsCard/CurrentWeatherDetailsCard';
import { SunriseAndSunsetCard } from '../SunriseAndSunsetCard/SunriseAndSunsetCard';
import { HumidityCard } from '../HumidityCard/HumudityCard';
import './TodaysForecast.scss';

export const TodaysForecast = () => {
    const { weather, getWeather } = useContext(WeatherContext);

    useEffect(() => {
        getWeather();
    }, []);

    function displayCards() {
        console.log('weather', weather);
        if (weather.current) {
            return (
                <React.Fragment>
                    <div className="col-sm-12 col-md-4 d-flex align-items-stretch">
                        <CurrentWeatherDetailsCard weather={weather.current.weather[0]} />
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex align-items-stretch">
                        <SunriseAndSunsetCard weather={weather.current} />
                    </div>
                    <div className="col-sm-12 col-md-4 d-flex align-items-stretch">
                        <HumidityCard weather={weather.current} />
                    </div>
                </React.Fragment>
            );
        }
    }

    function displayChart() {
        console.log('weather', weather);
        if (weather.hourly) {
            return (
                <div className="col-12 mt-4">
                    <ForecastChart forecast={weather.hourly} />
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="row today-forcast-container">
                    {displayCards()}
                    {displayChart()}
                </div>
            </div>
        </React.Fragment>
    );
}
