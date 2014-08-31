var test = require('tape');
var piped = require('./');
var through = require('through2');

test('event fires with destination as argument', function (t) {
  t.plan(2);
  var stream = piped(through());
  var out = process.stdout;

  stream.on('piped', function (dest) {
    t.equal(dest, out);
  });

  stream.on('unpiped', function (dest) {
    t.equal(dest, out);
  });

  stream.pipe(out);
  stream.unpipe(out);
});