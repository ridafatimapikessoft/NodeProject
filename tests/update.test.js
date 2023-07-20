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
  test('Update a User', async () => {

    const userData = {
        email: 'user10@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
      };
      const user = await UserModel.create(userData);
    const updatedData = {
      firstName: 'Rida',
      lastName: 'Fatimaa',
      phone: '9876543210',
    };
    const user1 = await UserModel.findByIdAndUpdate(
      user._id,
      updatedData,
      { new: true }
    );

    expect(user1.email).toEqual(user.email);
    expect(user1.firstName).toEqual(updatedData.firstName);
    expect(user1.lastName).toEqual(updatedData.lastName);
    expect(user1.phone).toEqual(updatedData.phone);
    expect(user1).toBeTruthy(); 
  });