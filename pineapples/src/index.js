import { app, BrowserWindow } from 'electron';
const path = require('path');

if (require('electron-squirrel-startup')) {
    app.quit();
}

app.on('web-contents-created', (event, contents) => {
    contents.on('will-attach-webview', (event, webPreferences, params) => {
        webPreferences.nodeIntegration = false
    })
  })

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    //     webPreferences: {
    //         nodeIntegration: false,
    //         preload: path.join(__dirname, 'preload.js')
    // }
    });
    
    // const currentSession = mainWindow.webContents.session
    // currentSession.setPermissionRequestHandler((webContents, permission, callback) => {


    //     const resultOfSomeCondition = false;


    //     if (permission === 'notifications') {
    //         return callback(resultOfSomeCondition);
    //     }
    //   });

   //mainWindow.loadURL('http://localhost:8080/');
    mainWindow.loadFile('./src/index.html');
    
      
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);
