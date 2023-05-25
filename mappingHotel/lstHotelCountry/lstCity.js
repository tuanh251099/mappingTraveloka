const fs = require('fs');
const _ = require('lodash');


const rawData = fs.readFileSync('hotels_Traveloka_Philippines.json');
const data = JSON.parse(rawData);


const cityCounts = {};


_.forEach(data, (element) => {
  const City = element.City;


  if (_.has(cityCounts, City)) {
    cityCounts[City] += 1;
  } else {
    cityCounts[City] = 1;
  }
});


_.forEach(cityCounts, (count, City) => {
  console.log(`City: ${City}, Count: ${count}`);
});
