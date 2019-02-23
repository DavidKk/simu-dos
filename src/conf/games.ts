import { px2rem } from '../share/style'
import { DGGame, DGButtonType } from '../types'

export const xjqxz: DGGame = {
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
            right: px2rem(50),
            bottom: px2rem(50)
          }
        }
      },
      {
        context: 'Exc',
        keyCode: 27,
        options: {
          type: DGButtonType.round,
          size: px2rem(50),
          position: {
            right: px2rem(150),
            bottom: px2rem(50)
          }
        }
      }
    ]
  }
}
