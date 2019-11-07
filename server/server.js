require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const charityController = require('./controllers/charityController');
const sessionController = require('./controllers/sessionController');
const authController = require('./controllers/authController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/assets/index.html'));
// });

// app.use('/api', (req, res) => {
//   console.log('route is working', req.body);
//   res.status(200).json({ message: 'hi' });
// });


// sessionController.verifySSID,

app.post('/signup', authController.createUser, sessionController.setSSID, (req, res) => {
  const { isLoggedIn, username } = res.locals;
  res.status(200).json({ isLoggedIn, username });
});

app.post('/login', authController.verifyUser, sessionController.setSSID, (req, res) => {
  const { isLoggedIn, username } = res.locals;
  res.status(200).json({ isLoggedIn, username });
});

app.get('/api/fetchData', charityController.fetchData, (req, res) => {
  res.json('hi');
});

/*
Catch all routes that do not exist
**/
app.use('*', (req, res) => {
  res.sendStatus(404);
})


function errorHandler(err, req, res, next) {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
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