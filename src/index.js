import {moveProgress, toggleProgress} from './progress'
import {toggleWeather, displayWeather} from './weather'

//  https://openweathermap.org/weather-conditions - main weather descriptions, use for background changes
const searchBtn = document.querySelector('#search_btn');

searchBtn.addEventListener('click', ()=> {
    event.preventDefault();
    sendData();
});



async function sendData() {
    let data = 0;
    let networkError = false;
    const city = document.querySelector('#location_search').value;
    
    toggleProgress();
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11796d1ae97d0844c7a9303520c0a898`, { mode:'cors' }).catch(err => {
            console.log(err);
            networkError = true;
        });

    await moveProgress();

    if(networkError == false) {
        if (response.status > 200) {
                throw new Error('City not found');
            } else if (response.status == 200) {
                data =  await response.json();
            }
        toggleProgress();
        toggleWeather();
        displayWeather(data);
    }  
}








