const { Router } = require('express');
const serverStatusController = require('./server-status.controller');

const router = Router();

router.get('/:ip', serverStatusController);

module.exports = app => app.use('/ip-status', router);
