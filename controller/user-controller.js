
// Get info about current user
const getCurrentUser = async (req, res) => { 
    res.send('<h1>getCurrentUser</h1>');
}

// Get info about specific user (by id)
const getUser = async (req, res) => {
    res.send('<h1>getUser</h1>');
}

// Get all friends from current user
const getFriends = async (req, res) => {
    res.send('<h1>getFriends</h1>');
}

// Delete specific user (by id)
const deleteUser = async (req, res) => {
    res.send('<h1>deleteUser</h1>');
}


module.exports = {
    getCurrentUser,
    getFriends,
    getUser,
    deleteUser
}