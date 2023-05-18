 'use strict';
 console.log("main process working");
 console.log('main.js');
 const electron = require("electron");
 const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
 let win;
 
 
 app.on('window-all-closed', function () {
     if (process.platform !== 'darwin') app.quit();
 });

function createWindow() {

    win = new BrowserWindow({ 
        width: 800, height: 800,

         webPreferences: {

             nodeIntegration: true,

             contextIsolation: false,

         }
     });
     win.loadURL(url.format({

         pathname: path.join(__dirname, 'index.html'),

         protocol: 'file',

         slashes: true

     }));

     win.on('closed', () => {

         win = null;

     })

 }

 app.on('ready', createWindow);

 app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {

        app.quit()
     }
 });

 app.on('activate', () => {

     if (win === null) {

         createWindow()

     }
    });



