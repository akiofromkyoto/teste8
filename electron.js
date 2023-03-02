const { app, BrowserWindow} = require("electron");
const path = require("path");

const isDev = require("electron-is-dev")

function createWindow() {
    const win = new BrowserWindow({
        with: 1366,
        height: 625,
        webPreferences: {
            preload: path.join(__dirname, "preloader.js"),
        },
    });
    win.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "")}`` );
}

app.whenReady().then(() => {
    createWindow();

    app.on("active", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
})