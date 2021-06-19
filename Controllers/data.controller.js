const axios = require('axios');
require('dotenv').config();
const weatherKey= process.env.WEATHER_API_KEY;
const weatherSite = process.env.WEATHER_SITE;
const Weather=require('../Models/data.model')
// const cache = require('./cache.js');

const dataController=(req, res)=> { // callback function of what we should do with our request
    let lat= req.query.lat;
    let lon = req.query.lon;
    
    if (lat && lon) {
    axios.get(`${weatherSite}?key=${weatherKey}&lat=${lat}&lon=${lon}`).then(response=>{
        const responseData=response.data.data.map(obj => new Weather(obj));
        res.json(responseData)
    }).catch(error=>{res.send(error.message)});
    // res.json(data) // our endpoint function response
}else {
    res.send('please provide a valid lat and lon')
}
};

module.exports=dataController;