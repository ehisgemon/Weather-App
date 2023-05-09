// weather class
class Weather{
    constructor(city){
        this.city = city;
        this.apiKey = "03a1fee8d361d2e19b79a4215043021b";
    }

    fetchWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }

    displayWeather(data){
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      //Display UI data
      document.querySelector('.city').textContent = `Weather In ${name}`;
      document.querySelector('#icon').src = `http://openweathermap.org/img/w/${icon}.png`;
      document.querySelector('.temp').textContent = `${temp}°C`;
      document.querySelector('.description').textContent = description;
      document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
      document.querySelector('.wind').textContent = `Wind speed: ${speed}km/h`;
      document.querySelector('.weather').classList.remove('loading');
      document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`;
    }

    clearInputField(){
        document.querySelector('.search-bar').value = '';
    }

}

// Default page Load
document.addEventListener('DOMContentLoaded', function(){

    // init weather
    const weather = new Weather('denver'); 

    //fetch data
    weather.fetchWeather();

});

// Add event to  search Button
document.querySelector('.search-button').addEventListener('click', function(e){
    //Get input value (city)
    const inputValue = document.querySelector('.search-bar').value;

    // init weather
    const weather = new Weather(inputValue); 

    //fetch data
    weather.fetchWeather();

    //clear input field
    weather.clearInputField()

    e.preventDefault();
});


// Add event to Search Bar
document.querySelector('.search-bar').addEventListener('keypress', function(event){
    // Activate button on enter key
    if(event.key === 'Enter'){
        //Trigger search button
        document.querySelector('.search-button').click();
    }
});


