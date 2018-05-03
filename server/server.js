var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var PORT = process.env.PORT || 5000;


const shoesRouter = require('./routes/shoes.router');

// Serve back static files by default
app.use(express.static('server/public'));


app.use('/shoes', shoesRouter);

app.listen(PORT, function (req, res) {
  console.log('Listening on port', PORT);
});