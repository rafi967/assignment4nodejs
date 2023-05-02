const http = require('http');
const port =3000;
const myServer = http.createServer((req,res)=>{
    res.end("Hello, I am your first server");
});
myServer.listen(port, ()=>{
    console.log("server is running successfully localhost:3000")
});