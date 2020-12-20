
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const mysql    = require('mysql');
const dotenv = require('dotenv');

// dot env is for storing secret 
dotenv.config({ path : './.env'})


const db = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  });

// connecting with database 
  db.connect(function(err){
    if (err){
        console.log(err);
    } else {
        console.log('mysql connected');
    }
  });
 
app.set('view engine', 'hbs')






const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req ,res){
    res.sendFile(__dirname+ '/index.html')
})



app.post("/" , function( req , res ){
    const email = req.body.email;
    const password = req.body.password;

    if( email === "sadi.wsiiz@gmail.com" && password === "aaa"){
        res.sendFile(__dirname+ '/secondPage.html')
    } else{
        res.send("sorry this is incorrect ")
    }

   

})

app.listen(3000 , function(){
    console.log("server at 3000");
})
