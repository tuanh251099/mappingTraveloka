require("dotenv").config({ path: ".env" });
const fs = require('fs');
const {knex} = require ('./model')
const lstHotelsVN = require('./hotelsTravelokaManualVietNam.json')

async function getCityGoQuo(){
    try {
        const data = await knex ('hotels')
        .distinct('city')
        .where("country", "=", "VN")
        .select("city")
        return{
            data
        }
    } catch (error) {
        console.log(error)
    }
}

function storeFileJson(relativeHotelByName){
    const outPutFile = 'hotelRelativebyName.json' 
    fs.writeFile(outPutFile, JSON.stringify(relativeHotelByName), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutFile}`);
        console.log('length of file: ', relativeHotelByName)
      });
}

async function getRelativeHotel() {
    lstHotelsVN.map(async (hotel) => {
        let hotelName = hotel.HotelName;
        const ignoreWords = [
            "Hotel",
            "Resort",
            "House",
            "Homestay",
            "Villa",
            "Apartment",
        ];
        if (hotelName.indexOf("(") !== -1) {
            hotelName = hotelName.slice(
              hotelName.indexOf("(") + 1,
              hotelName.lastIndexOf(")")
            );
          }
        
          for (const word of ignoreWords) {
            const index = hotelName.indexOf(word);
            if (index !== -1) {
              const cloneHotelName = hotelName;
              if (index === 0) {
                hotelName = cloneHotelName.slice(word.length + 1);
              }
        
              if (index + word.length === cloneHotelName.length) {
                hotelName = cloneHotelName.slice(0, index);
              }
            }
          }
      const data = await knex('hotels')
        .where("name", "like", `%${hotelName}%`)
        .select(
            "hotel_id",
            "hotel_name",
            "address",
            "city",
            "latitude",
            "longitude"
        );
        return{
            hotelTraveloka: hotel.HotelName,
            mappings:
            data.length > 0
              ? data.map((p) => ({ ...p, supplier_code: "GoQuo"}))
              : [],
        }
    });
  }
  

async function main(){
    //const cityGoQuo = await getCityGoQuo();
    const relativeHotelByName = await getRelativeHotel()
    const saveFile = storeFileJson(relativeHotelByName);
}
main()
