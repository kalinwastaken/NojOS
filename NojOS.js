/*
The following is a work made with the help of many online resources,
Every website and person sourced in this project will be listed in what
they indirectly and directly helped create.
*/
//import {
//    decode,
//    encode
//} from "./proccessor.js";
import promptSync from 'prompt-sync';
const prompt = promptSync();
import os from "node:os";
import fs from "node:fs";
import terminalImage from "terminal-image";
import {create, all} from 'mathjs'
const config = { }
const math = create(all, config)
let global = "undefined number";
let vars = {};
let ver = "1.1.0"
console.log("                   ....:::::::::::::::::::::::::::::::::::::::::::::::::::::::...                      \n               ..::---------------------------------------------------------------:..               \n            ..:----------------------------------------------------------------------:...           \n         ..::---------------------------------------------------------------------------:..         \n        .:--------------------------------------------------------------------------------:..       \n      ..------------------------------------------------------------------------------------:.      \n    ..:--------------------------------------------------------------------------------------:..    \n    .:-----------------------------------------------------------------------------------------..   \n   .:-------------------------------------------------------------------------------------------:.  \n ..:---------------------------------------------------------------------------------------------.. \n .:----------------------------------------------------------------------------------------------:..\n..:-----------------------------------------------------------------------------------------------:.\n.:------------------------------------------------------------------------------------------------:.\n.:-------------------------------------------------------------------------------------------------.\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--:::::::---------::::::::--------------------:...----------::.....::------------::....:::-::-----:\n.----::. ..-----------..:-----------------------..:-------:...:-----:...:--------..::---::...:-----:\n.------:   .:---------:.:--------------------------------.. :---------:...:-----. :--------..:-----:\n.------:......--------:.:-------------------------------. .:-----------:. .:---:  .---------.:-----:\n.------:.::.  .:------:.:-------::....::-------::.:----.  .-------------.  .----.  .::------:------:\n.------:.:--:. ..-----:.:-----:..:---:...:---::.  .---:.  .-------------:   :----..  ..::----------:\n.------:.:---:.. .:---:.:----:. :------. .:-----  .---:.  :-------------:   :------:.    ..--------:\n.------:.:-----:. .:--:.:----. .--------. .:----  .---:.  .-------------:   :---------:..   .:-----:\n.------:.:------:.. .::.:---:. .--------.  :----  .----.  .-------------:  .----:--------:.. .:----:\n.------:.:--------:. ...:----.  :-------. .-----  .----:. .:------------. .:----.:---------. .:----:\n.------:.:----------..  :----:. .-------..:-----  .-----:...:----------...:-----..---------: .:----:\n.------..:-----------:. :-----:...:----..:------  .-------:...:------:...-------...:------:..:-----:\n.---:::...::----------:.:-------:......:--------  .---------::.......::---------.:::.......:-------:\n.-----------------------------------------------  :------------------------------------------------:\n.----------------------------------------------- .:------------------------------------------------:\n.----------------------------------------:...:::.:-------------------------------------------------:\n.-----------------------------------------::..::---------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.:-------------------------------------------------------------------------------------------------.\n.:------------------------------------------------------------------------------------------------:.\n .:-----------------------------------------------------------------------------------------------:.\n .:----------------------------------------------------------------------------------------------:.\n  .:---------------------------------------------------------------------------------------------.. \n   .:-------------------------------------------------------------------------------------------..  \n    .:----------------------------------------------------------------------------------------:.    \n    ...--------------------------------------------------------------------------------------:..    \n       .:-----------------------------------------------------------------------------------..      \n        ..:-------------------------------------------------------------------------------:.        \n          ..:--------------------------------------------------------------------------:...         \n            ...:--------------------------------------------------------------------::..            \n                ..::-------------------------------------------------------------:..                \n                     ....::::::::::::::::::::::::::::::::::::::::::::::::::.....                    \n");
if (readFile(`NojOS-${ver}/NojOS-${ver}/userdata.txt`) == "") {
    fs.writeFileSync(`NojOS-${ver}/NojOS-${ver}/userdata.txt`, `user:${process.env.USERNAME}\nname:${prompt("Name: ")}`, (err) => {
        if (err) throw err;
    });
}
let userdata = readFile(`NojOS-${ver}/NojOS-${ver}/userdata.txt`)
let user = {
    name: userdata.substring(userdata.indexOf("name:") + 5, userdata.length)
}
console.log(`Hello ${userdata.substring(userdata.indexOf("name:")+5, userdata.length)}`);
console.log(`For help; type ~help`);
if (readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) == "") {
    fs.writeFileSync(`NojOS-${ver}/NojOS-${ver}/hist.laika`, "#LIB", (err) => {
        if (err) throw err;
    });
}

