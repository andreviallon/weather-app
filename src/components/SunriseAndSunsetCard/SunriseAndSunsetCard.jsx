import React from 'react';
import './SunriseAndSunsetCard.scss';
import Moment from 'react-moment';

import sunrise from '../../assets/sunrise.svg';
import sunset from '../../assets/sunset.svg';

export const SunriseAndSunsetCard = ({ weather }) => {

    console.log('weather', weather);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sunrise & Sunset</h5>

                <div className="mt-4">
                    <div className="flex-container center">
                        <div className="sunrise">
                            <img src={sunrise} alt="sunrise" />
                            <span><Moment unix format="HH.mm">{weather.sunrise}</Moment> AM</span>
                        </div>
                        <div className="sunset">
                            <img src={sunset} alt="sunrise" />
                            <span><Moment unix format="HH.mm">{weather.sunset}</Moment> PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
