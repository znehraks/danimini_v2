import { atom } from 'recoil';
import { v4 } from 'uuid';

export const activatedMenuAtom = atom<number>({
  key: `activatedMenuAtom${v4()}`,
  default: -1,
});
