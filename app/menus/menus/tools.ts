import {BrowserWindow, MenuItemConstructorOptions} from 'electron';

export default (
  commands: Record<string, string>,
  execCommand: (command: string, focusedWindow?: BrowserWindow) => void
): MenuItemConstructorOptions => {
  return {
    label: 'Tools',
    submenu: [
      {
        label: 'Update plugins',
        accelerator: commands['plugins:update'],
        click() {
          execCommand('plugins:update');
        }
      },
      {
        label: 'Install Hdtyper CLI command in PATH',
        click() {
          execCommand('cli:install');
        }
      },
      {
        type: 'separator'
      },
      ...(process.platform === 'win32'
        ? <MenuItemConstructorOptions[]>[
            {
              label: 'Add Hdtyper to system context menu',
              click() {
                execCommand('systemContextMenu:add');
              }
            },
            {
              label: 'Remove Hdtyper from system context menu',
              click() {
                execCommand('systemContextMenu:remove');
              }
            },
            {
              type: 'separator'
            }
          ]
        : [])
    ]
  };
};
