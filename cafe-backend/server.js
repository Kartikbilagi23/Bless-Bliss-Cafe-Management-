const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const menuRoutes = require('./routes/menu');
const reviewRoutes = require('./routes/review');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/AuthRoutes');
const contactRoutes = require('./routes/contact');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/cafe')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/orders', orderRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
