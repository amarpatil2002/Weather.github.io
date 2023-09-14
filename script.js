let input_box=document.getElementById('input');
let submit_button=document.getElementById('button');
let weather_img=document.getElementById('image');
let temprature=document.getElementById('temp');
let weather_condition=document.getElementById('weather');
let humidity=document.getElementById('hum');
let wind_speed=document.getElementById('speed');

async function checkWeather(city){

    const api_key="32a39406e3c6f7f1ab44b34bd798f30b";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(Response => Response.json());
    
    console.log(weather_data);

    temprature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}`;
    weather_condition.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clear':
            weather_img.src="/images/clear.png";
            break;
        case 'Clouds':
            weather_img.src="/images/clouds.png";
            break;
        case 'Rain':
            weather_img.src="/images/rain.png";
            break;
        case 'Snow':
            weather_img.src="/images/snow.png";
            break;
        case 'Mist':
            weather_img.src="/images/mist.png";
            break;
        case 'Drizzle':
            weather_img.src="/images/drizzle.png";
            break;
        case 'Haze':
            weather_img.src="/images/haze.png";
    }

}

submit_button.addEventListener('click',() => {

    checkWeather(input_box.value);
    
})