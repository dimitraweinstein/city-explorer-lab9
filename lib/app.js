const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const request = require('superagent');
const { mungeLocations, mungedWeather } = require('./munge.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async(req, res) => {
  try {
    const city = req.query.search;
    const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_KEY}&q=${city}&format=json`);
    const mungedData = mungeLocations(data.body);
    // console.log(data.body);

    res.json(mungedData);
  } catch(e) {
    
    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async(req, res) => {
  try
  {
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=Fayetteville, GA&key=${process.env.WEATHER_KEY}`);

    const data = [{
      'forecast': 'Partly cloudy until afternoon.',
      'time': 'Tuesday, June 29, 2021'
    }, {
      'forecast': 'Mostly cloudy in the morning.',
      'time': 'Wednesday, June 30, 2021'
    },
    ];

    res.json(data);

  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

// app.get('/weather', async (req, res) =>
// {
//   try
//   {
//     const { latitude, longitude } = req.query;

//     const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}key=${process.env.WEATHER_KEY}`);

//     const mungedWeatherResult = mungedWeather(response.body);
//     console.log(response.body);
//     res.json(mungedWeatherResult);
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// });

app.use(require('./middleware/error'));

module.exports = app;
