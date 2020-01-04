var buffer = new ArrayBuffer(8); // The size of the buffer is passed in, expecting bytes (here, 64 bits).
var view = new Int32Array(buffer); // This view helps us deal with the binary data contained in var buffer.
// Because we're using Int32Array, only 2 utf-8 digits may be stored in this array.


view[0] = 5;
view[1] = 15;
view[2] = 45;
console.log(view);
// View's first and second array items are integers 5 and 15, respectively.
// View's third array item, integer 45, does not exist because we're using Int32Array.

// buffer is an array with 8 bytes, or 64 bits.
// view is a typed array with 32 bits, and may contain up to 2 utf-8 values.

// Using arrays this way offers methods for easily dealing with sets of binary data.