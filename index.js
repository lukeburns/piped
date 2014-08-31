module.exports = piped;

function piped (stream) {
  var pipe = stream.pipe;
  stream.pipe = function (dest) {
    pipe.call(this, dest);
    this.emit('piped', dest);
    return dest;
  }
  var unpipe = stream.unpipe;
  stream.unpipe = function (dest) {
    unpipe.call(this, dest);
    this.emit('unpiped', dest);
    return this;
  }
  return stream;
}