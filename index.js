"use strict";
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
                var xbindings_options = ["-n", "-f", conffilepath];
                child_process_1.spawn(xbindings_cmd, xbindings_options, { stdio: "ignore" });
                resolve(true);
            }
        });
    });
}
exports.kbMap = kbMap;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQ0FBcUM7QUFFckMseUJBQThCO0FBRzlCLGtDQUFtQztBQVluQyxJQUFNLFlBQVksR0FBRyxvQkFBb0IsQ0FBQTtBQUV6QyxlQUFzQixJQUFZLEVBQUUsSUFBZ0M7SUFFaEUsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFLckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRVIsSUFBSSxHQUFHLEVBQUUsQ0FBQTtRQUViLENBQUM7UUFJRCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFHakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFbkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBR25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQzNCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixHQUFHLENBQUMsV0FBVyxHQUFpQixHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ2pFLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtZQUMzRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7WUFDdkQsQ0FBQztZQUdHLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUE7WUFFbkMsUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUE7UUFHbEMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsY0FBUyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFHO1lBRWxDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUdKLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQTtnQkFFakMsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUE7Z0JBSXBELHFCQUFLLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7Z0JBSTVELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixDQUFDO1FBR0wsQ0FBQyxDQUFDLENBQUE7SUFNTixDQUFDLENBQUMsQ0FBQTtBQUtOLENBQUM7QUE1RUQsc0JBNEVDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3Bhd24gfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiXG5cbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gXCJmc1wiXG5cbmltcG9ydCAqIGFzIHBhdGhFeGlzdHMgZnJvbSBcInBhdGgtZXhpc3RzXCJcbmltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCJcblxuXG50eXBlIElSZXF1ZXN0VHlwZSA9IFwiR0VUXCIgfCBcImdldFwiIHwgXCJwb3N0XCIgfCBcIlBPU1RcIlxuXG5pbnRlcmZhY2UgSU1hcCB7XG5cbiAgICBrZXk6IHN0cmluZ1xuICAgIHBhdGg6IHN0cmluZ1xuICAgIHJlcXVlc3RUeXBlPzogSVJlcXVlc3RUeXBlXG59XG5cbmNvbnN0IGNvbmZmaWxlcGF0aCA9IFwiL3RtcC8ueGJpbmRrYi5jb25mXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGtiTWFwKG1hcHM6IElNYXBbXSwgY29uZj86IHsgcmVxdWVzdHJhZGl4Pzogc3RyaW5nIH0pOiBQcm9taXNlPHRydWU+IHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx0cnVlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cblxuXG5cbiAgICAgICAgaWYgKCFjb25mKSB7XG5cbiAgICAgICAgICAgIGNvbmYgPSB7fVxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgbGV0IGNvbmZmaWxlID0gXCJcIlxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG1hcHNbaV1cblxuXG4gICAgICAgICAgICBpZiAoIW1hcC5yZXF1ZXN0VHlwZSkge1xuICAgICAgICAgICAgICAgIG1hcC5yZXF1ZXN0VHlwZSA9IFwiR0VUXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFwLnJlcXVlc3RUeXBlID0gPElSZXF1ZXN0VHlwZT5tYXAucmVxdWVzdFR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uZi5yZXF1ZXN0cmFkaXgpIHtcbiAgICAgICAgICAgICAgICBjb25mZmlsZSA9IGNvbmZmaWxlICsgXCJcXFwiY3VybCBcIiArIGNvbmYucmVxdWVzdHJhZGl4ICsgbWFwLnBhdGggKyBcIlxcXCJcXG5cIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25mZmlsZSA9IGNvbmZmaWxlICsgXCJcXFwiY3VybCBcIiArIG1hcC5wYXRoICsgXCJcXFwiXFxuXCJcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgY29uZmZpbGUgPSBjb25mZmlsZSArIG1hcC5rZXkgK1wiXFxuXCJcblxuICAgICAgICAgICAgICAgIGNvbmZmaWxlID0gY29uZmZpbGUgKyBcIlxcblwiXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coY29uZmZpbGUpXG4gICAgICAgIHdyaXRlRmlsZShjb25mZmlsZXBhdGgsIGNvbmZmaWxlLCAoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgeGJpbmRpbmdzX2NtZCA9IFwieGJpbmRrZXlzXCJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHhiaW5kaW5nc19vcHRpb25zID0gW1wiLW5cIiwgXCItZlwiLCBjb25mZmlsZXBhdGhdXG5cblxuXG4gICAgICAgICAgICAgICAgc3Bhd24oeGJpbmRpbmdzX2NtZCwgeGJpbmRpbmdzX29wdGlvbnMsIHsgc3RkaW86IFwiaWdub3JlXCIgfSlcblxuXG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuXG5cblxuXG5cbiAgICB9KVxuXG5cblxuXG59Il19
