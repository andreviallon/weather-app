export const convertToCelcius = (temp) => {
    const celcius = temp - 273.15;
    return celcius >= 0 ? `+${celcius.toFixed(1)}` : celcius.toFixed(1);
};
