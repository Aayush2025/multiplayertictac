// const server = require('http').createServer()
// const io = require('socket.io')(server, {
//     cors: {
//         origin: "https://tictactoe-pink-mu.vercel.app/",
//         methods: ["GET", "POST"]
//     }
// });
// io.on('connection', (socket)=> {
//     socket.emit("hello", "youtube tutorial");
//     socket.on("play", index => {
//         console.log("server received", index)
//         socket.broadcast.emit("play", index)
//     })
// })

// server.listen(3000)
const PORT = process.env.PORT || 3000;
const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: "https://tictactoe-pink-mu.vercel.app",  // Update this to your Vercel frontend URL
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('play', (index) => {
    console.log('Server received:', index);
    socket.broadcast.emit('play', index);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
