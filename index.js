module.exports = piped;

function piped (stream) {
  var pipe = stream.pipe;
  stream.pipe = function (dest) {
    pipe.call(this, dest);
    this.emit('piped', dest);
    return dest;
  }
  return stream;
}