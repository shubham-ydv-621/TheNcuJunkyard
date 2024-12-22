// controller/request.controller.js
import Request from '../model/request.model.js';
import { sendEmail } from '../mailer.js';

export const createRequest = async (req, res) => {
  try {
    const { userName, itemRequired, mobileNumber, userEmail } = req.body;

    const newRequest = new Request({
      userName,
      itemRequired,
      mobileNumber
    });

    await newRequest.save();

    // Send email from user's email to your email
    sendEmail(userEmail, 'New Item Request', `User: ${userName}\nItem Required: ${itemRequired}\nMobile Number: ${mobileNumber}`);

    res.status(201).json({ message: 'Request submitted successfully!' });
  } catch (error) {
    console.error('Error submitting request:', error);
    res.status(500).json({ message: 'Error submitting request. Please try again later.' });
  }
};
