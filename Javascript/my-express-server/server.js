// const express = require('express');
// const app = express();

// app.listen(3000);

const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req, res){
    res.send("<h1>Hello!</h1>");
    // console.log(req);
});
app.get("/contact", function (rep, res) {
    res.send("Contact me at : arunava@gmail.com");
});
app.get('/about', (req, res) => {
    res.send("<h1><u>About</u></h1>Hi I am Arunava, Lonely Dumb Fuck");
})
app.listen(port,function () {
    console.log(`Server started on port : ${port}!`);
});
