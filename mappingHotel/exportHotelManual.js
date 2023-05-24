const fs = require('fs');

const lstHotelsMapped = require('./hotels_NoInfo_Mapped.json');
const lstHotelsNoInfor = require('./hotels_Traveloka_has_not_id.json');
const lstHotelManual = require('./hotelsTravelokaManual.json');
console.log(lstHotelManual.length)
// const mismatchedHotels = lstHotelsNoInfor.filter(hotelNoInfo => {
//   return !lstHotelsMapped.some(hotelMapped => hotelMapped.TravelokaId === hotelNoInfo.TravelokaId);
// });

// fs.writeFile('hotelsTravelokaManual.json', JSON.stringify(mismatchedHotels), err => {
//   if (err) {
//     console.error('faile to save file:', err);
//   } else {
//     console.log('succes to save file');
//   }
// });
