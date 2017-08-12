var express = require('express');
const haravanAPI = require('shopify-node-api');
 

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var Haravan = new haravanAPI({
  shop: 'suplo-services', // MYSHOP.myharavan.com 
  haravan_api_key: '26677a584f35a3f8fb48d5448e7d4fd4', // Your API key 
  access_token: '844f866dc7df44be86ad6a1b5095401b' // Your API password 
});

// Building the authentication url 
 
var auth_url = Haravan.buildAuthURL();
 
 console.log(auth_url);
