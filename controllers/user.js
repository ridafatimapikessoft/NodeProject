const UserModel = require('../model/user')

// Create and Save a new user
exports.create = async (req, res) => {
    
    try {
    const user = new UserModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    
    await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ 
        message: error.message});
    };
};
// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
