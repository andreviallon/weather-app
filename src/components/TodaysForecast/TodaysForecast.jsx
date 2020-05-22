import React from 'react';
import { ForecastChart } from '../ForecastChart/ForecastChart';
import { CurrentWeatherCard } from '../CurrentWeatherCard/CurrentWeatherCard';

export const TodaysForecast = () => {

    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <CurrentWeatherCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <CurrentWeatherCard />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <CurrentWeatherCard />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <ForecastChart />
                </div>
            </div>
        </React.Fragment>
    );
}
