// model/request.model.js

import mongoose from 'mongoose';

// Define the schema for the request
const requestSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  itemRequired: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create a model for the request
const Request = mongoose.model('Request', requestSchema);

export default Request;
