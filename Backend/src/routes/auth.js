import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

// Define your routes here
router.post('/register', async (req, res) => {
    // Handle user registration
});

router.post('/login', async (req, res) => {
    // Handle user login
});

export default router;
