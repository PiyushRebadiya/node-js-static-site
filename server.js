const express = require('express');
const app = express();
const port = 9000;

// Static JSON data
const jsonData = {
  message: 'Hello, World!',
  items: [
    { id: 1, name: 'Item 1' },
  ]
};

// Define a route to serve the JSON data
app.get('/', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
