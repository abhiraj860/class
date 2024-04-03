const fs = require('fs');



fs.readdir('#', function(err: Error, files: Promise<string[]>) {
    if(err) console.log('##Error', err);
    else console.log('Result', files);
});