const express = require('express');
const path = require('path');
const PORT = 3000

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render('index', {title: 'My first Node.js and EJS hosted on Amazon EC2'})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });