const express = require('express');
const bodyParser = require('body-parser');
const api = require('./index');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.render('index');
})
  .post('/', async (req, res, next) => {
    //console.log(req.body.city);
    let weather = await api.call(req.body.city);
    console.log(weather);
    //weather = JSON.parse(weather.response.body);
    console.log(weather.main);
    if (weather.main == undefined) {
      res.render('index', { weather: null, error: 'Error, please try again' });
    } else {
      let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      res.render('index', { weather: weatherText, error: null });
    }
  });

app.listen(3001, () => {
  console.log('Example app listening on port 3001');
});