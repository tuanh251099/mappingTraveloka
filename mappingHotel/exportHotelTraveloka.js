const fs = require('fs')
const lstHotelsTraveloka = require('./hotelTraveloka.json')


function exportHotelHasAPITude (){
    const hotelsTravelokaHasAPITude = [];
    const hotelsTravelokaHasNotAPITude = [];
    lstHotelsTraveloka.map(hotelTraveloka => {
        if (hotelTraveloka.HotelbedsAccomId){
            hotelsTravelokaHasAPITude.push({
                TravelLokaId: hotelTraveloka.CanonicalId,
                HotelName: hotelTraveloka.HotelName,
                Address: hotelTraveloka.CanonicalGlobalAddress,
                APITudeId: hotelTraveloka.HotelbedsAccomId
            })
        } else{
            hotelsTravelokaHasNotAPITude.push({
                TravelLokaId: hotelTraveloka.CanonicalId,
                HotelName: hotelTraveloka.HotelName,
                Address: hotelTraveloka.CanonicalGlobalAddress,
                EPSId : hotelTraveloka.ExpediaAccomId
            })
        }
    })
    const outPutHasAPITude = 'hotels_Traveloka_has_APITude.json'
    const outPutHasNotAPITude = 'hotels_Traveloka_has_not_APITude.json'
    fs.writeFile(outPutHasAPITude, JSON.stringify(hotelsTravelokaHasAPITude), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutHasAPITude}`);
      });

    fs.writeFile(outPutHasNotAPITude, JSON.stringify(hotelsTravelokaHasNotAPITude), 'utf8', (err) => {
    if (err) {
        console.error('fail to save file:', err);
        return;
    }
    console.log(`Succes save file with ${outPutHasNotAPITude}`);
    });
};
exportHotelHasAPITude();