const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client) => {
    if (err){
        return console.log('Unable to Connect')
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDb Server');


    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b9f3b37402fe794b59b62c2")
    },{
        //update operators
        $set:{
            text: "Update"
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });



    // db.close()
});