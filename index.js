var express = require('express');
var app = express();
//var Twitter = require('node-twitter');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));

var http = require('http');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'fphdwBfFLstFZtInCjGaAMqFM',
  consumer_secret: 'hymxYrvOshjdhX8rFKgsTKqzAXYuX9FA95fxEOaHFpFmq9KRAI',
  access_token_key: '3077077109-et3Qg9FQjnjyAQ75XA9CWkYsYFtmI745Z01I7AC',
  access_token_secret: 'nvKhX35W6dmYJtCXi2xU19up2XuLM5joN4ZGOblIqrpAd',
});


client.stream('statuses/filter', {track: '@hotlineprejuges'}, function(stream) {
  // console.log ('Hello3');

  stream.on('data', function(tweet) {
    //console.log(tweet);
    console.log(tweet.user.screen_name);
    console.log(tweet.text);
    //console.log('http://www.23h04.com/prejuges/api/?q=' + tweet.text);

    http.get('http://www.23h04.com/prejuges/api/?q=' + tweet.text,
      function (res) {
          var response = '';
          res.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);

            response += chunk;


          });

          res.on('end', function() {
            //console.log(response);
            var obj = JSON.parse(response);
            if(obj.error_num=='200') {
              var message = '@'+tweet.user.screen_name + ' "' + obj.title + '" : ' + obj.link;
              console.log(message);
              client.post('statuses/update', {status: message},  function(error, params, response){
                console.log(error);
              });
            } else {
              var message = '@'+tweet.user.screen_name + ' en finir sur les idées fausses sur les pauvres et la pauvreté : http://www.editionsquartmonde.org/En-finir-avec-les-idees-fausses';
              console.log(message);
              client.post('statuses/update', {status: message},  function(error, params, response){
                console.log(error);
              });
            }

          });
      });

  });

});


});
