import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
// index.js or server.js

dotenv.config();


// Import routes
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import requestRoute from './route/request.route.js';  // Import the request route



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define port and MongoDB URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Define routes
app.use('/book', bookRoute);  // Book route
app.use('/user', userRoute);  // User route
app.use('/request', requestRoute);  // Request route

//deployment
if(process.env.NODE_ENV === "production"){
  const dirpath =path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirpath,"Frontend","dist","index.html"));
  })
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
