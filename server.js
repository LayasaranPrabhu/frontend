const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT

app.use(express.json());

const uri = process.env.DATABASE_URL;

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
