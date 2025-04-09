const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('../config/ConnectDB');
const authRoutes = require('../routes/auth');
const locationRoutes = require('../routes/location');
const contactsRoutes = require('../routes/contacts');
const servicesRoutes = require('../routes/services');
const notificationsRoutes = require('../routes/notifications');
const errorMiddleware = require('../middleware/errorMiddleware');
const serverless = require('serverless-http');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/notifications', notificationsRoutes);

// Error Middleware
app.use(errorMiddleware);

module.exports.handler = serverless(app);

