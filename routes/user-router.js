const express = require('express');
const router = express.Router();

const authenticateUser = require('../middleware/auth');
const {
    getCurrentUser,
    getFriends,
    getUser,
    deleteUser
} = require('../controller/user-controller');

router.route('/')
    .get(authenticateUser, getCurrentUser)
    .delete(authenticateUser, deleteUser);
router.route('/:id').get(authenticateUser, getUser);
router.route('/friends').get(authenticateUser, getFriends);


module.exports = router;