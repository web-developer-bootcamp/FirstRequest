var request = require('request')
var url = 'https://gist.githubusercontent.com/VerizonMediaOwner/a4f27c0c04358b343f4a2308ea903cb8/raw/917ca865813d504796ccae1d1643584d526473de/weather_ydn_js.json';

console.log('Sunset in Sunnyvale is at...')
request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body)
        console.log(parsedData['current_observation']['astronomy']['sunset'])
    } else {
        console.log('SOMETHING WENT WRONG!')
        console.log(error)
    }
})