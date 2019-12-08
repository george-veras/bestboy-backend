const app = require('http').createServer()
const io = require('socket.io')(app)
const uuid = require('uuid/v4')
const port = 3001

// TODO: Design a schema for this.
let handshakes = {
  'handshakeId': {
    offerFromP1: {},
    answerFromP2: {},
    idPeer1: '',
    idPeer2: '',
    candidatesToPeer1: [],
    candidatesToPeer2: [],
    status: 'completed'
  }
}

io.on('connection', function(socket) {
  console.log('A client is connected!')

  socket.on('newCandidate', data => {
    // comes with the handshakeId and the peer's id
    console.log(data)
  })

  socket.on('handshakeRequest', data => {
    socket.emit('id', "handshakeId")
  })

  socket.on('answer', data => {
    // comes with the handshakeId and the actual answer
    // goes with the peerId
    socket.emit('', '')
  })

  socket.on('offer', data => {
    // first step
    // handshake starts here
    const idPeer1 = uuid()
    handshakes[uuid()] = {
      offerFromP1: data,
      idPeer1,
      status: 'offerEmitted'
    }
  })
})

function onListening() {
  console.info("Listening on port: ", port)
}

app.on("listening", onListening)
app.listen(port)
