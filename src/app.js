const express = require('express');
const cors = require('cors');
const limiter = require('./config/rate-limit');
const router = require('./server-status.route');

const app = express();

router(app);
app.use(cors());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = { app };