function work() {
    let value = prompt("Command: ");
    fs.writeFileSync(`NojOS-${ver}/NojOS-${ver}/hist.laika`, readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) + "\n" + value, (err) => {
        if (err) throw err;
    });
    if (value != null && value.substring(0, 1) == "~") {
        let command = value.substring(1, value.length)
        if (command == "help") {
            console.log("A command is defined by '~'\n~help - Write this message\n~dict word - Get definition of word per Webster's English Dictionary\m~shape - Load a .laika shape.\n~math - Run math equations\n~var name=value - Define a variable with a value, can be called in ~echo and ~execute.\n~save filename (no .txt) - Create or overwrite a .txt file. Use \\n for newlines and MATH for the last returned math value.\n~read filename (no .txt) - Read a .txt file\n~execute (no .txt) - Execute a .txt file in NojOS assembly.\n~specs - Get specifications about the device\n~calendar - Get calendar for current month.\n~date - Get time specifications\n~echo STRING - Echo message into console\n~exit - Exit the OS");
        } else if (command == "math") {
            console.log("NojOS-Math");
            mathf(prompt("Expression: "), false);
        } else if (command == "clear") {
            console.clear();
        } else if (command.substring(0, 4) == "save") {
            /*
            Sourced from:
            https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
            */
            fs.writeFileSync(command.substring(5, command.length), prompt("Text: ").replaceAll("\\n", "\n"), (err) => {
                if (err) throw err;
            });
        } else if (command == "calendar") {
            cal();
        } else if (command.substring(0, 4) == "read") {
            console.log(readFile(command.substring(5, command.length)));
        } else if (command.substring(0,7) == "install") {
            fs.writeFileSync(`NojOS-${ver}/NojOS-${ver}/NojOS.js`, `import {${command.substring(8,command.length)}} from './installs/${command.substring(8,command.length)}.js'\n`+readFile(`NojOS-${ver}/NojOS-${ver}/NojOS.js`), (err) => {
                if (err) throw err;
            });
        } else if (command.substring(0,3) == "run") {
            eval(`${command.substring(4,command.length)}();`);
        } else if (command.substring(0, 5) == "laika") {
            compile(readFile(command.substring(6, command.length) + ".laika"));
        } else if (command.substring(0, 4) == "echo") {
            command = command.substring(5, command.length).replaceAll("MATH", global).replaceAll("USER", process.env.USERNAME).replaceAll("DATE", Date().substring(0, 21));
            for (let v = 0; v < Object.keys(vars).length; v++) {
                command = command.replaceAll(Object.keys(vars)[v], vars[Object.keys(vars)[v]]);
            }
            console.log(command);
        } else if (command.substring(0, 5) == "image") {
            terminalImage.file(command.substring(6, command.length)).then((value) => {
                console.log(value);
            })
        } else if (command.substring(0, 5) == "shape") {
            shape(command);
        } else if (command == "date") {
            console.log(Date().substring(0, 21));
        } else if (command == "specs") {
            specs();
        } else if (command.substring(0, 4) == "dict") {
            /*From Matthew Reagan
            https://github.com/matthewreagan/WebstersEnglishDictionary*/
            let json = readFile(`NojOS-${ver}/NojOS-${ver}/dict.txt`);
            let dict = JSON.parse(json);
            let output = dict[command.substring(5, command.length)]
            let nums = 1;
            if (output == undefined) {
                output = "Invalid word";
            } else {
                output = output.replaceAll("\\n", "\n");
            }
            console.log(output);
        } else if (command.substring(0, 3) == "var") {
            vars[command.substring(4, command.indexOf("="))] = command.substring(command.indexOf("=") + 1, command.length);
        } else if (command != "exit" && value != null && command != "image") {
            console.log(`ERROR: '~${command}' is not defined`);
        } else {
            console.log("Thank you for using NojOS");
        }
        if (command != "exit" && command != "math" && value != null && command.substring(0, 5) != "image") work();
        else if (command.substring(0, 5) == "image") {
            console.log("Loading...");
        }
    } else if (value != null) {
        console.log(`ERROR: '${value}' is invalid syntax, try '~${value}'`);
        work();
    }
}
/**
 * @param {string} command The command from prompts 
 */
