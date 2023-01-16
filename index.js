const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0e4cffe3bmsh2347ebaf0723d9ep1026acjsn3936e34e8322',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let temp_1= document.getElementById('temp');
let min_temp = document.getElementById('min_temp');
let max_temp1 = document.getElementById('max_temp');
let cityName = document.getElementById('cityName');

function getWeather(city){
cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(
        (response) => {
            console.log(response);
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            min_temp.innerHTML = response.min_temp;
            max_temp1.innerHTML = response.max_temp;
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            sunset.innerHTML = response.sunset;
            sunrise.innerHTML = response.sunrise;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            
        })
	.catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(search.value);
});

getWeather("Indore");