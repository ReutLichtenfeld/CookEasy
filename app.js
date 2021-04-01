const express = require('express');
const cors = require('cors');

const recipeRouter = require('./routes/recipeRoutes');

const app = express();

// Global middlewares

// Implement CORS
app.use(cors());
// Access-ontroll-Allow-Origin *
app.options('*', cors());

app.use(express.json({ limit: '10kb' }));

// Routes
app.use('/api/v1/recipes', recipeRouter);

module.exports = app;