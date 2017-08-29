var express = require('express');
var exec = require('child_process').exec;
var app = express();
var fs = require('fs');
 var doc1;
 var doc2;
 var path="./files/1.txt"

// Return a 200 for kubernetes healthchecks
app.get('/healthz', function(req, res){
  res.status(200).end();
});

app.get('/get', function(req, res){
  var poweredBy = process.env.POWERED_BY;
  var release = process.env.WORKFLOW_RELEASE;

  if (typeof(message) == "undefined") {
  	poweredBy = "Deis";
  }

  exec('hostname', function(error, stdout, stderr) {
    container = "unknown";
    // If exec was successful
    if (error == null) {
      container = stdout.trim();
    }

	
	res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin":"*"
       });	 
	   
	   
	 /*  
	 fs.open("./1.txt", 'r', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/



fs.open(path, 'a', undefined, function(err, fd) { 
            if(err) throw err; 
	 
	 fs.readFile(path, function (err, data) {
    if (err) throw err;
	
	var doc=data.toString();
    
	
	var pos=doc.indexOf("\n");
 doc1=doc.substring(0,pos);
 doc2=doc.substring(pos+1);

	
	 fs.writeFile(path, doc2, function(err){
 if (err) throw err;
  console.log("success");
   fs.close(fd, function() {
            console.log('wrote the file successfully');
        });
}); 
console.log(doc1);
res.end(doc1);
    



	
});	
	
	}); 
	 
  });
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 80;
server = app.listen(port, function () {
  console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});
