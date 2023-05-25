const fs = require('fs');

//const lstHotelsMapped = require('./hotels_NoInfo_Mapped.json');
//const lstHotelsNoInfor = require('./hotels_Traveloka_has_not_id.json');
const lstHotelManual = require('./hotels_Traveloka_must_manual.json');

const lstHotelManualVietNam = [];
lstHotelManual.map( p =>{
    if(p.Country === "Vietnam"){
        lstHotelManualVietNam.push({
            ...p
        })
    }
})
// const mismatchedHotels = lstHotelsNoInfor.filter(hotelNoInfo => {
//   return !lstHotelsMapped.some(hotelMapped => hotelMapped.TravelokaId === hotelNoInfo.TravelokaId);
// });

fs.writeFile('hotelsTravelokaManualVietNam.json', JSON.stringify(lstHotelManualVietNam), err => {
  if (err) {
    console.error('faile to save file:', err);
  } else {
    console.log('succes to save file');
  }
});
