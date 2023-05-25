const fs = require('fs');
const _ = require('lodash');

const rawData = fs.readFileSync('hotels_Traveloka_Vietnam.json');
const data = JSON.parse(rawData);
console.log(data.length)
// const cityCounts = {};

// _.forEach(data, (element) => {
//   const City = element.City;

//   if (_.has(cityCounts, City)) {
//     cityCounts[City] += 1;
//   } else {
//     cityCounts[City] = 1;
//   }
// });

// // Tạo mảng các đối tượng {city, count}
// const cityCountArray = _.map(cityCounts, (count, City) => ({ city: City, count }));

// // Sắp xếp theo tên thành phố
// const sortedCityCountArray = _.sortBy(cityCountArray, 'city');

// // Tạo dòng header
// const header = 'City,Count\n';

// // Tạo dữ liệu CSV
// let csvData = '';

// // Thêm dòng header vào chuỗi CSV
// csvData += header;

// _.forEach(sortedCityCountArray, (cityCount) => {
//   // Bao quanh giá trị thành phố bằng dấu ngoặc kép
//   const cityValue = `"${cityCount.city}"`;

//   // Thêm dòng vào chuỗi CSV
//   csvData += `${cityValue},${cityCount.count}\n`;
// });

// // Tên tệp CSV mới
// const csvFileName = 'city_Singapore.csv';

// // Ghi dữ liệu vào tệp CSV
// fs.writeFileSync(csvFileName, csvData);

// console.log(`Dữ liệu đã được lưu vào tệp ${csvFileName}`);
