
var fs = require("fs");
var recursive = require("recursive-readdir");

module.exports = precacheList;

function precacheList(cachePath, outPath, outName, outPrefix, ignored){
    var forwardSlash = "";
    if (outPrefix !== ""){
        forwardSlash = "/";
    }
    if (outPath && outPath != "" && outPath.slice(-1) != '/') outPath += '/';
    var outVar = outName.split(".")[0];

    recursive(cachePath,/* ignored,*/ function(err, files){ //Ignored file functionality currently does not work
        if (err){
            throw err;
        }
        for (var i = 0; i < files.length; i++){
           files[i] = forwardSlash + outPrefix + files[i];
        }
        var outFile = createOutFile(files);
        fs.writeFile(outPath + outName, outFile, function(err){
            if(err){
                throw err;
            }
            console.log("Precache list has been saved successfully!");
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
