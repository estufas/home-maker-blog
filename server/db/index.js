const models = require('./models');
var env = require('node-env-file');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://hillcomus:${process.env.MONGOPWD}@cluster0.wvpmedq.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


module.exports = {
    models,
    client
};