import { Joystick3DConfig } from './controller'
import * as Typings from '../typings'

export const xjqxz: Typings.DGGameInfo = {
  id: 'xjqxz',
  name: '仙剑奇侠传',
  commonName: 'Legend of Sword and Fairy',
  cover: require('../assets/images/xjqxz.jpg'),
  type: 'RPG',
  developers: ['大宇资讯股份有限公司'],
  publisher: ['大宇资讯', '双语公司', '晶合时代'],
  release: '1995/7/7',
  url: 'https://wasabi.zczc.cz/dos-games/bin/仙剑奇侠传.zip',
  size: 20272189,
  command: ['PAL!.EXE'],
  save: {
    path: './',
    regexp: /[1-5]\.RPG$/
  },
  play: {
    dpad: true,
    joystick: Joystick3DConfig,
    keypad: [
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
  commonName: 'Heroes of Jin Yong',
  cover: require('../assets/images/jyqxz.jpg'),
  type: 'RPG',
  developers: ['河洛工作室'],
  publisher: ['智冠科技'],
  release: '1996',
  url: 'https://wasabi.zczc.cz/dos-games/bin/金庸群侠传.zip',
  size: 26130954,
  command: ['PLAY.BAT'],
  save: {
    path: './',
    regexp: /R[1-3]\.GRP$/
  },
  play: {
    keyboad: true,
    dpad: true,
    joystick: Joystick3DConfig,
    keypad: [
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
        context: 'Y',
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
        context: 'N',
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

export const xuanyuanjian: Typings.DGGameInfo = {
  id: 'xuanyuanjian',
  name: '轩辕剑',
  commonName: 'XuanYuan Sword',
  cover: require('../assets/images/xuanyuanjian.jpg'),
  type: 'RPG',
  developers: ['大宇资讯股份有限公司'],
  publisher: ['大宇资讯', '畅游'],
  release: '1990/10/13',
  url: 'https://wasabi.zczc.cz/dos-games/bin/轩辕剑1.zip',
  size: 1033798,
  command: ['Play.bat'],
  save: {
    path: './',
    regexp: /^(CHAIN\.DSK|DATA1\.BVS|DATA2\.BVS)$/
  },
  play: {
    keyboad: true,
    dpad: true,
    joystick: true,
    keypad: [
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
