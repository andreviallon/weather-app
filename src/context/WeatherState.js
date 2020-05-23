import React, { createContext, useReducer } from 'react';
import { API_KEY, LATITUDE, LONGITUDE } from '../utils/api';
import WeatherReducer from './WeatherReducer';
import axios from 'axios';

const FORECAST_API = `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=-${LONGITUDE}&appid=${API_KEY}`;

const initialState = {
    weather: {},
    loading: true
}

export const WeatherContext = createContext(initialState);

export const WeatherProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    async function getWeather() {
        try {
            const res = await axios.get(FORECAST_API);
            console.log('res', res.data);
            dispatch({
                type: 'GET_WEATHER',
                payload: res.data
            })
        } catch(err) {
            console.log('err =>', err);
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                weather: state.weather,
                loading: state.loading,
                getWeather
            }}>
            {children}
        </WeatherContext.Provider>
    );
}
