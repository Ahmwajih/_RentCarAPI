const mongoose = require('mongoose');
const pwEncrypt = require('../helpers/pwEncrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: [
            {
                validator: function (v) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
                },
                message: (props) => `${props.value} is not a valid password!`,
            },
        ],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            {
                validator: function (v) {
                    return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
                },
                message: (props) => `${props.value} is not a valid email!`,
            },
        ],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const password = user.password;
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        user.password = pwEncrypt(password);
        next();
    } else {
        return next(new Error('Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character'));
    }
});

module.exports = mongoose.model('User', userSchema);