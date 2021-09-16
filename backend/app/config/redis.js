let redis = require("redis");
var options = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
};

let frontend = redis.createClient(options);

frontend.on("error", (error) => {
    console.log(error);
});

module.exports = frontend;