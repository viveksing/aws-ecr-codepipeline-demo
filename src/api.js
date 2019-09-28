const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/health', (req, res) => {
  res.send('The API v10 is healthy, thanks for checking!\n');
});

app.listen(PORT, HOST);
console.log(`Running API Server on port: ${PORT}`);
