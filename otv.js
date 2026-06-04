import fs from "node:fs";
import {spit} from './chyor.js'
import { setTimeout } from "node:timers/promises";
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        return (`${error.message}`);
    }
};
export async function play(file) {
    let fps = file.substring(0,file.indexOf("\n"));
    let frames = [];
    for (let i = 0, n= 1; i < n; i++) {
        frames.push(file.substring(file.indexOf("P")+1, file.indexOf("E")));
        file = file.replace("P","").replace("E","");
        if (file.includes("P")) n++;
    }
    let elapsed = (1000/Number(fps))*frames.length
    for (let i = 0; i < frames.length; i++) {
        let time = 1000/fps;
        if (i == 0) time = 0;
        const grab = await setTimeout(time, frames[i]);
        console.clear();
        console.log(spit(grab).img);
    }
    return elapsed;
}
