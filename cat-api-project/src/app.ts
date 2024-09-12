import express from 'express';
import mongoose from 'mongoose';
import catsRoutes from './routes/catsRoutes';
import imagesRoutes from './routes/imagesRoutes';
import usersRoutes from './routes/usersRoutes';

const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/catapi')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err: Error) => console.error('Error connecting to MongoDB', err));

app.use('/api', catsRoutes);
app.use('/api', imagesRoutes);
app.use('/api', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
