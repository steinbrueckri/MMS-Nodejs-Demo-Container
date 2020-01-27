const express = require('express');
const os = require('os')
const app = express();

/**
 * Define Endpoints
 */
app.get('/', (req, res) => {
  res.status(200).send('🎉 ❤️ 🎉 ❤️ hello world ❤️ 🎉 ❤️ 🎉');
});

app.get('/err', (req, res) => {
  res.status(500).send('WARNING BUGs -> 🐞 🐞 🐞');
});

app.get('/ping', (req, res) => {
  res.status(200).send('pong from ' + os.hostname());
});

/**
 * Start server
 */
const port = 3000;
const server = app.listen(port, () => {
  console.log('listening on port %s.\n', server.address().port);
});

module.exports = app;
