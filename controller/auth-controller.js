



// Login user
const login = async(req, res) => {
    res.send('<h1>Login</h1>');
}

// Register new user
const register = async(req, res) => {
    res.send('<h1>Register</h1>');
}


module.exports = {
    login,
    register
}