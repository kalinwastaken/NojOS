# _Welcome to NojOS_
![image](https://www.image2url.com/r2/default/images/1777936511929-7dd8fe80-837b-4da6-a93b-d3a6dacd4034.png)  
_Screenshot from NojOS terminal as of 04.05.2026_  
This is in purpose to document all commands in detail in the NojOS terminal and installation.
# But, what is this?
This is the interface for an OS project which will be done way in the future; not an OS. For right now, this is just a test to see how far I can stretch JavaScript as a language to the point it can act as an interface for other programs on the computer. tl;dr:
Fucking around and finding out.
## Installation and Running
First, move file to home directory for proper use.
To run NojOS, use must run `node NojOS-VERSION/NojOS-VERSION/NojOS.js`  
Note: node.js must be installed to run this program, along with the modules:  
* os
* fs
* prompt-sync
* terminal-image
* mathjs
* child_processes
* timers

and your package.json's type parameter must be set to "module"
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
## `~save` & `~read`  
Saves and reads files.  
### Examples:  
`~read example.txt`  
returns  
`If you are reading this, ~read works.`  
which is the content of the example.txt file.  
`~save example.txt`  
returns prompt:  
`Text: `  
Whatever is put in the prompt is printed into the file, it also allows the use of \n in the terminal to represent newline. It may overwrite a file with the existing name.  
May also use `USER`, `MATH`, and `DATE` in the same way as `~echo`.
## `~specs`
Returns system and network information. Too long to mention briefly here, but gets a majority of data accessible by the `os` module from nodejs.  
## `~run`
Runs files
## `~laika`
References code from .laika file and compiles it and executes it.  
### Examples:  
`~laika code`  
returns  
`If you are reading this, ~laika works`  
Code in code.laika file is:  
`~echo If you are reading this, ~laika works` with a \n at the end.  
The \n is necessary. Executes code accessible in terminal plus `~if` function, which uses the conditions  
* `x=y` - x equals y  
* `x!y` - x is inequal to y  
* `x>y` - x is bigger than y  
* `x<y` - x is less than y  
Which is used like this:
`~if \x=10/ {
~$Insert code here, also this is a comment;
~}`
It is mostly based off of the terminal. Read source code for help.
## `~math`  
Changes terminal to math terminal. Allows you to perform calculations. Uses math.js for syntax.
## `~dict`
Gets definition of word from large dictionary .json file from text after `~dict`.
## `~chyor` & `~otv`
Coming soon...
## `~image`
Prints image of file path after `~image` and then halts. Technical restrictions prevent non-halting.
