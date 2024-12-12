import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Import routes
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import requestRoute from './route/request.route.js';  // Import the request route

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define port and MongoDB URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define routes
app.use('/book', bookRoute);  // Book route
app.use('/user', userRoute);  // User route
app.use('/request', requestRoute);  // Request route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
