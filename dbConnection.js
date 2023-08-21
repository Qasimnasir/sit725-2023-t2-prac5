const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://qasimnasir33:7563918Qs@cluster0.pfei5zc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;