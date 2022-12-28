const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  
    console.log('ada yang konek')

    socket.on("error", (msg) => {
        
        socket.broadcast.emit("responseError", msg)

    })

    socket.on("ring", (msg) => {
        
        socket.broadcast.emit("responseRing", msg)

    })

    socket.on("ringing", (msg) => {
        console.log('ringing')
        console.log(msg)
        socket.broadcast.emit("responseRinging", msg)
    })

    socket.on("answer", (msg) => {
        console.log('answer')
        console.log(msg)
        socket.broadcast.emit("responseAnswer", msg)
    })

    socket.on("noanswer", (msg) => {
        console.log('noanswer')
        console.log(msg)
        socket.broadcast.emit("responseNoanswer", msg)
    })

    socket.on("destroy", (msg) => {
        console.log('destroy')
        console.log(msg)
        socket.broadcast.emit("responseDestroy", msg)

    })

    socket.on("disconnect", (reason) => {
        console.log(reason); // "ping timeout"
    });

});

httpServer.listen(3000, (msg) => {
    console.log('server jalan di port 3000')
});