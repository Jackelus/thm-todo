import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import connectDB from './config/db.config.js';
import router from './routes/index.js';

const port = process.env.PORT;
const app = express();

// Connect to the database
connectDB();


app.use('/api', router);
app.use((_, res) => {
  res.send({
    message: 'Not found!'
  });
});

// Print available routes
const availableRoutes = app._router.stack
  .filter((layer) => layer.route)
  .map((layer) => {
    return {
      path: layer.route.path,
      methods: Object.keys(layer.route.methods)
    };
  });
console.table(availableRoutes);

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
