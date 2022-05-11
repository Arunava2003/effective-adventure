const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res) {  
    res.sendFile(__dirname+"/index.html") 
})

app.post('/', function (req, res) { // GETTING BROWSER REQUEST OR REQUEST BY USER
    const query = req.body.cityName
    const apiKey = "32f5c2500860ff9eb89824308d4b98ef"
    const unit = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`
    //           |       endpoint                      | path  |                            parameters                               |
    https.get(url, function (resp) {  // GETTING API DATA
    
        // console.log(resp.statusCode);
    
        resp.on("data", function (data) {  // COLLECTING API DATA
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const feels_like = weatherData.main.feels_like
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`


            // res.write() can be used multiple times unlike res.send() which can be only once
            // SENDING API DATA
            res.send(`<h1>Temperature in ${query} : ${temp} Celsius.</h1><br> 
            <p> Feels like : ${feels_like} Celsius</p>.<br>
            <p> Weather Description : ${weatherDescription}</p><br>
            <span><img src="${iconLink}" alt="weather icon"></span>`)
        })
    })
})

app.listen(port, () => console.log(`Weather app listening on port ${port}!`))




