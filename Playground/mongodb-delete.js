const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client) => {
    if (err){
        return console.log('Unable to Connect')
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDb Server');


    //deleteMany
    // db.collection('Todos').deleteMany({text:'Delete'}).then((result) => {
    //     console.log(result);
    // });



    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Delete'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelte
    // db.collection('Todos').findOneAndDelete({test: 'Delete'}).then((result) => {
    //    console.log(result);
    // });





    //db.close()
});