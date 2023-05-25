const lstHotelManual = require('./hotelsTravelokaManual.json')
const lstHotelTraveloka = require('./hotelTraveloka.json')
const fs = require('fs');
function exportHotelManual(){
    const lstHotelMustManual = [];
    lstHotelManual.map(hotel => {
        if (hotel.HotelName && hotel.Country && hotel.City && hotel.Address && hotel.Lat && hotel.Lng){
            lstHotelMustManual.push({
                TravelLokaId : hotel.TravelLokaId,
                HotelName: hotel.HotelName,
                Country: hotel.Country,
                City: hotel.City,
                Address: hotel.Address,
                Lat: hotel.Lat,
                Lng: hotel.Lng
            })
        }
    })
    const outPutHasEAN = 'hotels_Traveloka_must_manual.json'
    fs.writeFile(outPutHasEAN, JSON.stringify(lstHotelMustManual), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutHasEAN}`);
        console.log(lstHotelMustManual.length)
      });
}

function filterHotelOrigin(){
    const lstHotelFilter = [];
    lstHotelTraveloka.map(hotel => {
        if (hotel.HotelName && hotel.CanonicalCountry && hotel.CanonicalCity && hotel.CanonicalGlobalAddress && hotel.CanonicalLatitude && hotel.CanonicalLongitude){
            lstHotelFilter.push({
                TravelLokaId : hotel.CanonicalId,
                HotelName: hotel.HotelName,
                Country: hotel.CanonicalCountry,
                City: hotel.CanonicalCity,
                Address: hotel.CanonicalGlobalAddress,
                Lat: hotel.CanonicalLatitude,
                Lng: hotel.CanonicalLongitude
            })
        }
    })
    const outPutFile = 'hotels_Traveloka_origin_filter.json'
    fs.writeFile(outPutFile, JSON.stringify(lstHotelFilter), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutFile}`);
        console.log(lstHotelFilter.length)
      });
}

function main(){
    //exportHotelManual()
    filterHotelOrigin()

}
main()