const http = require('http');
const api = require('./api.json');

const print = require("./print.js");


function get(query) {
  const request = http.get(`http://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
    let body = "";
    // Read data
    response.on('data', data => {
      body += data;
    });
    response.on('end', () => {
      // console.log(body);
      // Parse data
      const conditions = JSON.parse(body);
      // Print data
      let place = conditions.current_observation;
      print(place.display_location.full, place.feelslike_f, place.weather.toLowerCase());
    });
  });
}

module.exports.get = get;
