const { pool } = require('../config');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;
const authController = {};

authController.createUser = (req, res, next) => {
  const password = req.body.password;
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err || !salt) {
      return next({
        log: `authController.createUser: ERROR: ${err}`,
        message: { err: 'authController.createUser: ERROR: Check server logs for details' }
      });
    }
    bcrypt.hash(password, salt, (err, encryptedPass) => {
      if (err || !encryptedPass) {
        return next({
          log: `authController.createUser: ERROR: ${err}`,
          message: { err: 'authController.createUser: ERROR: Check server logs for details' }
        });
      }
      pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [req.body.username, encryptedPass])
        .then(result => {
          return next();
        })
        .catch(err => {

        })
    });
  });
};

authController.verifyUser = (req, res, next) => {
  const username = req.body.username;
  pool.query('SELECT * FROM users WHERE username = $1', [username], (err, result) => {
    if (err || !result) {
      return next({
        log: `authController.verifyUser: ERROR: ${err}`,
        message: { err: 'authController.verifyUser: ERROR: Check server logs for details' }
      });
    }

    bcrypt.compare(req.body.password, result.rows[0].password, (err, isMatch) => {
      if (err || !isMatch) {
        return next({
          log: `userController.verifyUser: ERROR: ${err}`,
          message: { err: 'authController.verifyUser: ERROR: Check server logs for details' }
        });
      }

      res.locals.ssid = result.rows[0]['_id'];
      return next();
    });
  });
};

authController.setCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
  return next();
};


module.exports = authController;