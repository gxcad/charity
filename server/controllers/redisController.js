const redisController = {};
const client = require('../databases/redis');

redisController.setData = (req, res, next) => {
  client.set(req.body.username, JSON.stringify(req.body.interests), (err, reply) => {
    return next();
  })
}
redisController.getData = (req, res, next) => {
  client.get(res.locals.username, (err, reply) => {
    if (err) return next(err);
    res.locals.reply = JSON.parse(reply);
    return next();
  })
}
module.exports = redisController;