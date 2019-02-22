import { Game } from '../types'

export const XJQXZ: Game = {
  ID: 'xjqxz',
  NAME: '仙剑奇侠传',
  URL: require('../../rooms/xjqxz.zip'),
  COMMAND: ['PAL!.EXE'],
  SAVE: {
    PATH: './',
    REGEXP: /[1-5]\.RPG$/
  },
  JOYSTICK: true,
  KEYBOARDS: [
    {
      context: 'Space',
      keycode: 27,
      options: {
        position: {
          right: 50,
          bottom: 50
        }
      }
    },
    {
      context: 'Exc',
      keycode: 13,
      options: {
        size: 50,
        position: {
          right: 150,
          bottom: 50
        }
      }
    }
  ]
}
