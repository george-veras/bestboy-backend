const app = require('http').createServer()
const io = require('socket.io')(app)
const port = 3001

io.on('connection', function(socket) {
  console.log('A client is connected!')

  socket.on('my other event', function(data) {
    console.log(data)
  })
})

function onListening() {
  console.info("Listening on port: ", port)
}

app.on("listening", onListening)
app.listen(port)
