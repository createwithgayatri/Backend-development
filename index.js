// const http = require("http")

// const MyServer = http.createServer((req, res)=>{
//     console.log("server created");
//     res.end("Hello From Server");

// });

// MyServer.listen(8000, ()=>(console.log("Server Started")));


// const http = require ("http")

// const myServer = http.createServer((req, res)=>{
// console.log("Sever is ready to responed");
// res.end("Serverrrrrrrrrrrrrrrrrrrrrrrrrrr")

// });

// myServer.listen(4040, ()=>("Server is Running on Port 4040"));


const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const log = `${Date.now()}: New Req Received\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error writing log");
        }
    });

    res.end("Welcome to Server Guysss");
});

server.listen(4000, () => {
    console.log("Hello Server running on port 4000");
});

