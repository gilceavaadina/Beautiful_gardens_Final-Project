const apiKey="39e5edf11fefd5d9f53f7a90336a3f8c";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-location input");
const searchBtn = document.querySelector(".search-location button");
const weatherIcon=document.querySelector(".weather-ic"); 
    

async function checkWeather(city){
    //asynchronous function which take as a param a CITY 
    // fetch weather data from OWM API making a request  GET to the API URL .
    //The Fetch function return a promise  and teh await keyword is used to wait for the response. The response is then converted to JSON format using the /response.json()/ method
    //the weather data is stored in the 'data' variable 
    //este o functie asincrona care ia un oras ca parametru. Aceasta functie aduce date despre vreme from API furnizand apiURL si apiKey si orasul specificat. Folosim await keyword pt a  astepta raspuns si pentru a converti datele in format JSON cu metoda .json().
    //afisam datele despre vreme in consola cu scopuri de debugging. sa vedem daca avem erori

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    // const response = await fetch(apiURL +  `&appid=${apiKey}`);
    var data= await response.json();
// console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    // querySelector is used to select the desired elements based on their class names and the innerHTML property is used to set the content of these elements.
    //city name is set in an element with the class name "city" the temperature is set in an element with the class name "temp-weather ", humidity is set in an element with the class name "humidity" and the wind is set in an element with the class name "wind"
    document.querySelector(".temp-weather").innerHTML = Math.round(data.main.temp )+ " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
// codul de mai sus updateaza orasul, temp, humiditatea, vantul in anumite elemente care au  clasele de mai sus.
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="../assets/img/clouds.png";
//different weather conditions corresponds to an image . 
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
//  Based on the weather conditions obtained from the API response (data.weather[0].main), the code sets the src attribute of the weatherIcon element to the appropriate weather icon image URL
// checkWeather();
searchBtn.addEventListener("click", ()=>{
    //An event listener is added to the 'searchBtn' element, which listens for a click event. The input is then cleared by setting value to an empty string.
    checkWeather(searchBox.value);
    searchBox.value = " "; // Clear the input field
  
}); 


