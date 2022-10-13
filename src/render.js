/*const { shell } = require('electron');

const button = document.getElementById('dis');
button.addEventListener('click', () => {
    
    createBrowserWindow();
});



function createBrowserWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    height: 600,
    width: 800
  });

  win.loadURL('http://google.fr');
}

import { ipcRenderer } from '../node_modules/electron';
const ipc = ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('discordbtn').addEventListener("click", function () {
        console.log('bouton')
        let active_hotspot_id = localStorage.getItem('active_hotspot_id')
        const reply = ipc.sendSync('hotspot-event', active_hotspot_id)
    });
})
*/