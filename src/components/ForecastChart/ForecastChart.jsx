import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export const ForecastChart = ({ forecast }) => {
    let hours = [];
    let temps = [];

    forecast.forEach(hour => {
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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Next 48 hours temperature</h5>
                <Line data={data} />
            </div>
        </div>
    );
}
