const express = require('express');
const mongoDB = require('./db');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  // You can also configure other CORS options if needed
  // For example, you can set allowed headers and methods:
  // headers: ['Content-Type', 'Authorization'],
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require("./Routes/CreateTruck"));
app.use('/api', require("./Routes/CreateTrip"));
app.get('', (req, res) => {
  res.send("I am the backend part");
});



app.listen(8000, () => {
  console.log("Port is 3000");
}); 