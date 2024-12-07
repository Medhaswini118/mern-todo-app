import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes here...

const PORT = process.env.PORT || 5000; // Set the port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});