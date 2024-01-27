const { compare } = require('bcryptjs');

const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class SessionController {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      throw new AppError('E-mail e/ou senha estão incorretos.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('E-mail e/ou senha estão incorretos.', 401);
    }

    return res.json(user);
  }
}

module.exports = SessionController;
