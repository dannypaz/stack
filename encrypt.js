var simplecrypt = require("simplecrypt");

var sc = simplecrypt();
var digest = sc.encrypt("my secret");
console.log(digest);

var message = sc.decrypt(digest);
console.log(message);