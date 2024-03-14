import { Joystick3DConfig } from '@/store/controls'
import type { Game } from '@/types'

export default async function jyqxz(): Promise<Game> {
  const { default: cover } = await import('@/assets/images/jyqxz.jpg')
  const { default: url } = await import('@/assets/roms/jyqxz.zip')

  return {
    id: 'jyqxz',
    name: '金庸群俠傳',
    translates: {
      cn: '金庸群侠传',
      tc: '金庸群俠傳',
      en: 'Heroes of Jin Yong',
    },
    cover,
    type: 'RPG',
    summary:
      '河洛工作室“群侠”系列三部曲的的第一部。自由度非常高，绝大部分的人物、武功、物品及剧情发展都十分忠于金庸原著。玩家可以任意结交各种金庸小说人物，要求他们加入队伍，一起冒险，前提就是主角需要符合一定的条件。剧情是主角被游戏公司选中成为幸运玩家，亲身体验游戏，在游戏内，需要寻找“飞雪连天射白鹿，笑书神侠倚碧鸳”十四部天书，最终会成为武林盟主，从圣堂返回现实世界。相比于其他游戏，金庸群侠传独创门派，改变了RPG游戏的单线剧情。所以，金庸群侠传的亮点与特点就在于“多线性”。',
    developers: ['河洛工作室'],
    publisher: ['智冠科技'],
    release: '1996',
    url,
    size: 26130954,
    command: ['PLAY.BAT'],
    save: {
      path: './',
      regexp: /R[1-3]\.GRP$/,
    },
    play: {
      keyboad: true,
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
        {
          content: 'Y',
          key: 'Y',
          options: {
            type: 'round',
            size: 50,
            position: {
              right: 70,
              bottom: 150,
            },
          },
        },
        {
          content: 'N',
          key: 'N',
          options: {
            type: 'round',
            size: 50,
            position: {
              right: 135,
              bottom: 120,
            },
          },
        },
      ],
    },
  }
}
