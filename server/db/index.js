const models = require('./models');
var env = require('node-env-file');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const mongoose = require("mongoose");

const uri = `mongodb+srv://hillcomus:${process.env.MONGOPWD}@cluster0.wvpmedq.mongodb.net/?retryWrites=true&w=majority`;



module.exports = {
    uri,
    // client
};