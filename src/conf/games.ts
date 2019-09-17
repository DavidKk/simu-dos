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

export const xuanyuanjian: Typings.GameInformation = {
  id: 'xuanyuanjian',
  name: '軒轅劍',
  translates: {
    cn: '轩辕剑',
    tc: '軒轅劍',
    en: 'XuanYuan Sword'
  },
  cover: require('../assets/images/xuanyuanjian.jpg'),
  type: 'RPG',
  summary: [
    '盘古开天辟地后，世界原本只有善恶两神所统治的神魔界。女娲造人后才开创了人类与神魔共处的时代，起初人类的活动空间不大，与神魔之间相安无事，但逐渐人类的快速发展和大量开发缩小了神魔的生存空间。这种激进的行为终于触怒了神魔界，掌握邪念的恶神和其麾下的妖魔决心要毁灭人类，但碍于执掌善念的善神的反对，使得恶神一直无法如愿，人类才得以躲过了一场浩劫。',
    '经过了几千年的和平光阴，有一天妖魔宪然向人类攻击，人类的浩劫还是降临了。妖魔们摧毁村庄和一切人类创造的文明。更令人吃惊的是，从虎口逃生的人的口中得知善神决定与恶神联手毁灭人类的事实。失去了善神庇护的人类，面对凶猛的妖魔毫无抵抗能力，但此时出现了一位手持轩辕剑的侠士，组织众人组成一支抗魔军，发挥人类的凝聚力，压制住妖魔的攻势。',
    '然而好景不长，在善恶两神亲率妖魔的联手攻击下，抗魔军全部惨遭杀害，从此人们只有生活在妖魔的阴影下，以残余的力量与妖魔抗衡，直到16年后的一天，主角燕赤霞——也就是轩辕剑侠之子，经过一番历练之后，开始调查善恶神夹击人类的原因。'
  ],
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
        context: 'Ctrl',
        keyCode: 17,
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
        context: 'Esc',
        keyCode: 27,
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
