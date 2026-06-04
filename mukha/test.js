import { exit } from 'node:process';
import {mukha} from './mukha.js'
import {readFileSync} from 'node:fs';
mukha.lmb.msg("Mukha", "This is an example of Mukha software.")
mukha.name("Mukha");
mukha.ico("mukha.ico");
mukha.def("ID_FILE_MESSAGE",9001);
mukha.def("ID_FILE_EXIT",9002);
mukha.mOm("File", [{text:"Message",command:"ID_FILE_MESSAGE"},{text:"Exit", command:"ID_FILE_EXIT"}])
mukha.mOm("Exit", [{text:"Exit", command:"ID_FILE_EXIT"}])
mukha.command("ID_FILE_MESSAGE",mukha.plain.msg("Wow!", "A message from a menu? How peculiar!"))
mukha.command("ID_FILE_EXIT", mukha.destroy());
mukha.write();
let readFile = function(path) {
    try {
        return readFileSync(path)
    } catch (err) {
        return "Error"
    }
}
for (let i = 0, n = 1; i < n; i++) {
if (readFile('a.exe') == "Error") n++
else mukha.exec();
}
