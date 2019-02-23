import {
  DGGameInfo,
  DGButtonType,
  DGJoystickDirectionType
} from '../types'

export const xjqxz: DGGameInfo = {
  id: 'xjqxz',
  name: '仙剑奇侠传',
  size: 20272189,
  url: require('../../rooms/xjqxz.zip'),
  command: ['PAL!.EXE'],
  save: {
    path: './',
    regexp: /[1-5]\.RPG$/
  },
  play: {
    joystick: [
      {
        keyCode: 37,
        direction: [
          DGJoystickDirectionType.left,
          DGJoystickDirectionType.up
        ]
      },
      {
        keyCode: 38,
        direction: [
          DGJoystickDirectionType.up,
          DGJoystickDirectionType.right
        ]
      },
      {
        keyCode: 39,
        direction: [
          DGJoystickDirectionType.right,
          DGJoystickDirectionType.down
        ]
      },
      {
        keyCode: 40,
        direction: [
          DGJoystickDirectionType.down,
          DGJoystickDirectionType.left
        ]
      }
    ],
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
