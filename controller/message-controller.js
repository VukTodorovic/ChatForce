



// Get all messages between current user and other user (by user id) (protected)
const getConversation = async(req, res) => {
    res.send('<h1>getConversation</h1>');
}

// Remove all messages between current user and other user (by user id) (protected)
const removeConversation = async(req, res) => {
    res.send('<h1>removeConversation</h1>');
}

// Send message from current user to other user (by user id)
const sendMessage = async (req, res) => {
    res.send('<h1>sendMessage</h1>');
}


module.exports = {
    getConversation,
    removeConversation
}