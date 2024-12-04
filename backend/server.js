const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // ควรมีเพียงครั้งเดียว

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ตั้งค่าการเชื่อมต่อกับฐานข้อมูล
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'inventory_management',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database.');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Request Body:', req.body);
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    db.query(query, [username, password], (err, results) => {
        console.log('Results:', results);
        if (err) {
            res.status(500).send({ error: err.message });
        } else if (results.length > 0) {
            res.status(200).send({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    });
});

app.get('/test-db', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Database query failed: ' + err.message);
        } else {
            res.status(200).json(results);
        }
    });
});



const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
