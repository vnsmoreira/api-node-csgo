const Gamedig = require('gamedig');

module.exports = async (host, port) =>
  await Gamedig.query({
    type: 'csgo',
    host: host,
    port: port,
  });
