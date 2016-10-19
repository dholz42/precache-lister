# precache-lister
Precache lister node module for Chrome service workers

This module is intended to programatically provide a list of resources for your custom service worker to cache by recursively looking through a provided directory and creating paths to each file.<br>

There are three parameters you can specify:<br>
pathToCache: A string specifying the relative path to the directory you want to cache. (ex: dist/")<br>
outputPath: A string specifying the relative path to the directory where the precache list should be saved. (ex: ../../test)<br>
outputName: A string specifying the name of the file to be generated. Do not wrap in quotes. This will also name the variable generated in the precache list.<br>
