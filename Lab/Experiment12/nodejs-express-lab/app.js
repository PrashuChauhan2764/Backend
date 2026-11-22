const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/text', (req, res) => {
  res.send('This is a text response');
});

app.get('/html', (req, res) => {
  res.send('<h1>Hello HTML</h1>');
});

app.get('/json', (req, res) => {
  res.json({
    name: 'Student',
    course: 'Backend Development'
  });
});

app.get('/status', (req, res) => {
  res.status(200).send('Request successful');
});
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
  const { name, age } = req.query;

  res.json({
    name: name,
    age: age
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});