const request = require('request');
const rp =  require('request-promise');

let apiKey = 'df498aa6bd31bbd2a1c28ccfcb8e965e';

module.exports = {
  call:  async function (city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    let options ={
      method: 'GET',
      url : url
    }
    try{
      let response = await rp(options);
      let weather = JSON.parse(response);
      return weather;
    }catch(err){
      console.log(err.message);
      return err;
    }
  }
}