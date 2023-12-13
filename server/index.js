import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import connectDB from './config/db.config.js';
import router from './routes/index.js';
import cors from 'cors'; // Import the cors middleware
const port = process.env.PORT;
const app = express();


connectDB();
app.use(cors());
app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); 
app.use('/api', router);
app.use((_, res) => {
  res.send({
    message: 'Not found!'
  });
});

try {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
} catch (error) {
  console.error(`Failed to start server: ${error}`);
}

// Creating a new task
// Retrieving a list of tasks. 
// Updating an existing task. 
// Deleting a task.
