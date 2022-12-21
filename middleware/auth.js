


const authenticateUser = (req, res, next) => {
    console.log('Authenticate user');
    next();
}



module.exports = authenticateUser;