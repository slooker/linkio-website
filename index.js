var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var app = express();

// Enable gzip
app.use(compression({filter: shouldCompress}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// POST /login gets urlencoded bodies
app.post('/send-email', function (req, res) {
  console.log(req.body);
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})


function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
