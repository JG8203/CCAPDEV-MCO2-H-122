// Import Mongoose
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // Username is required
        unique: true, // Username must be unique
    },
    password: {
        type: String,
        required: true, // Password is required
    },
});

// Create a User model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model
export default mongoose.model('User', userSchema);

