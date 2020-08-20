const weatherBox = document.querySelector('#weather_data');
const searchBox = document.querySelector('#search_bar');
const title = document.querySelector('h1');

function toggleWeather() {
    if (weatherBox.classList.contains('hidden')) {
        weatherBox.classList.remove('hidden');
        weatherBox.classList.add('weather_data_border');
        title.classList.add('weather_data_border');
        searchBox.classList.add('hidden');
    }
    else {
        weatherBox.classList.add('hidden');
        weatherBox.classList.remove('weather_data_border');
        title.classList.remove('weather_data_border');
        searchBox.classList.remove('hidden');
    }
}


function displayWeather(data, units) {
    let line = document.querySelector('hr');
    let name = document.createElement('h2');
    let desc = document.createElement('p');
    let temp = document.createElement('p');
    let humidity = document.createElement('p');
    let elements = [desc, temp, humidity];

    console.log(units)
    name.innerHTML = data.name + ', ' + data.sys.country;
    desc.innerHTML = data.weather[0].description;
    temp.innerHTML = 'Temperature: ' + data.main.temp;

    if(units == 'imperial') {
        temp.innerHTML += ' Fahrenheit';
    }

    if(units == 'metric') {
        temp.innerHTML += ' Celsius';
    }

    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';

    weatherBox.insertBefore(name, line);
    elements.forEach(el => {
        weatherBox.appendChild(el);
    })
}

export {toggleWeather, displayWeather}