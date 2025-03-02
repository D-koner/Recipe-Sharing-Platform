const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/user');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the Recipe Sharing Platform API");
});

// Register Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User Registered Successfully" });
        console.log("User registration completed...");
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB connected successfully..."))
  .catch(err => console.error("DB Connection Error:", err));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
