const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // Add an email format validator using a regular expression
        validate: {
            validator: function (value) {
                // Regular expression to validate email format
                const email_regularexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return email_regularexp.test(value);
            },
            message: 'Invalid email format'
        }
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        validate: {
            // Custom validator to check phone number format
            validator: function (value) {
                // Regular expression to validate phone number format
                const phone_regexpression = /^[0-9]{10}$/;
                return phone_regexpression.test(value);
            },
            message: 'Invalid phone number format. Please provide a 10-digit number without spaces or special characters'
        }
    }
});

const User = mongoose.model('User', schema);

module.exports = User;
