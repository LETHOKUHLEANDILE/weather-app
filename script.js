document.getElementById('get-weather-btn').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }
    getWeather(location);
});

async function getWeather(location) {
    const apiKey = 'def31267010e4f00258d8debcb3d238e';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('Location not found');
            return;
        }

        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    }
}
