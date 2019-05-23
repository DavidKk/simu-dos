import * as Typings from '../typings'

export const digger: Typings.DGGameInfo = {
  id: 'digger',
  name: 'Digger',
  size: 24576,
  url: require('../../rooms/digger.zip'),
  command: ['DIGGER.COM'],
  play: {
    joystick: true
  }
}

export const xjqxz: Typings.DGGameInfo = {
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
          Typings.DGJoystickDirectionType.left,
          Typings.DGJoystickDirectionType.up
        ]
      },
      {
        keyCode: 38,
        direction: [
          Typings.DGJoystickDirectionType.up,
          Typings.DGJoystickDirectionType.right
        ]
      },
      {
        keyCode: 39,
        direction: [
          Typings.DGJoystickDirectionType.right,
          Typings.DGJoystickDirectionType.down
        ]
      },
      {
        keyCode: 40,
        direction: [
          Typings.DGJoystickDirectionType.down,
          Typings.DGJoystickDirectionType.left
        ]
      }
    ],
    keyboard: [
      {
        context: 'Space',
        keyCode: 32,
        options: {
          type: Typings.DGButtonType.round,
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
          type: Typings.DGButtonType.round,
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
  url: require('../../rooms/jyqxz.zip'),
  command: ['PLAY.BAT'],
  save: {
    path: './',
    regexp: /R[1-3]\.GRP$/
  },
  play: {
    joystick: [
      {
        keyCode: 37,
        direction: [
          Typings.DGJoystickDirectionType.left,
          Typings.DGJoystickDirectionType.up
        ]
      },
      {
        keyCode: 38,
        direction: [
          Typings.DGJoystickDirectionType.up,
          Typings.DGJoystickDirectionType.right
        ]
      },
      {
        keyCode: 39,
        direction: [
          Typings.DGJoystickDirectionType.right,
          Typings.DGJoystickDirectionType.down
        ]
      },
      {
        keyCode: 40,
        direction: [
          Typings.DGJoystickDirectionType.down,
          Typings.DGJoystickDirectionType.left
        ]
      }
    ],
    keyboard: [
      {
        context: 'Space',
        keyCode: 32,
        options: {
          type: Typings.DGButtonType.round,
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
          type: Typings.DGButtonType.round,
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
          type: Typings.DGButtonType.round,
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
          type: Typings.DGButtonType.round,
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
