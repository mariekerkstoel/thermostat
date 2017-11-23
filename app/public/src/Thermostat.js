const temperatureStart = 20;
const minTemperature = 10;
const maxSaving = 25;
const maxTemp = 32;
const lowUsage = 18;
const mediumUsage = 25;
const temp = 1;

function Thermostat(){
  this.temperature = temperatureStart;
  this.minTemperature = minTemperature;
  this.powerSavingMode = true;
};

Thermostat.prototype = {
  temperatureUp: function() {
    if (this.powerSavingMode === true) {
      if (this.temperature + temp > maxSaving){
        return 'Max temp in power saving mode is 25 degrees'
      }
    return this.temperature += temp;
    } else {
        if (this.temperature + temp > maxTemp){
          return 'Max temp is 32 degrees';
        }
     return this.temperature += temp;
    }
  },

  temperatureDown: function(){
    if((this.temperature - temp) < minTemperature){
      return "Min temperature is 10 degrees";
    }
    return this.temperature -= temp;
  },

  reset: function(){
    return this.temperature = temperatureStart;
  },

  energyUsage: function(){
    if(this.temperature < lowUsage) {
      return 'Low usage';
    } else if(this.temperature >= mediumUsage) {
        return 'High usage';
    } else {
      return 'Medium usage';
    }
  },

  switchPowerSavingMode: function(){
    this.powerSavingMode = !this.powerSavingMode
    if (this.powerSavingMode) {
      this.temperature = Math.min(this.temperature, maxSaving);
    };
  }
};
