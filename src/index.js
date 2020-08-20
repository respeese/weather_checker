import {moveProgress, toggleProgress} from './progress'
import {toggleWeather, displayWeather} from './weather'
import {toggleBackground} from './background'

const searchBtn = document.querySelector('#search_btn');
const fBtn = document.querySelector('#f_degrees_btn');
const cBtn = document.querySelector('#c_degrees_btn');
let units = '';

fBtn.addEventListener('click', () => {
    event.preventDefault();
    units = 'imperial';
});

cBtn.addEventListener('click', () => {
    event.preventDefault();
    units = 'metric';
});

searchBtn.addEventListener('click', ()=> {
    event.preventDefault();
    sendData(units);
});




async function sendData(units_param) {
    const city = document.querySelector('#location_search').value;
    let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11796d1ae97d0844c7a9303520c0a898`;

    toggleProgress();

    if (units_param != '') {
        weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units_param}&appid=11796d1ae97d0844c7a9303520c0a898`;
    } 
    
    fetch(weather_url, { mode:'cors' })
    .then(response => {
        if (response.status > 200) {
            throw new Error('City not found');
        } else if (response.status == 200) {
            return response.json();
        }
    })
    .then(async (data) => {
        await moveProgress();
        toggleProgress();
        toggleBackground(data);
        toggleWeather();
        displayWeather(data, units_param);
    })
    .catch(async (err) => {
        await moveProgress();
        alert(err);
    });
}








