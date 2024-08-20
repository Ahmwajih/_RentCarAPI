
module.exports = {
    isLogin: (req, res, next) => {
        console.log('isLogin middleware:', req.user); 
        console.log(req)
        if (req.user && req.user.isActive) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    },
    isAdmin: (req, res, next) => {
        console.log('isAdmin middleware:', req.user);
        if (req.user && req.user.isAdmin) {
            next();
        } else {
            res.status(403).send({
                error: true,
                message: 'you are not authorized to access this resource',
            });
        }
    },
}