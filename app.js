const API_KEY = '8EJFXK7L684D5QFP6EGAZUKCL';
const test = document.getElementById('call');



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

test.addEventListener('click', () => {
    fetchWeather();
});