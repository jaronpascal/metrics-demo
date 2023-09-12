const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

// Connect to SQLite database (or create a new one if it doesn't exist)
const db = new sqlite3.Database('mydatabase.db');

// Middleware to parse JSON in request body
app.use(express.json());

// Route to get a list of items from the SQLite database
app.get('/api/items', (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Route to get a single item by ID from the SQLite database
app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id;

  db.get('SELECT * FROM items WHERE id = ?', [itemId], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!row) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.json(row);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
