const redisfrontend = require('./config/redis');

exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    redisfrontend.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisfrontend.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};