// Import the necessary modules and dependencies
const mongoose = require('mongoose');
const UserModel = require('../model/user'); // Assuming you have a User model defined


// Establish a connection to the MongoDB  database
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

// Define the unit tests for User CRUD operations
describe('User CRUD Operations', () => {
  let testUser; // A variable to hold the user document for testing

  // Create a user
  test('Create a User', async () => {
    const userData = {
      email: 'test1@example.com',
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
    };

    const user = await UserModel.create(userData);
    testUser = user; // Store the created user for later use

    expect(user.email).toEqual(userData.email);
    expect(user.firstName).toEqual(userData.firstName);
    expect(user.lastName).toEqual(userData.lastName);
    expect(user.phone).toEqual(userData.phone);
  });
// module.exports=testUser,UserModel;

const testUser=require( "./crud.test");
const UserModel =require( "./crud.test");
test('Retrieve a User', async () => {
    const user = await UserModel.findById(testUser._id);

    expect(user.email).toEqual(testUser.email);
    expect(user.firstName).toEqual(testUser.firstName);
    expect(user.lastName).toEqual(testUser.lastName);
    expect(user.phone).toEqual(testUser.phone);
  });
  // Update a user
  test('Update a User', async () => {
    const updatedData = {
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '9876543210',
    };

    const user = await UserModel.findByIdAndUpdate(
      testUser._id,
      updatedData,
      { new: true }
    );

    expect(user.email).toEqual(testUser.email);
    expect(user.firstName).toEqual(updatedData.firstName);
    expect(user.lastName).toEqual(updatedData.lastName);
    expect(user.phone).toEqual(updatedData.phone);
  });

  // Delete a user
  test('Delete a User', async () => {
    await UserModel.findByIdAndRemove(testUser._id);

    const user = await UserModel.findById(testUser._id);

    expect(user).toBeNull();
  });
});
