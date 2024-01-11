import express from 'express';

import mongoConnect from './mongo/connect.js';

const app = express();

// allow access to all origins
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoConnect();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
