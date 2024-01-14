const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 1233,
      user : 'postgres',
      password : 'admin',
      database : 'knex',
},
});

// db.select('id','name','email','password')
// .from('users')
// .then((rows) =>{
//     console.log(rows);
// })
// .catch((err)=>{
//     console.log(err);
// })

// db('users').select('id','name','email','password').then((rows) =>{
//         console.log(rows);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// console.log('db=>',db);

// db.raw("select * from users")
// .then(data => {
//     console.log(data.rows);
// })

// db('users')
// .insert(
//     {name:'jojhjk',email:'hjk@gmail.com',password:'jklqaq12ws3ed'})
//     .returning(['id','name'])
//     .then(data =>{
//         console.log(data);
//     }).catch(err =>{
//         console.log(err);
//     })

    // UPDATE

    // db('users')
    // .update({name:'Aron'})
    // .where({id: 2})
    // .returning("*")
    // .then(data =>{
    //             console.log(data);
    //         }).catch(err =>{
    //             console.log(err);
    //         })

    db('users')
    .where({id:3})
    .del()
    .returning('*')
    .then(data =>{
                console.log(data);
            }).catch(err =>{
                console.log(err);
            })


