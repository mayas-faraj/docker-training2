const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from your Node.js API in a container!');
});

// Add your additional API endpoints here, replacing the example below:
app.post('/data', (req, res) => {
  const data = req.body;
  if (data) {
    // Process data here (replace with your specific logic)
    const processedData = data.value * 2;  // Example processing
    res.json({ processedData });
  } else {
    res.status(400).send('No data provided in request body');
  }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
