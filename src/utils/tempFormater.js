export const convertToCelcius = (temp) => {
    const celcius = temp - 273.15;
    return celcius.toFixed(1);
};
