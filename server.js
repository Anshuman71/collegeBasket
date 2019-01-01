const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/verify/:token', (req, res) => {
  const { token } = req.params;
  res.sendFile(path.join(__dirname, 'public/verify.html'));
});

app.get('/forgotPassword/:token', (req, res) => {
  const { token } = req.params;
  res.sendFile(path.join(__dirname, 'public/forgotPassword.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Started at 3000'));
