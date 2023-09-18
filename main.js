const { app, BrowserWindow, Tray, Menu } = require("electron");

let template = [
  { label: "Blog" },
  {
    label: "Currencies",
    submenu: [
      {label: "USD"}, {label: "INR"}, {label: "BRP"}
    ],
  },
];

let menu = Menu.buildFromTemplate(template);
// Menu.setApplicationMenu(menu);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // resizable: false,
    // title: "First Electron",
    // frame: false,
    // alwaysOnTop:true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

  tray = new Tray("electron.png");
  tray.setToolTip("Electron App is running..");

  tray.on("click", () => {
    win.isVisible() ? win.minimize() : win.maximize();
  });

  let menus = [
    {
      label: "quit",
      click: () => {
        app.quit();
      },
    },
  ];

  const contextMenu = Menu.buildFromTemplate(menus);
  tray.setContextMenu(contextMenu);

  win.webContents.on("context-menu", () => {
    menu.popup();
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
