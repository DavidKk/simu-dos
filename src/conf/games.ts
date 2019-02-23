import { DGGameInfo, DGButtonType } from '../types'

export const xjqxz: DGGameInfo = {
  id: 'xjqxz',
  name: '仙剑奇侠传',
  url: require('../../rooms/xjqxz.zip'),
  command: ['PAL!.EXE'],
  save: {
    path: './',
    regexp: /[1-5]\.RPG$/
  },
  play: {
    joystick: true,
    keyboard: [
      {
        context: 'Space',
        keyCode: 32,
        options: {
          type: DGButtonType.round,
          position: {
            right: 50,
            bottom: 50
          }
        }
      },
      {
        context: 'Exc',
        keyCode: 27,
        options: {
          type: DGButtonType.round,
          size: 50,
          position: {
            right: 150,
            bottom: 50
          }
        }
      }
    ]
  }
}
