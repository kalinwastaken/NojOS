import fs from "node:fs";
// Thank you because I NEEDED this because shell is a bitch;
// Source - https://stackoverflow.com/a/52453462
// Posted by user993683, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-25, License - CC BY-SA 4.0

function deltaE(rgbA, rgbB) {
  let labA = rgb2lab(rgbA);
  let labB = rgb2lab(rgbB);
  let deltaL = labA[0] - labB[0];
  let deltaA = labA[1] - labB[1];
  let deltaB = labA[2] - labB[2];
  let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
  let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
  let deltaC = c1 - c2;
  let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
  deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
  let sc = 1.0 + 0.045 * c1;
  let sh = 1.0 + 0.015 * c1;
  let deltaLKlsl = deltaL / (1.0);
  let deltaCkcsc = deltaC / (sc);
  let deltaHkhsh = deltaH / (sh);
  let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
  return i < 0 ? 0 : Math.sqrt(i);
}

function rgb2lab(rgb){
  let r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255, x, y, z;
  r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;
  return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
}

function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        return data.toString();
    } catch (error) {
        return (`${error.message}`);
    }
};
String.prototype.rev = function(a,b) {
    return this.replaceAll(b,a);
}
function parse(chyor) {
    chyor = chyor.replaceAll("z","aч").replaceAll("r","bч").replaceAll("v","cч").replaceAll("n","dч").replaceAll("m","eч").replaceAll("k","fч")
    chyor = chyor.replaceAll("s","0ч").replaceAll("g","1ч").replaceAll("h","2ч").replaceAll("ю","3ч").replaceAll("я","4ч").replaceAll("Ю","5ч").replaceAll("Я","6ч").replaceAll("S","7ч").replaceAll("G","8ч").replaceAll("H","9ч")
    chyor = chyor.replaceAll("№","ba").replaceAll(":","bb").replaceAll("'","bc").replaceAll("\"","bd").replaceAll("-","be").replaceAll("_","bf");
    chyor = chyor.replaceAll("X","ca").replaceAll("<","cb").replaceAll(".","cc").replaceAll(">","cd").replaceAll("`","ce").replaceAll("~","cf");
    chyor = chyor.replaceAll("/","da").replaceAll("?","db").replaceAll("!","dc").replaceAll("@","dd").replaceAll("#","de").replaceAll("$","df");
    chyor = chyor.replaceAll("%","ea").replaceAll("^","eb").replaceAll("&","ec").replaceAll("*","ed").replaceAll("(","ee").replaceAll(")","ef");
    chyor = chyor.replaceAll("=","fa").replaceAll("ъ","fb").replaceAll("Ъ","fc").replaceAll("ь","fd").replaceAll("Ь","fe").replaceAll("Ё","ff");
    return {
        w:Number(chyor.substring(0,chyor.indexOf("O"))),
        h:Number(chyor.substring(chyor.indexOf("O")+1,chyor.indexOf("\n"))),
        img:eval("["+chyor.substring(chyor.indexOf("\n")+2,chyor.length-2).replaceAll("ч",",0x").replace(",","").replaceAll("[","aa").replaceAll("{","ab").replaceAll("]","ac").replaceAll("}","ad").replaceAll("\\","ae").replaceAll("|","af")+"]")
    }
}
export function spit(chyor, retro) {
    try {
    let data = parse(chyor).img, h = parse(chyor).h, w = parse(chyor).w
    let output,buffer = {
        l:h,
        w:w,
        retro:retro
    }
    for (let v = 0; v < data.length; v++) {
        let c = data[v]
        // Source - https://stackoverflow.com/a/29241510
        // Posted by Guffa, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-05-25, License - CC BY-SA 3.0
        let r = Math.min(Math.floor(c / (256*256)),255);
        let g = Math.floor(c / 256) % 256;
        let b = c % 256;
        let col;
        //first time using switch
        if (retro) {
        function compare(color) {
            return deltaE(color,[r,g,b])
        }
        //Array of similarities to values
        let arr = [compare([255,255,255]),compare([0,255,255]),compare([255,0,255]),compare([0,0,255]),compare([255,255,0]),compare([0,128,0]),compare([255,0,0]),compare([0,0,0])]
        //Value of closest color
        let val = Math.min.apply(Math, arr);
        //Checks for value in array and it's color then changes col
        for (let i = 0; i < 8; i++) if (val == arr[i]) col = `\u001b[${37-i}m██`
        } else {
            col = `\u001b[38;2;${r};${g};${b}m██`;
        }
        output += col;
        if (v%w == 0) output += "\n";
    }
    output += "\u001b[0m"
    return {
        img:output.replace("undefined",""),
        buffer:buffer
    }
} catch (error) {
    return error.message;
}
}

// node NojOS-1.1.0/NojOS-1.1.0/NojOS
