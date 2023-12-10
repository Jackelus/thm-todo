
const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Creating a new task
// Retrieving a list of tasks. 
// Updating an existing task. 
// Deleting a task.
