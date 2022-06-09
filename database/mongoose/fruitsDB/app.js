const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});
//!                                              ^ name of the db to connect with or create

//*-------------------------------------------------------fruits collection below----------------------------------------------------------------

        const fruitsDBSchema = new mongoose.Schema({
            //! Structure or Schema
            name: { 
                //! validate string
                type: String,
                required: [true, "please check your data entry, no name specified!"]
            },
            rating: {
                //! validate number
                type: Number,
                min: 1,
                max: 10
            },
            review: String
        });

        //* compile schema to model
        const Fruit = mongoose.model("Fruit", fruitsDBSchema);

        // create document
        const fruit = new Fruit ({
            name: "Apple",
            rating: 7,
            review: "Pretty solid as a fruit."
        });

        //! save document
        //! .save() it saves every document also the same documents again and again , it can be commented out for preventing saving of same doc.
        // fruit.save().then(() => console.log('Done!'));

//*------------------------------------------------------------person collection below----------------------------------------------------------

        const personsDBSchema = new mongoose.Schema({
            // Structure
            name: String,
            age: Number,
            favouriteFruit: fruitsDBSchema //* creating relation with other model by entering schema name    
        });

        // compile schema to model
        const Person = mongoose.model("Person", personsDBSchema);

        const pineapple = new Fruit({
            name: "Pineapple",
            rating: 9,
            review: "Great fruit."
        });

        // create document person
        const person = new Person ({
            name: "Amy",
            age: 12,
            favouriteFruit: pineapple //* embeding document of other model
        });

        // person.save().then(() => console.log('Person Done!'));
//*---------------------------------------------------------------------------------------------------------------------------------------------

//*-------------------------------------------------inserting many documents in fruits collection----------------------------------------------
        const fruitArr = [
            {
            name: "Orange",
            rating: 6,
            review: "not sour not sweet."
            },
            {
            name: "Litchi",
            rating: 8,
            review: "Juicy."
            },
            {
            name: "Banana",
            rating: 8,
            review: "Good for digestion"
            },
        ];

        //! commenting out .insertMany() to prevent rewrite of data

        // Fruit.insertMany(fruitArr, function (err) { 
        //     if (err) {
        //         console.log(err);
        //     }else{
        //         console.log("Successfully saved all fruits");
        //     }
        //     });

        // const mango = new Fruit ({
        //     name: "Mango",
        //     rating: 10,
        //     review: "Fresh And Juicy."
        // });
        // mango.save(function (err, fruit) { //! insert single document
        //     if (err) return console.error(err);
        //     console.log(fruit.name + " saved to fruits collection.");
        //     mongoose.connection.close();
        //     });
//*------------------------------------------------Reading a entire collection/only names in collection-----------------------------------------

// Fruit.find(function (err, fruits) { 
//         if (err) {
//             console.log(err);
//         } else {
//             // console.log(fruits);
//             fruits.forEach((fruit) => {
//                 console.log(fruit.name);
//             });
//     }
//     });  
//*----------------------------------------------------------updating single document----------------------------------------------------------
    // const kiwi = new Fruit({
    //     name: "Kiwi",
    //     rating: 8,
    //     review: "sweet smell."
    // });

    // kiwi.save().then(() => console.log('kiwi Done!'));

    // Person.updateOne({_id: "6290e79a28a0918520d4c8d3"}, {favouriteFruit: kiwi}, function (err) { 
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log("Successfully updated!!");

    //         }
    //     });
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*------------------------------------------------------------delete one document-------------------------------------------------------------
        // Person.deleteOne({name: "Amy"}, function (err) { 
        //     if (err) {
        //         console.log(err);
        //     }  else {
        //         mongoose.connection.close();  //! closing connection
        //         console.log("Successfully Deleted!!");
        //     }
        // });
//*---------------------------------------------------------delete many document in Person collection-------------------------------------------
        // Person.deleteMany({name: "Jhon"}, function (err) { 
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         mongoose.connection.close();  //! closing connection
        //         console.log("Deleted all documents in Person Database");
        //     }
        // });
//*--------------------------------------------------------------------------------------------------------------------------------------------

