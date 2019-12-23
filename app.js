const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
      res.render('index');
});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
