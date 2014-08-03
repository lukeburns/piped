piped
=====

Emit an event on outbound pipes.

Usage
=====
```
var stream = piped(stream);
stream.on('piped', function (dest) {
  this.unpipe(dest);
});
stream.pipe(process.stdout); // immediately unpiped
```

Install
=====
```
npm install piped
```
