var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var http = require("http");
var path = require("path");
var PORT = process.env.PORT || 3000;
var cors = require("cors");

let app = express();

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '../dist/frontend'));
app.use(bodyParser.urlencoded({
    extended: true,
}))

// app.get("/*",(req,res)=>{
//   res.sendFile(path.json(__dirname));
// })

const server = http.createServer(app);

mongoose.connect("mongodb://localhost:27017/finance",{
    useNewUrlParser : true,
    useUnifiedTopology:true
});

var db = mongoose.connection;
db.on("error",()=>{
    console.log("Error in connecting to the database");
})
db.once('open',()=>{
    console.log("connection sucessful");
})

app.post("/login",(req,res)=>{
    var id = Math.floor((Math.random()* 100000) +1);
    var {userName,mobile,password} = req.body;
    var data = {
        "userid":id,
        "name":userName,
        "mobile":mobile,
        "password":password,
        "star":0,
        "groupid": 1,
        "role": '',
        "created_on": Date().toLocaleString(),

    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            console.log("ERROR: "+err.message);
        }
        console.log("Record inserted sucessfully");
    })
    // return res.redirect("profile");
});

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin" : '*'
    })
    res.send("Sucess");
});

app.listen(PORT,()=>{
    console.log("server running on http://localhost:"+PORT);
})
