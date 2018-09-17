const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,client) => {
    if (err){
        return console.log('Unable to Connect')
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDb Server');


    //Returns a pointer to the documents
    //find()-returns all
    //find({args}) ex. {completed: true}
    // _id: new ObjectID('<id>')
    //------------------------
    // db.collection('Todos').find({completed: true}).toArray().then((docs)=> {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log(Console);('Unable to fetch todos',err)
    // });
    //----------------------------



    // db.collection('Todos').find().count().then((count)=> {
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     console.log(Console);('Unable to fetch todos',err)
    // });


    db.collection('Users').find({name: 'Robbie'}).toArray().then((docs) => {
       console.log(JSON.stringify(docs,undefined,2));
    });






    //db.close()
});