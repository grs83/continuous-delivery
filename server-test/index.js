const express = require('express');

module.exports = function serverTest() {
  const app = express();

  app.get('/', (req, res) => {
    const repoInfo = JSON.stringify({
      name: 'continuous-delivery',
      description: 'A practice repository for testing and deployment.'
    });
    res.send(repoInfo).status(200);
  });

  return app;
};
