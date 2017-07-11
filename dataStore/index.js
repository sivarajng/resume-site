var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var queue = [];
var instance = null;

var uri = "mongodb://mongo:mongo@cluster-srish-shard-00-00-lxilx.mongodb.net:27017,cluster-srish-shard-00-01-lxilx.mongodb.net:27017,cluster-srish-shard-00-02-lxilx.mongodb.net:27017/taskimon?ssl=true&replicaSet=cluster-srish-shard-0&authSource=admin";
MongoClient.connect(uri, function (err, db) {

  if (err) {
    console.log('MongoDB connection failed :', err);
  }
  console.log('MongoDB connection succeeded.');

  instance = db;

  while (queue.length) {
    queue.pop()(instance);
  }
  module.exports.db = db;
  // db.close();
});

module.exports.onConnect = (cb) => {
  if (instance === null) {
    queue.push(cb);
  }
  else {
    cb(instance);
  }
};

module.exports.ObjectID = ObjectID;

