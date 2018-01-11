const request = require('request');
const rp =  require('request-promise');

let apiKey = 'df498aa6bd31bbd2a1c28ccfcb8e965e';

module.exports = {
  call:  async function (city, callback) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    let options ={
      method: 'GET',
      url : 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey
    }
    try{
      let response = await rp(options);
      let weather = JSON.parse(response);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      return weather;
    }catch(err){
      console.log(err.message);
    }
  }
}