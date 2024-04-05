import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'; // Update the import path
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt'; // Correct import statement

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

// Secret key used to sign JWT tokens
const secretKey = process.env.JWT_SECRET || 'your_secret_key'; // Use environment variable or fallback value

// Middleware to extract user ID from JWT
const getUserId = expressJwt({
  secret: secretKey,
  algorithms: ['HS256'],
  userProperty: 'user',
});

// Middleware to verify JWT and extract user ID
const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded; // Set the user object in the request
    next();
  });
};

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://dpriyanshu123456:dTBSyoYgt0W3hdTk@cluster0.aoz6ri5.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes); // Assuming authRoutes handles authentication

// Example profile route with authentication middleware
app.get('/api/profile', authenticateUser, getUserId, (req, res) => {
  const userId = req.user.user; // Extracted user ID from JWT

  // Use userId to fetch user data from MongoDB and send the response
  // Example: User.findById(userId).then(user => res.json(user));
});

// Example unprotected route
app.get('/api/unprotected', (req, res) => {
  res.send('This is an unprotected route.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});