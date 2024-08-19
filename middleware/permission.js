module.exports = {
    isLogin: (req, res, next) => {
        if (req.user && req.user.isActive) {
            next();
        } else {
            res.redirect('/auth/login');
            
        }
    },
}