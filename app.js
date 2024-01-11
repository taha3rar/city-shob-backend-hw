import express from 'express';

import mongoConnect from './mongo/connect.js';
import { nodeModel } from './mongo/schemas.js';
import { populateChildren } from './helpers.js';
const app = express();

// allow access to all origins
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoConnect();

app.get('/nodes', async (req, res) => {
  try {
    const parentNodes = await nodeModel.find({ isParent: true });

    for (const node of parentNodes) {
      await populateChildren(node);
    }
    res.json(parentNodes);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
