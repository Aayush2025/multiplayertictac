const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "https://tictactoe-8yk6vji8u-aayush-narnolis-projects.vercel.app/",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket)=> {
    socket.emit("hello", "youtube tutorial");
    socket.on("play", index => {
        console.log("server received", index)
        socket.broadcast.emit("play", index)
    })
})

server.listen(3000)
