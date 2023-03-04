const express = require('express');
const LoginController = require('./controllers/Login');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', LoginController.validateUser);

module.exports = app;
