# precache-lister
Precache lister node module for Chrome service workers

This module is intended to programatically provide a list of resources for your custom service worker to cache by recursively looking through a provided directory and creating paths to each file.<br>

There are four parameters you can specify:<br>
pathToCache: A string specifying the relative path to the directory you want to cache. (ex: dist/")<br>
outputPath: A string specifying the relative path to the directory where the precache list should be saved. (ex: ../../test)<br>
outputName: A string specifying the name of the file to be generated. Do not wrap in quotes. This will also name the variable generated in the precache list.<br>
outputPrefix: A string specifying if a prefix is needed for the generated list of strings. If you need the precache lister to generate absolute paths instead of relative, simply write the absolute path to the directory the precache lister looks in, omitting the first forward slash.<br><br>

By default, the precache lister will list all files/folders recursively starting in the current working directory, and save them in a file called "precacheList.js" in the current working directory.
