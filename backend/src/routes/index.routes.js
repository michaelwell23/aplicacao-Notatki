const { Router } = require('express');

const usersRoutes = require('./users.routes');
const notesRoutes = require('./notes.routes');
const tagsRoutes = require('./tags.routes');
const sessionRoutes = require('./session.routes');

const routes = Router();

routes.use('/tags', tagsRoutes);
routes.use('/notes', notesRoutes);
routes.use('/users', usersRoutes);
routes.use('/session', sessionRoutes);

module.exports = routes;
