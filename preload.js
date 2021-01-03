const { contextBridge, ipcRenderer} = require("electron");
contextBridge.exposeInMainWorld(
  "api", {
    close: () => {
      ipcRenderer.send("main_close");
    },
    open: (arg) => {
      ipcRenderer.send("sub_open", arg);
    }
  }
);