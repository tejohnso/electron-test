var app = require("app"),
ipc = require("ipc"),
BrowserWindow = require("browser-window"),
interfaces = require("./interfaces.js");

app.on("window-all-closed", ()=>{
  if (process.platform != "darwin") {
    app.quit();
  }
});

ipc.on("interfaces-request", (event)=>{
  event.sender.send("interfaces-response", interfaces());
});

app.on("ready", ()=>{
  mainWindow = new BrowserWindow(
  {
    "width": 300,
    "height": 300,
    "center": true,
    "fullscreen": false,
    "skip-taskbar": true,
    "frame": false,
    "web-preferences": {
      "node-integration": false,
      "preload": __dirname + "/main-onload.js",
      "web-security": false
    }
  });
  mainWindow.loadUrl("file://" + __dirname + "/main.html");
  mainWindow.on("closed", ()=>{
    mainWindow = null;
  });
});

app.on("error", (err)=>{console.dir(err);});
