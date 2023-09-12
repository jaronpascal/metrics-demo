const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database (or open an existing one)
const db = new sqlite3.Database('mydatabase.db');

// Create a table
db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
});

// Insert data
db.serialize(() => {
  const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
  stmt.run(1, 'Alice');
  stmt.run(2, 'Bob');
  stmt.finalize();
});

// Retrieve data
db.serialize((fieldValue) => {
  const value =  10 / fieldValue;
  db.each("SELECT id, name FROM users WHERE Page = '" & value & "';", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id, row.name);
  });
});

// Close the database when done
db.close();
