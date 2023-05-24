const fs = require('fs');
const Promise = require('bluebird')
const request = Promise.promisifyAll(require('request'))
const lstHotelsTraveloka = require('./hotelsHasEANId_3.json');// need to change 

async function findMapping(EANId){ // need change when change supplier
    var options = {
        'method' : 'POST',
        'url': 'https://hotel-info.gateway.easygds.com/find',
        'headers': {
            'Content-Type': 'application/json',
            'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZW1haWwiOiJob3RlbGluZm9AZ29xdW8uY29tIiwiZXhwaXJlIjoxNjg1NDc2MTM3fQ.KuknSLXD-ShwcHwZ-0YI1WUYmbZQ8XGd2JG41gacgrg',
            'x-key': 'hotelinfo@goquo.com'
            },
            body: JSON.stringify({
            from: "EAN",
            ids: [`${EANId}`]
        })
    };
    const res = await request.postAsync(options);
    if (res.body){
        try{    
            const hotelMapping = JSON.parse(res.body);
            if (hotelMapping.data){
                const dataHotelMapping = hotelMapping.data;
                const goQuoSupplier = dataHotelMapping.find(p => p.supplier_code === "GoQuo") || "";
                return goQuoSupplier;
            }else{
                console.log("hotel does not have data")
                const goQuoSupplier = ""
                return goQuoSupplier
            }
        }catch (error){
            console.log(error)
        }
       
    } else {
        console.log('can not find mapping for hotel')
        const goQuoSupplier = ""
        return goQuoSupplier
    }
}

async function main (){
    const hotelHasGoQuo = [];
    for (let index =0 ; index < lstHotelsTraveloka.length; index++){
        const hotel = lstHotelsTraveloka[index];
        const findGoQuoId = await findMapping (hotel.EANId) // need change when change supplier
        if (findGoQuoId){
            hotelHasGoQuo.push({
                TravelokaId: hotel.TravelLokaId,
                HotelName: hotel.HotelName,
                Address: hotel.Address,
                EANId: hotel.EANId, // need change when change supplier
                GoQuoId : parseInt(findGoQuoId.supplier_hotel_ids)
            })
        }
        else {
            hotelHasGoQuo.push({
                TravelokaId: hotel.TravelLokaId,
                HotelName: hotel.HotelName,
                Address: hotel.Address,
                EANId: hotel.EANId // need change when change supplier
            })
        }
        console.log(hotelHasGoQuo.length)
    }
    const outPutFile = 'Traveloka_EAN_GoQuo_3.json' //need change path file
    fs.writeFile(outPutFile, JSON.stringify(hotelHasGoQuo), 'utf8', (err) => {
        if (err) {
          console.error('fail to save file:', err);
          return;
        }
        console.log(`Succes save file with ${outPutFile}`);
      });
}
main()