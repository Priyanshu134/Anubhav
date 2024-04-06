import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import credentials from './middlewares/credentials.js';
import corsOptions from './config/corsOptions.js';

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(credentials);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
import userRouter from "./routes/auth.js"
import profileRouter from "./routes/profile.js"
import requestRouter from "./routes/request.js";
app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/request", requestRouter);

let messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { message } = req.body;
  messages.push(message);
  res.status(201).send('Message sent successfully.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
