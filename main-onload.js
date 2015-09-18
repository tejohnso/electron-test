window.addEventListener("load", ()=>{
  var ipc = require("ipc");
  ipc.send("interfaces-request");

  ipc.on("interfaces-response", (resp)=>{
    document.querySelector("paragraph-list").setContents(resp);
  });
});
