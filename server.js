const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'frontend')));

// Simple API placeholder
app.get('/api/echo', (req, res) => {
  res.json({message: req.query.msg || 'Hello from FieldPro'});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`FieldPro server running on ${PORT}`));
