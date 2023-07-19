
const testUser=require( "./crud.test");
const UserModel =require( "./crud.test");
test('Retrieve a User', async () => {
    const user = await UserModel.findById(testUser._id);

    expect(user.email).toEqual(testUser.email);
    expect(user.firstName).toEqual(testUser.firstName);
    expect(user.lastName).toEqual(testUser.lastName);
    expect(user.phone).toEqual(testUser.phone);
  });