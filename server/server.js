const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', express.static('client/assets'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../client/assets/index.html'))
  console.log('here inside of / get request');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})