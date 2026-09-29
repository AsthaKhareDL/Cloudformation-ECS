const express = require('express');

const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Backend!'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
