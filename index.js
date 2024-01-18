const apiKey = "e0ad3a8cf9137d81e457f3e60d8e34b2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbtn = document.querySelector(".search button");
const searchbox = document.querySelector(".search input" );
const icon = document.querySelector(".weather-icon");

async function getData(city){
     const response= await fetch(apiUrl+ city + `&appid=${apiKey}`);
     const data = await response.json();
     console.log(data);
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
     document.querySelector(".humidty").innerHTML = data.main.humidity + "%";

     if(data.weather[0].main=="Clouds")
     {
         icon.src = "./images/clouds.png"; 
     }else if(data.weather[0].main=="Clear")
     {
          icon.src = "./images/clear.png"; 

     }
     else if(data.weather[0].main=="Rain")
     {
          icon.src = "./images/rain.png"; 
     }
     else if(data.weather[0].main=="Drizzle")
     {
          icon.src = ".//images/drizzle.png"; 
     }
     else if(data.weather[0].main=="Mist")
     {
          icon.src = ".//images/mist.png"; 
     }
     else if(data.weather[0].main=="Snow")
     {
          icon.src = ".//images/snow.png"; 
     }
}


searchbtn.addEventListener("click", ()=>{
     getData(searchbox.value);
});



