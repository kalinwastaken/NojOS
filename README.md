# _Welcome to NojOS_
![image](https://www.image2url.com/r2/default/images/1777936511929-7dd8fe80-837b-4da6-a93b-d3a6dacd4034.png)  
_Screenshot from NojOS terminal as of 04.05.2026_  
This is in purpose to document all commands in detail in the NojOS terminal and installation.
## Installation and Running
Save a folder in your home directory as 'NojOS' with all files in the folder.  
To run NojOS, use must run `node NojOS/NojOS.js`  
Note: node.js must be installed to run this program, along with the modules:  
* os
* fs
* prompt-sync

and your package.json's type parameter must be set to `"commonjs"
## `~help`
Prints a help message with a list of commands.
## `~echo`
The most basic of commands. Prints text after `~echo` command.
### Example:
`~echo ~echo is a basic function.`  
returns  
`~echo is a basic function`  
Note that you can use the keywords:  
* MATH - To reference last mentioned math answer
* USER - To reference username
* DATE - To reference date.
## `~save` and `~read`  
Saves and reads a .txt file.  
### Examples:  
`~read example`  
returns  
`If you are reading this, ~read works.`  
which is the content of the example.txt file.  
`~save example`  
returns prompt:  
`Text: `  
Whatever is put in the prompt is printed into the file, it also allows the use of \n in the terminal to represent newline. It may overwrite a file with the existing name.  
May also use `USER`, `MATH`, and `DATE` in the same way as `~echo`.
## `~specs`
Returns system and network information. Too long to mention briefly here, but gets a majority of data accessible by the `os` module from nodejs.  
## `~execute`
References code from .txt file and compiles it and executes it.  
### Examples:  
`~execute code`  
returns  
`If you are reading this, ~execute works`  
Code in code.txt file is:  
`~echo If you are reading this, ~execute works` with a \n at the end.  
The \n is necessary. Executes code accessible in terminal plus `~if` function, which uses the conditions  
* `x=y` - x equals y  
* `x!y` - x is inequal to y  
* `x>y` - x is bigger than y  
* `x<y` - x is less than y
## `~math`  
Changes terminal to math terminal.  
Only allows one function per line.  
### Syntax  
Arithmetic is the exact same same as normal syntax, such as:  
* `10+10`
* `6^7`
* `10/1`  
etc., with or without spaces.  

Basic functions with one argument are written like this:  
`sqrt 10`  
this time, with the space required.  
For other basic functions with two or more arguments, use a comma in-between args.  
`atan2 10,10`

Graphs are displayed in similar syntax, like:  
`graph sin`  
which outputs:  
![image](https://www.image2url.com/r2/default/images/1777937271333-a2005c69-f52f-4152-b5d6-12e9610271b1.png)  
Basic functions are allowed and aren't supposed to be use with x.  
Basic arithmetic is also supported in graph, such as:  
`graph pi*x`  
which outputs:  
![image](https://www.image2url.com/r2/default/images/1777937403686-9c92e147-5438-4e01-adb1-9f79af950e4d.png)
## `~dict`
Gets definition of word from large dictionary .txt file from text after `~dict`.
## `~image`
Prints image of file path after `~image` and then halts. Technical restrictions prevent non-halting.
