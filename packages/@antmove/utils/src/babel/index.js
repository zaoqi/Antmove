const babel = require('@babel/core');
const babelPreset = require('@babel/preset-env');
const ConstructorHandle = require('./constructorHandle.js');
const ifProcessHandle = require('./ifProcess.js');
const commentBlock = require('./alipayCodeBlock.js');
const requireModule = require('./requireModule');
const behavourHandle = require("./behavourHandle");
const minifyObjectHandle = require('./minifyObject');
const replaceCalleeHandle = require('./replaceCallee');
const processRequire = require('./processRequire');
const cjsToes = require('./cjs-to-es5');
const externalForWx = require('./externalForWx');
const getCbNameFn = require('./getCallName');
const replaceCallNames = require("./replaceCallName");
const fs = require('fs-extra');

function ConstructorHandleFn (code,  opts = {}) {
    return babel.transform(code, {
        plugins: [
            [
                ConstructorHandle,
                opts
            ]
        ]
    }).code;
}

function getCbName (code, opts = {}) {
    return babel.transform(code, {
        plugins: [
            [
                getCbNameFn,
                opts
            ]
        ]
    }).code;
}

function replaceCallName (code, opts = {}) {
    return babel.transform(code, {
        plugins: [
            [
                replaceCallNames,
                opts
            ]
        ]
    }).code;
}

function ifProcessHandleFn (code) {
    return babel.transform(code, {
        plugins: [ifProcessHandle]
    }).code;
}

function replaceCalleeHandleFn (code, entryName, outputName, opts = {}, cb) {
    return babel.transform(code, {
        plugins: [
            [
                replaceCalleeHandle,
                { 
                    entryName, 
                    outputName,
                    opts, 
                    cb
                }
            ]
        ],
        
    }).code;
}

function externalForWxFn (code, opts = {}) {
    return babel.transform(code, {
        plugins: [
            [
                externalForWx,
                opts
            ]
        ]
    });
}

function transformClass (code) {
    return babel.transform(code, {
        plugins: [
            [require("@babel/plugin-proposal-class-properties"), { "loose": true }]
        ]
    }).code;
}

function minifyObjectHandleFn (code, opts={}) {
    return babel.transform(code, {
        plugins: [
            [
                minifyObjectHandle,
                {
                    opts
                }
            ]
        ]
    }).code;
}

function requireModuleFn (code, ctx) {
    let depObj = {};
    try {
        let packageJson = JSON.parse(fs.readFileSync(ctx.entry + '/package.json'));
        depObj = Object.assign(packageJson["dependencies"], packageJson["devDependencies"]);
    } catch (error) {
        // error
    }

    return babel.transform(code, {
        plugins: [
            require('@babel/plugin-proposal-export-default-from'),
            [requireModule, {
                module: depObj
            }]
        ]
    }).code;
}

function processRequireForWx (code, opts = {}) {
    return babel.transform(code, {
        plugins: [
            require('@babel/plugin-proposal-export-default-from'),
            [
                processRequire,
                opts
            ]
        ]
    }).code;
}

function transformEs6 (code) {
    return babel.transform(code, {
        "presets": [
            [
                babelPreset
            ]
        ]
    }).code;
}

function cjsToesFn (code) {
    return babel.transform(code, {
        plugins: [
            [
                cjsToes
            ]
        ]
    }).code;
}

module.exports = {
    ConstructorHandle: ConstructorHandleFn,
    ifProcessHandleFn,
    commentBlock,
    requireModuleFn,
    behavourHandle,
    replaceCalleeHandleFn,
    minifyObjectHandleFn,
    transformEs6,
    cjsToes: cjsToesFn,
    externalForWxFn,
    transformClass,
    processRequireForWx,
    getCbName,
    replaceCallName
};
