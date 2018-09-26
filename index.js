const fs=require("fs");
const path=require("path")
const dir_path=process.argv[2];
const full_path=dir_path+'/'+path.basename(dir_path);
fs.appendFile(path.resolve(dir_path + "/summary.js"), `const fs = require('fs');
const path = require('path');
let newDir = "${dir_path}" + path.sep;
let files_1;
fs.mkdir(newDir, function (err) {
  (
    function getFiles(dir, files_) {
      fs.readdir(dir, function (err, files) {
        for (let i in files) {
          let name = dir + '/' + files[i];
          fs.stat(name, (err, stats) => {
            if (stats.isDirectory()) {
              getFiles(name, files_);
            } else {
              let filename = path.basename(name);
              let extname = path.extname(filename);
              let contents = fs.readFile("E:/лабы 5 сем/node/cwp-01/config.json", "utf8", function (err, data) {
                let copright = JSON.parse(data).copyright;
                if (extname == ".txt") {
                  fileContent = fs.readFile(name, "utf8", function (err, data) {
                    fs.appendFile(newDir + '/' + filename, copright + "\\n" + data + "\\n", function (err) {
                      if (err) throw err;
                    });
                    if (err) throw err;
                  })
                }
                if (err) throw err;
              })
              console.log(name);
            }
          });
        }
      });

    }
  )(".", null);
  if (err) throw err;
});`, function(err) {
    if(err) throw err; 
    }); 