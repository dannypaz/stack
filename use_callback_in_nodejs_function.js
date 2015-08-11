// This was the OG code before refactor
//
//
// var mysql = require("mysql");
// var thenJade = require('then-jade');
// var connection = mysql.createConnection({
// host: 'localhost',
// user: 'root',
// password: '',
// database: 'nodejs'
// });

// exports.players_list = function(req, res) {

// var data = {title: "", res: {}};
// if (authenticate(req, res)) {

//     results_aaa(function(result) {
//         console.log(result);
//         res.render('players/players', {title: 'Players List', res:   result});
//     });

// } else {
//         req.session.error = 'Please login to continue.';
//         res.redirect('/login');
//     }
// };

// function results_aaa(callback) {
//     teams(function(res) {
//         callback(res)
//     });
// }

// function teams(callback) {
//     var response = [];
//     var query = connection.query("select * from team", function(err, result, fields) {
//          var response = [];
//         for (var index in result)
//         {
//             players(result[index].id, function(results) {                
//                 response.push(results);
//             });
//         }
//         console.log(response);
//         callback(response);        
//     });
// }

// function players(id, callback) {
//     connection.query("SELECT * FROM players where team = " + id, function(results) {
//         callback(results);
//     });
// };

// // You no longer need this code, it is redundant
// function query(sql, callback) {
//     connection.query(sql, function(error, results, fields) {
//         callback(results);
//     });
// }    









    var mysql = require("mysql");
    var thenJade = require('then-jade');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'nodejs'
    });

    var getPlayersByTeam = function(callback) {
      // New query
      var playerQuery = "SELECT * FROM players ORDER BY team ASC"; 
      
      connection.query(playerQuery, function(err, result, fields) {
        callback(results);
      });

    };

    var player_list = function(req,res){
      var data = {title: "", res: {}};
      if (authenticate(req, res)) {
        getPlayersByTeam(function(result){
          res.render('players/players', {title: 'Players List', res: result});
        });
      } else {
        req.session.error = 'Please login to continue.';
        res.redirect('/login');
      }
    };

    exports.players_list = player_list;


    function teams(callback) {
        var response = [];
        var query = connection.query("select * from team", function(err, result, fields) {
             var response = [];
            for (var index in result)
            {
                players(result[index].id, function(results) {                
                    response.push(results);
                });
            }
            console.log(response);
            callback(response);        
        });
    }