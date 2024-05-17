let mysql=require('mysql')

const connection=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'Amit@321',
    database:'register'
})

module.exports=connection