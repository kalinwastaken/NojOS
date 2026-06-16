/*
The following is a work made with the help of many online resources,
Every website and person sourced in this project will be listed in what
they indirectly and directly helped create, mostly via SO comments.
Thank you all.
---------------------------------
Second note:
This project is an attempt to reconnect to older software;
and in that, try to solve problems that have already been solved.
Reinvent the wheel, so to speak.
It helps us understand the systems that make the world run.
*/
//import {
//    decode,
//    encode
//} from "./proccessor.js";
import {exec, spawn} from 'node:child_process';
import {spit} from './chyor.js';
import {mukha} from './mukha.js'
import {play} from './otv.js';
import {setTimeout} from 'node:timers/promises'
import promptSync from 'prompt-sync';
import systeminformation from 'systeminformation';
const prompt = promptSync();
import os from "node:os";
import fs, { readFileSync } from "node:fs";
import {create, all} from 'mathjs';
import terminalImage from 'terminal-image';
let global = "undefined number", vars = {}, ver = "1.1.5", user, debug = false, copy = ``, logs =  []
let CD = ""
//console.debug() redefinition
console.debug = function(x) {
    if (debug) console.log(x);
    logs.push(x);
}
console.debug("START-UP")
/*node NojOS-1.1.5/NojOS-1.1.5/NojOS */
const config = { }, math = create(all, config), si = systeminformation;
fs.writeF = function(file, data) {
    console.debug(`WRITE in ${file}`);
    fs.writeFileSync(file, data)
}
if (process.cwd() != os.homedir() || process.argv[1] != `${os.homedir()}\\NojOS-${ver}\\NojOS-${ver}\\NojOS`) {
    console.log(`Oh no!
It seems you have opened NojOS-${ver} outside of your home directory.
Restart your terminal inside your home directory and move NojOS-${ver} to your home directory,
${os.homedir()}
This program uses the home directory to access files systematically.`)
    process.exit(0);
}
let logo = ("                   ....:::::::::::::::::::::::::::::::::::::::::::::::::::::::...                      \n               ..::---------------------------------------------------------------:..               \n            ..:----------------------------------------------------------------------:...           \n         ..::---------------------------------------------------------------------------:..         \n        .:--------------------------------------------------------------------------------:..       \n      ..------------------------------------------------------------------------------------:.      \n    ..:--------------------------------------------------------------------------------------:..    \n    .:-----------------------------------------------------------------------------------------..   \n   .:-------------------------------------------------------------------------------------------:.  \n ..:---------------------------------------------------------------------------------------------.. \n .:----------------------------------------------------------------------------------------------:..\n..:-----------------------------------------------------------------------------------------------:.\n.:------------------------------------------------------------------------------------------------:.\n.:-------------------------------------------------------------------------------------------------.\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--:::::::---------::::::::--------------------:...----------::.....::------------::....:::-::-----:\n.----::. ..-----------..:-----------------------..:-------:...:-----:...:--------..::---::...:-----:\n.------:   .:---------:.:--------------------------------.. :---------:...:-----. :--------..:-----:\n.------:......--------:.:-------------------------------. .:-----------:. .:---:  .---------.:-----:\n.------:.::.  .:------:.:-------::....::-------::.:----.  .-------------.  .----.  .::------:------:\n.------:.:--:. ..-----:.:-----:..:---:...:---::.  .---:.  .-------------:   :----..  ..::----------:\n.------:.:---:.. .:---:.:----:. :------. .:-----  .---:.  :-------------:   :------:.    ..--------:\n.------:.:-----:. .:--:.:----. .--------. .:----  .---:.  .-------------:   :---------:..   .:-----:\n.------:.:------:.. .::.:---:. .--------.  :----  .----.  .-------------:  .----:--------:.. .:----:\n.------:.:--------:. ...:----.  :-------. .-----  .----:. .:------------. .:----.:---------. .:----:\n.------:.:----------..  :----:. .-------..:-----  .-----:...:----------...:-----..---------: .:----:\n.------..:-----------:. :-----:...:----..:------  .-------:...:------:...-------...:------:..:-----:\n.---:::...::----------:.:-------:......:--------  .---------::.......::---------.:::.......:-------:\n.-----------------------------------------------  :------------------------------------------------:\n.----------------------------------------------- .:------------------------------------------------:\n.----------------------------------------:...:::.:-------------------------------------------------:\n.-----------------------------------------::..::---------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.:-------------------------------------------------------------------------------------------------.\n.:------------------------------------------------------------------------------------------------:.\n .:-----------------------------------------------------------------------------------------------:.\n .:----------------------------------------------------------------------------------------------:.\n  .:---------------------------------------------------------------------------------------------.. \n   .:-------------------------------------------------------------------------------------------..  \n    .:----------------------------------------------------------------------------------------:.    \n    ...--------------------------------------------------------------------------------------:..    \n       .:-----------------------------------------------------------------------------------..      \n        ..:-------------------------------------------------------------------------------:.        \n          ..:--------------------------------------------------------------------------:...         \n            ...:--------------------------------------------------------------------::..            \n                ..::-------------------------------------------------------------:..                \n                     ....::::::::::::::::::::::::::::::::::::::::::::::::::.....                    \n");
//gay shit
if (Date().substring(4,7) == "Jun") {
    let colors = [[255,0,0],[255,127,0],[255,255,0],[0,127,0],[0,0,200],[100,0,130]]
    let out = logo;
    for (let i = 0; i < 6; i++) {
        let color = colors[i]
        color = color[0]+";"+color[1]+";"+color[2]
        String.prototype.index9 = function(search) {
            let thi = this
            for (let i = 0; i < 8; i++) {
                thi = thi.replace(search,"")
            }
            if (thi.indexOf(search)+8 == 7) {return this.length}
            else return thi.indexOf(search)+8
        }
        logo = logo.replace(out.substring(0,out.index9("\n")).replaceAll("undefined",""),`\u001b[38;2;${color}m${out.substring(0,out.index9("\n")).replaceAll("undefined","")}`)
        out = out.replace(out.substring(0, out.index9('\n')))
    }
}
console.log(logo += "\u001b[0m")
console.log(`v${ver}`);
console.log(`\u001b]8;;https://www.pcrf.net/\u001b\\Stand with \u001b[31mPa\u001b[32mles\u001b[0mti\u001b[38;2;30;30;30mne\u001b]8;;\u001b\\\u001b[0m`)
//Looks nicer if i use console;
console.beep = function() {process.stdout.write('\u0007')}
if (readFile(`NojOS-${ver}/NojOS-${ver}/userdata.json`) == "") {
    fs.writeF(`NojOS-${ver}/NojOS-${ver}/userdata.json`, `{\n"user":"${process.env.USERNAME}",\n"name":"${prompt("Name: ")}",\n"create":"${Date()}",\n"correct":"order", "cmd":{}}`)
    console.debug("CREATE USERDATA")
    user = JSON.parse(readFile(`NojOS-${ver}/NojOS-${ver}/userdata.json`));
} else user = JSON.parse(readFile(`NojOS-${ver}/NojOS-${ver}/userdata.json`));
console.log(`Hello ${user.name}`);
console.log(`For help; type ~help`);
if (readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) == "") {
    fs.writeF(`NojOS-${ver}/NojOS-${ver}/hist.laika`, "#LIB")
}
String.prototype.ext = function() {
    console.debug("GRAB FILE EXT");
    let thi = this;
    let period = 0;
    for (let i = 0, n = 1; i < n; i++) {
        if (thi.replace(".").includes(".")) {
            n++
            thi = thi.replace(".","")
        } else {
            period = i+thi.indexOf(".")
        }
    }
    return this.substring(period, this.length);
}
String.prototype.filename = function() {
    console.debug("GRAB FILE NAME");
    let thi = this;
    let period = 1;
    for (let i = 0, n = 1; i < n; i++) {
        if (thi.replace("/").includes("/")) {
            n++
            thi = thi.replace("/","")
        } else {
            period = i+thi.indexOf("/")
        }
    }
    return this.substring(period, this.length);
}
//Forkers note, most base commands are based off of the substring system,
//though arrays are supported they are not standard
let help = {
    "help":" - Write this message",
    "dict":" word - Get definition of word per Webster's English Dictionary",
    "shape":" - Load a .laika shape.",
    "math":' - Run math equations',
    "var":" name=value - Define a variable with a value, can be called in ~echo and .laika files.",
    "save":" filename- Create or overwrite a file. Use \\n for newlines and MATH for the last returned math value.",
    "read":" filename - Read a file",
    "laika":" - Execute a .laika file in NojOS assembly.",
    "specs":" - Get specifications about the device",
    "calendar":" - Get calendar for current month.",
    "date":" - Get time specifications",
    "echo":" string - Echo message into console",
    "run":"filename - Runs a .js file",
    "image":" - Reads an image from file",
    "chyor":" - Reads .chyor file (NojOS specific)",
    "otv":" - Reads .otv file (NojOS specific)",
    "exit":" - Exit the OS, use ^C to exit quickly"

}
let cmd = {
    cd:{
        func:function(command, args){
            if (args[1] != '~') {
            if (fs.existsSync(args[1]) && fs.lstatSync(args[1]).isDirectory()) {
                CD += args[1]+"/";
            } else if (!fs.existsSync(args[1])) {
                throw new Error(`'${args[1]}' does not exist.`)
            } else {
                throw new Error(`'${args[1]}' is not a directory.`)
            }
        } else CD = '';
        },
        async:false
    },
    help:{
    func:function(command, array){
        try {
            if (command == "help") {
                for (let i = 0; i < Object.keys(help).length; i++) {
                    console.log(`~${Object.keys(help)[i]}${help[Object.keys(help)[i]]}`)
                }
            } else {
                console.log(`~${array[1]}${help[array[1]]}`)
            }
        } catch (err) {
            console.log(err.message);
        }
    },
    async:false
    },
    lscmd:{
        func:function(command){
            for (let i = 0; i < Object.keys(cmd).length; i++) {
                console.log(Object.keys(cmd)[i]);
            }
        },
        async:false
    },
    math:{
        func:function(command){
            console.debug("ENTER MATH REPL");
            mathf(prompt(`\u001b[31;1m${user.name}@${process.env.USERNAME}/${CD}/math\u001b[0m - `), false);
        },
        async:true
    },
    beep:{
        func:function(){
            console.beep();
        },
        async:false
    },
    "prog-info":{
        func:function(command){
            console.debug("PROG INFO");
            console.log(`Version: v${ver}`);
            console.log(`Username: ${user.name}`)
            console.log("Logs:")
            console.log("  "+logs.toString().replaceAll(",","\n  "));
        },
        async:false
    },
    "file-info":{
        func:function(command) {
            console.debug("FILE INFO");
            let size = readFile(command.substring(10,command.length)).length;
            let tag = "bytes"
            if (size >= 1024) size = size/1024, tag = "KB";
            if (size >= 1024) size = size/1024, tag = "MB";
            if (size >= 1024) size = size/1024, tag = "GB";
            if (size >= 1024) size = size/1024, tag = "TB";
            size = String(Math.round(size*100)/100);
            const stat = fs.lstatSync(command.substring(10,command.length))
            if (!stat.isDirectory()) {
            const ext = JSON.parse(readFile(`NojOS-${ver}/NojOS-${ver}/ext.json`))
            console.log(`Name: ${command.substring(10,command.length).filename()}`);
            console.log(`Type: ${ext[command.substring(10,command.length).filename().ext()]}`.replace("undefined",`File "${command.substring(10,command.length).filename().ext().replace(".","").toUpperCase()}"`))
            console.log(`Size: ${size} ${tag}`);
            console.log(`Last accessed ${stat.atime}`);
            console.log(`Last modified ${stat.mtime}`);
            console.log(`Last modified by system ${stat.ctime}`);
            console.log(`Created ${stat.mtime}`);
            } else {
                throw new Error("\u001b[31mERROR:\u001b[0m Unable to read directory as file")
            }
        },
        async:false
    },
    "device-info":{
        func:async function(command) {
            await specs();
        },
        async:true
    },
    //0x414, 0x43B, 0x44F, 0x20, 0x421, 0x43E, 0x43B, 0x44F, 0x20, 0x42F, 0x441, 0x43E, 0x43D, 0x43E, 0x432, 0x43D, 0x430, 0x2F, 0x432, 0x438, 0x447, 0x20, 0x41C, 0x435, 0x43D, 0x437, 0x438, 0x441
    "yummers":{
        func:function(command) {
            console.debug("JOKE-СОЛЯ");
            console.log(`${command.substring(8,command.length)}\nYummers!`)
        },
        async:false
    },
    "ai":{
        func:function(command) {
            console.debug("JOKE-ИИ");
            console.log("No.");
        },
        async:false
    },
    "debug":{
        func:function(command) {
            debug = !debug;
            console.debug(`DEBUG = ${debug}`)
        },
        async:false
    },
    "clear":{
        func:function(command) {
            console.debug("CLEAR")
            console.clear();
        },
        async:false
    },
    "save-folder":{
        func:function(command) {
            fs.mkdirSync(command.substring(12, command.length))
        }
    },
    "save":{
        func:function(command, args){
            try {
            console.debug("SAVE FILE")
            let text = "";
            function mod() {
                let ask = "\n"+prompt("");
                if (ask != '\nfin') {
                    text += ask
                    text = text.replace("`fin","fin");
                    mod()
                }
            }
            mod();
            text = text.replace("\n","")
            fs.writeF(readFile(CD+args[1]), text)
        } catch (err) {

            console.log(err.message)
        }
        },
        async:false
    },
    "correct":{
        func:function(command) {
            user.correct = command.substring(8,command.length);
            fs.writeF(`NojOS-${ver}/NojOS-${ver}/userdata.json`, JSON.stringify(usr))
        }
    },
    "read":{
        func:function(command){
            console.log(readFile(CD+command.substring(5, command.length)));
        },
        async:false
    },
    "copy":{
        func:function(command){
            copy = command.substring(5,command.length);
        },
        async:false
    },
    "paste":{
        func:function(command) {
            let name = copy + " - (copy)";
            if (command.length > 5) name = command.substring(6,command.length)
            fs.writeF(CD+name, readFile(copy))
        },
        async:false
    },
    "rename":{
        func:function(command){
            let oldP = command.substring(7,command.replace(" ","").indexOf(" ")+1)
            let newP = command.substring(command.replace(" ","").indexOf(" ")+1,command.length);
            fs.renameSync(CD+oldP, CD+newP)
        },
        async:false
    },
    "del":{
        func:function(command) {
            if (command.substring(4,command.length) != `NojOS-${ver}/NojOS-${ver}/NojOS.js`) {
            fs.rmSync(CD+command.substring(4,command.length));
            } else {
                throw new Error("\u001b[31mERROR:\u001b[0m Unable to delete NojOS")
            }

        },
        async:false
    },
    "run":{
        func:function(command) {
            console.debug("EVAL FILE");
            eval(readFile(CD+command.substring(4,command.length)));
        },
        async:false
    },
    "mukha":{
        func:function(command) {
            console.debug("MUKHA");
            console.log("Sorry, Mukha has not been implemented yet!")
        },
        async:false
    },
    "exec":{
        func:function(command) {
            console.debug("EXECUTE FILE");
            exec(command.substring(5,command.length), (error, stdout, stderr) => console.log(stdout));
        },
        async:false
    },
    "laika":{
        func:function(command) {
            console.debug("EXECUTE LAIKA")
            let file = command.substring(6, command.length);
            if (file.substring(file.length-6,file.length) != ".laika") file  = file + ".laika";
            compile(readFile(CD+file));
            console.debug(`ERROR`)
        },
        async:false
    },
    "cmd":{
        func:function(command) {
            console.log("Under construction")
            //Technical Difficulties
            /*let name = command.substring(4,command.length).toLowerCase();
            let err = false
            for (let i = 0; i < Object.keys(cmd).length; i++) {
                if (Object.keys(cmd)[i] == name) err = true;
                if (cmd[Object.keys(cmd)[i]].base == true) throw new Error("Unable to edit base commands")
            }
            if (err) {
                console.log(`Warning, command already exists.
Proceeding will destroy old command and cannot be recovered`)
                    let p = prompt("Continue (Y/N): ")
                    if (p == "Y") {
                        create()
                    }
            } else {
                create()
            }
            function create() {
            {
            let func = "";
            for (let i = 0, n = 1; i < n; i++) {
                let last = `
${prompt("")}`
                func += last
                if (last != "\nfin") n++
            }
            let async = prompt("Async: ")
            if (async == "true") async = true
            else if (async == "false") async = false
            else async = false;
            cmd[name] = {
                func:function(command, args)
                {
                eval(func.replaceAll("fin", ""))
                },
                async:async
            }
            console.log(cmd[name].func)
            if (user.cmd == undefined) user.cmd = {};
            user.cmd[name] = cmd[name]
            let usr = user;
            usr.cmd[name].func = func.replaceAll("fin", "")
            fs.writeF(`NojOS-${ver}/NojOS-${ver}/userdata.json`, JSON.stringify(usr))
            console.log(cmd);
            let fuc = cmd[name].func;
            console.log(fuc);
            cmd[name].func = new Function("function(command,args){"+fuc+"}")
            cmd[name].base = false;
        }}*/
        },
        async:false
    },
    "calendar":{
        func:function(command) {
            cal();
        },
        async:false
    },
    "echo":{
        func:function(command) {
            console.debug(`ECHO ${command.substring(5,command.length)}`)
            command = command.substring(5, command.length).replaceAll("MATH", global).replaceAll("USER", process.env.USERNAME).replaceAll("DATE", Date().substring(0, 21)).replaceAll("\\n","\n");
            for (let v = 0; v < Object.keys(vars).length; v++) {
                command = command.replaceAll("@"+Object.keys(vars)[v], vars[Object.keys(vars)[v]]);
            }
            console.log(command);
        },
        async:false
    },
    "chyor":{
        func:function(command, args) {
            console.log("Loading\u001b[25m...")
            let file = args[1]
            let retro = false;
            if (args[2] == "retro") retro = true;
            if (!file.includes(".chyor")) file += ".chyor";
            console.debug(`CHYOR ${file}`);
            let dat = spit(readFile(CD+file),retro)
            console.log(dat.img);
            let buffer = dat.buffer
            console.debug(`LENGTH ${buffer.l}`);
            console.debug(`WIDTH ${buffer.w}`);
            console.debug(`RETRO ${retro}`);
        },
        async:false
    },
    "otv":{
        func:async function(command){
            console.debug(`OTV ${command.substring(4,command.length)}`)
            console.log("Loading...");
            let time = await play(readFile(CD+command.substring(4,command.length)));
            let func = await setTimeout(time, work);
            func();
        },
        async:true
    },
    "image":{
        func:async function(command){
            try {
            let img = await terminalImage.file((CD+command.substring(6,command.length)))
            console.debug(`IMAGE`)
            console.log(img);
            } catch (err) {
                console.log(err.message);
            }
            let func = await work;
            func();
        },
        async:true
    },
    "shape":{
        func:function(command){
            shape(CD+command);
        },
        async:false
    },
    "date":{
        func:function(command){
            console.log(Date().substring(0, 21));
        },
        async:false,
    },
    "dict":{
        func:function(command){
            console.debug(`DICT`)
            /*From Matthew Reagan
            https://github.com/matthewreagan/WebstersEnglishDictionary*/
            let json = readFile(`NojOS-${ver}/NojOS-${ver}/dict.json`);
            let dict = JSON.parse(json);
            let output = dict[command.substring(5, command.length)]
            let nums = 1;
            if (output == undefined) {
                output = "Invalid word";
            } else {
                output = output.replaceAll("\\n", "\n");
            }
            console.log(output);
        },
        async:false
    },
    "var":{
        func:function(command){
            console.debug(`VAR ${command.substring(4, command.indexOf("="))} = ${command.substring(command.indexOf("=") + 1, command.length)}`)
            vars[command.substring(4, command.indexOf("="))] = command.substring(command.indexOf("=") + 1, command.length);
        },
        async:false
    },
    "dir":{
        func:function(command){
            console.log(displayFolder(CD+command.substring(4,command.length)));
        },
        async:false
    },
    "shutdown":{
        func:function(command) {
            exec('shutdown /l', (error,stdout,stderr) => {
                //apparently gotta do that
                process.stdout.write(stdout);
            });
        },
        async:true
    },
    "node":{
        func:function(command) {
            node(prompt(`\u001b[31;1m${user.name}@${process.env.USERNAME}/${CD}/node\u001b[0m - `));
        },
        async:true
    },
    "destroy":{
        func:function(command) {
            let cmdV = cmd[command.substring(8, command.length)]
            let base = cmdV.base;
            //I ain't wasting that many lines
            if (base == undefined) base = true;
            if (!base) {
                console.log("Warning, this will destroy the command permanently")
                let yn = prompt("Continue (Y/N)");
                if (yn == "Y") {
                    cmd[command.substring(8,command.length)] = {async:false}
                    user.cmd[command.substring(8,command.length)] = undefined
                    //I should probably make this it's own function but I'm too lazy to.
                    fs.writeF(`NojOS-${ver}/NojOS-${ver}/userdata.json`, JSON.stringify(user))
                }
            } else {
                throw new Error("ERROR: You are not able to destroy any base commands.")
            }
        },
        async:false
    }
};
/*for (let i = 0; i < Object.keys(user.cmd).length; i++) {
    cmd[Object.keys(user.cmd)[i]] =  user.cmd[Object.keys(user.cmd)]
    if (cmd[Object.keys(user.cmd)[i]] != undefined) {
    cmd[Object.keys(user.cmd)[i]].func = new Function(cmd[Object.keys(user.cmd)[i]].func)
    cmd[Object.keys(user.cmd)[i]].base = false
    }   
}*/
async function work() {
    let value = prompt(`COLOR \u001b[32;1m${user.name}@${process.env.USERNAME}/${CD}\u001b[0m - `);
    console.debug(`COMMAND ${value}`);
    try {
    fs.writeF(`NojOS-${ver}/NojOS-${ver}/hist.laika`, readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) + "\n" + value)
    if (value != null && value.substring(0, 1) == "~") {
        value = value.replace(/\s+/g,' ').trim();
        let command = value.substring(1, value.length)
        let s = command;
        if (command.substring(0,4)+" "=="err ") {
            throw new Error("Error Message")
        }
        try {
        String.prototype.ind = function(search) {
            if (this.indexOf(search) == -1) return this.length
            else return this.indexOf(search)
        }
        let arrcom = "[\""+command.replaceAll(" ", "\", \"")+"\"]"
        let array = JSON.parse(arrcom)
        await cmd[(command + " ").substring(0,command.ind(" "))].func(command, array);
        } catch (err) {
            if (command != "exit" && err.message == "Cannot read properties of undefined (reading 'func')") {
                command = "err"
            } else if (err.message != "Cannot read properties of undefined (reading 'func')") {
                console.log("\u001b[31mERROR:\u001b[0m " + err.message);
            }
        }
        if (command != "exit" && command == "err") {
            command = s;
            console.debug(`ERROR`)
            let com = command;
            command = command.substring(0,command.indexOf(" "))
            let commands = Object.keys(cmd)
            let sim = [];
            let obj = {};
            // Source - https://stackoverflow.com/a/61991387
            // Posted by Arthur Sidorenko
            // Retrieved 2026-05-31, License - CC BY-SA 4.0

            function solution(str1, str2) {
                let count = 0;
                let find = -1;
                for (let i = 0; i < str1.length; i++) {
                    find = str2.indexOf(str1.charAt(i));
                if (find > -1) {
                    count++;
                    str2 = str2.substr(0, find) + str2.substr(find + 1);
                }
                }
                return count;
            };
            function ShareByOrder(str1, str2){
                let count = 0;
                let l = str2.length
                if (str1.length > str2.length) l = str1.length
                for (let i = 0; i < l; i++) {
                    if (str1.substring(i,i+1) == str2.substring(i,i+1)) count++;
                }
                return count;
            }
            //equals ShareByOrder for error correction...
            let SolMeth = ShareByOrder;
            if (user.correct == "order") SolMeth = ShareByOrder
            else if (user.correct == "pure") SolMeth = solution
            for (let i = 0; i < commands.length; i++) {
                sim.push(SolMeth(commands[i],com));
                obj[SolMeth(commands[i],com)] = commands[i];
            }
            let max = Math.max.apply(Math, sim);
            let guess = obj[max];
            let tag = ` Did you mean '${guess}'?`
            if (guess == com) tag = "";
            if (guess.length > max+3) tag = "";
            com = com+" "
            console.log(`\u001b[31mERROR:\u001b[0m '${com.substring(0,com.indexOf(" "))}' is not defined.${tag}`);
        } else if (command == "exit") {
            console.log("Thank you for using NojOS");
        }
        let con = 'command != "exit"'
        for (let i = 0; i < Object.keys(cmd).length; i++) {
            if (cmd[Object.keys(cmd)[i]].async) con += ` && command.substring(0,${Object.keys(cmd)[i].length}) != "${Object.keys(cmd)[i]}"`
        }
        if (eval(con)) work();
    } else if (value != null) {
        console.debug(`ERROR`)
        value = value+" "
        console.log(`\u001b[31mERROR:\u001b[0m '${value.substring(0,value.indexOf(" "))}' is invalid syntax, try '~${value.substring(0,value.indexOf(" "))}'`);
        work();
    } else {
        console.debug(`EXIT`)
        console.log("Thank you for using NojOS");
    }} catch (err) {
        console.log(err.message);
        work();
    }
}
/**
 * @param {string} command The command from prompts 
 */
