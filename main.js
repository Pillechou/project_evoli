const { app, BrowserWindow,ipcMain,shell} = require('electron')
const client = require('discord-rich-presence')('1029764564411240499');
const { port,clientId,clientSecret } = require('./config.json');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration:true,
      //preload : path.join(__dirname, 'preload.js')
    
    }
  })

  win.loadFile('src/index.html')
  
}

app.whenReady().then(() => {
  createWindow()
})

client.updatePresence({
    details: 'Dev mode',
    state: "Made by Pillechou",
    startTimestamp: Date.now(),
    largeImageKey: 'evoli',
    instance: true,
  });
  
/*
  app.on('session-created', (session) => {
    console.log(session)
  })
*/  
  app.on('browser-window-focus', () => {
    console.log("Focused")
  })
  app.on('browser-window-blur', () => {
    console.log("UnFocused")
    console.warn("TO DO : Disconnect after 10 min")
  })
  /*
  ipcMain.on('hotspot-event', (event, arg) => {
    event.returnValue = 'Message received!'
    shell.openExternal(`https://google.fr`);
  })

  */
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
