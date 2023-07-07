const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 8080;

const URI = process.env.DB_CONNECTION_STRING;

const app = express();

app.use(express.json());
app.use(cors());

const client = new MongoClient(URI);

app.get('/users', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db('teslatalk')
      .collection('users')
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/topics', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db('teslatalk')
      .collection('topics')
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const con = await client.connect();
    const data = await con
      .db('teslatalk')
      .collection('users')
      .insertOne(user);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/topics', async (req, res) => {
  try {
    const topic = req.body;
    const con = await client.connect();
    const data = await con
      .db('teslatalk')
      .collection('topics')
      .insertOne(topic);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/topics/:id', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("teslatalk").collection('topics').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/topics/:id', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("teslatalk").collection('topics').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(port, () => {
  console.log(`Server is listening on the ${port} port`);
});
