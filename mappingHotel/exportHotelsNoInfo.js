const fs = require('fs')
const lstHotelsTraveloka = require('./hotelTraveloka.json')


function exportHotelHasAPITude (){
    const hotelsTravelokaDoNotHaveId = [];
    lstHotelsTraveloka.map(hotelTraveloka => {
        if (!hotelTraveloka.HotelbedsAccomId && !hotelTraveloka.DidaAccomId && !hotelTraveloka.ExpediaAccomId){
            hotelsTravelokaDoNotHaveId.push({
                TravelLokaId: hotelTraveloka.CanonicalId,
                HotelName: hotelTraveloka.HotelName,
                Country: hotelTraveloka.CanonicalCountry,
                City: hotelTraveloka.CanonicalCity,
                Address: hotelTraveloka.CanonicalGlobalAddress,
                Lat: hotelTraveloka.CanonicalLatitude,
                Lng: hotelTraveloka.CanonicalLongitude
            })
        }
    })
    const outPutHasNotId = 'hotels_Traveloka_has_not_id.json'
    fs.writeFile(outPutHasNotId, JSON.stringify(hotelsTravelokaDoNotHaveId), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutHasNotId}`);
        console.log(hotelsTravelokaDoNotHaveId.length);
      });
};
exportHotelHasAPITude();