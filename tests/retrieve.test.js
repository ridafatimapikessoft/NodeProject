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


test('Retrieve a User', async () => {
    const userData = {
        email: 'user3@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
      };
      const user = await UserModel.create(userData);
    const user1 = await UserModel.findById(user.id);
     console.log(user);
    expect(user1.email).toEqual(user.email);
    expect(user1.firstName).toEqual(user.firstName);
    expect(user1.lastName).toEqual(user.lastName);
    expect(user1.phone).toEqual(user.phone);
  });
