const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUsers, deleteUser, updateUser } = require('../controllers/generalController.js');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);
router.get('/', getUsers);

module.exports = router;