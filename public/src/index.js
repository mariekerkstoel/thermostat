
$(document).ready(function() {
  var thermostat = new Thermostat();

  update = function() { $("#displayTemperature").html(thermostat.temperature) }
  update()

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
    if(thermostat.powerSavingMode){
    $('#PSM').css('background-color', 'green');
  } else {
    $('#PSM').css('background-color', 'red');
  }
  update();
  });






});
