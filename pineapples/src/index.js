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
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    
    mainWindow.loadURL('http://localhost:8080/');
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', createWindow);
