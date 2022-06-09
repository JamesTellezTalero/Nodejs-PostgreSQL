const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/generalController.js');

router.get('/users', getUsers);
router.get('/', getUsers);

module.exports = router;