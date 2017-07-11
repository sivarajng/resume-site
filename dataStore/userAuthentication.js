var dataStore = require('../dataStore');

exports.findById = function (_id, cb) {
  process.nextTick(function () {

    dataStore.onConnect(
      (db) => {
        var usersCollection = db.collection('users');
        usersCollection.find({ "_id": dataStore.ObjectID(_id) }).nextObject(

          (err, doc) => {
            if (err) {
              console.log('usersCollection  find error', err);
              return cb(null, null);
            }
            else if (doc != null) {
              console.log('user available : ', doc);
              return cb(null, doc);
            }
            else {
              console.log('user not available.');
              return cb(null, null);
            }

          }
        );
      }
    );

  });
}

exports.findByUsername = (username, cb) => {
  process.nextTick(() => {
    dataStore.onConnect(
      (db) => {
        var usersCollection = db.collection('users');
        usersCollection.find({ "username": username }).nextObject(

          (err, doc) => {

            if (err) {
              console.log('usersCollection  find error', err);
              return cb(null, null);
            }
            else if (doc != null) {
              console.log('user available : ', doc);
              return cb(null, doc);
            }
            else {
              console.log('user not available.');
              return cb(null, null);
            }

          }
        );
      }
    );
  });
}


