import { app, BrowserWindow } from 'electron';
const path = require('path');

if (require('electron-squirrel-startup')) {
    app.quit();
}

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    
    mainWindow.loadURL('http://localhost:8080/');
    
    // const currentSession = mainWindow.webContents.session
    // currentSession.setPermissionRequestHandler((webContents, permission, callback) => {

    //     const resultOfSomeCondition = false;

    //     if (permission === 'notifications') {
    //         return callback(resultOfSomeCondition);
    //     }
    //   });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);
