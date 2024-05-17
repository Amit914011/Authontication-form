const db=require('../databaseConfig')

exports.saveData=(req,res)=>{
    let userName=req.body.userName
    let emailAddress=req.body.emailAddress
    let number=req.body.number
    let password=req.body.password
    let value=[[userName,emailAddress,number,password]]
    let sql='insert into signup(userName,emailAddress,number,password) values ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data save')
        }
    })
}

exports.getData=(req,res)=>{
    let userName=req.body.userName
    let password=req.body.password
    sql='select * from signup where userName = ? and password=?'
    db.query(sql,[userName,password],(err,result)=>{
        if(err) throw err
        else{
            if(result.length>0){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })
}
