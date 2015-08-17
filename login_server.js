var request = require('request');
var cheerio = require('cheerio');

var j = request.jar();
var request = request.defaults({ jar : j }); //it will make the session default for every request
    //...
var headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36 OPR/28.0.1750.48',
  'Content-Type': 'application/x-www-form-urlencoded'
};

request({
  url: "http://blogfa.com/Desktop/Login.aspx",
  method: "POST",
  form: { 
    uid:"demoblog1",
    pwd:"test",
    btnSubmit: "ورود به بخش مدیریت وبلاگ"
  },
  headers: headers,
  followRedirect: true
},
function(err, res, body){
  console.log(body);
});
