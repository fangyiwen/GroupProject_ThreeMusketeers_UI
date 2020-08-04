// connect to MongoDB atlas

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://tctcld:eternal1222@cluster0.twldx.mongodb.net/unescoDB?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);