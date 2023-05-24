const lstHotelManual = require('./hotelsTravelokaManual.json')
const fs = require('fs');
function main(){
    const lstHotelMustManual = [];
    lstHotelManual.map(hotel => {
        if (hotel.HotelName && hotel.Country && hotel.City && hotel.Address && hotel.Lat && hotel.Lng){
            lstHotelMustManual.push({
                TravelokaId : hotel.TravelokaId,
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
main()