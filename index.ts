import { spawn } from "child_process"

import { writeFile } from "fs"

import * as pathExists from "path-exists"
import * as Promise from "bluebird"


type IRequestType = "GET" | "get" | "post" | "POST"

interface IMap {

    key: string
    path: string
    requestType?: IRequestType
}

const conffilepath = "/tmp/.xbindkb.conf"

export function kbMap(maps: IMap[], conf?: { requestradix?: string }): Promise<true> {

    return new Promise<true>((resolve, reject) => {




        if (!conf) {

            conf = {}

        }



        let conffile = ""


        for (let i = 0; i < maps.length; i++) {

            const map = maps[i]


            if (!map.requestType) {
                map.requestType = "GET"
            } else {
                map.requestType = <IRequestType>map.requestType.toUpperCase()
            }

            if (conf.requestradix) {
                conffile = conffile + "\"curl " + conf.requestradix + map.path + "\"\n"
            } else {
                conffile = conffile + "\"curl " + map.path + "\"\n"
            }


                conffile = conffile + map.key +"\n"

                conffile = conffile + "\n"


        }

        console.log(conffile)
        writeFile(conffilepath, conffile, (err) => {

            if (err) {
                reject(err)
            } else {


                const xbindings_cmd = "xbindkeys"

                const xbindings_options = ["-n", "-f", conffilepath]



                spawn(xbindings_cmd, xbindings_options, { stdio: "ignore" })



                resolve(true)
            }


        })





    })




}