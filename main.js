const {app,BrowserWindow,ipcMain} = require('electron');
const path = require('path')

let mainWindow = null;
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 245, 
    height: 230,
    transparent: true,
    frame: false,
    resizable: false,
    maximizable: false,
    webPreferences: {
      enableRemoteModule: false,
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

ipcMain.on("main_close", (event) => {
  mainWindow.close();
});

ipcMain.on("sub_open", (event, arg) => {
  const subWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false
    }
  });
  const googleBaseURL = 'https://www.google.com/search';
  const query = '?q=' + arg;
  subWindow.loadURL(googleBaseURL + query);
});