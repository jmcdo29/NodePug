const request = require('request');
const rp =  require('request-promise');

let apiKey = 'df498aa6bd31bbd2a1c28ccfcb8e965e';

module.exports = {
  call:  async function (city, callback) {
    console.log(city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    console.log(url);
    let options ={
      method: 'GET',
      url : 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey
    }
    try{
      let response = await rp(options);
      let weather = JSON.parse(response);
      console.log('Weather in index.js');
      console.log(weather);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      return weather;
    }catch(err){
      console.log(err.message);
    }
  }
}