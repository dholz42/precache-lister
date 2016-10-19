
var fs = require("fs");
var recursive = require("recursive-readdir");

module.exports = precacheList;

function precacheList(cachePath, outPath, outName, ignored){

    if (outPath && outPath != "" && outPath.slice(-1) != '/') outPath += '/';
    var outVar = outName.split(".")[0];

    recursive(cachePath,/* ignored,*/ function(err, files){
        if (err){
            throw err;
        }
        var outFile = createOutFile(files);
        fs.writeFile(outPath + outName, outFile, function(err){
            if(err){
                throw err;
            }
            console.log("File has been saved successfully!");
        })
    });

    var createOutFile = function(files){
        var outFile = "var " + outVar + " = [\n";
        for (var i = 0; i < files.length; i++){
            outFile += '\"' + files[i].replace(/\\/g,"/") + '\"';
            if (i+1 < files.length){
                outFile += ',';
            }
            outFile += "\n";
        }
        outFile += "];";
        return outFile;
    }
};
