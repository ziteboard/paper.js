/*
 * Paper.js - The Swiss Army Knife of Vector Graphics Scripting.
 * http://paperjs.org/
 *
 * Copyright (c) 2011 - 2016, Juerg Lehni & Jonathan Puckey
 * http://scratchdisk.com/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 */

var execSync = require('child_process').execSync,
    extend = require('extend'),
    // Require the __options object, so we have access to the version number and
    // make amendments, e.g. the release date.
    options = require('../../src/options.js');

function git(command) {
    return execSync('git ' + command).toString().trim();
}

options.date = git('log -1 --pretty=format:%ad');
options.branch = git('rev-parse --abbrev-ref HEAD');

// Get the date of the last commit from this branch for release date:
var version = options.version,
    branch = options.branch;

// If we're not on the master branch, use the branch name as a suffix:
if (branch !== 'master')
    options.version += '-' + branch;

// Allow the removal of the suffix again, as needed by the publish task.
options.resetVersion = function() {
    options.version = version;
}

module.exports = options;
