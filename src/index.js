const express = require('express');

const json2html = require('./json2html');
const data = require('./data.json');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Express + Typescript Server!');
});

app.get('/api/json', (req, res) => {
  res.json(data);
});

app.get('/api/html', (req, res) => {
  res.send(json2html(data.results[0].rows));
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});