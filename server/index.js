const express = require('express');
const cors = require('cors');
const app = express();
// var env = require('node-env-file');
require('custom-env').env();
const { client, models } = require('./db');
const { UserSchema } = models;

app.use(cors());
app.use(express.json());

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

run().catch(console.dir);

app.get('/register', (req, res) => {
    const { password, email } = req.body;
    res.json({requestData: {password, email}})
    console.log(UserSchema)
})

app.listen(4000);