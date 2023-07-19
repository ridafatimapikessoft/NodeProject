const mongoose = require('mongoose');
const UserModel = require('../model/user');
beforeEach(async () => {
    await mongoose.connect('mongodb+srv://ridafatima:NldN3N92Qe6HOKW5@cluster0.wcwj76u.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  
  // Disconnect from the MongoDB test database after all tests are executed
  afterEach(async () => {
    await mongoose.disconnect();
  });


  // Update a user
  test('Delete a User', async () => {
    const userData = {
        email: 'user6@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
      };
      const user = await UserModel.create(userData);
        await UserModel.findByIdAndDelete(user._id);
    
        const user1 = await UserModel.findById(user._id);
    
        expect(user1).toBeNull();
      });