const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

const UserRepository = require('../repositories/UserRepository');

const sqliteConnection = require('../database/sqlite');

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();

    const checkUserExists = await userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('E-mail já está em uso!');
    }

    const hashedPassword = await hash(password, 8);

    await userRepository.create({ name, email, hashedPassword });

    return res.status(201).json();
  }

  async update(req, res) {
    const { name, email, password, old_password } = req.body;
    const user_id = req.user.id;

    const database = await sqliteConnection();
    const user = await database.get('SELECT * FROM users WHERE id = (?)', [
      user_id,
    ]);

    if (!user) {
      throw new AppError('Usuário não encontrário');
    }

    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('O e-mail cadastrado já está em uso.');
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        'A nova senha deve ser diferente da senha atual. Por favor, escolha uma senha que não seja idêntica à senha atual para garantir a segurança da sua conta. '
      );
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError(
          'A senha atual inválida. Verifique as informações e tente novamente.'
        );
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET name = ?, email = ?, password = ?, updated_at = DATETIME('now') WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    );

    return res.status(200).json('Senha atualizada com sucesso!');
  }
}

module.exports = UsersController;
