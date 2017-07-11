var dataStore = require('../dataStore');

class DbProject {

    constructor() { }

    addProject(payload, res) {
        dataStore.onConnect(

            (db) => {
                console.log('project payload : ', payload);
                var projectCollection = db.collection('projects');
                projectCollection.insert({ "name": payload },

                    (err, response) => {

                        if (err) {
                            return res.json('{"project":"error"}');
                        }
                        else if (response != null) {
                            //   var resData = JSON.stringify(doc);
                            //     console.log('insert projects passed ', response);
                            //     var doc = { "project": "inserted " + payload };
                            return res.json(response);
                        }
                        else {
                            console.log('insert projects failed ', response);
                            return res.json('{"user":"error"}');
                        }
                    }
                );
            }
        );
    }

    updateProject(projectId, projectName, res) {
        dataStore.onConnect(

            (db) => {
                console.log('project payload : ', projectName);
                var projectCollection = db.collection('projects');
                projectCollection.update(
                    { _id: dataStore.ObjectID(projectId) },
                    { $set: { "name": projectName } },

                    (err, response) => {

                        if (err) {
                            return res.json('{"project":"error"}');
                        }
                        else if (response != null) {
                            //   var resData = JSON.stringify(doc);
                            //     console.log('insert projects passed ', response);
                            //     var doc = { "project": "inserted " + payload };
                            return res.json(response);
                        }
                        else {
                            console.log('insert projects failed ', response);
                            return res.json('{"user":"error"}');
                        }
                    }
                );
            }
        );
    }


    getProject(res) {

        dataStore.onConnect(
            (db) => {
                var projectCollection = db.collection('projects');
                projectCollection.find({}).toArray(

                    (err, doc) => {
                        if (err) {
                            console.log('usersCollection  find error', err);
                            return res.json('{"projects":"error"}');
                        }
                        else if (doc != null) {
                            console.log('projects list : ', doc);
                            return res.json({ projectList: doc });
                        }
                        else {
                            console.log('user not available.');
                            return res.json('{"projects":"error"}');
                        }

                    }
                );
            }
        );
    }

    deleteProject(projectId, res) {
        dataStore.onConnect(

            (db) => {
                var projectCollection = db.collection('projects');
                console.log('project id to delete : ', projectId);
                projectCollection.remove(
                    { _id: dataStore.ObjectID(projectId) },
                    { safe: true },
                    (err, result) => {
                        if (err) {
                            console.log('usersCollection  find error', err);
                            return res.json('{"projects":"error"}');
                        }
                        else if (result != null) {
                            console.log('projects list : ', result);
                            return res.json({ projectList: result });
                        }
                        else {
                            console.log('user not available.');
                            return res.json('{"projects":"error"}');
                        }

                    }
                );
            }

        );

    }

}

module.exports = DbProject;




