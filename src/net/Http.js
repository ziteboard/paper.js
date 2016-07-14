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

var Http = {
<<<<<<< HEAD
    request: function(options) {
        // Code borrowed from Coffee Script and extended:
        var xhr = new window.XMLHttpRequest();
        xhr.open((options.method || 'get').toUpperCase(), options.url,
                Base.pick(options.async, true));
        if (options.mimeType)
            xhr.overrideMimeType(options.mimeType);
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 0 || status === 200) {
                if (options.onLoad) {
                    options.onLoad.call(xhr, xhr.responseText);
=======
    request: function(method, url, callback, async) {
        // Code borrowed from Coffee Script and extended:
        async = (async === undefined) ? true : async;
        var xhr = new (window.ActiveXObject || XMLHttpRequest)(
                    'Microsoft.XMLHTTP');
        xhr.open(method.toUpperCase(), url, async);
        if ('overrideMimeType' in xhr)
            xhr.overrideMimeType('text/plain');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if (status === 0 || status === 200) {
                    callback.call(xhr, xhr.responseText);
                } else {
                    throw new Error('Could not load ' + url + ' (Error '
                            + status + ')');
>>>>>>> skali
                }
            } else {
                xhr.onerror();
            }
        };
        xhr.onerror = function() {
            var status = xhr.status,
                message = 'Could not load "' + options.url + '" (Status: '
                        + status + ')';
            if (options.onError) {
                options.onError(message, status);
            } else {
                throw new Error(message);
            }
        };
        return xhr.send(null);
    }
};
