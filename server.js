const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Serve files in /files/ directory for download
app.use('/files', express.static(path.join(__dirname, 'files')));

// API to list files in /files/
app.get('/api/files', (req, res) => {
  const dirPath = path.join(__dirname, 'files');
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read files" });
    }
    res.json(files);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
