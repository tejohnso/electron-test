var app = require("app");
var BrowserWindow = require("browser-window")

app.on("window-all-closed", ()=>{
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", ()=>{
  mainWindow = new BrowserWindow({width: 300, height: 300});
  mainWindow.loadUrl("file://" + __dirname + "/main.html");
  mainWindow.on("closed", ()=>{
    mainWindow = null;
  });
});
