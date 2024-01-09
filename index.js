const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const connectionString = process.env.MONGODB_URI;
const connectToDatabase = async () => {
    try {
      await mongoose.connect(connectionString);
      console.log('Connected to MongoDB');
  
      // Define and perform additional operations here
  
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };

connectToDatabase();

const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const ExampleModel = mongoose.model('Example', exampleSchema);

const exampleDocument = new ExampleModel({
  name: 'John Doe',
  age: 25,
});

exampleDocument.save()
  .then(savedDocument => {
    console.log('Document saved:', savedDocument);
  })
  .catch(error => {
    console.error('Error saving document:', error);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
