const fs = require('fs')
const lstHotelNoInfo = require('./hotels_Traveloka_has_not_id.json')
const lstHotelInNeo4j = require('./GoQuo_Traveloka.json')

function main(){
    const lstHotelsMapped = []
    const lstHotelsNotMapped =[]
    for(let index =0; index < lstHotelInNeo4j.length; index++){
        const hotel = lstHotelInNeo4j[index]
        const travelokaIdNeo4j = parseInt (hotel.supplier_hotel_ids)
        const hotelsNoInfosMapped = lstHotelNoInfo.find( p => p.TravelLokaId ===travelokaIdNeo4j)
        if (hotelsNoInfosMapped){
            lstHotelsMapped.push({
                TravelokaId : hotelsNoInfosMapped.TravelLokaId,
                HotelName: hotelsNoInfosMapped.HotelName,
                Country: hotelsNoInfosMapped.Country,
                Address: hotelsNoInfosMapped.Address,
                Lat: hotelsNoInfosMapped.Lat,
                Lng: hotelsNoInfosMapped.Lng,
                GoQuoId: parseInt (hotel.hotel_id)
            })
            console.log(index);
        }
        else{
            lstHotelsNotMapped.push({
                TravelokaId : hotelsNoInfosMapped.TravelLokaId,
                HotelName: hotelsNoInfosMapped.HotelName,
                Country: hotelsNoInfosMapped.Country,
                Address: hotelsNoInfosMapped.Address,
                Lat: hotelsNoInfosMapped.Lat,
                Lng: hotelsNoInfosMapped.Lng,
            })
        }
    }
    const outPutFileMapped = 'hotels_NoInfo_Mapped.json' 
    fs.writeFile(outPutFileMapped, JSON.stringify(lstHotelsMapped), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutFileMapped}`);
        console.log('length of file: ', lstHotelsMapped.length)
      });
}


main()