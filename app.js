const express = require('express');
const { Pool } = require('pg');  // Import PostgreSQL client
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// PostgreSQL connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,  // Default PostgreSQL port
});

// Example query to create a table (if it doesn't exist)
pool.query(`
  CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully or already exists.');
  }
});

// Routes
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items;');
    res.render('index', { items: result.rows });
  } catch (err) {
    console.error('Error fetching topics:', err);
    res.status(500).send('Error fetching items.');
  }
});

app.post('/add', async (req, res) => {
  const itemName = req.body.name;
  try {
    await pool.query('INSERT INTO items (name) VALUES ($1);', [itemName]);
    res.redirect('/');
  } catch (err) {
    console.error('Error adding topic:', err);
    res.status(500).send('Error adding topic.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
