
const fs=require("fs");
const path=require("path")
const dir_path=process.argv[2];
const full_path=dir_path+'/'+path.basename(dir_path);

fs.appendFile(path.resolve(dir_path + "/summary.js"), `const fs = require('fs');
let files_1;
function getFiles (dir,files_){
  if(files_==null){
    let files_1=" ";
  }
  else{
    files_1=files_;
  }
  let files = fs.readdirSync(dir);
  for (let i in files){
      let name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
          getFiles(name,files_1);
      } else {
          files_1+=name+"\\n";
      }
  }
  return files_1;
}
console.log(getFiles(".",null))`, function(err) {
    if(err) throw err; 
    }); 
// // console.log(full_path);
// fs.writeFileSync(`${z+'/summary.js'}`,`var fs=require('fs');
// fs.readdir(path, function(err, items) {
//         console.log(items); 
//         for (var i=0; i<items.length; i++) {
//              console.log(items[i]);    }});`
// // );