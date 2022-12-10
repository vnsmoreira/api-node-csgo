const serverInfo = require('./config/gamedig');
const listPlayerNames = players => players.map(player => player.name);

module.exports = async (req, res) => {
  const { ip } = req.params;

  const [host, port] = ip.toString().split(':');

  try {
    const { players } = await serverInfo(host, port);

    return res.send(listPlayerNames(players));
  } catch (error) {
    return res.status(400).send({ error: 'Unable to get server response.' });
  }
};
