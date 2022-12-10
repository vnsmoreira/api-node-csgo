const { app } = require('./app');

const PORT = process.env.PORT || '2121';

app.listen(PORT, () => console.log('[app] running on ' + PORT));
