const express=require('express')
const db=require('./databaseConfig')
const route=require('./route/formRoute')

let app=express()
app.use(express.json())

db.connect((err)=>{
    if(err) throw err
    console.log('Database connected')
})

const createTable=`
create table if not exists signup(
    id int not null auto_increment,
    userName varchar(255) null,
    emailAddress varchar(255) null,
    number varchar(255) null,
    password varchar(255) null,
    primary key(id)
)`
db.query(createTable,(err,result)=>{
    if(err) throw err
    else{

        console.log('Crete Table')
    }
})


app.use('/api',route)
app.listen(3000,()=>{
    console.log('Server is Running')
})