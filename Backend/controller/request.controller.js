// controller/request.controller.js

import Request from '../model/request.model.js';

// Create a new request (handle form submission)
export const createRequest = async (req, res) => {
  try {
    const { userName, itemRequired, mobileNumber } = req.body;

    // Create a new request document using the data from the form
    const newRequest = new Request({
      userName,
      itemRequired,
      mobileNumber
    });

    // Save the request to the database
    await newRequest.save();

    // Send a response to the client
    res.status(201).json({ message: 'Request submitted successfully!' });
  } catch (error) {
    console.error('Error submitting request:', error);
    res.status(500).json({ message: 'Error submitting request. Please try again later.' });
  }
};
