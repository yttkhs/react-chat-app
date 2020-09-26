import { atom } from 'recoil';

export const toggleMenuState = atom<boolean>({
  key: 'toggleMenuState',
  default: false,
});
