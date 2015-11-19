$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "TODAY's max temperature is " + data.daily.data[0].apparentTemperatureMax+"."
     +"  TOMORROW's max temperature is " + data.daily.data[1].apparentTemperatureMax+"."
     +"  In 2 DAYS from today, the max temperature will be " + data.daily.data[2].apparentTemperatureMax+"."
     +"  In 3 DAYS from today, the max temperature will be " + data.daily.data[3].apparentTemperatureMax+".";
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});