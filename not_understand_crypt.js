// Here is a simple example for a login screen
// (Not for use in production)
var simplecrypt = require("simplecrypt");
var sc = simplecrypt();

var user1 = {
  password: "password123"
};

// This would be stored in the DB
var databaseHash = sc.encrypt(user.password);

// Here is your login function
//
// Now when the user logs in, you will compare the two
// and see if the credentials match
var userInput = sc.encrypt(user.password);
var usersPasswordFromDatabase = databaseHash;

if (userInput === usersPasswordFromDatabase){
  // Logged In!
  console.log('Logged In!');
}else {
  console.log('Invalid Username/Password');
}