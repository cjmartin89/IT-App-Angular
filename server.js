//Install express server
const express = require('express');
const path = require('path');

const app = express();

const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }

  app.use(forceSSL());

// Serve only the static files form the dist directory
app.use(express.static('./dist/IT-App'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/IT-App/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);