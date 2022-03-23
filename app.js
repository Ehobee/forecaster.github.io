
document.getElementById('submit').addEventListener('click', function () {

    const inputElement = document.getElementById('location');
    const input = inputElement.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a5e32efc0e06b4bb65462f8ef75d4750&units=metric`;

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error()
            };

            return response.json()
        })
        .then(displayData)

    function displayData(data) {
        const currentWeatherData = data.main;
        const currentWeatherTemp = data.main.temp;
        const iconCode = data.weather[0].icon;
        const iconSrc = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

        const forecastDivElement = document.getElementById('forecast');
        forecastDivElement.style.display = 'block';

        const iconElement = document.querySelector('img');
        iconElement.src = iconSrc;

        const city = data.name;
        const temp = data.main.temp;
        const condition = data.weather[0].main;
        const country = data.sys.country;

        const cityElement = document.getElementById('city');
        const tempElement = document.getElementById('current-temp');
        const conditionElement = document.getElementById('condition');

        conditionElement.textContent = condition;
        cityElement.textContent = `${city}, ${country}`;
        tempElement.textContent = `${Math.ceil(temp)} °C`;

        inputElement.value = '';
    }
})

const inputCityName = document.getElementById('location');

//TODO: to create div element with data from api to display info and icon - done
//TODO: to create function for three day forecast





















/*function attachEvents() {

    document.getElementById('submit').addEventListener('click', getWeather);

    function getWeather() {
        const location = document.getElementById('location').value;
        const url = `http://localhost:3030/jsonstore/forecaster/locations`;
        const forecastDivElement = document.getElementById('forecast');
        forecastDivElement.style.display = 'block';
        const currentForecastElement = document.getElementById('current');
        const upcomingForecastElement = document.getElementById('upcoming');
        let code = '';

        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error();
                }
                return res.json();
            })
            .then(resHandler)
            .catch(errorHandler);

        function resHandler(data) {
            data.forEach(element => {
                if (element.name === location) {
                    code = element.code
                };
            });
            const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

            fetch(urlToday)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error();
                    };
                    return res.json();
                })
                .then(todayHandler)
                .catch(errorHandler)

            fetch(urlUpcoming)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error();
                    };
                    return res.json();
                })
                .then(upcomingHandler)
                .catch(errorHandler);

            function todayHandler(todayForecast) {
                currentForecastElement.replaceChildren();
                const divElement = document.createElement('div');
                divElement.className = 'forecasts';
                const spanSymbol = document.createElement('span');
                const spanAll = document.createElement('span');
                const spanName = document.createElement('span');
                const spanDegrees = document.createElement('span');
                const spanCondition = document.createElement('span');

                spanSymbol.className = 'condition symbol';
                if (todayForecast.forecast.condition === 'Sunny') {
                    spanSymbol.textContent = '☀';
                } else if (todayForecast.forecast.condition === 'Rain') {
                    spanSymbol.textContent = '☂';
                } else if (todayForecast.forecast.condition === 'Overcast') {
                    spanSymbol.textContent = '☁';
                } else if (todayForecast.forecast.condition === 'Partly sunny') {
                    spanSymbol.textContent = '⛅';
                };
                spanAll.className = 'condition';
                spanName.className = 'forecast-data';
                spanDegrees.className = 'forecast-data';
                spanCondition.className = 'forecast-data';
                spanName.textContent = todayForecast.name;
                spanDegrees.textContent = `${todayForecast.forecast.low}\xB0/${todayForecast.forecast.high}\xB0`;
                spanCondition.textContent = `${todayForecast.forecast.condition}`;

                spanAll.appendChild(spanName);
                spanAll.appendChild(spanDegrees);
                spanAll.appendChild(spanCondition);
                divElement.appendChild(spanSymbol);
                divElement.appendChild(spanAll);
                currentForecastElement.appendChild(divElement);
            }

            function upcomingHandler(upcomingForecast) {
                upcomingForecastElement.replaceChildren();
                const forecast = upcomingForecast.forecast;
                const divElement = document.createElement('div');
                divElement.className = 'forecast-info';

                for (let day = 0; day < forecast.length; day++) {

                    const spanAll = document.createElement('span');
                    spanAll.className = 'upcoming';

                    currentDay = forecast[day];
                    const spanSymbol = document.createElement('span');
                    spanSymbol.className = 'symbol';
                    if (currentDay.condition === 'Sunny') {
                        spanSymbol.textContent = '☀';
                    } else if (currentDay.condition === 'Rain') {
                        spanSymbol.textContent = '☂';
                    } else if (currentDay.condition === 'Overcast') {
                        spanSymbol.textContent = '☁';
                    } else if (currentDay.condition === 'Partly sunny') {
                        spanSymbol.textContent = '⛅';
                    };

                    const spanDegree = document.createElement('span');
                    spanDegree.className = 'forecast-data';
                    spanDegree.textContent = `${currentDay.low}\xB0/${currentDay.high}\xB0`;

                    const spanCondition = document.createElement('span');
                    spanCondition.className = 'forecast-data';
                    spanCondition.textContent = currentDay.condition;

                    spanAll.appendChild(spanSymbol);
                    spanAll.appendChild(spanDegree);
                    spanAll.appendChild(spanCondition);
                    divElement.appendChild(spanAll);
                }
                upcomingForecastElement.appendChild(divElement);
            }
        }
        function errorHandler() {
            forecastDivElement.style.display = 'block';
            const errorElement = document.createElement('span')
            forecastDivElement.textContent = 'Error';
        }
    }
}
attachEvents();*/