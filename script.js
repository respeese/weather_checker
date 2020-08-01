//  https://openweathermap.org/weather-conditions - main weather descriptions, use for background changes
const progressBar = document.querySelector('#progress_bar');
const weatherBox = document.querySelector('#weather_data');
const searchBox = document.querySelector('#search_bar');
const searchBtn = document.querySelector('#search_btn');

searchBtn.addEventListener('click', ()=> {
    event.preventDefault();
    sendData();
});



async function sendData() {
    city = document.querySelector('#location_search').value;
    
    toggleProgress();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11796d1ae97d0844c7a9303520c0a898`, { mode:'cors' })
        .then(response => {
            if (response.status > 200){
                throw new Error('City not found')
            }
            return response.json()
        })
        .then(data => {
            toggleProgress();
            toggleWeather();
            displayWeather(data);
            return data;
        })
        .catch(err => {
            console.log(err)
        })
}

function toggleWeather() {
    if (weatherBox.classList.contains('hidden')) {
        weatherBox.classList.remove('hidden');
        searchBox.classList.add('hidden');
    }
    else{
        weatherBox.classList.add('hidden');
        searchBox.classList.remove('hidden');
    }
}

function toggleProgress() {
    if (progressBar.classList.contains('hidden')) {
        searchBox.classList.add('hidden');
        weatherBox.classList.add('hidden');
        progressBar.classList.remove('hidden');
    }
    else {
        progressBar.classList.add('hidden');
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






