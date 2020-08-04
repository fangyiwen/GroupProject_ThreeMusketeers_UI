const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://tctcld:eternal1222@cluster0.twldx.mongodb.net/unescoDB?retryWrites=true&w=majority";

const client = new MongoClient(url, { useUnifiedTopology: true });

// The database to use
const dbName = "unescoDB";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "unesco-data"
        const col = db.collection("sites");

        // Construct a document (data entries)                                                                                                                                                              
        let site1 = {
            "name": "The Great Wall",
            "description": "In c. 220 B.C., under Qin Shi Huang, sections of earlier fortifications were joined together to form a united defence system against invasions from the north. Construction continued up to the Ming dynasty, when the Great Wall became the world's largest military structure. Its historic and strategic importance is matched only by its architectural significance.",
            "coordinates": [40.41667, 116.08333]
        }
        let site2 = {
            "name": "Memphis and its Necropolis – the Pyramid Fields from Giza to Dahshur",
            "description": "The capital of the Old Kingdom of Egypt has some extraordinary funerary monuments, including rock tombs, ornate mastabas, temples and pyramids. In ancient times, the site was considered one of the Seven Wonders of the World.",
            "coordinates": [29.976480, 116.08333]
        }
        let site4 = {
            "name": "The Taj Mahal",
            "description": "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
            "coordinates": [27.173891,	78.042068]
        }
        let site3 = {
            "name": "The Colosseum",
            "description": "The Colosseum is an ancient Roman amphitheater constructed in the 80 AD (under the rule of Titus), made of stones and concrete.",
            "coordinates": [41.890251, 12.492373]
        }
  
        // let site5 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }
        // let site6 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }
        // let site7 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }
        // let site8 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }
        // let site9 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }
        // let site10 = {
        //     "name": "The Great Wall",
        //     "description": new Date(1912, 5, 23),
        //     "coordinates": [,]
        // }


        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertMany([site1, site2, site3, site4]);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }
}

run().catch(console.dir);