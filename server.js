const config = require('config-multipaas')();
const PORT = config.get('PORT');
const IP = config.get('IP');

const io = require('socket.io').listen(PORT);

io.origins('*:*');

io.on('connection', socket => {
  // 送信された文字列をブロードキャストするだけ
  const echoEventName = 'echo';
  socket.on(echoEventName, data => {
    io.emit(echoEventName, data);
  });
});

console.log(`Listening on ${IP}, port ${PORT}`);
