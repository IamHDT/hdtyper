import {Registry, loadRegistry} from './registry';
import type {HKEY} from 'native-reg';

const appPath = `"${process.execPath}"`;
const regKeys = [
  `Software\\Classes\\Directory\\Background\\shell\\Hdtyper`,
  `Software\\Classes\\Directory\\shell\\Hdtyper`,
  `Software\\Classes\\Drive\\shell\\Hdtyper`
];
const regParts = [
  {key: 'command', name: '', value: `${appPath} "%V"`},
  {name: '', value: 'Open Hdtyper here'},
  {name: 'Icon', value: `${appPath}`}
];

function addValues(hdtyperKey: HKEY, commandKey: HKEY) {
  if (!loadRegistry()) return;
  try {
    Registry.setValueSZ(hdtyperKey, regParts[1].name, regParts[1].value);
  } catch (error) {
    console.error(error);
  }
  try {
    Registry.setValueSZ(hdtyperKey, regParts[2].name, regParts[2].value);
  } catch (err) {
    console.error(err);
  }
  try {
    Registry.setValueSZ(commandKey, regParts[0].name, regParts[0].value);
  } catch (err_) {
    console.error(err_);
  }
}

export const add = () => {
  if (!loadRegistry()) return;
  regKeys.forEach((regKey) => {
    try {
      const hdtyperKey =
        Registry.openKey(Registry.HKCU, regKey, Registry.Access.ALL_ACCESS) ||
        Registry.createKey(Registry.HKCU, regKey, Registry.Access.ALL_ACCESS);
      const commandKey =
        Registry.openKey(Registry.HKCU, `${regKey}\\${regParts[0].key}`, Registry.Access.ALL_ACCESS) ||
        Registry.createKey(Registry.HKCU, `${regKey}\\${regParts[0].key}`, Registry.Access.ALL_ACCESS);
      addValues(hdtyperKey, commandKey);
      Registry.closeKey(hdtyperKey);
      Registry.closeKey(commandKey);
    } catch (error) {
      console.error(error);
    }
  });
};

export const remove = () => {
  if (!loadRegistry()) return;
  regKeys.forEach((regKey) => {
    try {
      Registry.deleteTree(Registry.HKCU, regKey);
    } catch (err) {
      console.error(err);
    }
  });
};
