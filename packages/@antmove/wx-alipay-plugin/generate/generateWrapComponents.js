/**
 * add component wrap bundle
 */
const path = require('path');
const fs = require('fs-extra');
const Config = require('../config.js');
const { generateLogPage } = require('./generateRuntimeLogPage');
const customComponentPrefix = Config.library.customComponentPrefix;
let entry = path.join(__dirname, `../__component`);

function copyDirectory (output, directoryPath) {
    let entryPath = entry + '/' + directoryPath;
    let outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`);
    
    fs.copy(entryPath, outputPath, function (err) {
        if (err) console.error(err);
    });
}


module.exports = function (output, config) {
    generateLogPage(output);
    Object.keys(config.compile.customComponent)
        .forEach(function (item) {
            copyDirectory(output, item);
        });
};
