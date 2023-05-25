const lstHotelTraveloka = require('./hotels_Traveloka_origin_filter.json')
const fs = require('fs')

// const lstCountry = [
//     {"Country" : 'Indonesia'},
//     {"Country" : 'Malaysia'},
//     {"Country" : 'Philippines'},
//     {"Country" : 'Singapore'},
//     {"Country" : 'Thailand'},
//     {"Country" : 'Vietnam'}]

function main(){
    const lstHotelCountry= []
    lstHotelTraveloka.map(p => {
        if (p.Country === "Vietnam"){
            lstHotelCountry.push({
                ...p
            })
        }
    })
    const outPutFile = 'hotels_Traveloka_Vietnam.json' 
    fs.writeFile(outPutFile, JSON.stringify(lstHotelCountry), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutFile}`);
        console.log('length of file: ', lstHotelCountry.length)
      });
}
main()