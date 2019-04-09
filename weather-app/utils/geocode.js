const request = require("request");

// request({url:geocodeurl,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect Location service!')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find Location')
//     }else{
//       const latitude = response.body.features[0].center[1];
//       const longtitude = response.body.features[0].center[0];
//       console.log(latitude,longtitude)  
        
//     }
    
// })


const geocode=(address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicmFjaGhhbjkiLCJhIjoiY2p0enpncGRlM2ExaDQzbXNwbXc4dTkxNyJ9.9heFlrN3tc882sNMtw8usQ';
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect Location service!',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find Location',undefined)
        }else{
            callback(undefined,{
                latitude : body.features[0].center[1],
                longtitude : body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;