import React from 'react';
import './Header.scss';

export const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Weather App</a>
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/andreviallon/react-hooks-todo-app">
                    <button className="btn btn-primary">View in GitHub</button>
                </a>
        </nav>
    )
}
