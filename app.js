const app = require('http').createServer()
const io = require('socket.io')(app)
const port = 3001

let handshakes = {
  'handshakeId': {
    offerFromP1: {},
    answerFromP2: {},
    candidatesToP1: '',
    candidatesToP2: '',
    status: 'completed'
  }
}

io.on('connection', function(socket) {
  console.log('A client is connected!')

  socket.on('candidate', data => {
    console.log(data)
  })

  socket.on('handshakeRequest', data => {
    socket.emit('id', "handshakeId")
  })
})

function onListening() {
  console.info("Listening on port: ", port)
}

app.on("listening", onListening)
app.listen(port)
