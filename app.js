const API_KEY = '8EJFXK7L684D5QFP6EGAZUKCL';
const test = document.getElementById('call');
const search = document.getElementById('search');



async function fetchWeather () {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=${API_KEY}`);
        const data = await response.json();
        console.log({
            'Temperature': data.currentConditions.temp, 
            'Desc': data.description, 
            'Location': data.resolvedAddress});
    } catch (e) {
        console.log(e);
    }
}; 


async function searchWeather () {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search.value}?unitGroup=us&key=${API_KEY}`);
        const data = await response.json();
        console.log({
            'Temperature': data.currentConditions.temp, 
            'Desc': data.description, 
            'Location': data.resolvedAddress});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

test.addEventListener('click', () => {
    searchWeather();
});