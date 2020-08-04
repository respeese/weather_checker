import {moveProgress, toggleProgress} from './progress'
import {toggleWeather, displayWeather} from './weather'
import {toggleBackground} from './background'

//  https://openweathermap.org/weather-conditions - main weather descriptions, use for background changes
const searchBtn = document.querySelector('#search_btn');

searchBtn.addEventListener('click', ()=> {
    event.preventDefault();
    sendData();
});



async function sendData() {
    const city = document.querySelector('#location_search').value;
    
    toggleProgress();
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11796d1ae97d0844c7a9303520c0a898`, { mode:'cors' })
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
        displayWeather(data);
    })
    .catch(async (err) => {
        await moveProgress();
        alert(err);
    });
}








