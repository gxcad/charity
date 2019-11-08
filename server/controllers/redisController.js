const redisController = {};
const client = require('../databases/redis');

redisController.setData = (req, res, next) => {
  console.log('inside redis controller', req.body)
  client.set(req.body.username, JSON.stringify(req.body.interests), (err, reply) => {
    console.log('inside of set', reply)
    return next();
  })
}
redisController.getData = (req, res, next) => {
  console.log('inside get data', res.locals)
  client.get(res.locals.username, (err, reply) => {
    if (err) return next(err);
    res.locals.reply = JSON.parse(reply);
    return next();
  })
}
module.exports = redisController;