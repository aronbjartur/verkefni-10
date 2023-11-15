function getWeather(city) {
    const apiKey = 'd4860dda773305489a53b2949b8b6f88';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Check if the city returned from the API matches the city queried
            if (data.name.toLowerCase() === city.toLowerCase()) {
                document.querySelector('.city').textContent = city;
                document.querySelector('.weather').textContent = `The weather is ${data.weather[0].description}`;
                document.querySelector('.temperature').textContent = `${Math.round(data.main.temp - 273.15)}°C`;
                document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
            } else {
                console.error('Error: The city returned from the API does not match the city queried.');
            }
        })
        .catch(error => console.error('Error:', error));
}

document.querySelector('.get-weather-button').addEventListener('click', function() {
    const city = document.querySelector('.city-input').value;
    getWeather(city);
});