function shape(command) {
    let shape = readFile(command.substring(6, command.length) + ".laika");
    let output = "";
    if (shape.substring(1, 6) == "SHAPE") {
        shape = shape.replace("#SHAPE\n", "");
        if (shape.substring(9, 13) == "RECT") {
            shape = shape.replace("#RECT\n", "");
            let l = Number(shape.substring(shape.indexOf("l:") + 2, shape.indexOf("\nw")));
            let w = Number(shape.substring(shape.indexOf("w:") + 2, shape.length))
            for (let i = 0; i < w; i++) output += "-";
            output += "\n"
            for (let i = 0; i < l - 2; i++) {
                output += "-"
                for (let v = 0; v < w - 2; v++) output += " "
                output += "-\n";
            }
            for (let i = 0; i < w; i++) output += "-";
        } else if (shape.substring(9, 15) == "TRIANG") {
            let l = Number(shape.substring(shape.indexOf("l:") + 2, shape.indexOf("\nw")));
            let w = Number(shape.substring(shape.indexOf("w:") + 2, shape.length))
            let space = 0;
            shape = shape.replace("#TRIANG\n", "")
            if (shape.substring(18, 23) == "RIGHT") {
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
            output = "Invalid shape"
        }
    } else if (!shape.includes("ERROR:")) {
        output = "File is not a shape.";
    } else {
        output = shape;
    }
    console.log(output);
}

function specs() {
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
    console.log("Network Interfaces: ");
    const network = os.networkInterfaces();
    console.log("   Wi-Fi\n-----------");
    for (let i = 0; i < network['Wi-Fi'].length; i++) {
        if (network['Wi-Fi'][i].family == "IPv6") console.log(`   Scope ID: ${network['Wi-Fi'][i].scopeid}`);
        console.log(`   IP Address: ${network['Wi-Fi'][i].address}`);
        console.log(`   Netmask: ${network['Wi-Fi'][i].netmask}`);
        console.log(`   IP Family: ${network['Wi-Fi'][i].family}`);
        console.log(`   Mac: ${network['Wi-Fi'][i].mac}`);
        console.log(`   cidr: ${network['Wi-Fi'][i].cidr}`);
        console.log("--------------");
    }
    console.log("   Loopback Pseudo-Interface 1\n-----------");
    let short = 'Loopback Pseudo-Interface 1';
    for (let k = 0; k < network[short].length; k++) {
        if (network['Wi-Fi'][k].family == "IPv6") console.log(`Scope ID: ${network['Wi-Fi'][k].scopeid}`);
        console.log(`   IP Address: ${network[short][k].address}`);
        console.log(`   Netmask: ${network[short][k].netmask}`);
        console.log(`   IP Family: ${network[short][k].family}`);
        console.log(`   Mac: ${network[short][k].mac}`);
        console.log(`   cidr: ${network[short][k].cidr}`);
        console.log("--------------");
    }
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
}
//From Mitchell Mudd
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        return (`ERROR: ${error.message}`);
    }
};

function cal() {
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
    if (daynum.substring(0, 1) == "0") daynum = daynum.replace("0", "");
    let num = 0;
    if (daynum.length == 2) {
        num = 1;
    }
    if (daynum.substring(num, num + 1) == "1") {
        daynum += "st";
    } else if (daynum == "2") {
        daynum += "nd";
    } else if (daynum == "3") {
        daynum += "rd";
    } else {
        daynum += "th";
    }
    console.log(`Today is the ${daynum}`);
}
let variables = {};
let functions = {};

