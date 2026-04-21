// const http = require("http")

// const MyServer = http.createServer((req, res)=>{
//     console.log("server created");
//     res.end("Hello From Server");

// });

// MyServer.listen(8000, ()=>(console.log("Server Started")));


const http = require ("http")

const myServer = http.createServer((req, res)=>{
console.log("Sever is ready to responed");
res.end("Serverrrrrrrrrrrrrrrrrrrrrrrrrrr")

});

myServer.listen(4040, ()=>("Server is Running on Port 4040"));