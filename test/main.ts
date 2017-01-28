import { kbMap } from "../index"
import { expect } from "chai"
import * as express from "express"

const app = express()

let switched: any = ""


app.get('/to/:number', function (req, res) {
    switched = parseInt(req.params.number)
    res.send(req.params.number);
});

app.get('/next', function (req, res) {
    switched = "next"
    res.send('next');
});

app.get('/prev', function (req, res) {
    switched = "prev"
    res.send('prev');
});

app.listen(2121);


const map = [

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

]






before(function (done) {

    kbMap(map, { requestradix: "http://localhost:2121" }).then((a) => {
        expect(a).to.be.ok
        done()
    }).catch((err) => {
        done(err)
    })

})

describe("test rest-kb with numeric pad", function () {

    it("go to 1", function (done) {
        this.timeout(50000)
        console.log("press 1")


        const wait_forKey = setInterval(() => {
            if (switched === 1) {
                expect(switched).to.be.eq(1)
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })


    it("go to 2", function (done) {
        this.timeout(50000)
        console.log("press 2")


        const wait_forKey = setInterval(() => {
            if (switched === 2) {
                expect(switched).to.be.eq(2)
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })

    it("go to 3", function (done) {
        this.timeout(50000)
        console.log("press 3")


        const wait_forKey = setInterval(() => {
            if (switched === 3) {
                expect(switched).to.be.eq(3)
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })

    it("go to 4", function (done) {
        this.timeout(50000)
        console.log("press 4")


        const wait_forKey = setInterval(() => {
            if (switched === 4) {
                expect(switched).to.be.eq(4)
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })


    it("go to next", function (done) {
        this.timeout(50000)
        console.log("press +")


        const wait_forKey = setInterval(() => {
            if (switched === "next") {
                expect(switched).to.be.eq("next")
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })

    it("go to previous", function (done) {
        this.timeout(50000)
        console.log("press -")


        const wait_forKey = setInterval(() => {
            if (switched === "prev") {
                expect(switched).to.be.eq("prev")
                clearInterval(wait_forKey)
                done()
            }

        }, 500)

    })



})