const {app, BrowserWindow} = require('electron')

app.on('ready', ()=>{

  let window;

  window = new BrowserWindow({
    minWidth: 1200,
    minHeight: 720,
    resizable: true,
    center: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  window.loadURL('http://localhost:3000')

})