
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000
router.get("/", (req, res) => {
  res.json({
    hello: "Listening on port ${PORT}"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);







/* node server which will handle socket io connections
const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//app.use(express.static(__dirname + '/public'))



// Socket 
const io = require('socket.io')(http)


const users = {};

app.get('/', (req, res) => {
 
    // Sending the response
    res.send('Hello World! Listening on port ${PORT}')
    
    // Ending the response
    res.end()
})

 io.on('connection', socket=>{
    console.log("connected");
     socket.on('new-user-joined', name=>{
         console.log("New user", name);
         users[socket.id] = name;
         socket.broadcast.emit('user-joined', name);
     });

     socket.on('send', message=>{
         socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
     });

     socket.on('disconnect', message=>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
 })
app.use(`/.netlify/functions/api`, router);

*/
