import { Joystick3DConfig } from './controller'
import * as Typings from '../typings'

export const xjqxz: Typings.GameInformation = {
  id: 'xjqxz',
  name: '仙劍奇俠傳',
  translates: {
    cn: '仙剑奇侠传',
    tc: '仙劍奇俠傳',
    en: 'Legend of Sword and Fairy'
  },
  cover: require('../assets/images/xjqxz.jpg'),
  type: 'RPG',
  summary: '一心习武梦想名震江湖的李逍遥，在机缘巧合下结识神秘少女赵灵儿，展开护卫佳人千里寻母的旅程。途中因为多管闲事，得罪了欢喜冤家林月如，又被苗族巫女阿奴死缠不放。面对蕙质兰心的赵灵儿、外刚内柔的林月如、烂漫天真的阿奴，他将要如何抉择呢？',
  developers: ['大宇资讯股份有限公司'],
  publisher: ['大宇资讯', '双语公司', '晶合时代'],
  release: '1995/7/10',
  url: require('../assets/rooms/xjqxz.zip'),
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

export const jyqxz: Typings.GameInformation = {
  id: 'jyqxz',
  name: '金庸群俠傳',
  translates: {
    cn: '金庸群侠传',
    tc: '金庸群俠傳',
    en: 'Heroes of Jin Yong'
  },
  cover: require('../assets/images/jyqxz.jpg'),
  type: 'RPG',
  summary: '河洛工作室“群侠”系列三部曲的的第一部。自由度非常高，绝大部分的人物、武功、物品及剧情发展都十分忠于金庸原著。玩家可以任意结交各种金庸小说人物，要求他们加入队伍，一起冒险，前提就是主角需要符合一定的条件。剧情是主角被游戏公司选中成为幸运玩家，亲身体验游戏，在游戏内，需要寻找“飞雪连天射白鹿，笑书神侠倚碧鸳”十四部天书，最终会成为武林盟主，从圣堂返回现实世界。相比于其他游戏，金庸群侠传独创门派，改变了RPG游戏的单线剧情。所以，金庸群侠传的亮点与特点就在于“多线性”。',
  developers: ['河洛工作室'],
  publisher: ['智冠科技'],
  release: '1996',
  url: require('../assets/rooms/jyqxz.zip'),
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
