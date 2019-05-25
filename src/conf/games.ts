import { Joystick3DConfig } from './controller'
import * as Typings from '../typings'

export const xjqxz: Typings.DGGameInfo = {
  id: 'xjqxz',
  name: '仙剑奇侠传',
  size: 20272189,
  cover: require('../../rooms/images/xjqxz.jpg'),
  url: require('../../rooms/xjqxz.zip'),
  command: ['PAL!.EXE'],
  save: {
    path: './',
    regexp: /[1-5]\.RPG$/
  },
  play: {
    dpad: true,
    joystick: Joystick3DConfig,
    keyboard: [
      {
        context: 'Space',
        keyCode: 32,
        options: {
          type: 'round',
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
          type: 'round',
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

export const jyqxz: Typings.DGGameInfo = {
  id: 'jyqxz',
  name: '金庸群侠传',
  size: 26130954,
  cover: require('../../rooms/images/jyqxz.jpg'),
  url: require('../../rooms/jyqxz.zip'),
  command: ['PLAY.BAT'],
  save: {
    path: './',
    regexp: /R[1-3]\.GRP$/
  },
  play: {
    dpad: true,
    joystick: Joystick3DConfig,
    keyboard: [
      {
        context: 'Space',
        keyCode: 32,
        options: {
          type: 'round',
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
          type: 'round',
          size: 50,
          position: {
            right: 150,
            bottom: 50
          }
        }
      },
      {
        context: 'Y/是',
        keyCode: 89,
        options: {
          type: 'round',
          size: 50,
          position: {
            right: 70,
            bottom: 150
          }
        }
      },
      {
        context: 'N/否',
        keyCode: 78,
        options: {
          type: 'round',
          size: 50,
          position: {
            right: 135,
            bottom: 120
          }
        }
      }
    ]
  }
}
