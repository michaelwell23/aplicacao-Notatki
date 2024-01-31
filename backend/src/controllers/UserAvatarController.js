const knex = require('../database/knex');
const AppError = require('../utils/AppError');

const DisckStorage = require('../providers/DiskStorage');

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const avatarFilename = req.file.filename;

    const diskStorage = new DisckStorage();

    const user = await knex('tags').where({ id: user_id }).first();

    if (!user) {
      throw new AppError(
        'É necessário estar autenticado para alterar a foto de perfil',
        401
      );
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await knex('users').update(filename).where({ id: user_id });

    return res.json(user);
  }
}

module.exports = UserAvatarController;
