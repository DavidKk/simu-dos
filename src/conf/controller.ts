import * as Typings from '../typings'

export const Joystick2DConfig: Typings.JoystickConf = [
  {
    keyCode: 37,
    direction: 'left'
  },
  {
    keyCode: 38,
    direction: 'up'
  },
  {
    keyCode: 39,
    direction: 'right'
  },
  {
    keyCode: 40,
    direction: 'down'
  }
]

export const Joystick3DConfig: Typings.JoystickConf = [
  {
    keyCode: 37,
    direction: [
      'left',
      'up'
    ]
  },
  {
    keyCode: 38,
    direction: [
      'up',
      'right'
    ]
  },
  {
    keyCode: 39,
    direction: [
      'right',
      'down'
    ]
  },
  {
    keyCode: 40,
    direction: [
      'down',
      'left'
    ]
  }
]

export const DPadDefaultConfig: Typings.DPadConf = [
  {
    keyCode: 37,
    direction: 'left'
  },
  {
    keyCode: 38,
    direction: 'up'
  },
  {
    keyCode: 39,
    direction: 'right'
  },
  {
    keyCode: 40,
    direction: 'down'
  }
]