function shape(command) {
    console.debug("SHAPE")
    let shape = readFile(command.substring(6, command.length) + ".laika");
    console.debug(shape);
    let output = "";
    if (shape.substring(1, 6) == "SHAPE") {
        shape = shape.replace("#SHAPE\n", "");
        if (shape.substring(9, 13) == "RECT") {
            shape = shape.replace("#RECT\n", "");
            console.debug("RECT");
            let l = Number(shape.substring(shape.indexOf("l:") + 2, shape.indexOf("\nw")));
            let w = Number(shape.substring(shape.indexOf("w:") + 2, shape.length))
            console.debug(`L: ${l}`);
            console.debug(`W: ${w}`);
            for (let i = 0; i < w; i++) output += "-";
            output += "\n"
            for (let i = 0; i < l - 2; i++) {
                output += "-"
                for (let v = 0; v < w - 2; v++) output += " "
                output += "-\n";
            }
            for (let i = 0; i < w; i++) output += "-";
        } else if (shape.substring(9, 15) == "TRIANG") {
            console.debug("TRIANG")
            let l = Number(shape.substring(shape.indexOf("l:") + 2, shape.indexOf("\nw")));
            let w = Number(shape.substring(shape.indexOf("w:") + 2, shape.length))
            console.debug(`L: ${l}`);
            console.debug(`W: ${w}`);
            let space = 0;
            shape = shape.replace("#TRIANG\n", "")
            if (shape.substring(18, 23) == "RIGHT") {
            console.debug("RIGHT");
                output = "-"
                for (let i = 0; i < l - 2; i++) {
                    space = space + (w / l);
                    let spaces = " ".repeat(space)
                    output += "\n-" + spaces + "-";
                }
                output += "\n" + "-".repeat(w);
            }
            //Damn equilateral, isoseleces, and scalene FUCKING triangles. 
            //else {
            //output = " ".repeat(w/2)+"-";
            //for(let i = 0; i < l-1; i++) {
            //  space = space + (w/l);
            //let spaces = " ".repeat(space)
            //output +="\n"+" ".repeat(w/2-i-2)+"-"+spaces+"-";
            //}
            //output+="\n"+"-".repeat(w);
            //}
            //} else if (shape.substring(9,13) == "DIAM") {
            //    let r = Number(shape.substring(shape.indexOf("r:")+2, shape.length));
            //    for (let i = 0; i < r; i++) {
            //        output += "\n"+" ".repeat(r-i)+"-"+" ".repeat(2*i)+"-";
            //    }
            //    for (let i = r-1; i > r; i--) {
            //        output += "\n"+" ".repeat(r-i)+"-"+" ".repeat(2*i)+"-";
            //    }
        } else {
            console.debug("INVALID");
            output = "Invalid shape"
        }
    } else if (!shape.includes("ERROR:")) {
        output = "File is not a shape.";
    } else {
        output = shape;
    }
    console.log(output);
}
async function specs() {
    console.debug("DEVICE-INFO");
    /*
    Sourced from
    https://nodejs.org/api/os.html
    */
    console.log(`Username: ${os.userInfo().username}`);
    console.log("Device Language(s):");
    for (let v = 0; v < navigator.languages.length; v++) {
        console.log(`    ${navigator.languages[v]}`);
    }
    console.log(`OS: ${os.type()}`);
    console.log(`Hostname: ${os.hostname()}`)
    console.log(`Platform: ${os.platform()}`);
    console.log(`Machine: ${os.machine()}`);
    console.log(`Version: ${os.version()}`);
    console.log(`Free System Memory: ${os.freemem()} (bytes)`);
    console.log(`Home Directory: ${os.userInfo().homedir}`);
    console.log(`Wifi Networks:`)
    const networks = await si.wifiNetworks();
    let output = "";
    for (let i = 0,n = 1; i < n; i++) {
        output += ("\n   "+networks[i]['ssid']);
        output += (`\n   Security: ${networks[i]['security'].toString()}`)
        if (networks[i+1] != undefined) n++;
    }
    output = output.replace("\n","")
    console.debug(networks);
    console.log("CPUs:");
    for (let j = 0; j < os.cpus().length; j++) {
        console.log(`   Model: ${os.cpus()[j].model}`);
        console.log(`   Speed: ${os.cpus()[j].speed}`);
        console.log("   Times (in ms):");
        console.log(`     User Mode: ${os.cpus()[j].times.user}`);
        console.log(`     Nice Mode: ${os.cpus()[j].times.nice}`);
        console.log(`     SYS Mode: ${os.cpus()[j].times.sys}`);
        console.log(`     Idle Mode: ${os.cpus()[j].times.idle}`);
        console.log(`     IRQ Mode: ${os.cpus()[j].times.irq}`);
        console.log("--------------");
    }
    work();
}
//From Mitchell Mudd
function readFolder(folderPath) {
    console.debug(`READ ${folderPath}`);
    // Source - https://stackoverflow.com/q/51873994 
    // Posted by user9945420, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-05-24, License - CC BY-SA 4.0
    try {
    const directoryLevelInfo = fs.readdirSync(folderPath, 'utf8').map(item => {
        const path = folderPath+"/"+item;
        const isDir = fs.lstatSync(path).isDirectory();
        const isFile = fs.lstatSync(path).isFile();
        return {
            name: item,
            path: path,
            isDir: isDir,
            isFile: isFile
        };
    });
    return directoryLevelInfo;
    } catch (error) {
        console.debug(`ERROR`)
        return error.message;
    }
}
Array.prototype.isEmpty = function() {
    return (this[0] == undefined);
}
function displayFolder(folder) {
    console.debug(`DISPLAY ${folder}`);
    let data = readFolder(folder);
    let output = "";
    if (typeof data == "object") {
    if (data[0] != undefined) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].isDir) output += "\n"+data[i].name+" (folder)"
        else output += "\n"+data[i].name
    }
    }} else output = data;
    return output;
}
function readFile(filePath) {
    console.debug(`READ ${filePath}`);
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        console.debug(`ERROR`)
        return (`${error.message}`);
    }
};

