async function getWeather(){

    const city = document.getElementById("city").value;

    const apiKey = "8d9d4f3c6f0b7d4a";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fee967f2821285d2cf7bfc164eb63f50&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod == "404"){
            document.getElementById("weatherResult").innerHTML =
            "<p>City not found</p>";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} km/h</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        `;

    }
    catch(error){

        document.getElementById("weatherResult").innerHTML =
        "<p>Error fetching weather data</p>";

    }
}