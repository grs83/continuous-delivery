const serverTest = require('./server-test');

const app = serverTest();

app.listen(process.env.PORT, () => {
  console.log('Listening on ,' + process.env.PORT);
});
