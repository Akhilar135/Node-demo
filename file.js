const fs = require('fs');
const{log}=require('console')
const path = require('path');

//folder
fs.mkdir(path.join(__dirname, '/newfolder'), {}, (err)=>{
    if(err) throw err;
    console.log('folder created');

}
);

//create file
fs.writeFile(path.join(__dirname,'/newfolder', 'newfile.text' ), 'Hello', (err)=>{
    if(err) throw err;
    console.log('file created and written')
});

//read file
fs.readFile(path.join(__dirname,'/newfolder', 'newfile.text'), 'utf8', (err)=>{
    if(err) throw err;
    console.log('file written')
});

//rename file
fs.rename(path.join(__dirname,'/newfolder', 'newfile.text'),path.join(__dirname,'/newfolder', 'newfile_renamed.text'),(err)=>{
    if(err) throw err;
    console.log('renamed')
});
