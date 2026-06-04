import fs from 'node:fs';
import {exec} from 'node:child_process'
import {setTimeout} from 'node:timers/promises'
let text = "";
let winname = "DEFAULT NAME";
let icon = "DEFAULT ICON.ico"
let onstart = "";
let height = 240;
let width = 120;
let menu = false;
let command = ``
let def = "";
let WM_LBUTTONDOWN = ''
let WM_RBUTTONDOWN = ''
let menuCode = `
HMENU hMenu, hSubMenu;
hMenu = CreateMenu();`
class Plain {
    constructor() {
    this.msg = function(header, txt) {
        return `MessageBox(hwnd, "${txt}", "${header}", MB_OK | MB_ICONINFORMATION);`
    };
    this.err = function(header, txt) {
        return `MessageBox(hwnd, "${txt}", "${header}", MB_OK | MB_ICONERROR);`
    }
}
}
export const mukha = {
    //Does functions on creation (before window appears)
    onCreate:{
      msg:function(header, txt, $case) {
        onstart += `
               MessageBox(hwnd, "${txt}", "${header}", MB_OK | MB_ICONINFORMATION);`
    },
    //Reference regular error
    error:function(header, txt, $case){
        onstart += `       
            MessageBox(hwnd, "${txt}", "${header}", MB_OK | MB_ICONERROR);`
    }  
    },
    def:function(name, num){
        def += `
        #define ${name} ${num}`
    },
    plain:new Plain(),
    rmb:{
        msg:function(header, txt) {
            WM_RBUTTONDOWN += `
            ${win.plain.msg(header, txt)}`
        },
        err:function(header, txt) {
            WM_RBUTTONDOWN += `
            ${win.plain.err(header, txt)}`
        }
    },
    lmb:{
       msg:function(header, txt) {
            WM_LBUTTONDOWN += `
            ${win.plain.msg(header, txt)}`
        },
        err:function(header, txt) {
            WM_LBUTTONDOWN += `
            ${win.plain.err(header, txt)}`
        } 
    },
    menu:function(){
        menu = true;
    },
    /**
     * @param {string} name Name of the executable in the top left bar.
     */
    name:function(name) {
        winname = name;
    },
    /**
     * @param {string} ico Icon file for executable
     */
    ico:function(ico) {
        icon = ico;
    },
    /*
        *Executes file
    */
    mOm:function(text, submenu) {
      menu = true;
      let subMenuCode = "";
      for (let i = 0, n = 1; i < n; i++) {
        subMenuCode += `
        AppendMenu(hSubMenu, MF_STRING, ${submenu[i].command}, "${submenu[i].text}");`
        if (submenu[i+1] != undefined) n++;
      }
        menuCode += `
        hSubMenu = CreatePopupMenu();
        ${subMenuCode}
        AppendMenu(hMenu, MF_STRING | MF_POPUP, (UINT)hSubMenu, "${text}");`
    },
    write:function() {
        if (!menu) menuCode = "";
        menuCode += "\nSetMenu(hwnd, hMenu);"
        fs.writeFileSync("win.c",win.c());
        exec('"gcc" win.c', (error, stdout, stderr) => {
            process.stdout.write((stdout, stderr))
        });
    },
    destroy:function() {
        return "DestroyWindow(hwnd);"
    },
    command:function($case, code) {
        command += `
        case ${$case}:
            ${code}
        break;
        `
    },
    exec:function() {
        exec('a.exe', (error, stdout, stderr) => {
            process.stdout.write((stdout, stderr))
        });

    },
    c:function(){
        //Forked from winprog.org tutorials
        return `#include <windows.h>
#include <winuser.h>${def}
const char g_szClassName[] = "myWindowClass";

LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    switch(msg) {
        case WM_CREATE:
        HICON hIcon, hIconSm;
            {
                hIcon = LoadImage(NULL, "${icon}", IMAGE_ICON, 32, 32, LR_LOADFROMFILE);
        if(hIcon)
            SendMessage(hwnd, WM_SETICON, ICON_BIG, (LPARAM)hIcon);
        else
            MessageBox(hwnd, "Could not load large icon!", "Error", MB_OK | MB_ICONERROR);
        ${onstart}
        ${menuCode}
            }
        break;
        case WM_COMMAND:
            switch(LOWORD(wParam))
        {
            ${command}
        }
        break;
        case WM_RBUTTONDOWN:
        ${WM_RBUTTONDOWN}
        break;
        case WM_LBUTTONDOWN:
        ${WM_LBUTTONDOWN}
        break;
        case WM_CLOSE:
            DestroyWindow(hwnd);
        break;
        case WM_DESTROY:
            PostQuitMessage(0);
        break;
        default:
            return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
    LPSTR lpCmdLine, int nCmdShow)
{
    WNDCLASSEX wc;
    HWND hwnd;
    MSG Msg;

    wc.cbSize        = sizeof(WNDCLASSEX);
    wc.style         = 0;
    wc.lpfnWndProc   = WndProc;
    wc.cbClsExtra    = 0;
    wc.cbWndExtra    = 0;
    wc.hInstance     = hInstance;
    wc.hIcon         = LoadIcon(NULL, IDI_APPLICATION);
    wc.hCursor       = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_WINDOW+1);
    wc.lpszMenuName  = NULL;
    wc.lpszClassName = g_szClassName;
    wc.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);

    if(!RegisterClassEx(&wc))
    {
        MessageBox(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    hwnd = CreateWindowEx(
        WS_EX_CLIENTEDGE,
        g_szClassName,
        "${winname}",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 240, 120,
        NULL, NULL, hInstance, NULL);

    if(hwnd == NULL)
    {
        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    ShowWindow(hwnd, nCmdShow);
    UpdateWindow(hwnd);

    while(GetMessage(&Msg, NULL, 0, 0) > 0)
    {
        TranslateMessage(&Msg);
        DispatchMessage(&Msg);
    }
    return Msg.wParam;
}`
    }
}
