const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg)
    })
})

http.listen(3000, () => {
    console.log('listening on *:3000')
})
