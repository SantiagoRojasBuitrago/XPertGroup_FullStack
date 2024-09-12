"use strict";
const express = require('express');
const mongoose = require('mongoose');
const catsRoutes = require('./routes/catsRoutes');
const imagesRoutes = require('./routes/imagesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/catapi')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB', err));
app.use('/api', catsRoutes);
app.use('/api', imagesRoutes);
app.use('/api', usersRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
