import { atom } from 'recoil'

export const nicknameState = atom({
  key: 'nicknameState',
  default: localStorage.getItem('nickname') || '',
  effects: [({ onSet }) => {
    onSet((newValue) => {
      localStorage.setItem('nickname', newValue)
    })
  }],
})
