const express = require('express')
const bodyParser = require('body-parser')
//body-parser is an NPM package that parses incoming request bodies in a middleware before your handlers, available under the req.body property.
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname + "/bmiCalculator.html")) /*__dirname is an environment variable that tells you the absolute path of the 
directory containing the currently executing file.*/

app.use(bodyParser.urlencoded({extended:true}))

app.post('/', function (req, res) {
    let height = Number(req.body.height)
    let weight = Number(req.body.weight)
    console.log(req.body)
    let result = bmiCalculator(weight, height)
    console.log(result)
    res.send('Result of BMI is : ' + result)
})
/*
app.use(bp.json()) looks at requests where the 
Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body. 
app.use(bodyParser.urlencoded({extended: true}) does the same for URL-encoded requests. 
the extended: true precises that the req.body object will contain values of any type instead of just strings.
*/
function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`))