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
stream.on('unpiped', function () {
  console.log('i was unpiped!');
});
stream.pipe(process.stdout);
```

Install
=====
```
npm install piped
```
