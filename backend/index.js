const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config(); // Load environment variables from a .env file into process.env

const app = express();

app.use(express.json()); // express.json() is a built-in middleware in Express that converts the incoming JSON data in the request body into a JavaScript object, making it accessible via req.body
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  }
  
  main().catch((err) => { console.log('Error connecting to MongoDB:', err.message) });

  app.use('/todos', todoRoutes);

app.get('/',(req,res) => { 
    res.send('Welcome to the Todo Api'); 
 })

 const port = 3000;

 app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
  })