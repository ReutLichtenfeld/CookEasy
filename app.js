const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const recipeRouter = require('./routes/recipeRoutes');

const app = express();

// Global middlewares

// Implement CORS
app.use(cors());
// Access-ontroll-Allow-Origin *
app.options('*', cors());

app.use(express.json({ limit: '10kb' }));

app.use(compression());

// Routes
app.use('/api/v1/recipes', recipeRouter);

if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;