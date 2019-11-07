const redis = require('redis');
const client = redis.createClient({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD
})
client.on('connect', () => {
  console.log(`Connected to REDIS on port: ${process.env.REDIS_PORT}`);
})

module.exports = client;

