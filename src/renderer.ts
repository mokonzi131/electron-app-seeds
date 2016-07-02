import {remote} from 'electron';
const {Menu} = remote;

const template: Electron.MenuItemOptions[] = [
    {
        label: 'File',
        submenu: [
            {
                role: 'quit'
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
