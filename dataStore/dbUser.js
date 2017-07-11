var dataStore = require('../dataStore');

class DbUser  {

getAllUser(res){
    dataStore.onConnect(
        (db) => {

            var userCollection = db.collection('users');
            userCollection.find({}).toArray(
                (err, doc) => {
                    if (err) {
                       return res.json('{"user":"error"}');
                    }
                    else if (doc != null) {
                        var resData = JSON.stringify(doc);
                        console.log('api user info =====: ' + resData);
                        return res.json({userList:doc});
                    }
                    else {
                        console.log('user not available.');
                         return res.json('{"user":"error"}');
                    }

                }

            );

        }
    );
}
getCurrUser(_id,res){
    dataStore.onConnect(
        (db) => {
            console.log('api user id : ', _id);
            var userCollection = db.collection('users');
            userCollection.find({ "_id": dataStore.ObjectID(_id) }).nextObject(
                (err, doc) => {
                    if (err) {
                       return res.json('{"user":"error"}');
                    }
                    else if (doc != null) {
                        var resData = JSON.stringify(doc);
                        console.log('api user info =====: ' + resData);
                         return res.json({currUser:doc});
                    }
                    else {
                        console.log('user not available.');
                         return res.json('{"user":"error"}');
                    }

                }

            );

        }
    );
}
findUser(userNameContains,res){
    dataStore.onConnect(
        (db) => {
            console.log('api user userNameContains : ', userNameContains);
            var userCollection = db.collection('users');
            userCollection.find({ "displayName": {$regex:".*"+userNameContains+".*",$options:"i"}}).toArray(
                (err, doc) => {
                    if (err) {
                       return res.json('{"user":"error"}');
                    }
                    else if (doc != null) {
                        var resData = JSON.stringify(doc);
                        console.log('api user info =====: ' + resData);
                         return res.json({userFindList:doc});
                    }
                    else {
                        console.log('user not available.');
                         return res.json('{"user":"error"}');
                    }

                }

            );

        }
    );
}



}

module.exports = DbUser;