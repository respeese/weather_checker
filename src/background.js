function toggleBackground(data) {
    const background = document.querySelector('body');
    const mainWeather = data.weather[0].main;

    switch(mainWeather) {
        case 'Thunderstorm':
            background.classList.add('thunder');
            break;
        case 'Rain':
        case 'Drizzle':
            background.classList.add('rain_drizzle');
            break;
        case 'Snow':
            background.classList.add('snow');
            break;
        case 'Clear':
            background.classList.add('clear');
            break;
        case 'Clouds':
            background.classList.add('clouds');
            break;
        default:
            background.classList.add('other');
    }
}

export {toggleBackground}