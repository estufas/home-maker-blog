const express = require('express');
const cors = require('cors');
const app = express();
// var env = require('node-env-file');
require('custom-env').env();
const { client } = require('./db');
const User = require('./db/models/User');

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

app.get('/register', async (req, res) => {
    const data = req.body;
    console.log(data);
    const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    // models.User.create(req.body);
    res.json(newUser)
})

app.listen(4000);