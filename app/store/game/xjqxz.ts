import { Joystick3DConfig } from '@/store/controls'
import type { Game } from '@/types'

export default async function xjqxz(): Promise<Game> {
  const { default: cover } = await import('@/assets/images/xjqxz.jpg')
  const { default: url } = await import('@/assets/roms/xjqxz.zip')

  return {
    id: 'xjqxz',
    name: '仙劍奇俠傳',
    translates: {
      cn: '仙剑奇侠传',
      tc: '仙劍奇俠傳',
      en: 'Legend of Sword and Fairy',
    },
    cover,
    type: 'RPG',
    summary:
      '一心习武梦想名震江湖的李逍遥，在机缘巧合下结识神秘少女赵灵儿，展开护卫佳人千里寻母的旅程。途中因为多管闲事，得罪了欢喜冤家林月如，又被苗族巫女阿奴死缠不放。面对蕙质兰心的赵灵儿、外刚内柔的林月如、烂漫天真的阿奴，他将要如何抉择呢？',
    developers: ['大宇资讯股份有限公司'],
    publisher: ['大宇资讯', '双语公司', '晶合时代'],
    release: '1995/7/10',
    url,
    size: 20272189,
    command: ['PAL!.EXE'],
    save: {
      path: './',
      regexp: /[1-5]\.RPG$/,
    },
    play: {
      dpad: true,
      joystick: Joystick3DConfig,
      keypad: [
        {
          content: 'space',
          key: 'Space',
          options: {
            type: 'round',
            position: {
              right: 50,
              bottom: 50,
            },
          },
        },
        {
          content: 'esc',
          key: 'Escape',
          options: {
            type: 'round',
            size: 50,
            position: {
              right: 150,
              bottom: 50,
            },
          },
        },
      ],
    },
  }
}