function compile(data) {
    console.log(data);
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
        console.log(command);
        if (command == "help") {
            console.log("A command is defined by '~'\n~help - Write this message\n~math - Run math equations\n~save filename (no .txt) - Create or overwrite a .txt file. Use \\n for newlines and MATH for the last returned math value.\n~read filename (no .txt) - Read a .txt file\n~specs - Get specifications about the device\n~date - Get time specifications\n~echo STRING - Echo message into console\n~exit - Exit the OS");
        } else if (command == "math") {
            console.log("NojOS-Math");
            mathf();
        } else if (command == "clear") {
            console.clear();
        } else if (command.substring(0, 4) == "save") {
            /*
            Sourced from:
            https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
            */
            fs.writeFileSync(command.substring(5, command.length) + '.txt', prompt("Text: ").replaceAll("\\n", "\n").replaceAll("MATH", global), (err) => {
                if (err) throw err;
            });
        } else if (command.substring(0, 4) == "read") {
            console.log(readFile(command.substring(5, command.length) + '.txt'));
        } else if (command.substring(0, 4) == "echo") {
            command = command.substring(5, command.length).replaceAll("MATH", global).replaceAll("USER", user.name).replaceAll("DATE", Date().substring(0, 21));
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
            punc.if++;
            let condition = command.substring(command.indexOf("\\") + 1, command.indexOf("/")).replaceAll(" ", "");
            if (!command.includes("{")) {
                throw new Error("Failure to start punctuation for if statement");
            }
            let value = lexer.bool(condition);
            console.log(value);
            if (!value) {
                let findBrack = data;
                for (let i = 0; i < punc.if; i++) {
                    findBrack = findBrack.replace("~}\n", "");
                }
                data = data.substring(findBrack.indexOf("~}") + 4, data.length);
                console.log(data);
            }
        } else if (command.substring(0,3) == "for") {
            //Under construction
            punc.for++;
            //let condition = command.substring(command.indexOf("\\") + 1, command.indexOf("/")).replaceAll(" ", "");
            //if (!command.replace(condition,"").includes("<")) {
            //    throw new Error("Failure to start punctuation for for statement");
            //}
            let value = lexer.bool(condition);
            //console.log(value)
            //let findArr = data;
            //for (let i = 0; i < punc.for; i++) {
             //   findArr = findArr.replace("<\n", "");
            //}
            //Gets all commands from inside function.
            //let code = findArr.substring(0, findArr.indexOf("~>")).replace("\n", "").replace("\r", "\n");
            //console.log(code);
            //data = data.replace(findArr.substring(0,findArr.indexOf("~>")),"")
            let n = 1;
            for (let i = 0; i < n; i++) {
                //compile(code);
                //if (!value) {
                 //   n++
                //}
            }
        } else if (command.substring(0, 4) == "func") {
            //Pushes stack forward
            punc.func++;
            let name = command.substring(command.indexOf("func " + 5), command.indexOf(" ["));
            let findSq = data;
            for (let i = 0; i < punc.func; i++) {
                findSq = findSq.replace("[\n", "");
            }
            //Gets all commands from inside function.
            let code = findSq.substring(0, findSq.indexOf("~]")).replace("\n", "").replace("\r", "\n");
            functions[name] = code;
            data = data.replace(findSq.substring(0, findSq.indexOf("~]")), "");
        } else if (command.substring(0, 5) == "local") {
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
        } else {
            throw new Error(`Invalid command: '${command.substring(0,command.indexOf(" "))}'`);
        }
    }
};
let lexer = {
bool:function(condition) {
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
                throw new Error(`Invalid comparison: ${f1}${op}${f2}`);
            }
        } else if (op == "!" || op == "=") {
            if (op == "=") {
                value = f1 == f2;
            } else {
                value = f1 != f2;
            }
        } else if (op == "&" || op == "|" || op == "^") {
            if (op == "&") value = f1 && f2
            if (op == "|") value = f1 || f2
            if (op == "^") {
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
                throw new Error(`Condition '${variables[condition]}' doesn't return boolean value.`);
            }
        }
        if (negate) {
            value = !value;
        }
        if (multop) {
            if (value) value = ";T"
            if (!value) value = ";F"
            condition = condition.replace(condition.substring(0,length), value)
            console.log(condition);
            return lexer.bool(condition);

        } else return value;
    }
},
math:function(expr) {
    expr = expr.replace("\r","\n")
    for (let i = 0; i < Object.keys(variables).length; i++) {
        expr = expr.replaceAll(Object.keys(variables)[i], variables[Object.keys(variables)[i]]);
    }
    return mathf(expr, true);
}
};
/*
    Entire syntax created by me,
    no external help.
*/
function mathf(expr, execute) {
    let output = math.evaluate(expr);
    fs.writeFileSync(`NojOS-${ver}/NojOS-${ver}/hist.laika`, readFile(`NojOS-${ver}/NojOS-${ver}/hist.laika`) + "\n" + math, (err) => {
        if (err) throw err;
    });
    if (!execute) {
        if (typeof output == "number" && output != NaN) {
            console.log(output);
        }
        if (math == "exit") {
            work();
        } else {
            mathf(prompt("Expression: "));
        }
    } else {
        return output;
    }
}
work();
