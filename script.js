async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    // Replace YOUR_API_KEY with your OpenWeatherMap API key
    const apiKey = "f8de625cf3acd6ae9c228f1c795dbbf4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        result.innerHTML = "<p>Loading...</p>";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        result.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}