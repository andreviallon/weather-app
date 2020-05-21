import React from 'react';
import './Forecast.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ForecastList } from '../ForecastList/ForecastList';
import { ForecastChart } from '../ForecastChart/ForecastChart';

export const Forecast = () => {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <nav className="mb-3">
                        <ul className="nav">
                            <li className="nav-item mr-2">
                                <Link to="/">Weekly</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/today">Next 48h</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/today">
                            <ForecastChart />
                        </Route>
                        <Route path="/">
                            <ForecastList />                        
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}
