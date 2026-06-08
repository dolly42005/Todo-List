const express = require('express');
const cors=require('cors');
const app=express();
const mysql=require('mysql2');

app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'04082005',
database:'todo'
})

db.connect((err)=>{
if(err){
    console.log("Error connecting to the database");
    return
}
  console.log("Connected with database");
})


app.get('/' , (req,res)=>{
    //res.send('Default Route');
    db.query('select * from todoItems' , (err, result) => {
        if(err){
        console.log("error occured", err)
        return
       } 
       console.log("Data: ",result);
       res.send(result);

       
    })
})

app.post('/add-item',(req,res)=>{
    console.log(req.body);
    //res.json({ success: true, item: req.body });
    
    db.query(`Insert into todoItems(itemDescription) values ('${req.body.text}')` , (err,results)=>{
       
    })
    res.send("added successfully");
})
app.post('/okna',(req,res)=>{
    res.send('ha ok');
})

app.put('/putUserDetails',(req,res)=>{
    res.send('updated successfully');
})

app.delete('/deleteUserDetails',(req,res)=>{
    res.send('deleted successfully');
})
app.listen(3000,()=>{                                          //server run avvadaniki app.listen vaduthamu
    console.log("server started running on port 3000");
})

console.log("vachindaa");
console.log("vachindaa");