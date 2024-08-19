const User = require('../models/users');
const Token = require('../models/tokens');
const pwEncrypt = require('../helpers/pwEncrypt');

module.exports = {
    login: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({
                error: true,
                message: 'Username and password are required',
            });
        } else {
            const user = await User.findOne({ $or: [{ username }] });
            if (user && user.password === pwEncrypt(password)) {
                if (user.isActive) {
                    const token = await Token.create({ userId: user._id, token: pwEncrypt(`${user._id}${Date.now()}`) });
                    return res.status(200).send({
                        error: false,
                        data: token,
                        message: 'Login successful',
                    });
                } else {
                    return res.status(403).send({
                        error: true,
                        message: 'User is not active',
                    });
                }
            } else {
                return res.status(401).send({
                    error: true,
                    message: 'Invalid username or password',
                });
            }
        }
    },

    logout: async (req, res) => {

    const auth = req.headers.authorization;
    const tokenkey = auth ?  auth.split(' ')[1] : null; // get token from header authorization value
    const result = await Token.deleteOne({ token: tokenkey});
    if (result.deletedCount > 0) {
        return res.status(200).send({
            error: false,
            message: 'Logout successful',
            result: result,
        });
    } else {
        return res.status(404).send({
            error: true,
            message: 'Token not found',
        });
    }
    }
};
