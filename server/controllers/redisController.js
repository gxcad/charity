const redisController = {};
const client = require('../databases/redis');
redisController.setData = (req, res, next) => {

  client.set('kevinSucks', 'monkey dick', (err, reply) => {
    console.log('inside of set', reply)
  })
}
redisController.getData = (req, res, next) => {
  client.get('kevinSucks', (err, reply) => {
    console.log('inside of get', reply)
  })
}
module.exports = redisController;