const API_KEY = '8EJFXK7L684D5QFP6EGAZUKCL';
const test = document.getElementById('call');
const search = document.getElementById('search');
const mainDiv = document.querySelector('.main-content');
let isCelsius = false;
let currentTemp = null;



const converToCelsius = (temp) => {
    const first = temp - 32;
    const second = first * 5 / 9;
    
    return second;
};

const convertToFahrenheit = (temp) => {
    const first = temp * 1.8;
    const second = first + 32;

    return second;
};

async function searchWeather () {
    if (!search.value) return;
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=us&key=${API_KEY}`);
        const data = await response.json();

        currentTemp = data.currentConditions.temp;


        mainDiv.innerHTML = `
            <h3 class="address">${data.resolvedAddress}</h3>
            <p class="description">${data.description}</p>
            <p class="temperature">${data.currentConditions.temp} ℉</p>
            <button id="changeUnitGroup">View in Celsius</button>
        `

        document.getElementById('changeUnitGroup').addEventListener('click', () => {
        isCelsius = !isCelsius;

        const temp = isCelsius ? converToCelsius(currentTemp) : currentTemp;
        const unit = isCelsius ? '℃' : '℉';

        document.querySelector('.temperature').textContent = `${temp.toFixed(1)}${unit}`;
        document.getElementById('changeUnitGroup').textContent = isCelsius ? 'View in Fahrenheit' : 'View in Celsius';
});
    } catch (error) {
        console.log(error);
    }
};

test.addEventListener('click', () => {
    searchWeather();
});

