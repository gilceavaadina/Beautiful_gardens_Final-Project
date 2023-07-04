const apiKey="39e5edf11fefd5d9f53f7a90336a3f8c";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-location input");
const searchBtn = document.querySelector(".search-location button");
const weatherIcon=document.querySelector(".weather-ic"); 
    

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    // const response = await fetch(apiURL +  `&appid=${apiKey}`);
    var data= await response.json();
// console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp-weather").innerHTML = Math.round(data.main.temp )+ " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="../assets/img/clouds.png";

    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src="../assets/img/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src="../assets/img/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src="../assets/img/mist.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src="../assets/img/snow.png";
    }else if(data.weather[0].main == "Storm"){
        weatherIcon.src="../assets/img/storm.png";
    }
}
// checkWeather();
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value = " "; 
    // Clear the input field
  
}); 


