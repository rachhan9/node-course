
//const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// eqivalent to below
const {MongoClient, ObjectID} = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error) return console.log('Unable to connect: ',error)
    const db = client.db(databaseName)
    
    
    // db.collection('users').insertOne({
    //     _id : id,
    //     name:'Vikram',
    //     age: 26
    // },(error,result) =>{
    //     if(error)return console.log(error)
    //     console.log(result.ops);
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age:28
    //     },{
    //         name:'Gunther',
    //         age:27
    //     }
    // ],(error, result) =>{
    //     if(error)return console.log(error)
    //     console.log(result.ops);
    // })
    
    // db.collection('users').findOne({name:'Jen'},(error,user)=>{
    //     if(error)return console.log(error)
    //     console.log(user);
    // })
    
    // // get pack cursor, ptr to the data array object
    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if(error)return console.log(error)
    //     console.log(users);
    // })
    
    // db.collection('tasks').insertMany([
    //     {
    //         description:'Clean the House',
    //         completed: true
    //     },{
    //         description:'Renew inspection',
    //         completed: false
    //     },{
    //         description:'Pot plants',
    //         completed: false
    //     }
        
    // ],(error,result) => {
    //     if(error)return console.log(error)
    //     console.log(result.ops);
    // })
    
    // db.collection('tasks').findOne({_id : new ObjectID("5cab91e8cbedf70db58a0275")},(error,task) =>{
    //     console.log(task);
    // })
    
    // db.collection('tasks').find({completed: false}).toArray((error,tasks) =>{
    //     console.log(tasks)
    // })
    
    
    
    
    
    
//   db.collection('users').updateOne({
//         _id: new ObjectID("5cab90efc3e7a30d8b64ff70")
//     },{
//         $set:{
//             name:'Mike'
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error) =>{
//         console.log(error);
//     })

   db.collection('users').updateOne({
        name:"Mike"
    },{
        $inc:{
            age: 1
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error) =>{
        console.log(error);
    })
    
    
    
    db.collection('tasks').updateMany({
        completed:false
    },{
        $set:{
            completed:true
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error) =>{
        console.log(error);
    })
    
    
    
})