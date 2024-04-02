import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'; // Update the import path
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(`mongodb+srv://dpriyanshu123456:dTBSyoYgt0W3hdTk@cluster0.aoz6ri5.mongodb.net`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes); // Use the imported authRoutes


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




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
