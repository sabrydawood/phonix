let app = require("../lib")



app.get('/').then(function(res) {
    //Successful response
	res.send("hello world")
}).catch(function(err) {
    //Error
});

app.run(3000, function () {
	console.log("listing on port ")
})