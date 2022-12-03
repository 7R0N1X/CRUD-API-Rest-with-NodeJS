const { Router } = require('express')
const router = Router()
const userController = require('../controller/user-controller')

/* Creating routes for the userController. */
router.post('/', userController.createUser)
router.get('/', userController.readUsers)
router.get('/:id', userController.readUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router