async function sendData() {
    city = document.querySelector('#location_search').value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11796d1ae97d0844c7a9303520c0a898`, { mode:'cors' })
        .then(response => {
            if (response.status > 200){
                throw new Error('City not found')
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            console.log('Desc: ' + data.weather[0].description)
            console.log('Main: '+ data.weather[0].main)
            console.log('Temp: '+data.main.temp)
            console.log('Humidity: '+data.main.humidity)
        })
        .catch(err => {
            console.log(err)
        })
    
}

searchBtn = document.querySelector('#search_btn');

searchBtn.addEventListener('click', ()=> {
    event.preventDefault();
    sendData();
});