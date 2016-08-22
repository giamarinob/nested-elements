var express = require('express'),
    app     = express();

//Inject middleware to allow for cleaner calls to files in html
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css/', express.static(__dirname + '/client/css'));

//Basic route for server
app.get('/', function (request, response) {
	response.sendFile(__dirname + '/client/views/layout.html')
});

app.listen(process.env.PORT || 3000, function() {
	console.log("I am listening")
})