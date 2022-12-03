const userController = {}
const user = require('../model/user-model')

/* This is a function that is being exported to the routes file. It is using the `user` model to create
a new user in the database. */
userController.createUser = async (req, res) => {
    const newUser = new user(req.body)
    await newUser.save()
    res.send('¡User successfully registered!')
}

/* This is a function that is being exported to the routes file. It is using the `user` model to find
all the users in the database and then sending them back to the client. */
userController.readUsers = async (req, res) => {
    const users = await user.find()
    res.json(users)
}

/* This is a function that is being exported to the routes file. It is using the `user` model to find
a user by its id in the database and then sending it back to the client. */
userController.readUser = async (req, res) => {
    const userById = await user.findById(req.params.id)
    res.json(userById)
}

/* This is a function that is being exported to the routes file. It is using the `user` model to find
a user by its id in the database and then updating it with the new information that is being sent by
the client. */
userController.updateUser = async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body)
    res.send('¡User successfully updated!')
}

/* This is a function that is being exported to the routes file. It is using the `user` model to find
a user by its id in the database and then deleting it. */
userController.deleteUser = async (req, res) => {
    await user.findByIdAndDelete(req.params.id)
    res.send('¡User deleted!')
}

module.exports = userController