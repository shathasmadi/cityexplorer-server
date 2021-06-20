const axios = require('axios');
require('dotenv').config();
const weatherKey = process.env.WEATHER_API_KEY;
const weatherSite = process.env.WEATHER_SITE;
const Weather = require('../Models/data.model')
// const cache = require('./cache.js');
const weatherData = {};
const dataController = (req, res) => { // callback function of what we should do with our request
    let lat = req.query.lat;
    let lon = req.query.lon;
    let weatherKey = lat + lon;
   
        if (lat && lon) {
             if (weatherData[weatherKey] !== undefined && (Date.now() - weatherData[weatherKey].time < 86400000)) {
        console.log('get from Memory');
        res.send(weatherData[weatherKey]);
    } else {
            axios.get(`${weatherSite}?key=${weatherKey}&lat=${lat}&lon=${lon}`).then(response => {
                const responseData = response.data.data.map(obj => new Weather(obj));
                weatherData[weatherKey] = responseData;
                weatherData[weatherKey].time = Date.now();
                res.json(responseData)
            }).catch(error => { res.send(error.message) });
            // res.json(data) // our endpoint function response
        }
        } else {
            res.send('please provide a valid lat and lon')
        }
    };

    module.exports = dataController;