require('dotenv').config();
const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', todoRoutes);

// Chạy server
app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});