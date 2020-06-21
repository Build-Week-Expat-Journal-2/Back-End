const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const authenticate = require('./auth/middleware.js');
const usersRouter = require('./users/user-router.js');
const storyRouter = require('./story/story-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', usersRouter);
server.use('/api/story',authenticate,storyRouter);

server.get('/', (req, res) => {
    res.json({ API: "We live ~(˘▾˘~)" });
  });

module.exports = server;