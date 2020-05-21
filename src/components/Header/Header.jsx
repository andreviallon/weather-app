import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/andreviallon/weather-app" rel="noopener noreferrer" target='_blank'>Weather App</a>
            <button className="btn btn-primary">View in GitHub</button>
        </nav>
    )
}
