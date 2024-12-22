// route/request.route.js
import express from 'express';
import { createRequest } from '../controller/request.controller.js';

const router = express.Router();

// POST request to submit a request
router.post('/', createRequest);

export default router;
