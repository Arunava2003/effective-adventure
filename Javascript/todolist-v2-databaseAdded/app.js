//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const _ = require("lodash");
const date = require(__dirname+"/date")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(process.env.PORT || port, () => console.log(`App Started...............listening!`))
//!------------------------------------------------------------CONNECT-TO-MONGODB----------------------------------------------------------------

mongoose.connect("mongodb+srv://admin-arunava:AnXgrJ7vAMRtWcWA@cluster0.snju3.mongodb.net/todolistDB"); 

const itemsSchema = new Schema({ //* schema for primary list
  //* STRUCTURE
  name: String
});

//* STRUCTURE COMPILED TO TABLE
const Item = mongoose.model("Item", itemsSchema); //* table for primary list

//* DEFAULT DATA
const item1 = new Item({
  name: "Welcome to your todolist!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];
//*-----------------------------------------

const listSchema = { //* schema for custom list
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema); //* table for custom list
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!---------------------------------------------------------------RENDER-ITEMS-ON-HOMEPAGE-----------------------------------------------------

app.get("/", function(req, res) {
  const day = date.getDate()
  Item.find({}, function(err, foundItems){

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err){ //* insert default items if 0 items present
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully savevd default items to DB.");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: day, newListItems: foundItems});
    }
  });

});
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!--------------------------------------------------------------------CUSTOM-LIST-------------------------------------------------------------

app.get("/:customListName", function(req, res){
  const customListName = _.capitalize(req.params.customListName); 
  //*                         ^ FIRST LETTER WILL BE CAPITAL 

  List.findOne({name: customListName}, function(err, foundList){
    if (!err){
      if (!foundList){
        //*Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        //*Show an existing list

        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });



});
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!-------------------------------------------SAVE-NEW-ITEMS-IN-HOMEPAGE-OR-CUSTOMLIST-SPECIFIED-BY-USER---------------------------------------

app.post("/", function(req, res){
  const day = date.getDate();
  
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === day){
    item.save();
    res.redirect("/"); //* TAKES TO PRIMARY ITEMS PAGE AFTER SAVING AN ITEM IN PRIMARY/HOME PAGE
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName); //* TAKES TO CUSTOMLIST ITEMS PAGE AFTER SAVING AN ITEM IN ANY CUSTOMLIST
    });
  }
});
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!-------------------------------------------DELETE-ITEMS-IN-HOMEPAGE-OR-CUSTOMLIST-CHECKED-BY-USER-------------------------------------------
app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err){
      if (!err) {
        console.log("Successfully deleted checked item.");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if (!err){
        res.redirect("/" + listName);
      }
    });
  }
});
//!--------------------------------------------------------------------------------------------------------------------------------------------


app.get("/about", function(req, res){
  res.render("about");
});

// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });


// AnXgrJ7vAMRtWcWA