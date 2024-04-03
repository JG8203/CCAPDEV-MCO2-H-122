import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    // Create a new user instance
    const user = new User({ username, password });

    // Save the user to the database
    await user.save();

    res.json({ message: 'Registration successful' });
});


app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the stored password
    if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If login is successful, respond with a success message
    res.json({ message: 'Login successful', user });
});


// Start the server
app.listen(27017, () => {
    console.log(`Server is running on port ${PORT}`);
});
