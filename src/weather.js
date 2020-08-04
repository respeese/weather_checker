const weatherBox = document.querySelector('#weather_data');
const searchBox = document.querySelector('#search_bar');

function toggleWeather() {
    if (weatherBox.classList.contains('hidden')) {
        weatherBox.classList.remove('hidden');
        searchBox.classList.add('hidden');
    }
    else {
        weatherBox.classList.add('hidden');
        searchBox.classList.remove('hidden');
    }
}


function displayWeather(data) {
    let line = document.querySelector('hr');
    let name = document.createElement('h2');
    let desc = document.createElement('p');
    let temp = document.createElement('p');
    let humidity = document.createElement('p');
    let elements = [desc, temp, humidity];

    name.innerHTML = data.name;
    desc.innerHTML = data.weather[0].main + ' - ' + data.weather[0].description;
    temp.innerHTML = 'Temp: ' + data.main.temp;
    humidity.innerHTML = 'Humidity: ' + data.main.humidity;

    weatherBox.insertBefore(name, line);
    elements.forEach(el => {
        weatherBox.appendChild(el);
    })
}

export {toggleWeather, displayWeather}