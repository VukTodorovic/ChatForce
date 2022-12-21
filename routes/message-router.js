const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/auth');
const {
    getConversation,
    removeConversation,
    sendMessage
} = require('../controller/message-controller');


router.route('/').post(authenticateUser, sendMessage);

router.route('/:id')
    .get(authenticateUser, getConversation)
    .delete(authenticateUser, removeConversation);



module.exports = router;