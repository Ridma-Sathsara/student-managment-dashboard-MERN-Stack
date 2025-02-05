import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js';  // Database connection file
import studentRoutes from './routes/student.route.js';  // Student routes

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Database connection
connectDB();

// Middleware setup
app.use(express.json());  // To parse incoming JSON request bodies
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL
  credentials: true,  // Allow credentials like cookies to be sent
}));
app.use(cookieParser());  // To parse cookies

// Routes
app.use('/api/students', studentRoutes);  // Mounting student routes

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
