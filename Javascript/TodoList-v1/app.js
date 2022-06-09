const express = require('express')
const bodyParser = require('body-parser');
const date = require(__dirname+"/date.js"); // ** local module for date

const app = express()
app.set("view engine", "ejs");

const port = 3000;
const items = ["Eat", "Sleep", "Code", "Repeat"];
const workItems = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

    const day = date.getDate();

    res.render("list", { 
        ListTitle: day, 
        NewListItems: items
    });
});

app.post('/', (req, res) => {
    
    const item = req.body.newItem;
    
    if (req.body.submit === "Work List ") {
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req,res) => {
    res.render("list", {
        ListTitle: "Work List",
        NewListItems: workItems
    });
});
app.post('/work', function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get('/about', (req, res) => {
    res.render("about");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
