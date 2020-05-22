import React from 'react';
import './Forecast.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import { ForecastList } from '../ForecastList/ForecastList';
import { ForecastChart } from '../ForecastChart/ForecastChart';

export const Forecast = () => {
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <nav className="mb-3">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item mr-2">
                                <NavLink className="nav-link" exact={true} activeClassName="active" to="/">Today</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/nextweek">Next Week</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/nextweek">
                            <ForecastList />
                        </Route>
                        <Route path="/">
                            <ForecastChart />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>

    );
}
