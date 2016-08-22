var express = require('express'),
    app     = express();

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/client/views/layout.html')
});

app.listen(process.env.PORT || 3000, function() {
	console.log("I am listening")
})