/*
The following is a work made with the help of many online resources,
Every website and person sourced in this project will be listed in what
they indirectly and directly helped create.
*/
const prompt = require('prompt-sync')();
const os = require('os');
const fs = require('fs');
let global = "undefined number";
console.log("                   ....:::::::::::::::::::::::::::::::::::::::::::::::::::::::...                      \n               ..::---------------------------------------------------------------:..               \n            ..:----------------------------------------------------------------------:...           \n         ..::---------------------------------------------------------------------------:..         \n        .:--------------------------------------------------------------------------------:..       \n      ..------------------------------------------------------------------------------------:.      \n    ..:--------------------------------------------------------------------------------------:..    \n    .:-----------------------------------------------------------------------------------------..   \n   .:-------------------------------------------------------------------------------------------:.  \n ..:---------------------------------------------------------------------------------------------.. \n .:----------------------------------------------------------------------------------------------:..\n..:-----------------------------------------------------------------------------------------------:.\n.:------------------------------------------------------------------------------------------------:.\n.:-------------------------------------------------------------------------------------------------.\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--:::::::---------::::::::--------------------:...----------::.....::------------::....:::-::-----:\n.----::. ..-----------..:-----------------------..:-------:...:-----:...:--------..::---::...:-----:\n.------:   .:---------:.:--------------------------------.. :---------:...:-----. :--------..:-----:\n.------:......--------:.:-------------------------------. .:-----------:. .:---:  .---------.:-----:\n.------:.::.  .:------:.:-------::....::-------::.:----.  .-------------.  .----.  .::------:------:\n.------:.:--:. ..-----:.:-----:..:---:...:---::.  .---:.  .-------------:   :----..  ..::----------:\n.------:.:---:.. .:---:.:----:. :------. .:-----  .---:.  :-------------:   :------:.    ..--------:\n.------:.:-----:. .:--:.:----. .--------. .:----  .---:.  .-------------:   :---------:..   .:-----:\n.------:.:------:.. .::.:---:. .--------.  :----  .----.  .-------------:  .----:--------:.. .:----:\n.------:.:--------:. ...:----.  :-------. .-----  .----:. .:------------. .:----.:---------. .:----:\n.------:.:----------..  :----:. .-------..:-----  .-----:...:----------...:-----..---------: .:----:\n.------..:-----------:. :-----:...:----..:------  .-------:...:------:...-------...:------:..:-----:\n.---:::...::----------:.:-------:......:--------  .---------::.......::---------.:::.......:-------:\n.-----------------------------------------------  :------------------------------------------------:\n.----------------------------------------------- .:------------------------------------------------:\n.----------------------------------------:...:::.:-------------------------------------------------:\n.-----------------------------------------::..::---------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.--------------------------------------------------------------------------------------------------:\n.:-------------------------------------------------------------------------------------------------.\n.:------------------------------------------------------------------------------------------------:.\n .:-----------------------------------------------------------------------------------------------:.\n .:----------------------------------------------------------------------------------------------:.\n  .:---------------------------------------------------------------------------------------------.. \n   .:-------------------------------------------------------------------------------------------..  \n    .:----------------------------------------------------------------------------------------:.    \n    ...--------------------------------------------------------------------------------------:..    \n       .:-----------------------------------------------------------------------------------..      \n        ..:-------------------------------------------------------------------------------:.        \n          ..:--------------------------------------------------------------------------:...         \n            ...:--------------------------------------------------------------------::..            \n                ..::-------------------------------------------------------------:..                \n                     ....::::::::::::::::::::::::::::::::::::::::::::::::::.....                    \n");
console.log(`Hello ${process.env.USERNAME}`);
console.log(`Computer Name: ${process.env.COMPUTERNAME}`);
console.log(`For help; type ~help`);
function work() {
    let value = prompt("Command: ");
    if (value != null && value.substring(0,1) == "~") {
        let command = value.substring(1,value.length)
        if (command == "help") {
            console.log("A command is defined by '~'\n~help - Write this message\n~math - Run math equations\n~save filename (no .txt) - Create or overwrite a .txt file. Use \\n for newlines and MATH for the last returned math value.\n~read filename (no .txt) - Read a .txt file\n~execute (no .txt) - Execute a .txt file in NojOS assembly.\n~specs - Get specifications about the device\n~date - Get time specifications\n~echo STRING - Echo message into console\n~exit - Exit the OS");
        } else if (command == "math") {
            console.log("NojOS-Math");
            mathf();
        } else if (command == "clear") {
            console.clear();
        } else if (command.substring(0,4) == "save") {
            /*
            Sourced from:
            https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
            */
            fs.writeFileSync(command.substring(5,command.length)+'.txt', prompt("Text: ").replaceAll("\\n", "\n"), (err) => {
                if (err) throw err;
            });
        } else if (command == "calendar") {
            cal();
        } else if (command.substring(0,4) == "read") {
            console.log(readFile(command.substring(5,command.length)+'.txt'));
        } else if (command.substring(0,7) == "execute"){
            compile(command.substring(8,command.length));
        } else if (command.substring(0,4) == "echo") {
            console.log(command.substring(5,command.length).replaceAll("MATH", global).replaceAll("USER", process.env.USERNAME).replaceAll("DATE", Date().substring(0,21)));
        } else if (command == "date") {
            console.log(Date().substring(0,21));
        } else if (command == "specs") {
            specs();
        } else if (command != "exit" && value != null) {
            console.log(`ERROR: '~${command}' is not defined`);
        } else {
            console.log("Thank you for using NojOS");
        }
        if (command != "exit" && command != "math" && value != null) {
            work();
        }
    } else if (value != null) {
        console.log(`ERROR: '${value}' is invalid syntax, try '~${value}'`);
        work();
    }
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
function cal() {
  let month = Date().substring(4,7);
  console.log(Date().substring(4,7)+" "+ Date().substring(11,15));
  console.log("Su Mo Tu We Th Fr Sa");
  //Get first day of the current month.
  function getFirst() {
  let today = Date().substring(0,3);
  let value;
  value = Number(Date().substring(8,10));
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
    if (month == "Jan" || month == "Mar"|| month == "May"|| month == "Jul"|| month == "Aug"|| month == "Oct"|| month == "Dec") console.log(tx31);
    else if (month == "Apr" || month == "Jun"|| month == "Sep"|| month == "Nov") console.log(tx30);
    else if (month == "Feb") {
      if (Number(Date().substring(11,15))%4 == 0 || (Date().substring(13,15) == "00" && Number(Date.substring(11,15)))%400 == 0) console.log(txleap);
      else console.log(txnotleap);
      }
    } 
  }
  calday("Sun", "1  2  3  4  5  6  7", "8  9 10 11 12 13 14","15 16 17 18 19 20 21","22 23 24 25 26 27 28", "29 30", "29 30 31", "29", "");
  calday("Mon", "   1  2  3  4  5  6", "7  8  9 10 11 12 13","14 15 16 17 18 19 20","21 22 23 24 25 26 27", "28 29 30", "28 29 30 31", "28 29", "28");
  calday("Tue", "      1  2  3  4  5", "6  7  8  9 10 11 12","13 14 15 16 17 18 19","20 21 22 23 24 25 26", "27 28 29 30", "27 28 29 30 31", "27 28 29", "27 28");
  calday("Wed", "         1  2  3  4", "5  6  7  8  9 10 11","12 13 14 15 16 17 18","19 20 21 22 23 24 25", "26 27 28 29 30", "26 27 28 29 30 31", "26 27 28 29", "26 27 28");
  calday("Thu", "            1  2  3", "4  5  6  7  8  9 10","11 12 13 14 15 16 17","18 19 20 21 22 23 24", "25 26 27 28 29 30", "25 26 27 28 29 30 31", "25 26 27 28 29", "25 26 27 28");
  calday("Fri", "               1  2", "3  4  5  6  7  8  9","10 11 12 13 14 15 16","17 18 19 20 21 22 23", "24 25 26 27 28 29 30", "24 25 26 27 28 29 30\n31", "24 25 26 27 28 29", "24 25 26 27 28");
  calday("Sat", "                  1", "2  3  4  5  6  7  8","9 10 11 12 13 14 15","16 17 18 19 20 21 22", "23 24 25 26 27 28 29\n30", "23 24 25 26 27 28 29 \n30 31", "23 24 25 26 27 28 29", "23 24 25 26 27 28");
  let daynum = Date().substring(8,10);
  if (daynum.substring(0,1) == "0") daynum = daynum.replace("0", "");
  let num = 0;
  if (daynum.length == 2) {
    num = 1;
  }
  if (daynum.substring(num,num+1) == "1") {
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
//From Mitchell Mudd
function readFile(filePath) {
try {
    const data = fs.readFileSync(filePath);
    return data.toString();
} catch (error) {
    return (`ERROR: ${error.message}`);
}};
function compile(file) {
    let variables = {};
    let data = readFile(file+".txt");
    let lines = 1;
    for (let i = 0; i < lines; i++) {
        let line = data.substring(data.indexOf("~"), data.indexOf("\n"))
        data = data.replace(line,"");
        data = data.replace("\n", "")
        if (data.includes("\n")) lines++;
        let command = line.substring(1, line.length);
        if (command == "help") {
            console.log("A command is defined by '~'\n~help - Write this message\n~math - Run math equations\n~save filename (no .txt) - Create or overwrite a .txt file. Use \\n for newlines and MATH for the last returned math value.\n~read filename (no .txt) - Read a .txt file\n~specs - Get specifications about the device\n~date - Get time specifications\n~echo STRING - Echo message into console\n~exit - Exit the OS");
        } else if (command == "math") {
            console.log("NojOS-Math");
            mathf();
        } else if (command == "clear") {
            console.clear();
        } else if (command.substring(0,4) == "save") {
            /*
            Sourced from:
            https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
            */
            fs.writeFileSync(command.substring(5,command.length)+'.txt', prompt("Text: ").replaceAll("\\n", "\n").replaceAll("MATH", global), (err) => {
                if (err) throw err;
            });
        } else if (command.substring(0,4) == "read") {
            console.log(readFile(command.substring(5,command.length)+'.txt'));
        } else if (command.substring(0,4) == "echo") {
            command = command.substring(5,command.length).replaceAll("MATH", global).replaceAll("USER", process.env.USERNAME).replaceAll("DATE", Date().substring(0,21));
            console.log(command);
        } else if (command == "date") {
            console.log(Date().substring(0,21));
        } else if (command == "specs") {
            specs();
        } else if (command.substring(0,2) == "if") {
            let condition = command.substring(3,command.length);
            let op;
            let value;
            if (condition.includes("=")) op = "="
            if (condition.includes("!")) op = "!"
            if (condition.includes(">")) op = ">"
            if (condition.includes("<")) op = "<"
            let f1 = Number(condition.substring(0,condition.indexOf(op)))
            let f2 = Number(condition.substring(condition.indexOf(op)+1,condition.length))
            if (op == ">" || op == "<") {
                if (op == ">") {
                    value = f1>f2;
                } else {
                    value = f1<f2;
                }
            } else if (op == "!" || op == "=") {
                if (op == "=") {
                    value = f1==f2;
                } else {
                    value = f1!=f2;
                }
            }
            if (!value) {
                lines = i;
            }
        } else {
            console.log("Invalid command");
            lines = i;
        }
}};
/*
    Entire syntax created by me,
    no external help.
*/
function mathf() {
    let f1, f2, f3;
    let output;
    let op;
    let math = prompt("Math: ");
     /**
    * Graphs function roughly.
    * @param {function} func Function such as Math.sin
    */
    function graph(func) {
        let x = "";
        for (let v = 0; v<20.5;v = v + 0.5) {
        let output = `${10-v}: `;
        if (output.length != 6) {
            if (output.length == 3) output += "   ";
            if (output.length == 4) output += "  ";
            if (output.length == 5) output += " ";
        }
        for (let i = -20; i<20.5; i = i + 0.5) {
            if (Math.round(func(i+1)) == 10-(v)) {
              output += "1";
            } else {
                output += "-";
            }
        }
       x += "\n"+output
    }
        return x.replace("\n", "");
    };
    /**
    * Sets f1 as first arg and f2 as second arg for arithmetic operations. 
    * @param {string} operator Arithmetic Operator, like '+'
    */
    function getArgArithmetic(operator) {
        if (math.substring(0,math.indexOf(operator)) != "ans" && math.substring(0,math.indexOf(operator)) != "pi") {
            f1 = Number(math.substring(0,math.indexOf(operator)));
        } else if (math.substring(0,math.indexOf(operator)) == "ans") {
            f1 = global;
        } else {
            f1 = Math.PI;
        }
        if (math.substring(math.indexOf(operator)+1,math.length) != "ans" && math.substring(math.indexOf(operator)+1,math.length) != "pi") {
            f2 = Number(math.substring(math.indexOf(operator)+1,math.length));
        } else if (math.substring(math.indexOf(operator)+1,math.length) == "ans") {
            f2 = global;
        } else {
            f2 = Math.PI;
        }
    }
    /**
    * Sets f1 as only arg in function 
    * @param {string} func Function, like 'sqrt '
    */
    function getArg(func) {
        if (math.substring(func.length, math.length) != "ans" && math.substring(func.length, math.length) != "pi") {
                f1 = Number(math.substring(func.length, math.length));
            } else if (math.substring(func.length, math.length) == "ans") {
                f1 = global;
            } else {
                f1 = Math.PI;
            }
    }
    /**
    * Sets f1 as first arg and f2 as second arg 
    * @param {string} func Function, like 'atan2 ',
    */
    function get2Args(func) {
        if (math.substring(func.length, math.length) != "ans" && math.substring(func.length, math.length) != "pi") {
                f1 = Number(math.substring(func.length, math.indexOf(",")));
            } else if (math.substring(func.length, math.indexOf(",")) == "ans") {
                f1 = global;
            } else {
                f1 = Math.PI;
            }
            if (math.substring(math.substring(math.indexOf(",")+1), math.length) != "ans" && math.substring(math.indexOf(",")+1, math.length)  != "pi") {
                f2 = Number(math.substring((math.indexOf(",")+1), math.length));
            } else if (math.substring((math.indexOf(",")+1), math.length) == "ans") {
                f2 = global;
            } else {
                f2 = Math.PI;
            }
    }
    /**
    * Sets f1 as first arg and f2 as second arg, and f3 as third arg
    * @param {string} func Function, like 'boxvol ',
    */
    function get3Args(func) {
        if (math.substring(func.length, math.length) != "ans" && math.substring(func.length, math.length) != "pi") {
                f1 = Number(math.substring(func.length, math.indexOf(",")));
            } else if (math.substring(func.length, math.indexOf(",")) == "ans") {
                f1 = global;
            } else {
                f1 = Math.PI;
            }
            if (math.substring(math.substring(math.indexOf(",")+1), math.replace(",", "").indexOf(",")+1) != "ans" && math.substring(math.indexOf(",")+1, math.replace(",", "").indexOf(",")+1)  != "pi") {
                f2 = Number(math.substring((math.indexOf(",")+1), math.replace(",", "").indexOf(",")+1));
            } else if (math.substring((math.indexOf(",")+1), math.replace(",", "").indexOf(",")+1) == "ans") {
                f2 = global;
            } else {
                f2 = Math.PI;
            }
            math = math.replace(",", "");
            if (math.substring(math.substring(math.indexOf(",")+1), math.length) != "ans" && math.substring(math.indexOf(",")+1, math.length)  != "pi") {
                f3 = Number(math.substring((math.indexOf(",")+1), math.length));
            } else if (math.substring((math.indexOf(",")+1), math.length) == "ans") {
                f3 = global;
            } else {
                f3 = Math.PI;
            }
    }
    //op is placeholder for operators and functions
    if (math != null) {
    op = "+";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = f1+f2;
        global = output;
    }
    op = "-";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = f1-f2;
        global = output;
    }
    op = "/";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = f1/f2;
        global = output;
    }
    op = "*";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = f1*f2;
        global = output;
    }
    op = "^";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = Math.pow(f1,f2);
        global = output;
    }
    op = "%";
    if (math.includes(op)) {
        getArgArithmetic(op);
        output = f1%f2;
        global = output;
    }
    op = "sqrt "
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.sqrt(f1);
        global = output;
    }
    op = "sin ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.sin(f1);
        global = output;
    }
    op = "cos ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.cos(f1);
        global = output;
        }
    op = "tan ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.tan(f1);
        global = output;
    }
    op = "sinh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.sinh(f1);
        global = output;
        }
    op = "cosh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.cosh(f1);
        global = output;
        }
    op = "tanh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.tanh(f1);
        global = output;
        }
    op = "asin ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.asin(f1);
        global = output;
        }
    op = "acos ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.acos(f1);
        global = output;
        }
    op = "atan ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.atan(f1);
        global = output;
        }
    op = "asinh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.asinh(f1);
        global = output;
        }
    op = "acosh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.acosh(f1);
        global = output;
        }
    op = "atanh ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.atanh(f1);
        global = output;
        }
    op = "atan2 ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = Math.atan2(f1, f2);
        global = output;
        }
    op = "pyth ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = Math.sqrt(Math.pow(f1,2)+Math.pow(f2,2));
        global = output;
        }
    op = "circum ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = (Math.PI*(2*f1));
        global = output;
        }
    op = "radius ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = (f1/2/Math.PI);
        global = output;
    }
    op = "diam ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = (f1/Math.PI)
        global = output;
    }
    op = "circar ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.PI*(Math.pow(f1,2));
        global = output;
    }
    op = "sqar ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.pow(f1,2);
        global = output;
    }
    op = "rectar ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = f1*f2;
        global = output;
    }
    op = "triangar ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = (f1*f2)/2;
        global = output;
    }
    op = "cubvol ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.pow(f1,3);
        global = output;
    }
    op = "boxvol ";
    if (math.substring(0,op.length) == op) {
        get3Args(op);
        output = f1*f2*f3;
        global = output;
    }
    op = "cylindvol ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = (Math.PI*(f1*f1))*f2;
        global = output;
    }
    op = "conevol ";
    if (math.substring(0,op.length) == op) {
        get2Args(op);
        output = (Math.PI*(f1*f1))*(f2/3);
        global = output;
    }
    op = "triprismvol ";
    if (math.substring(0,op.length) == op) {
        get3Args(op);
        output = (f1*f2*f3)/2;
        global = output;
    }
    op = "log ";
    if (math.substring(0,op.length) == op) {
        getArg(op);
        output = Math.log(f1);
        global = output;
    }
    op = "graph ";
    if (math.substring(0,6) == op) {
        let arithfunc;
        let arith = false;
        let func = math.substring(6,math.length)
        function inverse(f) {return 1/f};
        if (func == "sin")  func = Math.sin;
        else if (func == "cos")  func = Math.cos;
        else if (func == "tan")  func = Math.tan;
        else if (func == "asin")  func = Math.asin;
        else if (func == "acos")  func = Math.acos;
        else if (func == "atan")  func = Math.atan;
        else if (func == "sinh")  func = Math.sinh;
        else if (func == "cosh")  func = Math.cosh
        else if (func == "tanh")  func = Math.tanh;
        else if (func == "asinh")  func = Math.asinh;
        else if (func == "acosh")  func = Math.acosh;
        else if (func == "atanh")  func = Math.atanh;
        else if (func == "sqrt") func = Math.sqrt;
        else if (func == "log") func = Math.log;
        else if (func == "inverse") func = inverse;
        else if (func.includes("/")) {
            arithfunc = function(f) {
                if (func.substring(0,func.indexOf("/")) == "x") {
                    if (func.substring(func.indexOf("/")+1,func.length) != "ans" && func.substring(func.indexOf("/")+1,func.length) != "pi") {
                    return f/Number(func.substring(func.indexOf("/")+1,func.length));
                    } else if (func.substring(func.indexOf("/")+1,func.length) == "pi") {
                    return f/Math.PI;
                    } else {
                    return f/global;
                    }
                } else {
                    if (func.substring(0,func.indexOf("-")) != "ans" && func.substring(0,func.indexOf("-")) != "pi") {
                    return Number(func.substring(0,func.indexOf("-")))/f;
                    } else if (func.substring(0,func.indexOf("-")) == "pi") {
                    return Math.PI/f;
                    } else {
                    return global/f;
                    }
                }
            }
            output = graph(arithfunc);
            arith = true;
        } else if (func.includes("*")) {
            arithfunc = function(f) {
                if (func.substring(0,func.indexOf("*")) == "x") {
                    if (func.substring(func.indexOf("*")+1,func.length) != "ans" && func.substring(func.indexOf("*")+1,func.length) != "pi") {
                    return f*Number(func.substring(func.indexOf("*")+1,func.length));
                    } else if (func.substring(func.indexOf("*")+1,func.length) == "pi") {
                    return f*Math.PI;
                    } else {
                    return f*global;
                    }
                } else {
                    if (func.substring(0,func.indexOf("*")) != "ans" && func.substring(0,func.indexOf("*")) != "pi") {
                    return Number(func.substring(0,func.indexOf("*")))*f;
                    } else if (func.substring(0,func.indexOf("*")) == "pi") {
                    return Math.PI*f;
                    } else {
                    return global*f;
                    }
                }
            }
            output = graph(arithfunc);
            arith = true;
        } else if (func.includes("+")) {
            arithfunc = function(f) {
                if (func.substring(0,func.indexOf("+")) == "x") {
                    if (func.substring(func.indexOf("+")+1,func.length) != "ans" && func.substring(func.indexOf("+")+1,func.length) != "pi") {
                    return f+Number(func.substring(func.indexOf("+")+1,func.length));
                    } else if (func.substring(func.indexOf("+")+1,func.length) == "pi") {
                    return f+Math.PI;
                    } else {
                    return f+global;
                    }
                } else {
                    if (func.substring(0,func.indexOf("+")) != "ans" && func.substring(0,func.indexOf("+")) != "pi") {
                    return Number(func.substring(0,func.indexOf("+")))+f;
                    } else if (func.substring(0,func.indexOf("+")) == "pi") {
                    return Math.PI+f;
                    } else {
                    return global+f;
                    }
                }
            }
            output = graph(arithfunc);
            arith = true;
            output = graph(arithfunc);
            arith = true;
        } else if (func.includes("-")) {
            arithfunc = function(f) {
                if (func.substring(0,func.indexOf("-")) == "x") {
                    if (func.substring(func.indexOf("-")+1,func.length) != "ans" && func.substring(func.indexOf("-")+1,func.length) != "pi") {
                    return f-Number(func.substring(func.indexOf("-")+1,func.length));
                    } else if (func.substring(func.indexOf("-")+1,func.length) == "pi") {
                    return f-Math.PI;
                    } else {
                    return f-global;
                    }
                } else {
                    if (func.substring(0,func.indexOf("-")) != "ans" && func.substring(0,func.indexOf("-")) != "pi") {
                    return Number(func.substring(0,func.indexOf("-")))-f;
                    } else if (func.substring(0,func.indexOf("-")) == "pi") {
                    return Math.PI-f;
                    } else {
                    return global-f;
                    }
                }
            }
            output = graph(arithfunc);
            arith = true;
        } else if (func = "x") {
            arithfunc = function(f) {
                return f+0;
            }
            output = graph(arithfunc);
            arith = true;
        }
        else {
            function zero(f) {
                return 0;
            }
            func = zero;
            console.log("Invalid function");
        }
        if (!arith) output = graph(func);
    }
    if (typeof output != "string" && f1 == undefined && f2 == undefined && f3 == undefined) {
        if (math == "pi") {
            output = Math.PI;
        } else if (math == "ans") {
            output = global;
        } else {
            output = Number(math);
        }
    }
    if (typeof output == "number" || typeof output == "string") {
        console.log(output);
    } 
    if (math == "exit") {
        work();
    } else {
        mathf();
    }} else {
        work();
    }
}
work();
