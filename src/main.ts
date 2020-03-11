import { app, BrowserWindow, screen } from 'electron';
import { resolve } from 'path';

// window.gcをonにする
app.commandLine.appendSwitch('js-flags', '--expose-gc');

app.on('window-all-closed',function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('ready',function(){
  const { width, height } = screen.getPrimaryDisplay().size;
  const mainWindow = new BrowserWindow({ 
    x: 0,
    y: 0, 
    width: width,
    height: height,
    show: true,
    frame: false,
    resizable: false,
    // transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile(resolve(__dirname, './index.html'));
  mainWindow.setMenu(null);
  // mainWindow.setIgnoreMouseEvents(true);
  // mainWindow.setAlwaysOnTop(true);
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed" ,function(){
  	app.quit();
  });
});