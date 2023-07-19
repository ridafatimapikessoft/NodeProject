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
  
test('Create a User', async () => {
    const userData = {
        email: 'user1@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
      };
    
      const user = await UserModel.create(userData);

  expect(user.email).toEqual(userData.email);
  expect(user.firstName).toEqual(userData.firstName);
  expect(user.lastName).toEqual(userData.lastName);
  expect(user.phone).toEqual(userData.phone);

 
});

