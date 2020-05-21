import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { API_KEY, LATITUDE, LONGITUDE } from '../../utils/api';
import moment from 'moment';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;


export const ForecastChart = () => {
    const [hourlyForecast, setHourlyForecast] = useState([]);

    let hours = [];
    let temps = [];

    useEffect(() => {
        fetch(FORECAST_API)
            .then(response => response.json())
            .then(json => setHourlyForecast(json.hourly));
    }, []);

    hourlyForecast.map(hour => {
        hours.push(moment.unix(hour.dt).format('HH'));
        temps.push((hour.temp - 273.15).toFixed(1));
    })

    const data = {
        labels: [...hours],
        datasets: [
            {
                label: 'Hourly Forcast',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,108,192,0.4)',
                borderColor: 'rgba(75,108,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,108,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,108,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [...temps]
            }
        ]
    };
    return (
        <div className="container">
            <div className="row">
                <h5 className="mb-4">Next 48 hours</h5>
                <Line data={data} />
            </div>
        </div>
    );
}
