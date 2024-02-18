import type { JoystickOptions, DpadOptions } from '@/types'

export const Joystick2DConfig: JoystickOptions = [
  {
    key: 'ArrowUp',
    direction: 'up',
  },
  {
    key: 'ArrowRight',
    direction: 'right',
  },
  {
    key: 'ArrowDown',
    direction: 'down',
  },
  {
    key: 'ArrowLeft',
    direction: 'left',
  },
]

export const Joystick3DConfig: JoystickOptions = [
  {
    key: 'ArrowUp',
    direction: ['up', 'right'],
  },
  {
    key: 'ArrowRight',
    direction: ['right', 'down'],
  },
  {
    key: 'ArrowDown',
    direction: ['down', 'left'],
  },
  {
    key: 'ArrowLeft',
    direction: ['left', 'up'],
  },
]

export const DPadConfig: DpadOptions = [
  {
    key: 'ArrowUp',
    direction: 'up',
  },
  {
    key: 'ArrowRight',
    direction: 'right',
  },
  {
    key: 'ArrowDown',
    direction: 'down',
  },
  {
    key: 'ArrowLeft',
    direction: 'left',
  },
]
