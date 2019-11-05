const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', express.static('client/assets'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../client/assets/index.html'))
  console.log('here inside of / get request');
})

/*
Catch all routes that do not exist
**/
app.use('*', (req, res) => {
  res.sendStatus(404);
})

const defaultError = {
  log: 'Express error handler caught unknown middleware error',
  status: 400,
  message: { err: 'An error occurred' }, 
};

function errorHandler(err, req, res, next) {
  const errorObj = { ...defaultError, ...err };
  console.log('error:', err);
  res.json({
    status: errorObj.status,
    message: errorObj.message,
  });
}
/*
Global error handler
**/
app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})