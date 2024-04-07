var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req:any, res:any) {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, function (err:any, fields:any, files:any) {
      const oldpath = files.filetoupload[0].filepath;
      const newpath = 'C:/Users/abhia/' + files.filetoupload[0].originalFilename;
      console.log(files);
      fs.rename(oldpath, newpath, function (err:any) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
 
