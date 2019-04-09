const request = require("request")

// request({url:url,json:true},(error, response) =>{
//     if(error){
//         console.log('Unable to connect weather service!')
//     }else if(response.body.error){
//         console.log(response.body.error);
//     }else{
//         console.log(response.body.daily.data[0].summary+ ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' % chance of rain');
//     }

// })



const forcast= (latitude,longtitude,callback) =>{
    const url  = 'https://api.darksky.net/forecast/b975a666bdef417446877b71047c9664/' + latitude + ',' + longtitude + '?units=si';
    request({url, json: true},(error,{body})=> {
        if(error){
            callback('Unable to connect weather service!',undefined);
            
        }else if (body.error){
            callback(body.error,undefined)
        }else{
            callback(undefined,body.daily.data[0].summary+ ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + ' % chance of rain')
        }
    })
    
}

module.exports = forcast;