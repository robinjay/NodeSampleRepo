var http=require("http");
fs = require('fs');
var formidable = require('formidable');
http.createServer(function(request,response){
	if(request.method == 'GET'){
		
		if(request.url == '/uploadFile'){
			response.writeHead(200, {'Content-Type': 'text/html'});
		    response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		    response.write('<input type="file" name="filetoupload"><br>');
		    response.write('<input type="submit">');
		    response.write('</form>');
			return response.end();
		}else{
			var html = fs.readFileSync('Form.html');
			
		    response.writeHead(200,{'Content-Type': 'text/html'});
		    response.end(html)
		}
		
		
		
 
	}else{
		if(request.url == '/fileupload'){
			var form = new formidable.IncomingForm();
			form.parse(request, function (err, fields, files) {
				var oldpath = files.filetoupload.path;
				var newpath = 'C:\\Users\\ROBINS~1\\AppData\\Local\\Temp\\' + files.filetoupload.name;
				fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
					response.write('File uploaded and moved!');
					response.end();
				});
			});
		}else{
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.end('Request sent successfully')
		}
		
		
	}
	
}).listen(9091);
console.log('Server running at 9091');