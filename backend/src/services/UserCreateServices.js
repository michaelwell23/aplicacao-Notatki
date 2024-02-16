const { hash } = require('bcryptjs');

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('E-mail já está em uso!');
    }

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({
      name,
      email,
      hashedPassword,
    });

    return userCreated;
  }
}

module.exports = UserCreateService;