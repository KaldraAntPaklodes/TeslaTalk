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
    const id = req.params.id;
    const con = await client.connect();
    const result = await con
      .db('teslatalk')
      .collection('topics')
      .deleteOne({ id: parseInt(id) }); // Delete the topic with the provided id
    await con.close();

    if (result.deletedCount === 1) {
      res.send({ message: 'Topic deleted successfully' });
    } else {
      res.status(404).send('Topic not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/topics/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const con = await client.connect();
    const data = await con
      .db("teslatalk")
      .collection('topics')
      .findOne({ id: parseInt(id) }); // Fetch the topic with the provided id
    await con.close();

    if (data) {
      res.send(data);
    } else {
      res.status(404).send('Topic not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/topics/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTopic = req.body;
    const con = await client.connect();
    const result = await con
      .db('teslatalk')
      .collection('topics')
      .updateOne({ id: parseInt(id) }, { $set: updatedTopic }); // Update the topic with the provided id
    await con.close();

    if (result.matchedCount === 1) {
      res.send({ message: 'Topic updated successfully' });
    } else {
      res.status(404).send('Topic not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

  app.delete('/topics/:id/answers/:id', async (req, res)=> {
    try {
      const id = req.params.id;
      const con = await client.connect();
      const result = await con
        .db('teslatalk')
        .collection('answers')
        .deleteOne({ id: parseInt(id) }); // Delete the topic with the provided id
      await con.close();
  
      if (result.deletedCount === 1) {
        res.send({ message: 'Answer deleted successfully' });
      } else {
        res.status(404).send('Answer not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  
  app.get('/topics/:id/answers', async (req, res) => {
    try {
      const id = req.params.id;
      const con = await client.connect();
      const data = await con
        .db("teslatalk")
        .collection('answers')
        .findOne({ id: parseInt(id) }); // Fetch the topic with the provided id
      await con.close();
  
      if (data) {
        res.send(data);
      } else {
        res.status(404).send('Answers not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.put('/topics/:id/answers/edit/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const updatedTopic = req.body;
      const con = await client.connect();
      const result = await con
        .db('teslatalk')
        .collection('answers')
        .updateOne({ id: parseInt(id) }, { $set: updatedAnswer }); // Update the answer with the provided id
      await con.close();
  
      if (result.matchedCount === 1) {
        res.send({ message: 'Answer updated successfully' });
      } else {
        res.status(404).send('Answer not found');
      }
    } catch (error) {
      res.status(500).send(error);
    }
});




app.listen(port, () => {
  console.log(`Server is listening on the ${port} port`);
});
