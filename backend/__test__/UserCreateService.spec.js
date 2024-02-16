const UserCreateService = require('../src/services/UserCreateServices');
const UserRepositoryInMemory = require('../src/repositories/UserRepositoryInMemory');

it('user should be create', async () => {
  const user = {
    name: 'User Test',
    email: 'user.test@email.com',
    password: '123456',
  };

  const userRepositoryInMemory = new UserRepositoryInMemory();
  const userCreateService = new UserCreateService(userRepositoryInMemory);

  const userCreated = await userCreateService.execute(user);

  expect(userCreated).toHaveProperty('id');
});
