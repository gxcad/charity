const { pool } = require('../databases/psql');
const donationController = {};

donationController.postDonation = (req, res, next) => {
  // console.log('postDonation');
  const { username, amount, charityName } = req.body;
  pool.query('INSERT INTO "Donations" (username, amount, "charityName", date) VALUES ($1, $2, $3, $4)', [username, amount, charityName, new Date().toDateString()], (err, result) => {
    if (err || !result) {
      res.locals.success = false;
      return next({
        log: `donationController.postDonation: ERROR: ${err}`,
        message: { err: 'donationController.postDonation: ERROR: Check server logs for details' },
      });
    }
    res.locals.success = true;
    return next();
  });
};

// donationController.getAllDonations = (req, res, next) => {
//   console.log('getAllDonations');
//   const { username } = req.body;
//   // const { username } = req.params;
//   console.log('req.body is', req.body);
//   console.log('username is', username);
//   pool.query('SELECT * FROM "Donations" WHERE username = $1', [username], (err, result) => {
//     if (err || !result) {
//       return next({
//         log: `donationController.getAllDonations: ERROR: ${err}`,
//         message: { err: 'donationController.getAllDonations: ERROR: Check server logs for details' },
//       });
//     }
//     console.log(result.rows);
//     res.locals.allDonations = result.rows;
//     return next();
//   });
// };

module.exports = donationController;
