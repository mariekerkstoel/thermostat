
$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemp() {
    $("#displayTemperature").html(thermostat.temperature);
  }

  function updateColour() {
    $('#PSM').css('background-color', thermostat.powerSavingMode ? 'green' : 'red');
  }

  function getWeather(city = 'London') {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key, function(weather){
      $('#weather').html((weather.main.temp - 273).toFixed(2) + ' &degC');
    });
  }

  function update() {
    updateTemp()
    updateColour()
  }

  $.ajaxSetup({
    statusCode : {
      404: function(){
        alert("That's not a valid city ...")
      }
    }
  });

  var key = '24e590e20896f42b92a65735952091b4'

  update()
  getWeather()

  $('#submitcity').click(function(){
    getWeather($('#inputcity').val());
  });

  $('#tempUp').click(function(){
    thermostat.temperatureUp();
    update();
  });
  $('#reset').click(function() {
    thermostat.reset();
    update();
  });

  $('#tempDown').click(function(){
    thermostat.temperatureDown();
    update();
  });

  $('#PSM').click(function(clickEvent) {
    thermostat.switchPowerSavingMode();
    update();
  });

});
