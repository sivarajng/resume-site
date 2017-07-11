var dataStore = require('../dataStore');

class DbTask {

    constructor() {

    }
    addTask(taskSummary, taskStatus,taskAssigneeId, taskAssignee, projectId, res) {

        dataStore.onConnect(

            (db) => {



                var taskCollection = db.collection('tasks');

                taskCollection.insert({ "summary": taskSummary, "status": taskStatus, "projectId": "", "assigneeId": taskAssigneeId,"assignee": taskAssignee, "projectId": projectId },

                    (err, response) => {

                        if (err) {
                            return res.json('{"project":"error"}');
                        }
                        else if (response != null) {
                            //   var resData = JSON.stringify(doc);
                            //     console.log('insert tasks passed ', response);
                            //     var doc = { "project": "inserted " + payload };
                            return res.json(response);
                        }
                        else {
                            console.log('insert tasks failed ', response);
                            return res.json('{"user":"error"}');
                        }

                    }


                );

            }



        );


    }
    updateTask(taskSummary, taskStatus, taskAssigneeId,taskAssignee, taskId, projectId, res) {

        dataStore.onConnect(

            (db) => {



                var taskCollection = db.collection('tasks');

                taskCollection.update(
                    { _id: dataStore.ObjectID(taskId) },
                    { $set: { "summary": taskSummary, "status": taskStatus, "projectId": "", "assigneeId": taskAssigneeId,"assignee": taskAssignee, "projectId": projectId } },

                    (err, response) => {

                        if (err) {
                            return res.json('{"project":"error"}');
                        }
                        else if (response != null) {
                            //   var resData = JSON.stringify(doc);
                            //     console.log('insert tasks passed ', response);
                            //     var doc = { "project": "inserted " + payload };
                            return res.json(response);
                        }
                        else {
                            console.log('insert tasks failed ', response);
                            return res.json('{"user":"error"}');
                        }

                    }


                );

            }



        );


    }

    getTask(projectId, res) {
        dataStore.onConnect(
            (db) => {
                let query={};
                if(projectId){query={ "projectId": projectId };}
                var taskCollection = db.collection('tasks');
                taskCollection.find(query).toArray(

                    (err, doc) => {
                        if (err) {
                            console.log('usersCollection  find error', err);
                            return res.json('{"tasks":"error"}');
                        }
                        else if (doc != null) {
                            console.log('tasks list : ', doc);
                            return res.json({ taskList: doc });
                        }
                        else {
                            console.log('user not available.');
                            return res.json('{"tasks":"error"}');
                        }

                    }
                );

            }



        );


    }

    deleteTask(taskId, res) {
        dataStore.onConnect(

            (db) => {
                var taskCollection = db.collection('tasks');
                console.log('task id to delete : ', taskId);
                taskCollection.remove(
                    { _id: dataStore.ObjectID(taskId) },
                    { safe: true },
                    (err, result) => {
                        if (err) {
                            console.log('usersCollection  find error', err);
                            return res.json('{"projects":"error"}');
                        }
                        else if (result != null) {
                            console.log('projects list : ', result);
                            return res.json({ taskList: result });
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







module.exports = DbTask;