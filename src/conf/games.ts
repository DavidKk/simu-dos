import { px2rem } from '../share/math'
import { Game } from '../share/types'

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
      context: 'Full Screen',
      action: 'fullscreen',
      options: {
        position: {
          left: '50%',
          top: px2rem(10) + 'rem'
        }
      }
    },
    {
      context: 'Space',
      keyCode: 32,
      options: {
        type: 'round',
        position: {
          right: px2rem(50) + 'rem',
          bottom: px2rem(50) + 'rem'
        }
      }
    },
    {
      context: 'Exc',
      keyCode: 27,
      options: {
        type: 'round',
        size: px2rem(50) + 'rem',
        position: {
          right: px2rem(150) + 'rem',
          bottom: px2rem(50) + 'rem'
        }
      }
    }
  ]
}
