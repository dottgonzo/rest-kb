"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var Promise = require("bluebird");
var conffilepath = "/tmp/.xbindkb.conf";
function kbMap(maps, conf) {
    return new Promise(function (resolve, reject) {
        if (!conf) {
            conf = {};
        }
        var conffile = "";
        for (var i = 0; i < maps.length; i++) {
            var map = maps[i];
            if (!map.requestType) {
                map.requestType = "GET";
            }
            else {
                map.requestType = map.requestType.toUpperCase();
            }
            if (conf.requestradix) {
                conffile = conffile + "\"curl " + conf.requestradix + map.path + "\"\n";
            }
            else {
                conffile = conffile + "\"curl " + map.path + "\"\n";
            }
            conffile = conffile + map.key + "\n";
            conffile = conffile + "\n";
        }
        console.log(conffile);
        fs_1.writeFile(conffilepath, conffile, function (err) {
            if (err) {
                reject(err);
            }
            else {
                var xbindings_cmd = "xbindkeys";
                var xbindings_options = ["-X", ":0", "-n", "-f", conffilepath];
                var xb = child_process_1.spawn(xbindings_cmd, xbindings_options, { detached: true, stdio: "ignore" });
                xb.on('error', function (data) {
                    console.log("xb error", data);
                });
                xb.on('exit', function (code) {
                    console.log("xb exit", code);
                });
                xb.unref();
                resolve(true);
            }
        });
    });
}
exports.kbMap = kbMap;
