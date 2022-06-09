const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();

        const database = client.db('shopDB');
        const products = database.collection('products');

        // Query for a product that has the _id: 2
        const query = { _id: 2 };
        const product = await products.findOne(query);

        console.log(product); // output on console
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir); 