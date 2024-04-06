import fs from 'fs';

fs.rename('myrenamedFile.txt', 'abhiraj.txt', (err)=>{
    if(err) throw err;
    console.log('File renamed!!');
});