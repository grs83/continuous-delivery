const serverTest = require('./server-test');

const app = serverTest();

app.listen(4000, () => {
  console.log('Listening on 4k!');
});
