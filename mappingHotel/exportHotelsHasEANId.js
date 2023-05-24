const fs = require('fs')
const lstHotelsTraveloka = require('./hotelTraveloka.json')


function exportHotelHasAPITude (){
    const hotelsTravelokaHasEAN = [];
    lstHotelsTraveloka.map(hotelTraveloka => {
        if (!hotelTraveloka.HotelbedsAccomId && !hotelTraveloka.ExpediaAccomId && hotelTraveloka.DidaAccomId ){
            hotelsTravelokaHasEAN.push({
                TravelLokaId: hotelTraveloka.CanonicalId,
                HotelName: hotelTraveloka.HotelName,
                Address: hotelTraveloka.CanonicalGlobalAddress,
                DidaId: hotelTraveloka.DidaAccomId
            })
        }
    })
    const outPutHasEAN = 'hotels_Traveloka_has_Dida.json'
    fs.writeFile(outPutHasEAN, JSON.stringify(hotelsTravelokaHasEAN), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutHasEAN}`);
        console.log(hotelsTravelokaHasEAN.length)
      });
};
exportHotelHasAPITude();