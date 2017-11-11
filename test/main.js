"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var chai_1 = require("chai");
var express = require("express");
var app = express();
var switched = "";
app.get('/to/:number', function (req, res) {
    switched = parseInt(req.params.number);
    res.send(req.params.number);
});
app.get('/next', function (req, res) {
    switched = "next";
    res.send('next');
});
app.get('/prev', function (req, res) {
    switched = "prev";
    res.send('prev');
});
app.listen(2121);
var map = [
    {
        key: "c:90",
        path: "/to/0"
    },
    {
        key: "c:87",
        path: "/to/1"
    },
    {
        key: "c:88",
        path: "/to/2"
    },
    {
        key: "c:89",
        path: "/to/3"
    },
    {
        key: "c:83",
        path: "/to/4"
    },
    {
        key: "c:84",
        path: "/to/5"
    },
    {
        key: "c:85",
        path: "/to/6"
    },
    {
        key: "c:79",
        path: "/to/7"
    },
    {
        key: "c:80",
        path: "/to/8"
    },
    {
        key: "c:81",
        path: "/to/9"
    },
    {
        key: "c:86",
        path: "/next"
    },
    {
        key: "c:82",
        path: "/prev"
    },
];
before(function (done) {
    index_1.kbMap(map, { requestradix: "http://localhost:2121" }).then(function (a) {
        chai_1.expect(a).to.be.ok;
        done();
    }).catch(function (err) {
        done(err);
    });
});
describe("test rest-kb with numeric pad", function () {
    it("go to 1", function (done) {
        this.timeout(50000);
        console.log("press 1");
        var wait_forKey = setInterval(function () {
            if (switched === 1) {
                chai_1.expect(switched).to.be.eq(1);
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
    it("go to 2", function (done) {
        this.timeout(50000);
        console.log("press 2");
        var wait_forKey = setInterval(function () {
            if (switched === 2) {
                chai_1.expect(switched).to.be.eq(2);
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
    it("go to 3", function (done) {
        this.timeout(50000);
        console.log("press 3");
        var wait_forKey = setInterval(function () {
            if (switched === 3) {
                chai_1.expect(switched).to.be.eq(3);
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
    it("go to 4", function (done) {
        this.timeout(50000);
        console.log("press 4");
        var wait_forKey = setInterval(function () {
            if (switched === 4) {
                chai_1.expect(switched).to.be.eq(4);
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
    it("go to next", function (done) {
        this.timeout(50000);
        console.log("press +");
        var wait_forKey = setInterval(function () {
            if (switched === "next") {
                chai_1.expect(switched).to.be.eq("next");
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
    it("go to previous", function (done) {
        this.timeout(50000);
        console.log("press -");
        var wait_forKey = setInterval(function () {
            if (switched === "prev") {
                chai_1.expect(switched).to.be.eq("prev");
                clearInterval(wait_forKey);
                done();
            }
        }, 500);
    });
});
