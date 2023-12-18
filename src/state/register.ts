import { atom } from 'recoil';

export const registerInfo = atom({
  key: 'registerInfo',
  default: {
    accout: '',
    password: '',
    name: '',
    birth: '',
    gender: false,
    nationality: false,
    phonenumber: '',
    email: '',
  },
});
