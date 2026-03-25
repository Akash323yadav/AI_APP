const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const aiRoutes = require('./routes/aiRoutes');

// --- Setup ---
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Core API Routes ---
app.use('/api', aiRoutes);

// --- Server Startup ---
app.listen(PORT, () => {
    console.log(`AI-GLOW Server is running on port ${PORT}`);
});
