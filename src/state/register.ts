import { atom } from 'recoil';

export const registerInfo = atom({
  key: 'registerInfo',
  default: {
    user_id: '',
    pwd: '',
    nickname: '',
    birth_year: new Date(),
    gender: false,
    phone_num: '',
    email: '',
    address: '',
  },
});
