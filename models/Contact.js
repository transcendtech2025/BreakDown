const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    phone: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
