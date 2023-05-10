// Default page 
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