function cal() {
    console.debug(`CALENDAR`);
    let month = Date().substring(4, 7);
    console.log(Date().substring(4, 7) + " " + Date().substring(11, 15));
    console.log("Su Mo Tu We Th Fr Sa");
    //Get first day of the current month.
    function getFirst() {
        let today = Date().substring(0, 3);
        let value;
        value = Number(Date().substring(8, 10));
        for (value; value > 1; value--) {
            if (today == "Sun") {
                today = "Sat";
            } else if (today == "Sat") {
                today = "Fri";
            } else if (today == "Fri") {
                today = "Thu";
            } else if (today == "Thu") {
                today = "Wed";
            } else if (today == "Wed") {
                today = "Tue";
            } else if (today == "Tue") {
                today = "Mon";
            } else {
                today = "Sun";
            }
        }
        return today;
    }
    //I'm too lazy to do a procedurally generated calendar;
    /**
     * Checks if first day of month is day, and if so, prints accordingly.
     * @param {string} day Sun, Mon, Tue, etc.
     * @param {string} tx1 First line of calendar
     * @param {string} tx2 Second line of calendar
     * @param {string} tx3 Third line of calendar
     * @param {string} tx4 Fourth line of calendar
     * @param {string} tx30 If month has 30 days, print this as fifth line
     * @param {string} tx31 If month has 31 days, print this as fifth line
     * @param {string} txleap If month is Feb. and is a leap year, print this as fifth line
     * @param {string} txnotleap If month is Feb. and isn't a leap year, print this as fifth line
     */
    function calday(day, tx1, tx2, tx3, tx4, tx30, tx31, txleap, txnotleap) {
        if (getFirst() == day) {
            console.log(tx1);
            console.log(tx2);
            console.log(tx3);
            console.log(tx4);
            if (month == "Jan" || month == "Mar" || month == "May" || month == "Jul" || month == "Aug" || month == "Oct" || month == "Dec") console.log(tx31);
            else if (month == "Apr" || month == "Jun" || month == "Sep" || month == "Nov") console.log(tx30);
            else if (month == "Feb") {
                if (Number(Date().substring(11, 15)) % 4 == 0 || (Date().substring(13, 15) == "00" && Number(Date.substring(11, 15))) % 400 == 0) console.log(txleap);
                else console.log(txnotleap);
            }
        }
    }
    calday("Sun", "1  2  3  4  5  6  7", "8  9 10 11 12 13 14", "15 16 17 18 19 20 21", "22 23 24 25 26 27 28", "29 30", "29 30 31", "29", "");
    calday("Mon", "   1  2  3  4  5  6", "7  8  9 10 11 12 13", "14 15 16 17 18 19 20", "21 22 23 24 25 26 27", "28 29 30", "28 29 30 31", "28 29", "28");
    calday("Tue", "      1  2  3  4  5", "6  7  8  9 10 11 12", "13 14 15 16 17 18 19", "20 21 22 23 24 25 26", "27 28 29 30", "27 28 29 30 31", "27 28 29", "27 28");
    calday("Wed", "         1  2  3  4", "5  6  7  8  9 10 11", "12 13 14 15 16 17 18", "19 20 21 22 23 24 25", "26 27 28 29 30", "26 27 28 29 30 31", "26 27 28 29", "26 27 28");
    calday("Thu", "            1  2  3", "4  5  6  7  8  9 10", "11 12 13 14 15 16 17", "18 19 20 21 22 23 24", "25 26 27 28 29 30", "25 26 27 28 29 30 31", "25 26 27 28 29", "25 26 27 28");
    calday("Fri", "               1  2", "3  4  5  6  7  8  9", "10 11 12 13 14 15 16", "17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "24 25 26 27 28 29 30\n31", "24 25 26 27 28 29", "24 25 26 27 28");
    calday("Sat", "                  1", "2  3  4  5  6  7  8", "9  10 11 12 13 14 15", "16 17 18 19 20 21 22", "23 24 25 26 27 28 29\n30", "23 24 25 26 27 28 29 \n30 31", "23 24 25 26 27 28 29", "23 24 25 26 27 28");
    let daynum = Date().substring(8, 10);
    console.debug(`LAST DAY CHARACTER ${daynum}`);;
    if (daynum.substring(0, 1) == "0") daynum = daynum.replace("0", "");
    let num = 0;
    if (daynum.length == 2) {
        num = 1;
    }
    if (daynum.substring(num, num + 1) == "1"&& daynum != "11") {
        daynum += "st";
    } else if (daynum.substring(num, num + 1) == "2" && daynum != "12") {
        daynum += "nd";
    } else if (daynum.substring(num, num + 1) == "3"&& daynum != "13") {
        daynum += "rd";
    } else {
        daynum += "th";
    }
    console.log(`Today is the ${daynum}`);
}
let variables = {};
let functions = {};

function compile(data) {
    console.debug(data);
    let lines = 1;
    //Tracks punctation, as stack. Saved my life RAHHHHHH;
    let punc = {
        if: -1,
        func: -1,
        for: -1
    }
    for (let i = 0; i < lines; i++) {
        let line = data.substring(data.indexOf("~"), data.indexOf("\n"))
        data = data.replace(line + "\n", "");
        if (data.includes("\n")) lines++;
        let command = line.substring(1, line.length);
        if (command == "math") {
            console.log("NojOS-Math");
            mathf();
        } else if (command == "clear") {
            console.clear();
        } else if (command.substring(0, 4) == "save") {
            /*
            Sourced from:
            https://nodejs.org/api/fs.html#fswriteFfile-data-options
            */
            fs.writeF(command.substring(5, command.replace(" ", "").indexOf(" ")), command.substring(command.replace(" ", "").indexOf(" ")+1,command.length).replaceAll("\\n", "\n").replaceAll("MATH", global).replaceAll("USER",user.name))
        } else if (command.substring(0, 4) == "read") {
            console.log(readFile(command.substring(5, command.length)));
        } else if (command.substring(0, 4) == "echo") {
            command = command.substring(5, command.length).replaceAll("MATH", global).replaceAll("USER", user.name).replaceAll("DATE", Date().substring(0, 21)).replaceAll("\\n","\n");
            for (let v = 0; v < Object.keys(variables).length; v++) {
                command = command.replaceAll("@"+Object.keys(variables)[v], variables[Object.keys(variables)[v]]).replaceAll(true, ";T").replaceAll(false, ";F");
            }
            for (let v = 0; v < Object.keys(variables).length; v++) {
                command = command.replaceAll("@"+Object.keys(variables)[v], variables[Object.keys(variables)[v]]).replaceAll(true, ";T").replaceAll(false, ";F");
            }
            //node NojOS-1.0.4/NojOS-1.0.4/NojOS
            console.log(command);
        } else if (command.substring(0, 5) == "shape") {
            shape(command);
        } else if (command == "date") {
            console.log(Date().substring(0, 21));
        } else if (command == "specs") {
            specs();
        } else if (command.substring(0, 2) == "if") {
            console.debug("IF STATEMENT")
            punc.if++;
            let condition = command.substring(command.indexOf("\\") + 1, command.indexOf("/")).replaceAll(" ", "");
            console.debug(`CONDITION ${condition}`)
            if (!command.includes("{")) {
                throw new Error("\u001b[31mERROR:\u001b[0m Failure to start punctuation for if statement");
            }
            let value = lexer.bool(condition);
            console.debug(`VAL ${value}`)
            if (!value) {
                let findBrack = data;
                for (let i = 0; i < punc.if; i++) {
                    findBrack = findBrack.replace("~}\n", "");
                }
                data = data.substring(findBrack.indexOf("~}") + 4, data.length);
            }
        } else if (command.substring(0,3) == "for") {
            //Under construction
            punc.for++;
            let condition = command.substring(command.indexOf("\\") + 1, command.indexOf("/")).replaceAll(" ", "");
            if (!command.replace(condition,"").includes("<")) {
                throw new Error("\u001b[31mERROR:\u001b[0m Failure to start punctuation for for statement");
            }
            console.log(condition);
            let value = lexer.bool(condition);
            console.log(value)
            let findArr = data;
            for (let i = 0; i < punc.for; i++) {
               findArr = findArr.replace("<\n", "");
            }
            //Gets all commands from inside function.
            let code = findArr.substring(0, findArr.indexOf("~>")).replace("\n", "").replace("\r", "\n");
            console.log(code);
            data = data.replace(findArr.substring(0,findArr.indexOf("~>")),"")
            let n = 1;
            for (let i = 0; i < n; i++) {
                compile(code);
                if (!value) {
                    n++
                }
            }
        } else if (command.substring(0, 4) == "func") {
            //Pushes stack forward
            console.debug("FUNC STATEMENT")
            punc.func++;
            let name = command.substring(command.indexOf("func " + 5), command.indexOf(" ["));
            console.debug(`NAME ${name}`);
            let findSq = data;
            for (let i = 0; i < punc.func; i++) {
                findSq = findSq.replace("[\n", "");
            }
            //Gets all commands from inside function.
            let code = findSq.substring(0, findSq.indexOf("~]")).replace("\n", "").replace("\r", "\n");
            functions[name] = code;
            data = data.replace(findSq.substring(0, findSq.indexOf("~]")), "");
        } else if (command.substring(0, 5) == "local") {
            console.debug(`LOCAL FUNC ${command.substring(6, command.length).replace("\r", "")}`)
            compile(functions["func " + command.substring(6, command.length).replace("\r", "")])
        } else if (command.substring(0, 1) == "$" || command == "" || command.includes("}") || command.includes("]") || command.includes(">")) {
            /** All empty functions used for syntax or general purpose
                * "$"" - For making comments
                * "" - For empty lines
                * "}" - For if statements
                * "]" - For function declarations
                * ">" - For for loops
            */
        } else if (command.substring(0, 3) == "var") {
            variables[command.substring(4, command.indexOf("="))] = command.substring(command.indexOf("=") + 1, command.length).replace("\r", "");
            variables[command.substring(4, command.indexOf("="))] 
            for (let i = 0; i < Object.keys(variables).length; i++) {
                if (variables[command.substring(4, command.indexOf("="))] == (Object.keys(variables)[i])) variables[command.substring(4, command.indexOf("="))] = variables[Object.keys(variables)[i]].replace("\r", "");
            }
            if (variables[command.substring(4, command.indexOf("="))].substring(0, 6) == "prompt") {
                variables[command.substring(4, command.indexOf("="))] = prompt(command.substring(command.indexOf("prompt") + 7, command.length).replace("\r", ""));
            } else if (variables[command.substring(4, command.indexOf("="))].replace("=", "").includes("=") || variables[command.substring(4, command.indexOf("="))].includes("!") || variables[command.substring(4, command.indexOf("="))].includes(">") || variables[command.substring(4, command.indexOf("="))].includes("<")|| variables[command.substring(4, command.indexOf("="))].includes("|")|| variables[command.substring(4, command.indexOf("="))].includes("&")|| variables[command.substring(4, command.indexOf("="))].includes("#")) {
                let condition = variables[command.substring(4, command.indexOf("="))]
                let value = lexer.bool(condition);
                variables[command.substring(4, command.indexOf("="))] = value;
            } else if (variables[command.substring(4, command.indexOf("="))].substring(0,4) == "math") {
                variables[command.substring(4, command.indexOf("="))] = lexer.math(variables[command.substring(4, command.indexOf("="))].substring(5,command.length).replace("\r",""));
            }
            console.debug(`VAR ${command.substring(4, command.indexOf("="))} = ${variables[command.substring(4, command.indexOf("="))]}`)
        } else {
            throw new Error(`\u001b[31mERROR:\u001b[0m Invalid command: '${command.substring(0,command.indexOf(" "))}'`);
        }
    }
    console.debug("LAIKA EXIT")
};
let lexer = {
bool:function(condition) {
    console.debug(`BOOL ${condition}`)
    condition = condition.replaceAll("\r","")
    let op;
    let value;
    let arr = []
    let nex = {}
    //Checks each operator
    function chec(operator) {
        if (condition.includes(operator)) {
          nex[operator] = condition.indexOf(operator)
            arr.push(nex[operator]);
                //it works
            if (nex[operator] == undefined) nex[operator] = 100;
        }   
    }
    chec("="), chec("!"), chec(">"), chec("<"), chec("|"), chec("&"), chec("#");
    let len = Math.min.apply(Math, arr)+1;
    op = condition.substring(len-1,len);
    console.debug(`OPERATOR ${op}`)
    if (op != undefined) {
        if (condition.includes("(")) {
            let finished = 1;
            for (let i = 0; i < finished + 1; i++) {
                if (!condition.includes("(")) {
                    finished++;
                } else {
                    condition = condition.replace(condition.substring(condition.indexOf("("),condition.indexOf(")")+1), lexer.bool(condition.substring(condition.indexOf("(")+1, condition.indexOf(")"))));
                    condition = condition.replace("true",";T").replace("false",";F")
                    condition = condition.replace(condition.substring(condition.indexOf("("),condition.indexOf(")")+1), lexer.bool(condition.substring(condition.indexOf("(")+1, condition.indexOf(")"))));
                    condition = condition.replace("true",";T").replace("false",";F")
                    let arr = [];
                    nex = {};
                    chec("="), chec("!"), chec(">"), chec("<"), chec("|"), chec("&"), chec("#");
                    let len = Math.min.apply(Math, arr)+1;
                    op = condition.substring(len,len+1);
                }
            }
        }
        let f1 = (condition.substring(0, condition.indexOf(op))).replace("\r", "");
        let negate = false;
        if (f1.substring(0, 1) == "`") {
            f1 = f1.substring(1, f1.length)
            negate = true;
        }
        if (f1.substring(0,4) == "math") f1 = lexer.math(f1.substring(5,f1.length));
        let length = condition.length
        let next = {}
        let multop = false;
        //checks for multiple operators
        if (condition.replace(op, "").includes("=") || condition.replace(op, "").includes("!") || condition.replace(op, "").includes(">") || condition.replace(op, "").includes("<")|| condition.replace(op, "").includes("|")|| condition.replace(op, "").includes("&")|| condition.replace(op, "").includes("#")) {
            let array = []
            //Checks each operator
            function check(operator) {
            if (condition.replace(op,"").includes(operator)) {
                next[operator] = condition.replace(op, "").indexOf(operator)
                array.push(next[operator]);
                //it works
                if (next[operator] == undefined) next[operator] = 100;
            }
            }
            check("="), check("!"), check(">"), check("<"), check("|"), check("&"), check("#");
            length = Math.min.apply(Math, array)+1;
            multop = true;
        }
        let f2 = (condition.substring(condition.indexOf(op) + 1, length)).replace("\r", "");
        if (f2.substring(0,4) == "math") f2 = lexer.math(f2.substring(5,f2.length));
        for (let i = 0; i < Object.keys(variables).length; i++) {
            if (f1 == (Object.keys(variables)[i])) f1 = variables[Object.keys(variables)[i]];
            if (f2 == (Object.keys(variables)[i])) f2 = variables[Object.keys(variables)[i]];
        }
        if (typeof f1 == "string") f1 = f1.replace("\r", "");
        if (typeof f2 == "string") f2 = f2.replace("\r", "");
        if (f1 == "USER") f1 = user.name;
        else if (f1 == "MATH") f1 = global;
        else if (f1 == "DATE") f1 = Date.substring(0, 21)
        else if (f1 == ";T") f1 = true;
        else if (f1 == ";F") f1 = false;
        if (f2 == "USER") f2 = user.name;
        else if (f2 == "MATH") f2 = global;
        else if (f2 == "DATE") f2 = Date.substring(0, 21)
        else if (f2 == ";T") f2 = true;
        else if (f2 == ";F") f2 = false;
        if (op == ">" || op == "<") {
            f1 = Number(f1);
            f2 = Number(f2);
            if (f1 != NaN && f2 != NaN) {
                if (op == ">") {
                    value = f1 > f2;
                } else {
                    value = f1 < f2;
                }
            } else {
                throw new Error(`\u001b[31mERROR:\u001b[0m Invalid comparison: ${f1}${op}${f2}`);
            }
        } else if (op == "!" || op == "=") {
            if (op == "=") {
                value = f1 == f2,console.debug("EQUAL")
            } else {
                value = f1 != f2,console.debug("INEQUAL")
            }
        } else if (op == "&" || op == "|" || op == "^") {
            if (op == "&") value = f1 && f2console.debug("AND")
            if (op == "|") value = f1 || f2,console.debug("OR")
            if (op == "^") {
                console.debug("XOR")
                value = f1 ^ f2
                if (value == 1) value = true
                else value = false;
            }
        } else if (condition.includes(";T")) {
            value = true;
        } else if (condition.includes(";F")) {
            value = false;
        } else {
            value = variables[condition];
            if (typeof value != "boolean") {
                throw new Error(`\u001b[31mERROR:\u001b[0m Condition '${variables[condition]}' doesn't return boolean value.`);
            }
        }
        if (negate) {
            console.debug("NEGATION")
            value = !value;
        }
        if (multop) {
            console.debug("MULTIPLE OPERATORS")
            if (value) value = ";T"
            if (!value) value = ";F"
            condition = condition.replace(condition.substring(0,length), value)
            console.log(condition);
            return lexer.bool(condition);

        } else return value;
    } else {
        console.debug(`OPERATOR IS UNDEFINED`)
    }
},
math:function(expr) {
    console.debug(`EXPR ${expr}`)
    console.log(expr);
    expr = expr.replace("\r","")
    for (let i = 0; i < Object.keys(variables).length; i++) {
        console.log(expr)
        expr = expr.replaceAll(Object.keys(variables)[i], variables[Object.keys(variables)[i]]);
    }
    expr = expr.replaceAll("ans",global);
    console.debug(`EQUALS ${mathf(expr, true)}`);
    return mathf(expr, true);
}
};
function mathf(expr, execute) {
    if (expr != "exit" && expr != null) {
    let output;
    try {
    output = math.evaluate(expr);
    } catch (err) {
        output = err.message;
    }
    global = output;
    fs.writeF(`NojOS-${ver}/NojOS-${ver}/hist.laika`, readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) + "\n" + math)
    if (!execute) {
        console.debug(`REPL MATH`);
        console.log(output);
        mathf(prompt(`\u001b[31;1m${user.name}@${process.env.USERNAME}/${CD}/math\u001b[0m - `, false));
    } else {
        return output;
    }} else {
        work();
    }
}
function node(promp) {
    try {
    let output = promp
    if (output != null && output != "exit") {
    if (promp.substring(promp.length-3,promp.length) != "CON") output = eval(promp);
    else {
        output += "\n"+prompt("|  ")
        if (output.substring(output.length-3,output.length) != "END") output += "CON", node(output);
        else output = eval(output.replaceAll("CON","").replaceAll("END",""))
    }
    console.log(output);
    node(prompt(`\u001b[31;1m${user.name}@${process.env.USERNAME}/${CD}/node\u001b[0m - `));
    } else {
        work();
    }
    } catch (err) {
        console.debug(`ERROR`)
        console.log(err.message);
        node(prompt(`\u001b[31;1m${user.name}@${process.env.USERNAME}/${CD}/node\u001b[0m -`));
    }
}
work();
