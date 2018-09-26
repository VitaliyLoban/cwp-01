const fs=require("fs");
const path=require("path")
const dir_path=process.argv[2];
const full_path=dir_path+'/'+path.basename(dir_path);
let newDir = dir_path + path.sep;
let files_1;
fs.mkdir(full_path, function (err) {
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
                    fs.appendFile(full_path + '/' + filename, copright + "\n" + data + "\n", function (err) {
                      if (err) throw err;
                    });
                    if (err) throw err;
                  })
                }
                if (err) throw err;
              })
              fs.appendFile(path.resolve(dir_path + "/summary.js"), `console.log('${name.substring(dir_path.length)}');`+'\n', function(err) {
                if(err) throw err; 
                }); 
            }
          });
        }
      });

    }
  )(dir_path, null);
  if (err) throw err;
});
fs.watch(full_path, (eventType, fileNames) => {
  if (fileNames) {
      console.log(fileNames.toString()+"Changed");
  }
});