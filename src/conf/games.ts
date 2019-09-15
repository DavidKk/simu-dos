import { Joystick3DConfig } from './controller'
import * as Typings from '../typings'

export const xjqxz: Typings.GameInfo = {
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

export const jyqxz: Typings.GameInfo = {
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

export const xuanyuanjian: Typings.GameInfo = {
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
            right: 135,
            bottom: 120
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
            right: 150,
            bottom: 50
          }
        }
      }
    ]
  }
}

// export const xuanyuanjian2: Typings.GameInfo = {
//   id: 'xuanyuanjian2',
//   name: '軒轅劍2',
//   translates: {
//     cn: '轩辕剑2',
//     tc: '軒轅劍2',
//     en: 'Xuan-Yuan Sword 2'
//   },
//   type: 'RPG',
//   summary: [
//     '盘古开天辟地后，世界原本只有善恶两神所统治的神魔界。女娲造人后才开创了人类与神魔共处的时代，起初人类的活动空间不大，与神魔之间相安无事，但逐渐人类的快速发展和大量开发缩小了神魔的生存空间。这种激进的行为终于触怒了神魔界，掌握邪念的恶神和其麾下的妖魔决心要毁灭人类，但碍于执掌善念的善神的反对，使得恶神一直无法如愿，人类才得以躲过了一场浩劫。',
//     '经过了几千年的和平光阴，有一天妖魔宪然向人类攻击，人类的浩劫还是降临了。妖魔们摧毁村庄和一切人类创造的文明。更令人吃惊的是，从虎口逃生的人的口中得知善神决定与恶神联手毁灭人类的事实。失去了善神庇护的人类，面对凶猛的妖魔毫无抵抗能力，但此时出现了一位手持轩辕剑的侠士，组织众人组成一支抗魔军，发挥人类的凝聚力，压制住妖魔的攻势。',
//     '然而好景不长，在善恶两神亲率妖魔的联手攻击下，抗魔军全部惨遭杀害，从此人们只有生活在妖魔的阴影下，以残余的力量与妖魔抗衡，直到16年后的一天，主角燕赤霞——也就是轩辕剑侠之子，经过一番历练之后，开始调查善恶神夹击人类的原因。'
//   ],
//   developers: ['大宇资讯股份有限公司'],
//   publisher: ['大宇资讯', '畅游'],
//   release: '1990/10/13',
//   url: 'https://wasabi.zczc.cz/dos-games/bin/轩辕剑2.zip',
//   command: ['SWD2.EXE']
// }

// export const mncs2000: Typings.GameInfo = {
//   name: '模拟城市2000',
//   translates: {
//     cn: '模拟城市 2000',
//     tc: '模擬城市 2000',
//     en: 'SimCity 2000'
//   },
//   command: ['SC2000.EXE']
// }

// export const 美少女梦工厂2: Typings.GameInfo = {
//   translates: {
//     cn: '美少女梦工厂 2',
//     tc: '美少女夢工廠 2',
//     en: 'Princess Maker 2'
//   },
//   command: [
//     "PM2.COM"
//   ]
// }

// export const 同级生2: Typings.GameInfo = {
//   translates: {
//     cn: '同级生 2',
//     tc: '同級生 2',
//     en: 'Dōkyūsei 2'
//   },
//   command: [
//     "START.BAT"
//   ]
// }

// export const 大富翁3: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁3',
//     tc: '大富翁3',
//     en: 'Rich Man 3'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 明星志愿1: Typings.GameInfo = {
//   translates: {
//     cn: '明星志愿1',
//     tc: '明星志願1',
//     en: 'Stardom'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 三国志4: Typings.GameInfo = {
//   translates: {
//     cn: '三国志IV',
//     tc: '三國志IV',
//     en: 'Romance of the Three Kingdoms IV: Wall of Fire'
//   },
//   command: [
//     "SAN486.COM"
//   ]
// }

// export const 皇帝: Typings.GameInfo = {
//   translates: {
//     cn: '皇帝',
//     tc: '皇帝',
//     en: 'Emperor'
//   },
//   command: [
//     "SKING.EXE"
//   ]
// }

// export const 轩辕剑外传：枫之舞: Typings.GameInfo = {
//   translates: {
//     cn: '轩辕剑外传：枫之舞',
//     tc: '軒轅劍外傳：楓之舞',
//     en: 'Xuan-Yuan Sword: Dance of Maple'
//   },
//   command: [
//     "SWDA.EXE"
//   ]
// }

// export const 疯狂医院: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂医院',
//     tc: '瘋狂醫院',
//     en: 'Crazy Doctor'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 大航海时代: Typings.GameInfo = {
//   translates: {
//     cn: '大航海时代',
//     tc: '大航海時代',
//     en: 'Uncharted Waters'
//   },
//   command: [
//     "KOEI.COM"
//   ]
// }

// export const 大航海时代2: Typings.GameInfo = {
//   translates: {
//     cn: '大航海时代2',
//     tc: '大航海時代2',
//     en: 'Uncharted Waters II'
//   },
//   command: [
//     "KOUKAI2.COM"
//   ]
// }

// export const 银河英雄传说3SP: Typings.GameInfo = {
//   translates: {
//     cn: '银河英雄传说III SP',
//     tc: '銀河英雄傳說III SP',
//     en: 'Legend of the Galactic Heroes III SP'
//   },
//   command: [
//     "GIN3.COM"
//   ]
// }

// export const 三国志2: Typings.GameInfo = {
//   translates: {
//     cn: '三国志II',
//     tc: '三國志II',
//     en: 'Romance of the Three Kingdoms II'
//   },
//   command: [
//     "Koei.bat"
//   ]
// }

// export const 三国志3: Typings.GameInfo = {
//   translates: {
//     cn: '三国志III',
//     tc: '三國志III',
//     en: 'Romance of the Three Kingdoms III'
//   },
//   command: [
//     "KOEI.COM"
//   ]
// }

// export const 三国志5: Typings.GameInfo = {
//   translates: {
//     cn: '三国志V',
//     tc: '三國志V',
//     en: 'Romance of the Three Kingdoms V'
//   },
//   command: [
//     "SAN5.COM"
//   ]
// }

// export const 三国志5X: Typings.GameInfo = {
//   translates: {
//     cn: '三国志V 威力加强版',
//     tc: '三國志V 威力加強版',
//     en: 'Romance of the Three Kingdoms V X'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 三国志英杰传: Typings.GameInfo = {
//   translates: {
//     cn: '三国志英杰传',
//     tc: '三國志英傑傳',
//     en: 'Romance of the Three Kingdoms Heroic Legend'
//   },
//   command: [
//     "REKO3.COM"
//   ]
// }

// export const 主题医院: Typings.GameInfo = {
//   translates: {
//     cn: '主题医院 无声音版',
//     tc: '杏林也瘋狂',
//     en: 'Theme Hospital'
//   },
//   command: [
//     "HOSPITAL.EXE"
//   ]
// }

// export const 三国演义: Typings.GameInfo = {
//   translates: {
//     cn: '三国演义',
//     tc: '三國演義',
//     en: 'Romance of the Three Kingdoms'
//   },
//   command: [
//     "AA.EXE"
//   ]
// }

// export const 三界谕邦沛之迷: Typings.GameInfo = {
//   translates: {
//     cn: '三界谕：邦沛之迷',
//     tc: '三界諭：邦沛之謎',
//     en: 'Three Realms encyclical: Bangpei Mystery'
//   },
//   command: [
//     "3K_CRK.COM"
//   ]
// }

// export const 殖民计划: Typings.GameInfo = {
//   translates: {
//     cn: '殖民计划',
//     tc: '殖民計畫',
//     en: 'Colonial plan'
//   },
//   command: [
//     "APS.BAT"
//   ]
// }

// export const 炎龙骑士团2黄金城之谜: Typings.GameInfo = {
//   translates: {
//     cn: '炎龙骑士团II‧黄金城之谜',
//     tc: '炎龍騎士團II‧黃金城之謎',
//     en: 'Flame Dragon 2: Legend of Golden Castle'
//   },
//   command: [
//     "FD2.EXE"
//   ]
// }

// export const 倚天屠龙记: Typings.GameInfo = {
//   translates: {
//     cn: '倚天屠龙记',
//     tc: '倚天屠龍記',
//     en: 'Heavenly Sword Dragon Slaying Sabe'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 信长之野望天翔记: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望·天翔记',
//     tc: '信長之野望·天翔記',
//     en: 'Nobunaga no Yabō: Tenshōki'
//   },
//   command: [
//     "TENSHOU.COM"
//   ]
// }

// export const 信长之野望霸王传: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望·霸王传',
//     tc: '信長之野望·霸王傳',
//     en: 'Nobunaga no Yabō: Haouden'
//   },
//   command: [
//     "KOEI.COM"
//   ]
// }

// export const 金瓶梅: Typings.GameInfo = {
//   translates: {
//     cn: '金瓶梅之偷情宝鉴',
//     tc: '金瓶梅之偷情寶鑑',
//     en: 'Jin Ping Mei'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 江南才子唐伯虎: Typings.GameInfo = {
//   translates: {
//     cn: '江南才子唐伯虎',
//     tc: '江南才子唐伯虎',
//     en: 'JiangNan talent TANG BOHU'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 暗棋圣手: Typings.GameInfo = {
//   translates: {
//     cn: '暗棋圣手',
//     tc: '暗棋聖手',
//     en: 'Dark Chess Master'
//   },
//   command: [
//     "CHESS.EXE"
//   ]
// }

// export const 太阁立志传: Typings.GameInfo = {
//   translates: {
//     cn: '太阁立志传',
//     tc: '太閤立志傳',
//     en: 'Taikō Risshiden'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 非洲探险2: Typings.GameInfo = {
//   translates: {
//     cn: '非洲探险2',
//     tc: '非洲探險2',
//     en: 'Crazy Adventure in Africa2'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 主题医院S: Typings.GameInfo = {
//   translates: {
//     cn: '主题医院',
//     tc: '杏林也瘋狂',
//     en: 'Theme Hospital'
//   },
//   command: [
//     "HOSPITAL.EXE"
//   ]
// }

// export const 航空霸业2: Typings.GameInfo = {
//   translates: {
//     cn: '航空霸业2',
//     tc: '航空霸業2',
//     en: 'Aerobiz 2'
//   },
//   command: [
//     "AM2.COM"
//   ]
// }

// export const 中国球王: Typings.GameInfo = {
//   translates: {
//     cn: '中国球王',
//     tc: '中國球王',
//     en: 'Chinese king of soccer '
//   },
//   command: [
//     "PLAY.COM"
//   ]
// }

// export const 艾蒂丝魔法大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '艾蒂丝魔法大冒险',
//     tc: '艾蒂絲魔法大冒險',
//     en: 'Adith the forgotten alchemy'
//   },
//   command: [
//     "play.bat"
//   ]
// }

// export const 卧龙传: Typings.GameInfo = {
//   translates: {
//     cn: '卧龙传',
//     tc: '臥龍傳',
//     en: 'Biography of wolong'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 天使帝国: Typings.GameInfo = {
//   translates: {
//     cn: '天使帝国',
//     tc: '天使帝國',
//     en: 'Angel Empire'
//   },
//   command: [
//     "U"
//   ]
// }

// export const 魔域传说4波斯战记: Typings.GameInfo = {
//   translates: {
//     cn: '魔域传说Ⅳ：波斯战记',
//     tc: '魔域传说Ⅳ：波斯战记',
//     en: 'First Queen 4'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 魔法公主: Typings.GameInfo = {
//   translates: {
//     cn: '魔法公主',
//     tc: '魔法公主',
//     en: 'Princess Mononoke Adventure'
//   },
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 1000公里: Typings.GameInfo = {
//   translates: {
//     cn: '1000公里'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 1000米利亚: Typings.GameInfo = {
//   translates: {
//     cn: '1000米利亚'
//   },
//   type: 'SIM',
//   command: [
//     "runme"
//   ]
// }

// export const 1-0足球经理: Typings.GameInfo = {
//   translates: {
//     cn: '1-0足球经理'
//   },
//   type: 'SIM',
//   command: [
//     "run"
//   ]
// }

// export const 1830铁路公爵: Typings.GameInfo = {
//   translates: {
//     cn: '1830铁路公爵'
//   },
//   type: 'PUZ',
//   command: [
//     "1830.exe"
//   ]
// }

// export const 1869大航海: Typings.GameInfo = {
//   translates: {
//     cn: '1869大航海'
//   },
//   type: 'SIM',
//   command: [
//     "1869"
//   ]
// }

// export const 1942特种部队: Typings.GameInfo = {
//   translates: {
//     cn: '1942特种部队'
//   },
//   type: 'SIM',
//   command: [
//     "tf"
//   ]
// }

// export const 2001特遣队: Typings.GameInfo = {
//   translates: {
//     cn: '2001特遣队'
//   },
//   type: 'SPG',
//   command: [
//     "mis.exe"
//   ]
// }

// export const 2601帝国联合舰队: Typings.GameInfo = {
//   translates: {
//     cn: '2601帝国联合舰队'
//   },
//   type: 'SLG',
//   command: [
//     "play.com"
//   ]
// }

// export const 3D俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '3D俄罗斯'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 3D魔方: Typings.GameInfo = {
//   translates: {
//     cn: '3D魔方'
//   },
//   type: 'PUZ',
//   command: [
//     "3DCUBE.EXE"
//   ]
// }

// export const 3D陨石: Typings.GameInfo = {
//   translates: {
//     cn: '3D陨石'
//   },
//   type: 'ACT',
//   command: [
//     "a3dsw"
//   ]
// }

// export const 3D炸弹人: Typings.GameInfo = {
//   translates: {
//     cn: '3D炸弹人'
//   },
//   type: 'ACT',
//   command: [
//     "bomb"
//   ]
// }

// export const 3D桌上体育: Typings.GameInfo = {
//   translates: {
//     cn: '3D桌上体育'
//   },
//   type: 'SIM',
//   command: [
//     "table.exe"
//   ]
// }

// export const 3x3只眼: Typings.GameInfo = {
//   translates: {
//     cn: '3x3只眼'
//   },
//   type: 'HGA',
//   command: [
//     "3x3.bat"
//   ]
// }

// export const 4D网球: Typings.GameInfo = {
//   translates: {
//     cn: '4D网球'
//   },
//   type: 'SIM',
//   command: [
//     "TENNIS.EXE"
//   ]
// }

// export const 66区: Typings.GameInfo = {
//   translates: {
//     cn: '66区'
//   },
//   type: 'ACT',
//   command: [
//     "zone66.bat"
//   ]
// }

// export const 688攻击潜艇: Typings.GameInfo = {
//   translates: {
//     cn: '688攻击潜艇'
//   },
//   type: 'SIM',
//   command: [
//     "688.bat"
//   ]
// }

// export const 80年空中激斗: Typings.GameInfo = {
//   translates: {
//     cn: '80年空中激斗'
//   },
//   type: 'SIM',
//   command: [
//     "dog.exe"
//   ]
// }

// export const 94美国世界杯: Typings.GameInfo = {
//   translates: {
//     cn: '94美国世界杯'
//   },
//   type: 'SIM',
//   command: [
//     "FOOTBALL.EXE"
//   ]
// }

// export const 97超少女: Typings.GameInfo = {
//   translates: {
//     cn: '97超少女'
//   },
//   type: 'HGA',
//   command: [
//     "super97.exe"
//   ]
// }

// export const A320空中客机: Typings.GameInfo = {
//   translates: {
//     cn: 'A320空中客机'
//   },
//   type: 'SIM',
//   command: [
//     "a320"
//   ]
// }

// export const ALPHA风暴: Typings.GameInfo = {
//   translates: {
//     cn: 'ALPHA风暴'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const B17飞行堡垒: Typings.GameInfo = {
//   translates: {
//     cn: 'B17飞行堡垒'
//   },
//   type: 'SIM',
//   command: [
//     "B17.EXE"
//   ]
// }

// export const BOPPIN物理游戏: Typings.GameInfo = {
//   translates: {
//     cn: 'BOPPIN物理游戏'
//   },
//   type: 'PUZ',
//   command: [
//     "BOPPIN"
//   ]
// }

// export const CBA嘉年华: Typings.GameInfo = {
//   translates: {
//     cn: 'CBA嘉年华'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const Dvorak打字: Typings.GameInfo = {
//   translates: {
//     cn: 'Dvorak打字'
//   },
//   type: 'PUZ',
//   command: [
//     "dt.exe"
//   ]
// }

// export const D计划: Typings.GameInfo = {
//   translates: {
//     cn: 'D计划'
//   },
//   type: 'ACT',
//   command: [
//     "task.bat"
//   ]
// }

// export const ES方程式: Typings.GameInfo = {
//   translates: {
//     cn: 'ES方程式'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const F14战机: Typings.GameInfo = {
//   translates: {
//     cn: 'F14战机'
//   },
//   type: 'SIM',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const F15战斗机: Typings.GameInfo = {
//   translates: {
//     cn: 'F15战斗机'
//   },
//   type: 'SIM',
//   command: [
//     "f15"
//   ]
// }

// export const F1赛车1994: Typings.GameInfo = {
//   translates: {
//     cn: 'F1赛车1994'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const F1赛车经理: Typings.GameInfo = {
//   translates: {
//     cn: 'F1赛车经理'
//   },
//   type: 'SIM',
//   command: [
//     "F1.EXE"
//   ]
// }

// export const FIFA1996: Typings.GameInfo = {
//   translates: {
//     cn: 'FIFA1996'
//   },
//   type: 'SIM',
//   command: [
//     "FIFA.BAT"
//   ]
// }

// export const FIFA97: Typings.GameInfo = {
//   translates: {
//     cn: 'FIFA97'
//   },
//   type: 'SIM',
//   command: [
//     "FIFADOS"
//   ]
// }

// export const FX战士: Typings.GameInfo = {
//   translates: {
//     cn: 'FX战士'
//   },
//   type: 'ACT',
//   command: [
//     "FIGHT.EXE"
//   ]
// }

// export const GEEK游戏集: Typings.GameInfo = {
//   translates: {
//     cn: 'GEEK游戏集'
//   },
//   type: 'PUZ',
//   command: [
//     "geekwad.exe"
//   ]
// }

// export const GP500摩托赛: Typings.GameInfo = {
//   translates: {
//     cn: 'GP500摩托赛'
//   },
//   type: 'SIM',
//   command: [
//     "gp.bat"
//   ]
// }

// export const GT赛车97: Typings.GameInfo = {
//   translates: {
//     cn: 'GT赛车97'
//   },
//   type: 'SIM',
//   command: [
//     "gt"
//   ]
// }

// export const MAX机械突袭: Typings.GameInfo = {
//   translates: {
//     cn: 'MAX机械突袭'
//   },
//   type: 'SLG',
//   command: [
//     "max.bat"
//   ]
// }

// export const NBA嘉年华: Typings.GameInfo = {
//   translates: {
//     cn: 'NBA嘉年华'
//   },
//   type: 'SIM',
//   command: [
//     "JAM.COM"
//   ]
// }

// export const NBA直播: Typings.GameInfo = {
//   translates: {
//     cn: 'NBA直播'
//   },
//   type: 'SIM',
//   command: [
//     "BBV.EXE"
//   ]
// }

// export const Nectaris: Typings.GameInfo = {
//   translates: {
//     cn: 'Nectaris'
//   },
//   type: 'SPG',
//   command: [
//     "start.bat"
//   ]
// }

// export const PCE合集(执行PCE+文件名): Typings.GameInfo = {
//   translates: {
//     cn: 'PCE合集(执行PCE+文件名)'
//   },
//   type: 'ACT',
//   command: [
//     "readme"
//   ]
// }

// export const PC拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: 'PC拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const PC原人: Typings.GameInfo = {
//   translates: {
//     cn: 'PC原人'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const PC原人2: Typings.GameInfo = {
//   translates: {
//     cn: 'PC原人2'
//   },
//   type: 'ACT',
//   command: [
//     "pre2.exe"
//   ]
// }

// export const PSY幽记: Typings.GameInfo = {
//   translates: {
//     cn: 'PSY幽记'
//   },
//   type: 'RPG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const QQ三国志: Typings.GameInfo = {
//   translates: {
//     cn: 'QQ三国志'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const RS2: Typings.GameInfo = {
//   translates: {
//     cn: 'RS2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const SU27侧翼部队: Typings.GameInfo = {
//   translates: {
//     cn: 'SU27侧翼部队'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const V字战机: Typings.GameInfo = {
//   translates: {
//     cn: 'V字战机'
//   },
//   type: 'ACT',
//   command: [
//     "vwing"
//   ]
// }

// export const XATAX战机: Typings.GameInfo = {
//   translates: {
//     cn: 'XATAX战机'
//   },
//   type: 'ACT',
//   command: [
//     "xatax.exe"
//   ]
// }

// export const X计划: Typings.GameInfo = {
//   translates: {
//     cn: 'X计划'
//   },
//   type: 'ACT',
//   command: [
//     "x.exe"
//   ]
// }

// export const X任务: Typings.GameInfo = {
//   translates: {
//     cn: 'X任务'
//   },
//   type: 'ACT',
//   command: [
//     "xquest.exe"
//   ]
// }

// export const YAB棒球: Typings.GameInfo = {
//   translates: {
//     cn: 'YAB棒球'
//   },
//   type: 'SIM',
//   command: [
//     "YAB"
//   ]
// }

// export const YES！HG: Typings.GameInfo = {
//   translates: {
//     cn: 'YES！HG'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const Z字特工队: Typings.GameInfo = {
//   translates: {
//     cn: 'Z字特工队'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 阿尔比恩: Typings.GameInfo = {
//   translates: {
//     cn: '阿尔比恩'
//   },
//   type: 'RPG',
//   command: [
//     "albilow.bat"
//   ]
// }

// export const 阿卡尼亚之地莉娃阴影: Typings.GameInfo = {
//   translates: {
//     cn: '阿卡尼亚之地莉娃阴影'
//   },
//   type: 'RPG',
//   command: [
//     "riva.exe"
//   ]
// }

// export const 阿卡尼亚之地命运之刃: Typings.GameInfo = {
//   translates: {
//     cn: '阿卡尼亚之地命运之刃'
//   },
//   type: 'RPG',
//   command: [
//     "blade.bat"
//   ]
// }

// export const 阿卡尼亚之地星痕: Typings.GameInfo = {
//   translates: {
//     cn: '阿卡尼亚之地星痕'
//   },
//   type: 'RPG',
//   command: [
//     "star.exe"
//   ]
// }

// export const 阿卡特兹: Typings.GameInfo = {
//   translates: {
//     cn: '阿卡特兹'
//   },
//   type: 'ACT',
//   command: [
//     "alcatraz.exe"
//   ]
// }

// export const 阿拉丁2灯神诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '阿拉丁2灯神诅咒'
//   },
//   type: 'ACT',
//   command: [
//     "GENIE.BAT"
//   ]
// }

// export const 阿拉丁传奇: Typings.GameInfo = {
//   translates: {
//     cn: '阿拉丁传奇'
//   },
//   type: 'ACT',
//   command: [
//     "aladdin.exe"
//   ]
// }

// export const 阿蕾莎冰封世界: Typings.GameInfo = {
//   translates: {
//     cn: '阿蕾莎冰封世界'
//   },
//   type: 'RPG',
//   command: [
//     "aleshar"
//   ]
// }

// export const 阿曼达2525: Typings.GameInfo = {
//   translates: {
//     cn: '阿曼达2525'
//   },
//   type: 'SLG',
//   command: [
//     "2525de.exe"
//   ]
// }

// export const 阿曼尼开国启示录: Typings.GameInfo = {
//   translates: {
//     cn: '阿曼尼开国启示录'
//   },
//   type: 'SPG',
//   command: [
//     "play"
//   ]
// }

// export const 阿曼尼斯传说3: Typings.GameInfo = {
//   translates: {
//     cn: '阿曼尼斯传说3'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 阿猫阿狗: Typings.GameInfo = {
//   translates: {
//     cn: '阿猫阿狗'
//   },
//   type: 'RPG',
//   command: [
//     "tuntown"
//   ]
// }

// export const 阿瓦隆: Typings.GameInfo = {
//   translates: {
//     cn: '阿瓦隆'
//   },
//   type: 'RPG',
//   command: [
//     "avalon"
//   ]
// }

// export const 哀伤罗曼史: Typings.GameInfo = {
//   translates: {
//     cn: '哀伤罗曼史'
//   },
//   type: 'AVG',
//   command: [
//     "start"
//   ]
// }

// export const 埃及统治者: Typings.GameInfo = {
//   translates: {
//     cn: '埃及统治者'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 艾薇拉: Typings.GameInfo = {
//   translates: {
//     cn: '艾薇拉'
//   },
//   type: 'RPG',
//   command: [
//     "elvira.bat"
//   ]
// }

// export const 艾薇拉2: Typings.GameInfo = {
//   translates: {
//     cn: '艾薇拉2'
//   },
//   type: 'RPG',
//   command: [
//     "cerberus"
//   ]
// }

// export const 艾薇拉动作版: Typings.GameInfo = {
//   translates: {
//     cn: '艾薇拉动作版'
//   },
//   type: 'ACT',
//   command: [
//     "elvira.bat"
//   ]
// }

// export const 爱之物语: Typings.GameInfo = {
//   translates: {
//     cn: '爱之物语'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 爱之物语2: Typings.GameInfo = {
//   translates: {
//     cn: '爱之物语2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 爱之物语3: Typings.GameInfo = {
//   translates: {
//     cn: '爱之物语3'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 安雅战机: Typings.GameInfo = {
//   translates: {
//     cn: '安雅战机'
//   },
//   type: 'ACT',
//   command: [
//     "game"
//   ]
// }

// export const 暗狼(共享版): Typings.GameInfo = {
//   translates: {
//     cn: '暗狼(共享版)'
//   },
//   type: 'ACT',
//   command: [
//     "darkwolf"
//   ]
// }

// export const 暗棋侏罗纪: Typings.GameInfo = {
//   translates: {
//     cn: '暗棋侏罗纪'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 暗色: Typings.GameInfo = {
//   translates: {
//     cn: '暗色'
//   },
//   type: 'SIM',
//   command: [
//     "darker.bat"
//   ]
// }

// export const 暗影术士: Typings.GameInfo = {
//   translates: {
//     cn: '暗影术士'
//   },
//   type: 'ACT',
//   command: [
//     "shadow.bat"
//   ]
// }

// export const 暗影武士: Typings.GameInfo = {
//   translates: {
//     cn: '暗影武士'
//   },
//   type: 'ACT',
//   command: [
//     "sw.exe"
//   ]
// }

// export const 暗影之地: Typings.GameInfo = {
//   translates: {
//     cn: '暗影之地'
//   },
//   type: 'RPG',
//   command: [
//     "shadow"
//   ]
// }

// export const 暗影之力: Typings.GameInfo = {
//   translates: {
//     cn: '暗影之力'
//   },
//   type: 'AVG',
//   command: [
//     "sforce.bat"
//   ]
// }

// export const 暗之纹章: Typings.GameInfo = {
//   translates: {
//     cn: '暗之纹章'
//   },
//   type: 'RPG',
//   command: [
//     "m.exe"
//   ]
// }

// export const 奥尼大作战2: Typings.GameInfo = {
//   translates: {
//     cn: '奥尼大作战2'
//   },
//   type: 'ACT',
//   command: [
//     "arnie2"
//   ]
// }

// export const 八女神物语: Typings.GameInfo = {
//   translates: {
//     cn: '八女神物语'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 八女神物语2: Typings.GameInfo = {
//   translates: {
//     cn: '八女神物语2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 巴克罗杰矩阵立方: Typings.GameInfo = {
//   translates: {
//     cn: '巴克罗杰矩阵立方'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 巴克罗杰末日倒数: Typings.GameInfo = {
//   translates: {
//     cn: '巴克罗杰末日倒数'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 巴士帝国: Typings.GameInfo = {
//   translates: {
//     cn: '巴士帝国'
//   },
//   type: 'SIM',
//   command: [
//     "bus.bat"
//   ]
// }

// export const 芭比超级模特: Typings.GameInfo = {
//   translates: {
//     cn: '芭比超级模特'
//   },
//   type: 'ACT',
//   command: [
//     "barbie.exe"
//   ]
// }

// export const 白银塔里斯曼传奇: Typings.GameInfo = {
//   translates: {
//     cn: '白银塔里斯曼传奇'
//   },
//   type: 'RPG',
//   command: [
//     "GO.BAT"
//   ]
// }

// export const 百夫长罗马防御: Typings.GameInfo = {
//   translates: {
//     cn: '百夫长罗马防御'
//   },
//   type: 'SLG',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 百战百胜: Typings.GameInfo = {
//   translates: {
//     cn: '百战百胜'
//   },
//   type: 'PUZ',
//   command: [
//     "a.bat"
//   ]
// }

// export const 百战地虫: Typings.GameInfo = {
//   translates: {
//     cn: '百战地虫'
//   },
//   type: 'ACT',
//   command: [
//     "liero"
//   ]
// }

// export const 百战爬虫: Typings.GameInfo = {
//   translates: {
//     cn: '百战爬虫'
//   },
//   type: 'PUZ',
//   command: [
//     "creepers.exe"
//   ]
// }

// export const 百战水管工: Typings.GameInfo = {
//   translates: {
//     cn: '百战水管工'
//   },
//   type: 'PUZ',
//   command: [
//     "pipe.exe"
//   ]
// }

// export const 百战天虫: Typings.GameInfo = {
//   translates: {
//     cn: '百战天虫'
//   },
//   type: 'ACT',
//   command: [
//     "WORMS2.BAT"
//   ]
// }

// export const 百战天虫光碟版: Typings.GameInfo = {
//   translates: {
//     cn: '百战天虫光碟版'
//   },
//   type: 'ACT',
//   command: [
//     "worms.bat"
//   ]
// }

// export const 班级99: Typings.GameInfo = {
//   translates: {
//     cn: '班级99'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 板球97: Typings.GameInfo = {
//   translates: {
//     cn: '板球97'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 棒棒糖: Typings.GameInfo = {
//   translates: {
//     cn: '棒棒糖'
//   },
//   type: 'ACT',
//   command: [
//     "lolly.bat"
//   ]
// }

// export const 棒球大联盟3: Typings.GameInfo = {
//   translates: {
//     cn: '棒球大联盟3'
//   },
//   type: 'SIM',
//   command: [
//     "hb.bat"
//   ]
// }

// export const 棒球大联盟4: Typings.GameInfo = {
//   translates: {
//     cn: '棒球大联盟4'
//   },
//   type: 'SIM',
//   command: [
//     "hb4.exe"
//   ]
// }

// export const 宝藏陷阱: Typings.GameInfo = {
//   translates: {
//     cn: '宝藏陷阱'
//   },
//   type: 'ACT',
//   command: [
//     "tt.bat"
//   ]
// }

// export const 宝里宝气骑士: Typings.GameInfo = {
//   translates: {
//     cn: '宝里宝气骑士'
//   },
//   type: 'AVG',
//   command: [
//     "eric.exe"
//   ]
// }

// export const 宝石迷阵: Typings.GameInfo = {
//   translates: {
//     cn: '宝石迷阵'
//   },
//   type: 'PUZ',
//   command: [
//     "xixit"
//   ]
// }

// export const 堡垒防卫战／领国战役: Typings.GameInfo = {
//   translates: {
//     cn: '堡垒防卫战/领国战役'
//   },
//   type: 'SLG',
//   command: [
//     "RAMPART.EXE"
//   ]
// }

// export const 报应: Typings.GameInfo = {
//   translates: {
//     cn: '报应'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 鲍勃逃离地狱: Typings.GameInfo = {
//   translates: {
//     cn: '鲍勃逃离地狱'
//   },
//   type: 'ACT',
//   command: [
//     "bobhell"
//   ]
// }

// export const 鲍勃跳跃因子: Typings.GameInfo = {
//   translates: {
//     cn: '鲍勃跳跃因子'
//   },
//   type: 'ACT',
//   command: [
//     "bob"
//   ]
// }

// export const 暴力辛迪加: Typings.GameInfo = {
//   translates: {
//     cn: '暴力辛迪加'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 暴怒终结者: Typings.GameInfo = {
//   translates: {
//     cn: '暴怒终结者'
//   },
//   type: 'ACT',
//   command: [
//     "term.bat"
//   ]
// }

// export const 爆笑保龄球: Typings.GameInfo = {
//   translates: {
//     cn: '爆笑保龄球'
//   },
//   type: 'PUZ',
//   command: [
//     "bowling.com"
//   ]
// }

// export const 爆笑出击: Typings.GameInfo = {
//   translates: {
//     cn: '爆笑出击'
//   },
//   type: 'ACT',
//   command: [
//     "air.exe"
//   ]
// }

// export const 爆笑躲避球: Typings.GameInfo = {
//   translates: {
//     cn: '爆笑躲避球'
//   },
//   type: 'ACT',
//   command: [
//     "cdodge.exe"
//   ]
// }

// export const 爆笑三国志: Typings.GameInfo = {
//   translates: {
//     cn: '爆笑三国志'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 爆笑水浒传: Typings.GameInfo = {
//   translates: {
//     cn: '爆笑水浒传'
//   },
//   type: 'PUZ',
//   command: [
//     "model"
//   ]
// }

// export const 悲恋湖杀人事件: Typings.GameInfo = {
//   translates: {
//     cn: '悲恋湖杀人事件'
//   },
//   type: 'AVG',
//   command: [
//     "sadlake.exe"
//   ]
// }

// export const 北极行动: Typings.GameInfo = {
//   translates: {
//     cn: '北极行动'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 北太平洋海战: Typings.GameInfo = {
//   translates: {
//     cn: '北太平洋海战'
//   },
//   type: 'SIM',
//   command: [
//     "gnbna.bat"
//   ]
// }

// export const 贝多芬二世犬: Typings.GameInfo = {
//   translates: {
//     cn: '贝多芬二世犬'
//   },
//   type: 'ACT',
//   command: [
//     "btvn"
//   ]
// }

// export const 贝弗利山人: Typings.GameInfo = {
//   translates: {
//     cn: '贝弗利山人'
//   },
//   type: 'AVG',
//   command: [
//     "hb"
//   ]
// }

// export const 被遗忘的世界: Typings.GameInfo = {
//   translates: {
//     cn: '被遗忘的世界'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 被遗忘之地: Typings.GameInfo = {
//   translates: {
//     cn: '被遗忘之地'
//   },
//   type: 'RPG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 边境宝藏: Typings.GameInfo = {
//   translates: {
//     cn: '边境宝藏'
//   },
//   type: 'RPG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 蝙蝠侠电影版: Typings.GameInfo = {
//   translates: {
//     cn: '蝙蝠侠电影版'
//   },
//   type: 'ACT',
//   command: [
//     "batman"
//   ]
// }

// export const 蝙蝠侠归来: Typings.GameInfo = {
//   translates: {
//     cn: '蝙蝠侠归来'
//   },
//   type: 'AVG',
//   command: [
//     "BATMAN.EXE"
//   ]
// }

// export const 变态杀手: Typings.GameInfo = {
//   translates: {
//     cn: '变态杀手'
//   },
//   type: 'AVG',
//   command: [
//     "phycho.bat"
//   ]
// }

// export const 飚车小子: Typings.GameInfo = {
//   translates: {
//     cn: '飚车小子'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 冰城传奇: Typings.GameInfo = {
//   translates: {
//     cn: '冰城传奇'
//   },
//   type: 'RPG',
//   command: [
//     "bard.exe"
//   ]
// }

// export const 冰城传奇2: Typings.GameInfo = {
//   translates: {
//     cn: '冰城传奇2'
//   },
//   type: 'RPG',
//   command: [
//     "dk.exe"
//   ]
// }

// export const 冰城传奇3: Typings.GameInfo = {
//   translates: {
//     cn: '冰城传奇3'
//   },
//   type: 'RPG',
//   command: [
//     "thief.exe"
//   ]
// }

// export const 冰冷之梦: Typings.GameInfo = {
//   translates: {
//     cn: '冰冷之梦'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 冰球95: Typings.GameInfo = {
//   translates: {
//     cn: '冰球95'
//   },
//   type: 'SIM',
//   command: [
//     "hockey"
//   ]
// }

// export const 冰球联赛97: Typings.GameInfo = {
//   translates: {
//     cn: '冰球联赛97'
//   },
//   type: 'SIM',
//   command: [
//     "hockey"
//   ]
// }

// export const 冰与火: Typings.GameInfo = {
//   translates: {
//     cn: '冰与火'
//   },
//   type: 'ACT',
//   command: [
//     "FIRE.EXE"
//   ]
// }

// export const 波士顿守卫者: Typings.GameInfo = {
//   translates: {
//     cn: '波士顿守卫者'
//   },
//   type: 'RPG',
//   command: [
//     "dob"
//   ]
// }

// export const 波斯王子: Typings.GameInfo = {
//   translates: {
//     cn: '波斯王子'
//   },
//   type: 'ACT',
//   command: [
//     "prince"
//   ]
// }

// export const 波斯王子2: Typings.GameInfo = {
//   translates: {
//     cn: '波斯王子2'
//   },
//   type: 'ACT',
//   command: [
//     "prince"
//   ]
// }

// export const 波斯王子民间改版: Typings.GameInfo = {
//   translates: {
//     cn: '波斯王子民间改版'
//   },
//   type: 'ACT',
//   command: [
//     "4d_prin.exe"
//   ]
// }

// export const 博比教你国际象棋: Typings.GameInfo = {
//   translates: {
//     cn: '博比教你国际象棋'
//   },
//   type: 'PUZ',
//   command: [
//     "bftc"
//   ]
// }

// export const 博物馆惊魂夜: Typings.GameInfo = {
//   translates: {
//     cn: '博物馆惊魂夜'
//   },
//   type: 'AVG',
//   command: [
//     "museum"
//   ]
// }

// export const 捕猎行动: Typings.GameInfo = {
//   translates: {
//     cn: '捕猎行动'
//   },
//   type: 'ACT',
//   command: [
//     "shunt"
//   ]
// }

// export const 不给糖就捣蛋: Typings.GameInfo = {
//   translates: {
//     cn: '不给糖就捣蛋'
//   },
//   type: 'AVG',
//   command: [
//     "tot.exe"
//   ]
// }

// export const 不可思议的机器: Typings.GameInfo = {
//   translates: {
//     cn: '不可思议的机器'
//   },
//   type: 'PUZ',
//   command: [
//     "tim"
//   ]
// }

// export const 不可思议的机器2: Typings.GameInfo = {
//   translates: {
//     cn: '不可思议的机器2'
//   },
//   type: 'PUZ',
//   command: [
//     "tim2"
//   ]
// }

// export const 不可思议的机器拓展包: Typings.GameInfo = {
//   translates: {
//     cn: '不可思议的机器拓展包'
//   },
//   type: 'PUZ',
//   command: [
//     "TIM"
//   ]
// }

// export const 不朽之人: Typings.GameInfo = {
//   translates: {
//     cn: '不朽之人'
//   },
//   type: 'RPG',
//   command: [
//     "immortal.com"
//   ]
// }

// export const 布莱克之石异星黄金: Typings.GameInfo = {
//   translates: {
//     cn: '布莱克之石异星黄金'
//   },
//   type: 'ACT',
//   command: [
//     "bstone.bat"
//   ]
// }

// export const 布莱克之石异星突击: Typings.GameInfo = {
//   translates: {
//     cn: '布莱克之石异星突击'
//   },
//   type: 'ACT',
//   command: [
//     "planet.bat"
//   ]
// }

// export const 部落: Typings.GameInfo = {
//   translates: {
//     cn: '部落'
//   },
//   type: 'SIM',
//   command: [
//     "horde.exe"
//   ]
// }

// export const 残酷世界: Typings.GameInfo = {
//   translates: {
//     cn: '残酷世界'
//   },
//   type: 'ACT',
//   command: [
//     "cruel.bat"
//   ]
// }

// export const 残杀行动: Typings.GameInfo = {
//   translates: {
//     cn: '残杀行动'
//   },
//   type: 'ACT',
//   command: [
//     "carnage.exe"
//   ]
// }

// export const 苍白之地: Typings.GameInfo = {
//   translates: {
//     cn: '苍白之地'
//   },
//   type: 'ACT',
//   command: [
//     "lland.exe"
//   ]
// }

// export const 钞票强强滚: Typings.GameInfo = {
//   translates: {
//     cn: '钞票强强滚'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超凡蜘蛛侠: Typings.GameInfo = {
//   translates: {
//     cn: '超凡蜘蛛侠'
//   },
//   type: 'ACT',
//   command: [
//     "spidey"
//   ]
// }

// export const 超级超越竞速: Typings.GameInfo = {
//   translates: {
//     cn: '超级超越竞速'
//   },
//   type: 'SIM',
//   command: [
//     "trout"
//   ]
// }

// export const 超级大富翁: Typings.GameInfo = {
//   translates: {
//     cn: '超级大富翁'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超级大战略: Typings.GameInfo = {
//   translates: {
//     cn: '超级大战略'
//   },
//   type: 'SLG',
//   command: [
//     "super.exe"
//   ]
// }

// export const 超级俄罗斯方块: Typings.GameInfo = {
//   translates: {
//     cn: '超级俄罗斯方块'
//   },
//   type: 'PUZ',
//   command: [
//     "supertet"
//   ]
// }

// export const 超级国际象棋2: Typings.GameInfo = {
//   translates: {
//     cn: '超级国际象棋2'
//   },
//   type: 'PUZ',
//   command: [
//     "chess"
//   ]
// }

// export const 超级滑雪2: Typings.GameInfo = {
//   translates: {
//     cn: '超级滑雪2'
//   },
//   type: 'SIM',
//   command: [
//     "SUPERSKI.BAT"
//   ]
// }

// export const 超级滑雪3: Typings.GameInfo = {
//   translates: {
//     cn: '超级滑雪3'
//   },
//   type: 'SIM',
//   command: [
//     "ski.bat"
//   ]
// }

// export const 超级滑雪专业版: Typings.GameInfo = {
//   translates: {
//     cn: '超级滑雪专业版'
//   },
//   type: 'SIM',
//   command: [
//     "ski.exe"
//   ]
// }

// export const 超级机车赛: Typings.GameInfo = {
//   translates: {
//     cn: '超级机车赛'
//   },
//   type: 'SIM',
//   command: [
//     "sb"
//   ]
// }

// export const 超级街霸2: Typings.GameInfo = {
//   translates: {
//     cn: '超级街霸2'
//   },
//   type: 'ACT',
//   command: [
//     "ssf2t.bat"
//   ]
// }

// export const 超级街霸新挑战者: Typings.GameInfo = {
//   translates: {
//     cn: '超级街霸新挑战者'
//   },
//   type: 'ACT',
//   command: [
//     "SF2.COM"
//   ]
// }

// export const 超级卡丁车: Typings.GameInfo = {
//   translates: {
//     cn: '超级卡丁车'
//   },
//   type: 'SIM',
//   command: [
//     "kart.exe"
//   ]
// }

// export const 超级科曼奇: Typings.GameInfo = {
//   translates: {
//     cn: '超级科曼奇'
//   },
//   type: 'SIM',
//   command: [
//     "comanche.exe"
//   ]
// }

// export const 超级玛丽: Typings.GameInfo = {
//   translates: {
//     cn: '超级玛丽'
//   },
//   type: 'ACT',
//   command: [
//     "mario.exe"
//   ]
// }

// export const 超级三剑客: Typings.GameInfo = {
//   translates: {
//     cn: '超级三剑客'
//   },
//   type: 'ACT',
//   command: [
//     "st"
//   ]
// }

// export const 超级蛙: Typings.GameInfo = {
//   translates: {
//     cn: '超级蛙'
//   },
//   type: 'ACT',
//   command: [
//     "sf.exe"
//   ]
// }

// export const 超级五子棋: Typings.GameInfo = {
//   translates: {
//     cn: '超级五子棋'
//   },
//   type: 'PUZ',
//   command: [
//     "play.exe"
//   ]
// }

// export const 超级星尘: Typings.GameInfo = {
//   translates: {
//     cn: '超级星尘'
//   },
//   type: 'ACT',
//   command: [
//     "go.exe"
//   ]
// }

// export const 超级学园麻雀海外版: Typings.GameInfo = {
//   translates: {
//     cn: '超级学园麻雀海外版'
//   },
//   type: 'PUZ',
//   command: [
//     "scmc2"
//   ]
// }

// export const 超级学院麻雀: Typings.GameInfo = {
//   translates: {
//     cn: '超级学院麻雀'
//   },
//   type: 'PUZ',
//   command: [
//     "SCMC.EXE"
//   ]
// }

// export const 超级英雄联盟: Typings.GameInfo = {
//   translates: {
//     cn: '超级英雄联盟'
//   },
//   type: 'AVG',
//   command: [
//     "LEGEND.BAT"
//   ]
// }

// export const 超空霸传: Typings.GameInfo = {
//   translates: {
//     cn: '超空霸传'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超人战记: Typings.GameInfo = {
//   translates: {
//     cn: '超人战记'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超时空G点: Typings.GameInfo = {
//   translates: {
//     cn: '超时空G点'
//   },
//   type: 'HGA',
//   command: [
//     "qr"
//   ]
// }

// export const 超时空要塞: Typings.GameInfo = {
//   translates: {
//     cn: '超时空要塞'
//   },
//   type: 'SPG',
//   command: [
//     "mac.com"
//   ]
// }

// export const 超时空英雄传说: Typings.GameInfo = {
//   translates: {
//     cn: '超时空英雄传说'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超时空英雄传说2: Typings.GameInfo = {
//   translates: {
//     cn: '超时空英雄传说2'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超时空英雄传说2SP: Typings.GameInfo = {
//   translates: {
//     cn: '超时空英雄传说2SP'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超速驾驶: Typings.GameInfo = {
//   translates: {
//     cn: '超速驾驶'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 超未来少女: Typings.GameInfo = {
//   translates: {
//     cn: '超未来少女'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 超越Void星: Typings.GameInfo = {
//   translates: {
//     cn: '超越Void星'
//   },
//   type: 'SIM',
//   command: [
//     "radix"
//   ]
// }

// export const 超越竞速: Typings.GameInfo = {
//   translates: {
//     cn: '超越竞速'
//   },
//   type: 'SIM',
//   command: [
//     "outrun"
//   ]
// }

// export const 超越深渊: Typings.GameInfo = {
//   translates: {
//     cn: '超越深渊'
//   },
//   type: 'ACT',
//   command: [
//     "abyss"
//   ]
// }

// export const 沉默的舰队: Typings.GameInfo = {
//   translates: {
//     cn: '沉默的舰队'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 沉默潜航2: Typings.GameInfo = {
//   translates: {
//     cn: '沉默潜航2'
//   },
//   type: 'SIM',
//   command: [
//     "SILENT"
//   ]
// }

// export const 成吉思汗: Typings.GameInfo = {
//   translates: {
//     cn: '成吉思汗'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 成吉思汗3: Typings.GameInfo = {
//   translates: {
//     cn: '成吉思汗3'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 成吉思汗英版: Typings.GameInfo = {
//   translates: {
//     cn: '成吉思汗英版'
//   },
//   type: 'SLG',
//   command: [
//     "koei.com"
//   ]
// }

// export const 惩罚者: Typings.GameInfo = {
//   translates: {
//     cn: '惩罚者'
//   },
//   type: 'ACT',
//   command: [
//     "punisher.com"
//   ]
// }

// export const 吃豆夫人: Typings.GameInfo = {
//   translates: {
//     cn: '吃豆夫人'
//   },
//   type: 'ACT',
//   command: [
//     "mspacem.bat"
//   ]
// }

// export const 吃豆人: Typings.GameInfo = {
//   translates: {
//     cn: '吃豆人'
//   },
//   type: 'ACT',
//   command: [
//     "PACEM.BAT"
//   ]
// }

// export const 吃豆人初代: Typings.GameInfo = {
//   translates: {
//     cn: '吃豆人初代'
//   },
//   type: 'ACT',
//   command: [
//     "pacman"
//   ]
// }

// export const 吃豆人山寨版: Typings.GameInfo = {
//   translates: {
//     cn: '吃豆人山寨版'
//   },
//   type: 'PUZ',
//   command: [
//     "cdman.exe"
//   ]
// }

// export const 吃豆人时空之旅: Typings.GameInfo = {
//   translates: {
//     cn: '吃豆人时空之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "PAC.EXE"
//   ]
// }

// export const 齿轮游戏: Typings.GameInfo = {
//   translates: {
//     cn: '齿轮游戏'
//   },
//   type: 'PUZ',
//   command: [
//     "gear.exe"
//   ]
// }

// export const 赤壁之战: Typings.GameInfo = {
//   translates: {
//     cn: '赤壁之战'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 炽天之翼: Typings.GameInfo = {
//   translates: {
//     cn: '炽天之翼'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 臭鼬赛车: Typings.GameInfo = {
//   translates: {
//     cn: '臭鼬赛车'
//   },
//   type: 'SIM',
//   command: [
//     "skunnyk"
//   ]
// }

// export const 出击飞龙: Typings.GameInfo = {
//   translates: {
//     cn: '出击飞龙'
//   },
//   type: 'ACT',
//   command: [
//     "g.com"
//   ]
// }

// export const 锄大地2: Typings.GameInfo = {
//   translates: {
//     cn: '锄大地2'
//   },
//   type: 'PUZ',
//   command: [
//     "big2.bat"
//   ]
// }

// export const 楚汉之争: Typings.GameInfo = {
//   translates: {
//     cn: '楚汉之争'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 楚汉之争2: Typings.GameInfo = {
//   translates: {
//     cn: '楚汉之争2'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 楚留香传奇: Typings.GameInfo = {
//   translates: {
//     cn: '楚留香传奇'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 穿越之战: Typings.GameInfo = {
//   translates: {
//     cn: '穿越之战'
//   },
//   type: 'SLG',
//   command: [
//     "bit.bat"
//   ]
// }

// export const 传说大陆帝王之子: Typings.GameInfo = {
//   translates: {
//     cn: '传说大陆帝王之子'
//   },
//   type: 'RPG',
//   command: [
//     "empire.bat"
//   ]
// }

// export const 传说纪元黑暗之屋: Typings.GameInfo = {
//   translates: {
//     cn: '传说纪元黑暗之屋'
//   },
//   type: 'RPG',
//   command: [
//     "dark.exe"
//   ]
// }

// export const 传说恐惧之夜: Typings.GameInfo = {
//   translates: {
//     cn: '传说恐惧之夜'
//   },
//   type: 'RPG',
//   command: [
//     "LEGACY.BAT"
//   ]
// }

// export const 传说时代: Typings.GameInfo = {
//   translates: {
//     cn: '传说时代'
//   },
//   type: 'RPG',
//   command: [
//     "lore.exe"
//   ]
// }

// export const 传说勇士: Typings.GameInfo = {
//   translates: {
//     cn: '传说勇士'
//   },
//   type: 'RPG',
//   command: [
//     "WOFL.EXE"
//   ]
// }

// export const 创世弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '创世弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 创世封魔传: Typings.GameInfo = {
//   translates: {
//     cn: '创世封魔传'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 创世机神: Typings.GameInfo = {
//   translates: {
//     cn: '创世机神'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 创世纪1(1987RM版): Typings.GameInfo = {
//   translates: {
//     cn: '创世纪1(1987RM版)'
//   },
//   type: 'RPG',
//   command: [
//     "ultima.exe"
//   ]
// }

// export const 创世纪2: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪2'
//   },
//   type: 'RPG',
//   command: [
//     "ultimaII"
//   ]
// }

// export const 创世纪3: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪3'
//   },
//   type: 'RPG',
//   command: [
//     "ultima.com"
//   ]
// }

// export const 创世纪4: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪4'
//   },
//   type: 'RPG',
//   command: [
//     "ultima.com"
//   ]
// }

// export const 创世纪5: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪5'
//   },
//   type: 'RPG',
//   command: [
//     "ultima.exe"
//   ]
// }

// export const 创世纪6: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪6'
//   },
//   type: 'RPG',
//   command: [
//     "ultima6.exe"
//   ]
// }

// export const 创世纪7上黑月之门: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪7上黑月之门'
//   },
//   type: 'RPG',
//   command: [
//     "U7.BAT"
//   ]
// }

// export const 创世纪7下巨蛇之岛: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪7下巨蛇之岛'
//   },
//   type: 'RPG',
//   command: [
//     "serpent"
//   ]
// }

// export const 创世纪8: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪8'
//   },
//   type: 'RPG',
//   command: [
//     "u8.exe"
//   ]
// }

// export const 创世纪外传1荒芜帝国: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪外传1荒芜帝国'
//   },
//   type: 'RPG',
//   command: [
//     "savage.exe"
//   ]
// }

// export const 创世纪外传2火星之旅: Typings.GameInfo = {
//   translates: {
//     cn: '创世纪外传2火星之旅'
//   },
//   type: 'RPG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 春秋争霸传: Typings.GameInfo = {
//   translates: {
//     cn: '春秋争霸传'
//   },
//   type: 'SLG',
//   command: [
//     "play.exe"
//   ]
// }

// export const 春秋争霸传2: Typings.GameInfo = {
//   translates: {
//     cn: '春秋争霸传2'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 从前有片林: Typings.GameInfo = {
//   translates: {
//     cn: '从前有片林'
//   },
//   type: 'AVG',
//   command: [
//     "ouaf.bat"
//   ]
// }

// export const 丛林大作战: Typings.GameInfo = {
//   translates: {
//     cn: '丛林大作战'
//   },
//   type: 'ACT',
//   command: [
//     "jungle.exe"
//   ]
// }

// export const 丛林历险记: Typings.GameInfo = {
//   translates: {
//     cn: '丛林历险记'
//   },
//   type: 'ACT',
//   command: [
//     "hugo"
//   ]
// }

// export const 丛林之书: Typings.GameInfo = {
//   translates: {
//     cn: '丛林之书'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 达兰科出击: Typings.GameInfo = {
//   translates: {
//     cn: '达兰科出击'
//   },
//   type: 'ACT',
//   command: [
//     "drwho"
//   ]
// }

// export const 打砖块: Typings.GameInfo = {
//   translates: {
//     cn: '打砖块'
//   },
//   type: 'ACT',
//   command: [
//     "start.bat"
//   ]
// }

// export const 打砖块2: Typings.GameInfo = {
//   translates: {
//     cn: '打砖块2'
//   },
//   type: 'ACT',
//   command: [
//     "ark.com"
//   ]
// }

// export const 大兵日记: Typings.GameInfo = {
//   translates: {
//     cn: '大兵日记'
//   },
//   type: 'SIM',
//   command: [
//     "play"
//   ]
// }

// export const 大地传说黑暗王座: Typings.GameInfo = {
//   translates: {
//     cn: '大地传说黑暗王座'
//   },
//   type: 'RPG',
//   command: [
//     "lands"
//   ]
// }

// export const 大地之怒: Typings.GameInfo = {
//   translates: {
//     cn: '大地之怒'
//   },
//   type: 'ACT',
//   command: [
//     "WOE"
//   ]
// }

// export const 大富翁1: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁1'
//   },
//   type: 'PUZ',
//   command: [
//     "rich1.bat"
//   ]
// }

// export const 大富翁2: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁2'
//   },
//   type: 'PUZ',
//   command: [
//     "ss.exe"
//   ]
// }

// export const 大富翁城市英雄: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁城市英雄'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大富翁环游世界: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁环游世界'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大富翁总动员: Typings.GameInfo = {
//   translates: {
//     cn: '大富翁总动员'
//   },
//   type: 'PUZ',
//   command: [
//     "crazy.bat"
//   ]
// }

// export const 大海商: Typings.GameInfo = {
//   translates: {
//     cn: '大海商'
//   },
//   type: 'SIM',
//   command: [
//     "HST.EXE"
//   ]
// }

// export const 大海战: Typings.GameInfo = {
//   translates: {
//     cn: '大海战'
//   },
//   type: 'PUZ',
//   command: [
//     "battlesh.exe"
//   ]
// }

// export const 大海战13: Typings.GameInfo = {
//   translates: {
//     cn: '大海战13'
//   },
//   type: 'PUZ',
//   command: [
//     "OJB.EXE"
//   ]
// }

// export const 大航海1: Typings.GameInfo = {
//   translates: {
//     cn: '大航海1'
//   },
//   type: 'RPG',
//   command: [
//     "koei.com"
//   ]
// }

// export const 大航海2: Typings.GameInfo = {
//   translates: {
//     cn: '大航海2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大红大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '大红大冒险'
//   },
//   type: 'AVG',
//   command: [
//     "tbra.bat"
//   ]
// }

// export const 大金刚: Typings.GameInfo = {
//   translates: {
//     cn: '大金刚'
//   },
//   type: 'ACT',
//   command: [
//     "kong.exe"
//   ]
// }

// export const 大力水手2: Typings.GameInfo = {
//   translates: {
//     cn: '大力水手2'
//   },
//   type: 'ACT',
//   command: [
//     "popeye"
//   ]
// }

// export const 大麻农夫: Typings.GameInfo = {
//   translates: {
//     cn: '大麻农夫'
//   },
//   type: 'ACT',
//   command: [
//     "ganja.bat"
//   ]
// }

// export const 大明英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '大明英雄传'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大魔王物语: Typings.GameInfo = {
//   translates: {
//     cn: '大魔王物语'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大企业家: Typings.GameInfo = {
//   translates: {
//     cn: '大企业家'
//   },
//   type: 'PUZ',
//   command: [
//     "bb.bat"
//   ]
// }

// export const 大时代的故事: Typings.GameInfo = {
//   translates: {
//     cn: '大时代的故事'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大宋英豪岳飞传: Typings.GameInfo = {
//   translates: {
//     cn: '大宋英豪岳飞传'
//   },
//   type: 'SPG',
//   command: [
//     "play"
//   ]
// }

// export const 大唐英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '大唐英雄传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大野风云: Typings.GameInfo = {
//   translates: {
//     cn: '大野风云'
//   },
//   type: 'RPG',
//   command: [
//     "virgin.exe"
//   ]
// }

// export const 大战略: Typings.GameInfo = {
//   translates: {
//     cn: '大战略'
//   },
//   type: 'SLG',
//   command: [
//     "war.bat"
//   ]
// }

// export const 大战略SP: Typings.GameInfo = {
//   translates: {
//     cn: '大战略SP'
//   },
//   type: 'SLG',
//   command: [
//     "warsp.bat"
//   ]
// }

// export const 大战略SP2: Typings.GameInfo = {
//   translates: {
//     cn: '大战略SP2'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 大战役: Typings.GameInfo = {
//   translates: {
//     cn: '大战役'
//   },
//   type: 'SLG',
//   command: [
//     "campaign"
//   ]
// }

// export const 大战役2: Typings.GameInfo = {
//   translates: {
//     cn: '大战役2'
//   },
//   type: 'SLG',
//   command: [
//     "camp2"
//   ]
// }

// export const 诞生: Typings.GameInfo = {
//   translates: {
//     cn: '诞生'
//   },
//   type: 'SIM',
//   command: [
//     "debut.exe"
//   ]
// }

// export const 弹震坦克: Typings.GameInfo = {
//   translates: {
//     cn: '弹震坦克'
//   },
//   type: 'SIM',
//   command: [
//     "main"
//   ]
// }

// export const 弹珠台世界: Typings.GameInfo = {
//   translates: {
//     cn: '弹珠台世界'
//   },
//   type: 'PUZ',
//   command: [
//     "pworld.exe"
//   ]
// }

// export const 荡寇雄狮: Typings.GameInfo = {
//   translates: {
//     cn: '荡寇雄狮'
//   },
//   type: 'SPG',
//   command: [
//     "flines.bat"
//   ]
// }

// export const 荡魔平妖志: Typings.GameInfo = {
//   translates: {
//     cn: '荡魔平妖志'
//   },
//   type: 'ACT',
//   command: [
//     "wrath.exe"
//   ]
// }

// export const 德川家康: Typings.GameInfo = {
//   translates: {
//     cn: '德川家康'
//   },
//   type: 'SPG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 德军总部: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部'
//   },
//   type: 'ACT',
//   command: [
//     "cw.exe"
//   ]
// }

// export const 德军总部MOD-CARVEN: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部MOD-CARVEN'
//   },
//   type: 'ACT',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 德军总部MOD-DOOM版: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部MOD-DOOM版'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 德军总部MOD-ROMAN: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部MOD-ROMAN'
//   },
//   type: 'ACT',
//   command: [
//     "GO.BAT"
//   ]
// }

// export const 德军总部MOD-黎明: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部MOD-黎明'
//   },
//   type: 'ACT',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 德军总部命运之矛: Typings.GameInfo = {
//   translates: {
//     cn: '德军总部命运之矛'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 德库拉传说: Typings.GameInfo = {
//   translates: {
//     cn: '德库拉传说'
//   },
//   type: 'ACT',
//   command: [
//     "drac"
//   ]
// }

// export const 德鲁伊恶魔之心: Typings.GameInfo = {
//   translates: {
//     cn: '德鲁伊恶魔之心'
//   },
//   type: 'RPG',
//   command: [
//     "druid"
//   ]
// }

// export const 迪斯尼夺宝奇兵: Typings.GameInfo = {
//   translates: {
//     cn: '迪斯尼夺宝奇兵'
//   },
//   type: 'ACT',
//   command: [
//     "ducktale.exe"
//   ]
// }

// export const 底特律汽车大亨: Typings.GameInfo = {
//   translates: {
//     cn: '底特律汽车大亨'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 地动山摇: Typings.GameInfo = {
//   translates: {
//     cn: '地动山摇'
//   },
//   type: 'ACT',
//   command: [
//     "quiver.bat"
//   ]
// }

// export const 地球2140: Typings.GameInfo = {
//   translates: {
//     cn: '地球2140'
//   },
//   type: 'RTS',
//   command: [
//     "earth800.bat"
//   ]
// }

// export const 地球围攻: Typings.GameInfo = {
//   translates: {
//     cn: '地球围攻'
//   },
//   type: 'SIM',
//   command: [
//     "es"
//   ]
// }

// export const 地下创世纪: Typings.GameInfo = {
//   translates: {
//     cn: '地下创世纪'
//   },
//   type: 'RPG',
//   command: [
//     "uw.exe"
//   ]
// }

// export const 地下创世纪2: Typings.GameInfo = {
//   translates: {
//     cn: '地下创世纪2'
//   },
//   type: 'RPG',
//   command: [
//     "uw2.exe"
//   ]
// }

// export const 地下克里姆林宫: Typings.GameInfo = {
//   translates: {
//     cn: '地下克里姆林宫'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 地狱付费之旅: Typings.GameInfo = {
//   translates: {
//     cn: '地狱付费之旅'
//   },
//   type: 'ACT',
//   command: [
//     "hell2pay.bat"
//   ]
// }

// export const 地狱火: Typings.GameInfo = {
//   translates: {
//     cn: '地狱火'
//   },
//   type: 'ACT',
//   command: [
//     "hellfire.com"
//   ]
// }

// export const 地狱赛博朋克: Typings.GameInfo = {
//   translates: {
//     cn: '地狱赛博朋克'
//   },
//   type: 'AVG',
//   command: [
//     "heck.bat"
//   ]
// }

// export const 地狱也疯狂: Typings.GameInfo = {
//   translates: {
//     cn: '地狱也疯狂'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 帝国2: Typings.GameInfo = {
//   translates: {
//     cn: '帝国2'
//   },
//   type: 'SLG',
//   command: [
//     "e2"
//   ]
// }

// export const 帝国的光荣: Typings.GameInfo = {
//   translates: {
//     cn: '帝国的光荣'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 帝国豪华版: Typings.GameInfo = {
//   translates: {
//     cn: '帝国豪华版'
//   },
//   type: 'SLG',
//   command: [
//     "empire"
//   ]
// }

// export const 第13楼: Typings.GameInfo = {
//   translates: {
//     cn: '第13楼'
//   },
//   type: 'SIM',
//   command: [
//     "FLOOR13.EXE"
//   ]
// }

// export const 第13支局: Typings.GameInfo = {
//   translates: {
//     cn: '第13支局'
//   },
//   type: 'AVG',
//   command: [
//     "b13.com"
//   ]
// }

// export const 第3日龙之力量: Typings.GameInfo = {
//   translates: {
//     cn: '第3日龙之力量'
//   },
//   type: 'ACT',
//   command: [
//     "drf"
//   ]
// }

// export const 第4日伊卡洛斯: Typings.GameInfo = {
//   translates: {
//     cn: '第4日伊卡洛斯'
//   },
//   type: 'ACT',
//   command: [
//     "Icarus"
//   ]
// }

// export const 第5舰队: Typings.GameInfo = {
//   translates: {
//     cn: '第5舰队'
//   },
//   type: 'SLG',
//   command: [
//     "fleet"
//   ]
// }

// export const 第5日龙机突击: Typings.GameInfo = {
//   translates: {
//     cn: '第5日龙机突击'
//   },
//   type: 'ACT',
//   command: [
//     "dragon"
//   ]
// }

// export const 第十瓶-保龄: Typings.GameInfo = {
//   translates: {
//     cn: '第十瓶-保龄'
//   },
//   type: 'SIM',
//   command: [
//     "bowl"
//   ]
// }

// export const 第五个火枪手: Typings.GameInfo = {
//   translates: {
//     cn: '第五个火枪手'
//   },
//   type: 'AVG',
//   command: [
//     "touche.bat"
//   ]
// }

// export const 第一武士: Typings.GameInfo = {
//   translates: {
//     cn: '第一武士'
//   },
//   type: 'ACT',
//   command: [
//     "samvga4"
//   ]
// }

// export const 蒂斯蛋蛋黄王子: Typings.GameInfo = {
//   translates: {
//     cn: '蒂斯蛋蛋黄王子'
//   },
//   type: 'ACT',
//   command: [
//     "yolk.exe"
//   ]
// }

// export const 蒂斯蛋快餐世界: Typings.GameInfo = {
//   translates: {
//     cn: '蒂斯蛋快餐世界'
//   },
//   type: 'ACT',
//   command: [
//     "fastfood"
//   ]
// }

// export const 蒂斯蛋梦幻世界: Typings.GameInfo = {
//   translates: {
//     cn: '蒂斯蛋梦幻世界'
//   },
//   type: 'ACT',
//   command: [
//     "dizzy"
//   ]
// }

// export const 蒂斯蛋梦幻之旅: Typings.GameInfo = {
//   translates: {
//     cn: '蒂斯蛋梦幻之旅'
//   },
//   type: 'ACT',
//   command: [
//     "dizzy"
//   ]
// }

// export const 蒂斯蛋泡泡冒险: Typings.GameInfo = {
//   translates: {
//     cn: '蒂斯蛋泡泡冒险'
//   },
//   type: 'ACT',
//   command: [
//     "bubble.exe"
//   ]
// }

// export const 电脑魔域: Typings.GameInfo = {
//   translates: {
//     cn: '电脑魔域'
//   },
//   type: 'RPG',
//   command: [
//     "a_.exe"
//   ]
// }

// export const 电影工坊: Typings.GameInfo = {
//   translates: {
//     cn: '电影工坊'
//   },
//   type: 'HGA',
//   command: [
//     "camman.bat"
//   ]
// }

// export const 电子波动: Typings.GameInfo = {
//   translates: {
//     cn: '电子波动'
//   },
//   type: 'ACT',
//   command: [
//     "popple"
//   ]
// }

// export const 电子侠: Typings.GameInfo = {
//   translates: {
//     cn: '电子侠'
//   },
//   type: 'ACT',
//   command: [
//     "em"
//   ]
// }

// export const 喋血赛车: Typings.GameInfo = {
//   translates: {
//     cn: '喋血赛车'
//   },
//   type: 'SIM',
//   command: [
//     "splat.exe"
//   ]
// }

// export const 碟形世界: Typings.GameInfo = {
//   translates: {
//     cn: '碟形世界'
//   },
//   type: 'AVG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 碟形世界2: Typings.GameInfo = {
//   translates: {
//     cn: '碟形世界2'
//   },
//   type: 'AVG',
//   command: [
//     "dw2.bat"
//   ]
// }

// export const 丁丁历险记太阳之罪: Typings.GameInfo = {
//   translates: {
//     cn: '丁丁历险记太阳之罪'
//   },
//   type: 'ACT',
//   command: [
//     "tintin"
//   ]
// }

// export const 丁丁在西藏: Typings.GameInfo = {
//   translates: {
//     cn: '丁丁在西藏'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 动作足球: Typings.GameInfo = {
//   translates: {
//     cn: '动作足球'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 洞穴战争: Typings.GameInfo = {
//   translates: {
//     cn: '洞穴战争'
//   },
//   type: 'RTS',
//   command: [
//     "cave.bat"
//   ]
// }

// export const 都市飞鸭: Typings.GameInfo = {
//   translates: {
//     cn: '都市飞鸭'
//   },
//   type: 'ACT',
//   command: [
//     "duck.exe"
//   ]
// }

// export const 斗神传: Typings.GameInfo = {
//   translates: {
//     cn: '斗神传'
//   },
//   type: 'ACT',
//   command: [
//     "tsd"
//   ]
// }

// export const 毒品战争: Typings.GameInfo = {
//   translates: {
//     cn: '毒品战争'
//   },
//   type: 'ACT',
//   command: [
//     "dwsb8.exe"
//   ]
// }

// export const 毒兔崽子: Typings.GameInfo = {
//   translates: {
//     cn: '毒兔崽子'
//   },
//   type: 'ACT',
//   command: [
//     "bunny.exe"
//   ]
// }

// export const 独立车赛: Typings.GameInfo = {
//   translates: {
//     cn: '独立车赛'
//   },
//   type: 'SIM',
//   command: [
//     "indycar"
//   ]
// }

// export const 独立赛车2: Typings.GameInfo = {
//   translates: {
//     cn: '独立赛车2'
//   },
//   type: 'SIM',
//   command: [
//     "indycar"
//   ]
// }

// export const 独立战争: Typings.GameInfo = {
//   translates: {
//     cn: '独立战争'
//   },
//   type: 'SLG',
//   command: [
//     "liberty"
//   ]
// }

// export const 赌神至尊之战: Typings.GameInfo = {
//   translates: {
//     cn: '赌神至尊之战'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 对抗战争: Typings.GameInfo = {
//   translates: {
//     cn: '对抗战争'
//   },
//   type: 'SLG',
//   command: [
//     "play"
//   ]
// }

// export const 对手: Typings.GameInfo = {
//   translates: {
//     cn: '对手'
//   },
//   type: 'ACT',
//   command: [
//     "antagony.exe"
//   ]
// }

// export const 遁入黑暗: Typings.GameInfo = {
//   translates: {
//     cn: '遁入黑暗'
//   },
//   type: 'ACT',
//   command: [
//     "f2b.bat"
//   ]
// }

// export const 夺旗大战: Typings.GameInfo = {
//   translates: {
//     cn: '夺旗大战'
//   },
//   type: 'SLG',
//   command: [
//     "capflag2"
//   ]
// }

// export const 俄勒冈小道: Typings.GameInfo = {
//   translates: {
//     cn: '俄勒冈小道'
//   },
//   type: 'SIM',
//   command: [
//     "oregon"
//   ]
// }

// export const 俄罗斯方块: Typings.GameInfo = {
//   translates: {
//     cn: '俄罗斯方块'
//   },
//   type: 'PUZ',
//   command: [
//     "ctetris"
//   ]
// }

// export const 俄罗斯方块经典版: Typings.GameInfo = {
//   translates: {
//     cn: '俄罗斯方块经典版'
//   },
//   type: 'PUZ',
//   command: [
//     "tetrisc"
//   ]
// }

// export const 俄罗斯拼盘: Typings.GameInfo = {
//   translates: {
//     cn: '俄罗斯拼盘'
//   },
//   type: 'PUZ',
//   command: [
//     "menu.exe"
//   ]
// }

// export const 恶魔城: Typings.GameInfo = {
//   translates: {
//     cn: '恶魔城'
//   },
//   type: 'ACT',
//   command: [
//     "CASTLE.EXE"
//   ]
// }

// export const 恶魔禁地: Typings.GameInfo = {
//   translates: {
//     cn: '恶魔禁地'
//   },
//   type: 'AVG',
//   command: [
//     "veil"
//   ]
// }

// export const 恶魔禁地英文版: Typings.GameInfo = {
//   translates: {
//     cn: '恶魔禁地英文版'
//   },
//   type: 'AVG',
//   command: [
//     "veil"
//   ]
// }

// export const 恶魔之门: Typings.GameInfo = {
//   translates: {
//     cn: '恶魔之门'
//   },
//   type: 'RPG',
//   command: [
//     "d-gate"
//   ]
// }

// export const 噩梦3D: Typings.GameInfo = {
//   translates: {
//     cn: '噩梦3D'
//   },
//   type: 'ACT',
//   command: [
//     "N3D"
//   ]
// }

// export const 法兰克疯狂复仇: Typings.GameInfo = {
//   translates: {
//     cn: '法兰克疯狂复仇'
//   },
//   type: 'ACT',
//   command: [
//     "franko.bat"
//   ]
// }

// export const 犯罪浪潮: Typings.GameInfo = {
//   translates: {
//     cn: '犯罪浪潮'
//   },
//   type: 'ACT',
//   command: [
//     "cw.exe"
//   ]
// }

// export const 方程式赛车: Typings.GameInfo = {
//   translates: {
//     cn: '方程式赛车'
//   },
//   type: 'SIM',
//   command: [
//     "gpc.bat"
//   ]
// }

// export const 放射博士的城堡: Typings.GameInfo = {
//   translates: {
//     cn: '放射博士的城堡'
//   },
//   type: 'ACT',
//   command: [
//     "radiaki.exe"
//   ]
// }

// export const 飞碟任务: Typings.GameInfo = {
//   translates: {
//     cn: '飞碟任务'
//   },
//   type: 'PUZ',
//   command: [
//     "UFO"
//   ]
// }

// export const 飞虎队: Typings.GameInfo = {
//   translates: {
//     cn: '飞虎队'
//   },
//   type: 'ACT',
//   command: [
//     "start"
//   ]
// }

// export const 飞虎队2: Typings.GameInfo = {
//   translates: {
//     cn: '飞虎队2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 飞空艇: Typings.GameInfo = {
//   translates: {
//     cn: '飞空艇'
//   },
//   type: 'SIM',
//   command: [
//     "zeppelin.exe"
//   ]
// }

// export const 飞狼突击队: Typings.GameInfo = {
//   translates: {
//     cn: '飞狼突击队'
//   },
//   type: 'ACT',
//   command: [
//     "aa.exe"
//   ]
// }

// export const 飞龙传奇: Typings.GameInfo = {
//   translates: {
//     cn: '飞龙传奇'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 飞龙骑士: Typings.GameInfo = {
//   translates: {
//     cn: '飞龙骑士'
//   },
//   type: 'SIM',
//   command: [
//     "dstrike.exe"
//   ]
// }

// export const 飞轮勇士: Typings.GameInfo = {
//   translates: {
//     cn: '飞轮勇士'
//   },
//   type: 'RPG',
//   command: [
//     "autoduel.exe"
//   ]
// }

// export const 飞鹰骑士: Typings.GameInfo = {
//   translates: {
//     cn: '飞鹰骑士'
//   },
//   type: 'SPG',
//   command: [
//     "abc.exe"
//   ]
// }

// export const 飞跃疯人院: Typings.GameInfo = {
//   translates: {
//     cn: '飞跃疯人院'
//   },
//   type: 'AVG',
//   command: [
//     "count"
//   ]
// }

// export const 非洲探险: Typings.GameInfo = {
//   translates: {
//     cn: '非洲探险'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 绯王传2: Typings.GameInfo = {
//   translates: {
//     cn: '绯王传2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 废土: Typings.GameInfo = {
//   translates: {
//     cn: '废土'
//   },
//   type: 'RPG',
//   command: [
//     "wl.exe"
//   ]
// }

// export const 分歧：裂痕: Typings.GameInfo = {
//   translates: {
//     cn: '分歧:裂痕'
//   },
//   type: 'ACT',
//   command: [
//     "chasm.bat"
//   ]
// }

// export const 风暴领主: Typings.GameInfo = {
//   translates: {
//     cn: '风暴领主'
//   },
//   type: 'SLG',
//   command: [
//     "storm.exe"
//   ]
// }

// export const 风暴之眼: Typings.GameInfo = {
//   translates: {
//     cn: '风暴之眼'
//   },
//   type: 'SIM',
//   command: [
//     "eos.bat"
//   ]
// }

// export const 风尘三侠之金剑使者: Typings.GameInfo = {
//   translates: {
//     cn: '风尘三侠之金剑使者'
//   },
//   type: 'RPG',
//   command: [
//     "fs.exe"
//   ]
// }

// export const 风驰电掣: Typings.GameInfo = {
//   translates: {
//     cn: '风驰电掣'
//   },
//   type: 'SIM',
//   command: [
//     "adlib.bat"
//   ]
// }

// export const 风行者: Typings.GameInfo = {
//   translates: {
//     cn: '风行者'
//   },
//   type: 'RPG',
//   command: [
//     "wind.exe"
//   ]
// }

// export const 风神传承: Typings.GameInfo = {
//   translates: {
//     cn: '风神传承'
//   },
//   type: 'ACT',
//   command: [
//     "stormlrd"
//   ]
// }

// export const 风速小子: Typings.GameInfo = {
//   translates: {
//     cn: '风速小子'
//   },
//   type: 'SIM',
//   command: [
//     "gp"
//   ]
// }

// export const 风雪江山: Typings.GameInfo = {
//   translates: {
//     cn: '风雪江山'
//   },
//   type: 'RTS',
//   command: [
//     "game.exe"
//   ]
// }

// export const 风语河岸柳: Typings.GameInfo = {
//   translates: {
//     cn: '风语河岸柳'
//   },
//   type: 'AVG',
//   command: [
//     "willows.com"
//   ]
// }

// export const 风云霸主: Typings.GameInfo = {
//   translates: {
//     cn: '风云霸主'
//   },
//   type: 'SLG',
//   command: [
//     "pm.bat"
//   ]
// }

// export const 风云天下三国篇: Typings.GameInfo = {
//   translates: {
//     cn: '风云天下三国篇'
//   },
//   type: 'ACT',
//   command: [
//     "game"
//   ]
// }

// export const 封神榜格斗: Typings.GameInfo = {
//   translates: {
//     cn: '封神榜格斗'
//   },
//   type: 'ACT',
//   command: [
//     "game.bat"
//   ]
// }

// export const 封神演义: Typings.GameInfo = {
//   translates: {
//     cn: '封神演义'
//   },
//   type: 'SPG',
//   command: [
//     "gs.exe"
//   ]
// }

// export const 疯狗: Typings.GameInfo = {
//   translates: {
//     cn: '疯狗'
//   },
//   type: 'ACT',
//   command: [
//     "MADDOG.bat"
//   ]
// }

// export const 疯狗威廉的地下城之旅: Typings.GameInfo = {
//   translates: {
//     cn: '疯狗威廉的地下城之旅'
//   },
//   type: 'AVG',
//   command: [
//     "MDWVGA.EXE"
//   ]
// }

// export const 疯狂大毁灭: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂大毁灭'
//   },
//   type: 'ACT',
//   command: [
//     "rampage"
//   ]
// }

// export const 疯狂大陆: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂大陆'
//   },
//   type: 'RTS',
//   command: [
//     "mega.exe"
//   ]
// }

// export const 疯狂电视台: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂电视台'
//   },
//   type: 'SIM',
//   command: [
//     "mtv.exe"
//   ]
// }

// export const 疯狂橄榄球: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂橄榄球'
//   },
//   type: 'SIM',
//   command: [
//     "crazy.bat"
//   ]
// }

// export const 疯狂科学机器: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂科学机器'
//   },
//   type: 'PUZ',
//   command: [
//     "MAIN"
//   ]
// }

// export const 疯狂赛车2: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂赛车2'
//   },
//   type: 'SIM',
//   command: [
//     "cc2ega.exe"
//   ]
// }

// export const 疯狂赛车3: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂赛车3'
//   },
//   type: 'SIM',
//   command: [
//     "cc3.com"
//   ]
// }

// export const 疯狂时代: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂时代'
//   },
//   type: 'AVG',
//   command: [
//     "dott.exe"
//   ]
// }

// export const 疯狂双响炮: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂双响炮'
//   },
//   type: 'PUZ',
//   command: [
//     "crazy.exe"
//   ]
// }

// export const 疯狂小旅鼠: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂小旅鼠'
//   },
//   type: 'PUZ',
//   command: [
//     "l3cd.exe"
//   ]
// }

// export const 疯狂小旅鼠2: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂小旅鼠2'
//   },
//   type: 'PUZ',
//   command: [
//     "l2.exe"
//   ]
// }

// export const 疯狂小旅鼠3: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂小旅鼠3'
//   },
//   type: 'PUZ',
//   command: [
//     "L3.BAT"
//   ]
// }

// export const 疯狂小鸭: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂小鸭'
//   },
//   type: 'PUZ',
//   command: [
//     "ducks"
//   ]
// }

// export const 疯狂医院2: Typings.GameInfo = {
//   translates: {
//     cn: '疯狂医院2'
//   },
//   type: 'SIM',
//   command: [
//     "dr2.EXE"
//   ]
// }

// export const 疯子: Typings.GameInfo = {
//   translates: {
//     cn: '疯子'
//   },
//   type: 'RPG',
//   command: [
//     "madman"
//   ]
// }

// export const 蜂箱赌坊: Typings.GameInfo = {
//   translates: {
//     cn: '蜂箱赌坊'
//   },
//   type: 'HGA',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 拂晓攻击: Typings.GameInfo = {
//   translates: {
//     cn: '拂晓攻击'
//   },
//   type: 'ACT',
//   command: [
//     "dr.exe"
//   ]
// }

// export const 福尔摩莎: Typings.GameInfo = {
//   translates: {
//     cn: '福尔摩莎'
//   },
//   type: 'AVG',
//   command: [
//     "china.exe"
//   ]
// }

// export const 福尔摩斯2玫瑰纹身: Typings.GameInfo = {
//   translates: {
//     cn: '福尔摩斯2玫瑰纹身'
//   },
//   type: 'AVG',
//   command: [
//     "holmes2.bat"
//   ]
// }

// export const 福尔摩斯失落的文件: Typings.GameInfo = {
//   translates: {
//     cn: '福尔摩斯失落的文件'
//   },
//   type: 'AVG',
//   command: [
//     "game"
//   ]
// }

// export const 福禄双霸天: Typings.GameInfo = {
//   translates: {
//     cn: '福禄双霸天'
//   },
//   type: 'ACT',
//   command: [
//     "1.EXE"
//   ]
// }

// export const 福禄双霸天2: Typings.GameInfo = {
//   translates: {
//     cn: '福禄双霸天2'
//   },
//   type: 'ACT',
//   command: [
//     "blues.bat"
//   ]
// }

// export const 福特模拟驾驶: Typings.GameInfo = {
//   translates: {
//     cn: '福特模拟驾驶'
//   },
//   type: 'SIM',
//   command: [
//     "FORD.EXE"
//   ]
// }

// export const 富贵列车: Typings.GameInfo = {
//   translates: {
//     cn: '富贵列车'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 富甲天下: Typings.GameInfo = {
//   translates: {
//     cn: '富甲天下'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 富甲天下2: Typings.GameInfo = {
//   translates: {
//     cn: '富甲天下2'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 盖世龙王: Typings.GameInfo = {
//   translates: {
//     cn: '盖世龙王'
//   },
//   type: 'SLG',
//   command: [
//     "dlord.exe"
//   ]
// }

// export const 感官足球: Typings.GameInfo = {
//   translates: {
//     cn: '感官足球'
//   },
//   type: 'SIM',
//   command: [
//     "SOC_K"
//   ]
// }

// export const 感官足球95: Typings.GameInfo = {
//   translates: {
//     cn: '感官足球95'
//   },
//   type: 'SIM',
//   command: [
//     "swos.bat"
//   ]
// }

// export const 橄榄球世界杯95: Typings.GameInfo = {
//   translates: {
//     cn: '橄榄球世界杯95'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 橄榄球小联盟: Typings.GameInfo = {
//   translates: {
//     cn: '橄榄球小联盟'
//   },
//   type: 'SIM',
//   command: [
//     "MLF2.EXE"
//   ]
// }

// export const 钢铁冲突: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁冲突'
//   },
//   type: 'SLG',
//   command: [
//     "cos.bat"
//   ]
// }

// export const 钢铁冲突未来版: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁冲突未来版'
//   },
//   type: 'SLG',
//   command: [
//     "future"
//   ]
// }

// export const 钢铁领主: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁领主'
//   },
//   type: 'SLG',
//   command: [
//     "ironlord.exe"
//   ]
// }

// export const 钢铁骑士团: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁骑士团'
//   },
//   type: 'SLG',
//   command: [
//     "play"
//   ]
// }

// export const 钢铁十字: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁十字'
//   },
//   type: 'SLG',
//   command: [
//     "ic"
//   ]
// }

// export const 钢铁信条: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁信条'
//   },
//   type: 'RPG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 钢铁意志: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁意志'
//   },
//   type: 'ACT',
//   command: [
//     "NOS.BAT"
//   ]
// }

// export const 钢铁之路1: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之路1'
//   },
//   type: 'SLG',
//   command: [
//     "start"
//   ]
// }

// export const 钢铁之路2: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之路2'
//   },
//   type: 'SLG',
//   command: [
//     "steel2"
//   ]
// }

// export const 钢铁之路3: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之路3'
//   },
//   type: 'SLG',
//   command: [
//     "steel3"
//   ]
// }

// export const 钢铁之拳: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之拳'
//   },
//   type: 'SIM',
//   command: [
//     "f.bat"
//   ]
// }

// export const 钢铁之心: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之心'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 钢铁之血: Typings.GameInfo = {
//   translates: {
//     cn: '钢铁之血'
//   },
//   type: 'ACT',
//   command: [
//     "iron.exe"
//   ]
// }

// export const 高报酬战将: Typings.GameInfo = {
//   translates: {
//     cn: '高报酬战将'
//   },
//   type: 'SLG',
//   command: [
//     "main"
//   ]
// }

// export const 高尔夫训练: Typings.GameInfo = {
//   translates: {
//     cn: '高尔夫训练'
//   },
//   type: 'SIM',
//   command: [
//     "LINKS.BAT"
//   ]
// }

// export const 高尔夫训练386: Typings.GameInfo = {
//   translates: {
//     cn: '高尔夫训练386'
//   },
//   type: 'SIM',
//   command: [
//     "GOLF.BAT"
//   ]
// }

// export const 高级文明: Typings.GameInfo = {
//   translates: {
//     cn: '高级文明'
//   },
//   type: 'SLG',
//   command: [
//     "ac_main"
//   ]
// }

// export const 高级银河帝国: Typings.GameInfo = {
//   translates: {
//     cn: '高级银河帝国'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 高卢英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '高卢英雄传'
//   },
//   type: 'ACT',
//   command: [
//     "obelix.exe"
//   ]
// }

// export const 高速猎人: Typings.GameInfo = {
//   translates: {
//     cn: '高速猎人'
//   },
//   type: 'ACT',
//   command: [
//     "start.exe"
//   ]
// }

// export const 高校魔影: Typings.GameInfo = {
//   translates: {
//     cn: '高校魔影'
//   },
//   type: 'SPG',
//   command: [
//     "g_map"
//   ]
// }

// export const 哥伦布发现之旅: Typings.GameInfo = {
//   translates: {
//     cn: '哥伦布发现之旅'
//   },
//   type: 'SLG',
//   command: [
//     "discover"
//   ]
// }

// export const 革命力量: Typings.GameInfo = {
//   translates: {
//     cn: '革命力量'
//   },
//   type: 'ACT',
//   command: [
//     "eardis"
//   ]
// }

// export const 格斗：过度杀戮: Typings.GameInfo = {
//   translates: {
//     cn: '格斗:过度杀戮'
//   },
//   type: 'ACT',
//   command: [
//     "overkill"
//   ]
// }

// export const 格斗悍将: Typings.GameInfo = {
//   translates: {
//     cn: '格斗悍将'
//   },
//   type: 'ACT',
//   command: [
//     "tough.exe"
//   ]
// }

// export const 格斗拳王: Typings.GameInfo = {
//   translates: {
//     cn: '格斗拳王'
//   },
//   type: 'ACT',
//   command: [
//     "act.com"
//   ]
// }

// export const 格杀令: Typings.GameInfo = {
//   translates: {
//     cn: '格杀令'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 隔离区1: Typings.GameInfo = {
//   translates: {
//     cn: '隔离区1'
//   },
//   type: 'SIM',
//   command: [
//     "q.exe"
//   ]
// }

// export const 隔离区2马路英雄: Typings.GameInfo = {
//   translates: {
//     cn: '隔离区2马路英雄'
//   },
//   type: 'SIM',
//   command: [
//     "rw.exe"
//   ]
// }

// export const 工人物语: Typings.GameInfo = {
//   translates: {
//     cn: '工人物语'
//   },
//   type: 'RTS',
//   command: [
//     "serfcity"
//   ]
// }

// export const 工人物语2: Typings.GameInfo = {
//   translates: {
//     cn: '工人物语2'
//   },
//   type: 'RTS',
//   command: [
//     "s2.exe"
//   ]
// }

// export const 公路狂飙: Typings.GameInfo = {
//   translates: {
//     cn: '公路狂飙'
//   },
//   type: 'SIM',
//   command: [
//     "carnage.exe"
//   ]
// }

// export const 公元前车赛: Typings.GameInfo = {
//   translates: {
//     cn: '公元前车赛'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 孤胆枪手: Typings.GameInfo = {
//   translates: {
//     cn: '孤胆枪手'
//   },
//   type: 'ACT',
//   command: [
//     "mdk"
//   ]
// }

// export const 古堡之宴: Typings.GameInfo = {
//   translates: {
//     cn: '古堡之宴'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 古大陆物语: Typings.GameInfo = {
//   translates: {
//     cn: '古大陆物语'
//   },
//   type: 'SPG',
//   command: [
//     "fs.bat"
//   ]
// }

// export const 古大陆物语2: Typings.GameInfo = {
//   translates: {
//     cn: '古大陆物语2'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 古大陆物语4: Typings.GameInfo = {
//   translates: {
//     cn: '古大陆物语4'
//   },
//   type: 'SPG',
//   command: [
//     "fsw.bat"
//   ]
// }

// export const 古大陆物语5光盘版: Typings.GameInfo = {
//   translates: {
//     cn: '古大陆物语5光盘版'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 古怪小搭档: Typings.GameInfo = {
//   translates: {
//     cn: '古怪小搭档'
//   },
//   type: 'ACT',
//   command: [
//     "doofus.exe"
//   ]
// }

// export const 古怪星球伊特兰: Typings.GameInfo = {
//   translates: {
//     cn: '古怪星球伊特兰'
//   },
//   type: 'AVG',
//   command: [
//     "etercrk.exe"
//   ]
// }

// export const 古怪之梦: Typings.GameInfo = {
//   translates: {
//     cn: '古怪之梦'
//   },
//   type: 'ACT',
//   command: [
//     "wicked"
//   ]
// }

// export const 古墓丽影: Typings.GameInfo = {
//   translates: {
//     cn: '古墓丽影'
//   },
//   type: 'ACT',
//   command: [
//     "tomb"
//   ]
// }

// export const 古事记外传(日文): Typings.GameInfo = {
//   translates: {
//     cn: '古事记外传(日文)'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 古文明霸王传: Typings.GameInfo = {
//   translates: {
//     cn: '古文明霸王传'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 雇佣之枪: Typings.GameInfo = {
//   translates: {
//     cn: '雇佣之枪'
//   },
//   type: 'RPG',
//   command: [
//     "hg.bat"
//   ]
// }

// export const 关键任务: Typings.GameInfo = {
//   translates: {
//     cn: '关键任务'
//   },
//   type: 'AVG',
//   command: [
//     "mission"
//   ]
// }

// export const 官能习教: Typings.GameInfo = {
//   translates: {
//     cn: '官能习教'
//   },
//   type: 'HGA',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 管状世界: Typings.GameInfo = {
//   translates: {
//     cn: '管状世界'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 冠军拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: '冠军拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "race.exe"
//   ]
// }

// export const 冠军足球经理2: Typings.GameInfo = {
//   translates: {
//     cn: '冠军足球经理2'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 灌篮96: Typings.GameInfo = {
//   translates: {
//     cn: '灌篮96'
//   },
//   type: 'SIM',
//   command: [
//     "slam.exe"
//   ]
// }

// export const 灌篮金刚: Typings.GameInfo = {
//   translates: {
//     cn: '灌篮金刚'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 光明圣使团: Typings.GameInfo = {
//   translates: {
//     cn: '光明圣使团'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 光明战史: Typings.GameInfo = {
//   translates: {
//     cn: '光明战史'
//   },
//   type: 'SPG',
//   command: [
//     "dforce.exe"
//   ]
// }

// export const 光头大战: Typings.GameInfo = {
//   translates: {
//     cn: '光头大战'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 鬼马小英雄: Typings.GameInfo = {
//   translates: {
//     cn: '鬼马小英雄'
//   },
//   type: 'RPG',
//   command: [
//     "monk.exe"
//   ]
// }

// export const 鬼屋魔影: Typings.GameInfo = {
//   translates: {
//     cn: '鬼屋魔影'
//   },
//   type: 'AVG',
//   command: [
//     "tatou.com"
//   ]
// }

// export const 鬼屋魔影2: Typings.GameInfo = {
//   translates: {
//     cn: '鬼屋魔影2'
//   },
//   type: 'AVG',
//   command: [
//     "aitd2.exe"
//   ]
// }

// export const 鬼屋魔影3: Typings.GameInfo = {
//   translates: {
//     cn: '鬼屋魔影3'
//   },
//   type: 'AVG',
//   command: [
//     "aitd3.exe"
//   ]
// }

// export const 鬼屋魔影万圣节特别篇: Typings.GameInfo = {
//   translates: {
//     cn: '鬼屋魔影万圣节特别篇'
//   },
//   type: 'AVG',
//   command: [
//     "jack.bat"
//   ]
// }

// export const 鬼屋文字冒险: Typings.GameInfo = {
//   translates: {
//     cn: '鬼屋文字冒险'
//   },
//   type: 'AVG',
//   command: [
//     "bones"
//   ]
// }

// export const 贵族: Typings.GameInfo = {
//   translates: {
//     cn: '贵族'
//   },
//   type: 'SLG',
//   command: [
//     "start"
//   ]
// }

// export const 国际超级车赛: Typings.GameInfo = {
//   translates: {
//     cn: '国际超级车赛'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 国际摩托赛: Typings.GameInfo = {
//   translates: {
//     cn: '国际摩托赛'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 国际拳击赛: Typings.GameInfo = {
//   translates: {
//     cn: '国际拳击赛'
//   },
//   type: 'ACT',
//   command: [
//     "box.bat"
//   ]
// }

// export const 国际忍者兔: Typings.GameInfo = {
//   translates: {
//     cn: '国际忍者兔'
//   },
//   type: 'ACT',
//   command: [
//     "vga.exe"
//   ]
// }

// export const 国际体育联赛: Typings.GameInfo = {
//   translates: {
//     cn: '国际体育联赛'
//   },
//   type: 'SIM',
//   command: [
//     "sports.bat"
//   ]
// }

// export const 国际网球联赛: Typings.GameInfo = {
//   translates: {
//     cn: '国际网球联赛'
//   },
//   type: 'SIM',
//   command: [
//     "TENA"
//   ]
// }

// export const 国际象棋末日审判版: Typings.GameInfo = {
//   translates: {
//     cn: '国际象棋末日审判版'
//   },
//   type: 'PUZ',
//   command: [
//     "T2.EXE"
//   ]
// }

// export const 国际象棋巫术对决: Typings.GameInfo = {
//   translates: {
//     cn: '国际象棋巫术对决'
//   },
//   type: 'PUZ',
//   command: [
//     "archon"
//   ]
// }

// export const 国土争霸: Typings.GameInfo = {
//   translates: {
//     cn: '国土争霸'
//   },
//   type: 'SLG',
//   command: [
//     "realms.exe"
//   ]
// }

// export const 国王的恩赐: Typings.GameInfo = {
//   translates: {
//     cn: '国王的恩赐'
//   },
//   type: 'SLG',
//   command: [
//     "kb.exe"
//   ]
// }

// export const 国王的桌游: Typings.GameInfo = {
//   translates: {
//     cn: '国王的桌游'
//   },
//   type: 'PUZ',
//   command: [
//     "ragnarok.bat"
//   ]
// }

// export const 国王密使1皇冠探求: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使1皇冠探求'
//   },
//   type: 'AVG',
//   command: [
//     "kq1.com"
//   ]
// }

// export const 国王密使2皇家罗曼史: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使2皇家罗曼史'
//   },
//   type: 'AVG',
//   command: [
//     "kq2.com"
//   ]
// }

// export const 国王密使3魔法生死门: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使3魔法生死门'
//   },
//   type: 'AVG',
//   command: [
//     "king.com"
//   ]
// }

// export const 国王密使4罗塞拉冒险: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使4罗塞拉冒险'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.exe"
//   ]
// }

// export const 国王密使5失城记: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使5失城记'
//   },
//   type: 'AVG',
//   command: [
//     "kq5.bat"
//   ]
// }

// export const 国王密使6希望之旅: Typings.GameInfo = {
//   translates: {
//     cn: '国王密使6希望之旅'
//   },
//   type: 'AVG',
//   command: [
//     "kq6"
//   ]
// }

// export const 过度杀戮92: Typings.GameInfo = {
//   translates: {
//     cn: '过度杀戮92'
//   },
//   type: 'ACT',
//   command: [
//     "overkill.exe"
//   ]
// }

// export const 海豹突击队: Typings.GameInfo = {
//   translates: {
//     cn: '海豹突击队'
//   },
//   type: 'SIM',
//   command: [
//     "st"
//   ]
// }

// export const 海盗大战: Typings.GameInfo = {
//   translates: {
//     cn: '海盗大战'
//   },
//   type: 'SLG',
//   command: [
//     "pirates.exe"
//   ]
// }

// export const 海盗黄金版: Typings.GameInfo = {
//   translates: {
//     cn: '海盗黄金版'
//   },
//   type: 'SIM',
//   command: [
//     "piratesg.bat"
//   ]
// }

// export const 海军出击: Typings.GameInfo = {
//   translates: {
//     cn: '海军出击'
//   },
//   type: 'SIM',
//   command: [
//     "strike"
//   ]
// }

// export const 海狼: Typings.GameInfo = {
//   translates: {
//     cn: '海狼'
//   },
//   type: 'SIM',
//   command: [
//     "SEAWOLF.BAT"
//   ]
// }

// export const 海姆达: Typings.GameInfo = {
//   translates: {
//     cn: '海姆达'
//   },
//   type: 'RPG',
//   command: [
//     "heimdall"
//   ]
// }

// export const 海姆达2: Typings.GameInfo = {
//   translates: {
//     cn: '海姆达2'
//   },
//   type: 'RPG',
//   command: [
//     "h2pc"
//   ]
// }

// export const 海上传奇: Typings.GameInfo = {
//   translates: {
//     cn: '海上传奇'
//   },
//   type: 'SLG',
//   command: [
//     "sl"
//   ]
// }

// export const 海滩斗忍者: Typings.GameInfo = {
//   translates: {
//     cn: '海滩斗忍者'
//   },
//   type: 'ACT',
//   command: [
//     "surf"
//   ]
// }

// export const 海下罗格: Typings.GameInfo = {
//   translates: {
//     cn: '海下罗格'
//   },
//   type: 'SIM',
//   command: [
//     "rogue.bat"
//   ]
// }

// export const 海洋多米诺: Typings.GameInfo = {
//   translates: {
//     cn: '海洋多米诺'
//   },
//   type: 'PUZ',
//   command: [
//     "play"
//   ]
// }

// export const 汉堡战争: Typings.GameInfo = {
//   translates: {
//     cn: '汉堡战争'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 汉尼拔: Typings.GameInfo = {
//   translates: {
//     cn: '汉尼拔'
//   },
//   type: 'SLG',
//   command: [
//     "hannibal.exe"
//   ]
// }

// export const 捍卫雄鹰: Typings.GameInfo = {
//   translates: {
//     cn: '捍卫雄鹰'
//   },
//   type: 'SIM',
//   command: [
//     "EFALCON"
//   ]
// }

// export const 撼天神塔: Typings.GameInfo = {
//   translates: {
//     cn: '撼天神塔'
//   },
//   type: 'RPG',
//   command: [
//     "vt"
//   ]
// }

// export const 撼天神塔2: Typings.GameInfo = {
//   translates: {
//     cn: '撼天神塔2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 撼天神塔3: Typings.GameInfo = {
//   translates: {
//     cn: '撼天神塔3'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 撼天神塔VT: Typings.GameInfo = {
//   translates: {
//     cn: '撼天神塔VT'
//   },
//   type: 'RPG',
//   command: [
//     "vt.exe"
//   ]
// }

// export const 行星边际: Typings.GameInfo = {
//   translates: {
//     cn: '行星边际'
//   },
//   type: 'RPG',
//   command: [
//     "pe"
//   ]
// }

// export const 航海世纪: Typings.GameInfo = {
//   translates: {
//     cn: '航海世纪'
//   },
//   type: 'SLG',
//   command: [
//     "gloriana"
//   ]
// }

// export const 豪华弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '豪华弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "deluxe"
//   ]
// }

// export const 好莱坞谋杀案: Typings.GameInfo = {
//   translates: {
//     cn: '好莱坞谋杀案'
//   },
//   type: 'AVG',
//   command: [
//     "hm.exe"
//   ]
// }

// export const 好梦连床: Typings.GameInfo = {
//   translates: {
//     cn: '好梦连床'
//   },
//   type: 'ACT',
//   command: [
//     "weird.exe"
//   ]
// }

// export const 合金装备: Typings.GameInfo = {
//   translates: {
//     cn: '合金装备'
//   },
//   type: 'ACT',
//   command: [
//     "play.exe"
//   ]
// }

// export const 合金装备2: Typings.GameInfo = {
//   translates: {
//     cn: '合金装备2'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 河源崎家一族(日): Typings.GameInfo = {
//   translates: {
//     cn: '河源崎家一族(日)'
//   },
//   type: 'HGA',
//   command: [
//     "GAME.BAT"
//   ]
// }

// export const 荷兰人的失落之矿: Typings.GameInfo = {
//   translates: {
//     cn: '荷兰人的失落之矿'
//   },
//   type: 'SIM',
//   command: [
//     "ldm"
//   ]
// }

// export const 核能武士: Typings.GameInfo = {
//   translates: {
//     cn: '核能武士'
//   },
//   type: 'ACT',
//   command: [
//     "rwarrior"
//   ]
// }

// export const 核战狂人梦: Typings.GameInfo = {
//   translates: {
//     cn: '核战狂人梦'
//   },
//   type: 'SLG',
//   command: [
//     "nukewar.exe"
//   ]
// }

// export const 赫拉瑞恩之剑: Typings.GameInfo = {
//   translates: {
//     cn: '赫拉瑞恩之剑'
//   },
//   type: 'RPG',
//   command: [
//     "hera.exe"
//   ]
// }

// export const 黑暗的公证: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗的公证'
//   },
//   type: 'RPG',
//   command: [
//     "justice.bat"
//   ]
// }

// export const 黑暗军团／魔法伏击战: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗军团/魔法伏击战'
//   },
//   type: 'SLG',
//   command: [
//     "dl.exe"
//   ]
// }

// export const 黑暗迷宫: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗迷宫'
//   },
//   type: 'RPG',
//   command: [
//     "darkspyr"
//   ]
// }

// export const 黑暗圣战录: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗圣战录'
//   },
//   type: 'SPG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 黑暗时代三部曲: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗时代三部曲'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 黑暗天使: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗天使'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 黑暗元素: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗元素'
//   },
//   type: 'RPG',
//   command: [
//     "obitus"
//   ]
// }

// export const 黑暗之地: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗之地'
//   },
//   type: 'RPG',
//   command: [
//     "darkland.exe"
//   ]
// }

// export const 黑暗之蛊: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗之蛊'
//   },
//   type: 'AVG',
//   command: [
//     "ds.bat"
//   ]
// }

// export const 黑暗之心: Typings.GameInfo = {
//   translates: {
//     cn: '黑暗之心'
//   },
//   type: 'RPG',
//   command: [
//     "uukrul"
//   ]
// }

// export const 黑洞谜题: Typings.GameInfo = {
//   translates: {
//     cn: '黑洞谜题'
//   },
//   type: 'PUZ',
//   command: [
//     "BH"
//   ]
// }

// export const 黑街风云: Typings.GameInfo = {
//   translates: {
//     cn: '黑街风云'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 黑杰克: Typings.GameInfo = {
//   translates: {
//     cn: '黑杰克'
//   },
//   type: 'PUZ',
//   command: [
//     "bj.exe"
//   ]
// }

// export const 黑杰克S: Typings.GameInfo = {
//   translates: {
//     cn: '黑杰克S'
//   },
//   type: 'HGA',
//   command: [
//     "BJ.EXE"
//   ]
// }

// export const 黑日危机: Typings.GameInfo = {
//   translates: {
//     cn: '黑日危机'
//   },
//   type: 'RPG',
//   command: [
//     "darksun.bat"
//   ]
// }

// export const 黑日危机2: Typings.GameInfo = {
//   translates: {
//     cn: '黑日危机2'
//   },
//   type: 'RPG',
//   command: [
//     "dsun"
//   ]
// }

// export const 黑色街区: Typings.GameInfo = {
//   translates: {
//     cn: '黑色街区'
//   },
//   type: 'AVG',
//   command: [
//     "bs.bat"
//   ]
// }

// export const 黑武士: Typings.GameInfo = {
//   translates: {
//     cn: '黑武士'
//   },
//   type: 'ACT',
//   command: [
//     "blade"
//   ]
// }

// export const 黑星正义使者: Typings.GameInfo = {
//   translates: {
//     cn: '黑星正义使者'
//   },
//   type: 'AVG',
//   command: [
//     "run.bat"
//   ]
// }

// export const 黑之断章: Typings.GameInfo = {
//   translates: {
//     cn: '黑之断章'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 横版俄罗斯方块: Typings.GameInfo = {
//   translates: {
//     cn: '横版俄罗斯方块'
//   },
//   type: 'PUZ',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 横扫: Typings.GameInfo = {
//   translates: {
//     cn: '横扫'
//   },
//   type: 'ACT',
//   command: [
//     "strife.bat"
//   ]
// }

// export const 红楼梦麻将: Typings.GameInfo = {
//   translates: {
//     cn: '红楼梦麻将'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 红楼梦之十二金钗: Typings.GameInfo = {
//   translates: {
//     cn: '红楼梦之十二金钗'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 红猫1: Typings.GameInfo = {
//   translates: {
//     cn: '红猫1'
//   },
//   type: 'ACT',
//   command: [
//     "rc1.bat"
//   ]
// }

// export const 红猫2: Typings.GameInfo = {
//   translates: {
//     cn: '红猫2'
//   },
//   type: 'ACT',
//   command: [
//     "rc2.exe"
//   ]
// }

// export const 红色地狱纳粹悖论: Typings.GameInfo = {
//   translates: {
//     cn: '红色地狱纳粹悖论'
//   },
//   type: 'AVG',
//   command: [
//     "redhell"
//   ]
// }

// export const 红色风暴: Typings.GameInfo = {
//   translates: {
//     cn: '红色风暴'
//   },
//   type: 'SIM',
//   command: [
//     "redstorm"
//   ]
// }

// export const 红色警戒: Typings.GameInfo = {
//   translates: {
//     cn: '红色警戒'
//   },
//   type: 'RTS',
//   command: [
//     "ra.exe"
//   ]
// }

// export const 红色男爵: Typings.GameInfo = {
//   translates: {
//     cn: '红色男爵'
//   },
//   type: 'SIM',
//   command: [
//     "baron"
//   ]
// }

// export const 红色水晶石: Typings.GameInfo = {
//   translates: {
//     cn: '红色水晶石'
//   },
//   type: 'RPG',
//   command: [
//     "rc"
//   ]
// }

// export const 红色诱惑: Typings.GameInfo = {
//   translates: {
//     cn: '红色诱惑'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 红色越野拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: '红色越野拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "racing"
//   ]
// }

// export const 洪荒格斗: Typings.GameInfo = {
//   translates: {
//     cn: '洪荒格斗'
//   },
//   type: 'ACT',
//   command: [
//     "rage.bat"
//   ]
// }

// export const 洪流剑客: Typings.GameInfo = {
//   translates: {
//     cn: '洪流剑客'
//   },
//   type: 'ACT',
//   command: [
//     "go.bat"
//   ]
// }

// export const 猴岛小英雄: Typings.GameInfo = {
//   translates: {
//     cn: '猴岛小英雄'
//   },
//   type: 'AVG',
//   command: [
//     "monkey.exe"
//   ]
// }

// export const 猴岛小英雄2: Typings.GameInfo = {
//   translates: {
//     cn: '猴岛小英雄2'
//   },
//   type: 'AVG',
//   command: [
//     "monkey2"
//   ]
// }

// export const 呼啸拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: '呼啸拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "start65l.exe"
//   ]
// }

// export const 呼啸赛车: Typings.GameInfo = {
//   translates: {
//     cn: '呼啸赛车'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 呼啸赛车2: Typings.GameInfo = {
//   translates: {
//     cn: '呼啸赛车2'
//   },
//   type: 'SIM',
//   command: [
//     "s2.bat"
//   ]
// }

// export const 狐战机: Typings.GameInfo = {
//   translates: {
//     cn: '狐战机'
//   },
//   type: 'ACT',
//   command: [
//     "fr.bat"
//   ]
// }

// export const 湖人对凯尔特人: Typings.GameInfo = {
//   translates: {
//     cn: '湖人对凯尔特人'
//   },
//   type: 'ACT',
//   command: [
//     "nba.exe"
//   ]
// }

// export const 虎胆妙算: Typings.GameInfo = {
//   translates: {
//     cn: '虎胆妙算'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 琥珀之星: Typings.GameInfo = {
//   translates: {
//     cn: '琥珀之星'
//   },
//   type: 'RPG',
//   command: [
//     "amber.exe"
//   ]
// }

// export const 花木兰: Typings.GameInfo = {
//   translates: {
//     cn: '花木兰'
//   },
//   type: 'SPG',
//   command: [
//     "hml.exe"
//   ]
// }

// export const 华丽人生2: Typings.GameInfo = {
//   translates: {
//     cn: '华丽人生2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 滑溜小赛车: Typings.GameInfo = {
//   translates: {
//     cn: '滑溜小赛车'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 滑流5000: Typings.GameInfo = {
//   translates: {
//     cn: '滑流5000'
//   },
//   type: 'SIM',
//   command: [
//     "slip"
//   ]
// }

// export const 滑轮小子: Typings.GameInfo = {
//   translates: {
//     cn: '滑轮小子'
//   },
//   type: 'ACT',
//   command: [
//     "rolling"
//   ]
// }

// export const 滑轮小子2: Typings.GameInfo = {
//   translates: {
//     cn: '滑轮小子2'
//   },
//   type: 'ACT',
//   command: [
//     "ronny2"
//   ]
// }

// export const 滑雪场: Typings.GameInfo = {
//   translates: {
//     cn: '滑雪场'
//   },
//   type: 'SIM',
//   command: [
//     "SKIPRO.BAT"
//   ]
// }

// export const 欢乐城市: Typings.GameInfo = {
//   translates: {
//     cn: '欢乐城市'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 欢乐接龙: Typings.GameInfo = {
//   translates: {
//     cn: '欢乐接龙'
//   },
//   type: 'PUZ',
//   command: [
//     "poker"
//   ]
// }

// export const 欢乐麻将: Typings.GameInfo = {
//   translates: {
//     cn: '欢乐麻将'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 欢乐天使: Typings.GameInfo = {
//   translates: {
//     cn: '欢乐天使'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 欢乐幸福人: Typings.GameInfo = {
//   translates: {
//     cn: '欢乐幸福人'
//   },
//   type: 'PUZ',
//   command: [
//     "happy.bat"
//   ]
// }

// export const 环世界: Typings.GameInfo = {
//   translates: {
//     cn: '环世界'
//   },
//   type: 'AVG',
//   command: [
//     "ring.exe"
//   ]
// }

// export const 幻界霸者: Typings.GameInfo = {
//   translates: {
//     cn: '幻界霸者'
//   },
//   type: 'RTS',
//   command: [
//     "play.com"
//   ]
// }

// export const 幻世喜谭: Typings.GameInfo = {
//   translates: {
//     cn: '幻世喜谭'
//   },
//   type: 'RPG',
//   command: [
//     "gense.bat"
//   ]
// }

// export const 幻想火焰: Typings.GameInfo = {
//   translates: {
//     cn: '幻想火焰'
//   },
//   type: 'ACT',
//   command: [
//     "ib"
//   ]
// }

// export const 幻想空间: Typings.GameInfo = {
//   translates: {
//     cn: '幻想空间'
//   },
//   type: 'AVG',
//   command: [
//     "LSL1"
//   ]
// }

// export const 幻想空间2: Typings.GameInfo = {
//   translates: {
//     cn: '幻想空间2'
//   },
//   type: 'AVG',
//   command: [
//     "lsl2.bat"
//   ]
// }

// export const 幻想空间3: Typings.GameInfo = {
//   translates: {
//     cn: '幻想空间3'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.com"
//   ]
// }

// export const 幻想空间5: Typings.GameInfo = {
//   translates: {
//     cn: '幻想空间5'
//   },
//   type: 'AVG',
//   command: [
//     "lsl5"
//   ]
// }

// export const 幻想空间6: Typings.GameInfo = {
//   translates: {
//     cn: '幻想空间6'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.exe"
//   ]
// }

// export const 幻想奇侠传: Typings.GameInfo = {
//   translates: {
//     cn: '幻想奇侠传'
//   },
//   type: 'RPG',
//   command: [
//     "jhl"
//   ]
// }

// export const 幻象弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '幻象弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "start.bat"
//   ]
// }

// export const 幻象雷电: Typings.GameInfo = {
//   translates: {
//     cn: '幻象雷电'
//   },
//   type: 'ACT',
//   command: [
//     "DIF2.BAT"
//   ]
// }

// export const 幻影英雄: Typings.GameInfo = {
//   translates: {
//     cn: '幻影英雄'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 荒蛮勇士格斗: Typings.GameInfo = {
//   translates: {
//     cn: '荒蛮勇士格斗'
//   },
//   type: 'ACT',
//   command: [
//     "war.com"
//   ]
// }

// export const 皇冠: Typings.GameInfo = {
//   translates: {
//     cn: '皇冠'
//   },
//   type: 'ACT',
//   command: [
//     "crown.exe"
//   ]
// }

// export const 皇后: Typings.GameInfo = {
//   translates: {
//     cn: '皇后'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 黄飞鸿铁公鸡斗蜈蚣: Typings.GameInfo = {
//   translates: {
//     cn: '黄飞鸿铁公鸡斗蜈蚣'
//   },
//   type: 'ACT',
//   command: [
//     "lasthero.exe"
//   ]
// }

// export const 黄瓜战争三部曲: Typings.GameInfo = {
//   translates: {
//     cn: '黄瓜战争三部曲'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 灰烬帝国: Typings.GameInfo = {
//   translates: {
//     cn: '灰烬帝国'
//   },
//   type: 'SLG',
//   command: [
//     "ashes.bat"
//   ]
// }

// export const 回到大魔域: Typings.GameInfo = {
//   translates: {
//     cn: '回到大魔域'
//   },
//   type: 'ACT',
//   command: [
//     "storyii.exe"
//   ]
// }

// export const 毁灭公爵1: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭公爵1'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 毁灭公爵2: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭公爵2'
//   },
//   type: 'ACT',
//   command: [
//     "NUKEM2.EXE"
//   ]
// }

// export const 毁灭公爵3D: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭公爵3D'
//   },
//   type: 'ACT',
//   command: [
//     "duke3d.exe"
//   ]
// }

// export const 毁灭竞技场: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭竞技场'
//   },
//   type: 'SIM',
//   command: [
//     "dd"
//   ]
// }

// export const 毁灭坦克: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭坦克'
//   },
//   type: 'ACT',
//   command: [
//     "massd.exe"
//   ]
// }

// export const 毁灭战机: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭战机'
//   },
//   type: 'ACT',
//   command: [
//     "ravage"
//   ]
// }

// export const 毁灭战士: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭战士'
//   },
//   type: 'ACT',
//   command: [
//     "doom.exe"
//   ]
// }

// export const 毁灭战士2终结版: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭战士2终结版'
//   },
//   type: 'ACT',
//   command: [
//     "doom2.exe"
//   ]
// }

// export const 毁灭战士横版: Typings.GameInfo = {
//   translates: {
//     cn: '毁灭战士横版'
//   },
//   type: 'ACT',
//   command: [
//     "doom2d"
//   ]
// }

// export const 毁天灭地: Typings.GameInfo = {
//   translates: {
//     cn: '毁天灭地'
//   },
//   type: 'ACT',
//   command: [
//     "targhan"
//   ]
// }

// export const 混沌机甲1: Typings.GameInfo = {
//   translates: {
//     cn: '混沌机甲1'
//   },
//   type: 'ACT',
//   command: [
//     "bedlam"
//   ]
// }

// export const 混沌机甲2: Typings.GameInfo = {
//   translates: {
//     cn: '混沌机甲2'
//   },
//   type: 'ACT',
//   command: [
//     "bedlam.exe"
//   ]
// }

// export const 混沌之地: Typings.GameInfo = {
//   translates: {
//     cn: '混沌之地'
//   },
//   type: 'ACT',
//   command: [
//     "ROCGUS.BAT"
//   ]
// }

// export const 混战之翼: Typings.GameInfo = {
//   translates: {
//     cn: '混战之翼'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 火狐冒险: Typings.GameInfo = {
//   translates: {
//     cn: '火狐冒险'
//   },
//   type: 'ACT',
//   command: [
//     "ffc.com"
//   ]
// }

// export const 火箭车: Typings.GameInfo = {
//   translates: {
//     cn: '火箭车'
//   },
//   type: 'ACT',
//   command: [
//     "road.exe"
//   ]
// }

// export const 火箭手: Typings.GameInfo = {
//   translates: {
//     cn: '火箭手'
//   },
//   type: 'ACT',
//   command: [
//     "rocket"
//   ]
// }

// export const 火线交叉: Typings.GameInfo = {
//   translates: {
//     cn: '火线交叉'
//   },
//   type: 'ACT',
//   command: [
//     "strife1.exe"
//   ]
// }

// export const 火星女神: Typings.GameInfo = {
//   translates: {
//     cn: '火星女神'
//   },
//   type: 'ACT',
//   command: [
//     "goddess"
//   ]
// }

// export const 火星人备忘录: Typings.GameInfo = {
//   translates: {
//     cn: '火星人备忘录'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 火焰之力: Typings.GameInfo = {
//   translates: {
//     cn: '火焰之力'
//   },
//   type: 'ACT',
//   command: [
//     "fp.exe"
//   ]
// }

// export const 火焰之王: Typings.GameInfo = {
//   translates: {
//     cn: '火焰之王'
//   },
//   type: 'ACT',
//   command: [
//     "fk"
//   ]
// }

// export const 机动战士: Typings.GameInfo = {
//   translates: {
//     cn: '机动战士'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 机甲部队: Typings.GameInfo = {
//   translates: {
//     cn: '机甲部队'
//   },
//   type: 'SIM',
//   command: [
//     "ES.EXE"
//   ]
// }

// export const 机甲战神: Typings.GameInfo = {
//   translates: {
//     cn: '机甲战神'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 机甲战士2第31世纪: Typings.GameInfo = {
//   translates: {
//     cn: '机甲战士2第31世纪'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 机甲战士2雇佣兵: Typings.GameInfo = {
//   translates: {
//     cn: '机甲战士2雇佣兵'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 机甲战士2熊魂遗迹: Typings.GameInfo = {
//   translates: {
//     cn: '机甲战士2熊魂遗迹'
//   },
//   type: 'SIM',
//   command: [
//     "gbl.exe"
//   ]
// }

// export const 机器人崛起: Typings.GameInfo = {
//   translates: {
//     cn: '机器人崛起'
//   },
//   type: 'ACT',
//   command: [
//     "LRISE.EXE"
//   ]
// }

// export const 机械帝国: Typings.GameInfo = {
//   translates: {
//     cn: '机械帝国'
//   },
//   type: 'SLG',
//   command: [
//     "cyber"
//   ]
// }

// export const 机械法师: Typings.GameInfo = {
//   translates: {
//     cn: '机械法师'
//   },
//   type: 'ACT',
//   command: [
//     "cm.bat"
//   ]
// }

// export const 机械小蜜蜂: Typings.GameInfo = {
//   translates: {
//     cn: '机械小蜜蜂'
//   },
//   type: 'ACT',
//   command: [
//     "gx1.exe"
//   ]
// }

// export const 机械战队: Typings.GameInfo = {
//   translates: {
//     cn: '机械战队'
//   },
//   type: 'ACT',
//   command: [
//     "dogs"
//   ]
// }

// export const 机战网络: Typings.GameInfo = {
//   translates: {
//     cn: '机战网络'
//   },
//   type: 'SIM',
//   command: [
//     "BD.EXE"
//   ]
// }

// export const 基因锻造: Typings.GameInfo = {
//   translates: {
//     cn: '基因锻造'
//   },
//   type: 'AVG',
//   command: [
//     "bioforge"
//   ]
// }

// export const 基因分裂: Typings.GameInfo = {
//   translates: {
//     cn: '基因分裂'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 基因机器: Typings.GameInfo = {
//   translates: {
//     cn: '基因机器'
//   },
//   type: 'AVG',
//   command: [
//     "gene.bat"
//   ]
// }

// export const 缉毒刑警: Typings.GameInfo = {
//   translates: {
//     cn: '缉毒刑警'
//   },
//   type: 'ACT',
//   command: [
//     "NPOLICE.EXE"
//   ]
// }

// export const 激斗战士: Typings.GameInfo = {
//   translates: {
//     cn: '激斗战士'
//   },
//   type: 'ACT',
//   command: [
//     "fighter.bat"
//   ]
// }

// export const 激光部队: Typings.GameInfo = {
//   translates: {
//     cn: '激光部队'
//   },
//   type: 'SPG',
//   command: [
//     "laser.exe"
//   ]
// }

// export const 激情足球: Typings.GameInfo = {
//   translates: {
//     cn: '激情足球'
//   },
//   type: 'SIM',
//   command: [
//     "GOAL"
//   ]
// }

// export const 激战M星云: Typings.GameInfo = {
//   translates: {
//     cn: '激战M星云'
//   },
//   type: 'SIM',
//   command: [
//     "starcon.bat"
//   ]
// }

// export const 激战M星云2: Typings.GameInfo = {
//   translates: {
//     cn: '激战M星云2'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 吉安娜姐妹: Typings.GameInfo = {
//   translates: {
//     cn: '吉安娜姐妹'
//   },
//   type: 'ACT',
//   command: [
//     "giana32k.exe"
//   ]
// }

// export const 吉尔在丛林: Typings.GameInfo = {
//   translates: {
//     cn: '吉尔在丛林'
//   },
//   type: 'ACT',
//   command: [
//     "jill.exe"
//   ]
// }

// export const 吉尔在丛林2地下冒险: Typings.GameInfo = {
//   translates: {
//     cn: '吉尔在丛林2地下冒险'
//   },
//   type: 'ACT',
//   command: [
//     "jill2.exe"
//   ]
// }

// export const 吉尔在丛林3合1: Typings.GameInfo = {
//   translates: {
//     cn: '吉尔在丛林3合1'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 吉尔在丛林3拯救王子: Typings.GameInfo = {
//   translates: {
//     cn: '吉尔在丛林3拯救王子'
//   },
//   type: 'ACT',
//   command: [
//     "jill3.exe"
//   ]
// }

// export const 极超豪拳: Typings.GameInfo = {
//   translates: {
//     cn: '极超豪拳'
//   },
//   type: 'ACT',
//   command: [
//     "typhoon"
//   ]
// }

// export const 极品飞车: Typings.GameInfo = {
//   translates: {
//     cn: '极品飞车'
//   },
//   type: 'SIM',
//   command: [
//     "runsb.bat"
//   ]
// }

// export const 极限弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '极限弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "extreme"
//   ]
// }

// export const 极限突袭: Typings.GameInfo = {
//   translates: {
//     cn: '极限突袭'
//   },
//   type: 'SIM',
//   command: [
//     "start.bat"
//   ]
// }

// export const 急速狂飙: Typings.GameInfo = {
//   translates: {
//     cn: '急速狂飙'
//   },
//   type: 'SIM',
//   command: [
//     "speed"
//   ]
// }

// export const 急速挑战: Typings.GameInfo = {
//   translates: {
//     cn: '急速挑战'
//   },
//   type: 'SIM',
//   command: [
//     "sr.bat"
//   ]
// }

// export const 记忆测验: Typings.GameInfo = {
//   translates: {
//     cn: '记忆测验'
//   },
//   type: 'PUZ',
//   command: [
//     "FLASHER2"
//   ]
// }

// export const 甲A风云: Typings.GameInfo = {
//   translates: {
//     cn: '甲A风云'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 尖刀部队: Typings.GameInfo = {
//   translates: {
//     cn: '尖刀部队'
//   },
//   type: 'SIM',
//   command: [
//     "sabre"
//   ]
// }

// export const 歼敌行动: Typings.GameInfo = {
//   translates: {
//     cn: '歼敌行动'
//   },
//   type: 'ACT',
//   command: [
//     "BC.BAT"
//   ]
// }

// export const 剪秋罗: Typings.GameInfo = {
//   translates: {
//     cn: '剪秋罗'
//   },
//   type: 'ACT',
//   command: [
//     "sb.bat"
//   ]
// }

// export const 建筑大师: Typings.GameInfo = {
//   translates: {
//     cn: '建筑大师'
//   },
//   type: 'RTS',
//   command: [
//     "game.exe"
//   ]
// }

// export const 剑芒罗曼史: Typings.GameInfo = {
//   translates: {
//     cn: '剑芒罗曼史'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 剑侠情缘: Typings.GameInfo = {
//   translates: {
//     cn: '剑侠情缘'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 舰队守护神: Typings.GameInfo = {
//   translates: {
//     cn: '舰队守护神'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 鉴赏家: Typings.GameInfo = {
//   translates: {
//     cn: '鉴赏家'
//   },
//   type: 'ACT',
//   command: [
//     "virtuoso.exe"
//   ]
// }

// export const 江湖任我行: Typings.GameInfo = {
//   translates: {
//     cn: '江湖任我行'
//   },
//   type: 'PUZ',
//   command: [
//     "stalker.exe"
//   ]
// }

// export const 江湖外传: Typings.GameInfo = {
//   translates: {
//     cn: '江湖外传'
//   },
//   type: 'RPG',
//   command: [
//     "GAME.BAT"
//   ]
// }

// export const 降魔勇士: Typings.GameInfo = {
//   translates: {
//     cn: '降魔勇士'
//   },
//   type: 'RPG',
//   command: [
//     "START"
//   ]
// }

// export const 交错的命运: Typings.GameInfo = {
//   translates: {
//     cn: '交错的命运'
//   },
//   type: 'AVG',
//   command: [
//     "ad.bat"
//   ]
// }

// export const 交通局2192: Typings.GameInfo = {
//   translates: {
//     cn: '交通局2192'
//   },
//   type: 'ACT',
//   command: [
//     "play"
//   ]
// }

// export const 娇的客人: Typings.GameInfo = {
//   translates: {
//     cn: '娇的客人'
//   },
//   type: 'HGA',
//   command: [
//     "jo.bat"
//   ]
// }

// export const 角斗士: Typings.GameInfo = {
//   translates: {
//     cn: '角斗士'
//   },
//   type: 'ACT',
//   command: [
//     "glad.exe"
//   ]
// }

// export const 教父: Typings.GameInfo = {
//   translates: {
//     cn: '教父'
//   },
//   type: 'AVG',
//   command: [
//     "GOD.EXE"
//   ]
// }

// export const 接龙777: Typings.GameInfo = {
//   translates: {
//     cn: '接龙777'
//   },
//   type: 'PUZ',
//   command: [
//     "77"
//   ]
// }

// export const 街机保龄: Typings.GameInfo = {
//   translates: {
//     cn: '街机保龄'
//   },
//   type: 'SIM',
//   command: [
//     "kingpin"
//   ]
// }

// export const 街机桌球: Typings.GameInfo = {
//   translates: {
//     cn: '街机桌球'
//   },
//   type: 'PUZ',
//   command: [
//     "pool.exe"
//   ]
// }

// export const 街球大灌篮: Typings.GameInfo = {
//   translates: {
//     cn: '街球大灌篮'
//   },
//   type: 'SIM',
//   command: [
//     "jammit"
//   ]
// }

// export const 街头霸王1: Typings.GameInfo = {
//   translates: {
//     cn: '街头霸王1'
//   },
//   type: 'ACT',
//   command: [
//     "sf"
//   ]
// }

// export const 街头地下格斗: Typings.GameInfo = {
//   translates: {
//     cn: '街头地下格斗'
//   },
//   type: 'ACT',
//   command: [
//     "PIT.COM"
//   ]
// }

// export const 解救华盛顿: Typings.GameInfo = {
//   translates: {
//     cn: '解救华盛顿'
//   },
//   type: 'AVG',
//   command: [
//     "freedc.exe"
//   ]
// }

// export const 金瓶梅之偷情宝鉴: Typings.GameInfo = {
//   translates: {
//     cn: '金瓶梅之偷情宝鉴'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 金属变异人: Typings.GameInfo = {
//   translates: {
//     cn: '金属变异人'
//   },
//   type: 'ACT',
//   command: [
//     "mm"
//   ]
// }

// export const 金庸快打: Typings.GameInfo = {
//   translates: {
//     cn: '金庸快打'
//   },
//   type: 'ACT',
//   command: [
//     "fighter"
//   ]
// }

// export const 紧急关头: Typings.GameInfo = {
//   translates: {
//     cn: '紧急关头'
//   },
//   type: 'ACT',
//   command: [
//     "extremis"
//   ]
// }

// export const 进化鱼: Typings.GameInfo = {
//   translates: {
//     cn: '进化鱼'
//   },
//   type: 'PUZ',
//   command: [
//     "elfish"
//   ]
// }

// export const 劲力赛车: Typings.GameInfo = {
//   translates: {
//     cn: '劲力赛车'
//   },
//   type: 'SIM',
//   command: [
//     "PD.BAT"
//   ]
// }

// export const 禁断之血族: Typings.GameInfo = {
//   translates: {
//     cn: '禁断之血族'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 禁忌: Typings.GameInfo = {
//   translates: {
//     cn: '禁忌'
//   },
//   type: 'HGA',
//   command: [
//     "play.com"
//   ]
// }

// export const 禁烟风云录: Typings.GameInfo = {
//   translates: {
//     cn: '禁烟风云录'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 精灵幻界: Typings.GameInfo = {
//   translates: {
//     cn: '精灵幻界'
//   },
//   type: 'SPG',
//   command: [
//     "toco"
//   ]
// }

// export const 精灵物语: Typings.GameInfo = {
//   translates: {
//     cn: '精灵物语'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 警察故事: Typings.GameInfo = {
//   translates: {
//     cn: '警察故事'
//   },
//   type: 'AVG',
//   command: [
//     "start"
//   ]
// }

// export const 警察故事1重制版: Typings.GameInfo = {
//   translates: {
//     cn: '警察故事1重制版'
//   },
//   type: 'AVG',
//   command: [
//     "pq.bat"
//   ]
// }

// export const 警察故事2: Typings.GameInfo = {
//   translates: {
//     cn: '警察故事2'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.exe"
//   ]
// }

// export const 警察故事3: Typings.GameInfo = {
//   translates: {
//     cn: '警察故事3'
//   },
//   type: 'AVG',
//   command: [
//     "start"
//   ]
// }

// export const 旧金山警车大赛: Typings.GameInfo = {
//   translates: {
//     cn: '旧金山警车大赛'
//   },
//   type: 'SIM',
//   command: [
//     "cisco.exe"
//   ]
// }

// export const 巨鲸宇宙号: Typings.GameInfo = {
//   translates: {
//     cn: '巨鲸宇宙号'
//   },
//   type: 'RPG',
//   command: [
//     "wv.exe"
//   ]
// }

// export const 巨窟文字冒险: Typings.GameInfo = {
//   translates: {
//     cn: '巨窟文字冒险'
//   },
//   type: 'AVG',
//   command: [
//     "hugecave.bat"
//   ]
// }

// export const 巨兽侵袭: Typings.GameInfo = {
//   translates: {
//     cn: '巨兽侵袭'
//   },
//   type: 'ACT',
//   command: [
//     "aargh"
//   ]
// }

// export const 飓风机甲: Typings.GameInfo = {
//   translates: {
//     cn: '飓风机甲'
//   },
//   type: 'ACT',
//   command: [
//     "cyclones.exe"
//   ]
// }

// export const 决战俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '决战俄罗斯'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 决战富士山: Typings.GameInfo = {
//   translates: {
//     cn: '决战富士山'
//   },
//   type: 'ACT',
//   command: [
//     "karateka.exe"
//   ]
// }

// export const 决战皇陵: Typings.GameInfo = {
//   translates: {
//     cn: '决战皇陵'
//   },
//   type: 'AVG',
//   command: [
//     "start"
//   ]
// }

// export const 绝代双骄: Typings.GameInfo = {
//   translates: {
//     cn: '绝代双骄'
//   },
//   type: 'RPG',
//   command: [
//     "playx.bat"
//   ]
// }

// export const 绝地风暴: Typings.GameInfo = {
//   translates: {
//     cn: '绝地风暴'
//   },
//   type: 'RTS',
//   command: [
//     "kknd.exe"
//   ]
// }

// export const 绝地-众神的诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '绝地-众神的诅咒'
//   },
//   type: 'AVG',
//   command: [
//     "avg.exe"
//   ]
// }

// export const 绝对零度: Typings.GameInfo = {
//   translates: {
//     cn: '绝对零度'
//   },
//   type: 'SIM',
//   command: [
//     "az"
//   ]
// }

// export const 绝音魔琴: Typings.GameInfo = {
//   translates: {
//     cn: '绝音魔琴'
//   },
//   type: 'RPG',
//   command: [
//     "hope"
//   ]
// }

// export const 掘金者: Typings.GameInfo = {
//   translates: {
//     cn: '掘金者'
//   },
//   type: 'PUZ',
//   command: [
//     "diggers.exe"
//   ]
// }

// export const 掘金者2: Typings.GameInfo = {
//   translates: {
//     cn: '掘金者2'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 爵士兔: Typings.GameInfo = {
//   translates: {
//     cn: '爵士兔'
//   },
//   type: 'ACT',
//   command: [
//     "jazz.exe"
//   ]
// }

// export const 爵士兔：光碟增强版: Typings.GameInfo = {
//   translates: {
//     cn: '爵士兔:光碟增强版'
//   },
//   type: 'ACT',
//   command: [
//     "JAZZ.EXE"
//   ]
// }

// export const 爵士兔：假日兔94: Typings.GameInfo = {
//   translates: {
//     cn: '爵士兔:假日兔94'
//   },
//   type: 'ACT',
//   command: [
//     "jazz"
//   ]
// }

// export const 爵士兔：假日兔95: Typings.GameInfo = {
//   translates: {
//     cn: '爵士兔:假日兔95'
//   },
//   type: 'ACT',
//   command: [
//     "JAZZ.EXE"
//   ]
// }

// export const 爵士兔完整版: Typings.GameInfo = {
//   translates: {
//     cn: '爵士兔完整版'
//   },
//   type: 'ACT',
//   command: [
//     "Jazz.exe"
//   ]
// }

// export const 军备竞赛: Typings.GameInfo = {
//   translates: {
//     cn: '军备竞赛'
//   },
//   type: 'RTS',
//   command: [
//     "ARSENAL.EXE"
//   ]
// }

// export const 卡拉汉时空沙龙: Typings.GameInfo = {
//   translates: {
//     cn: '卡拉汉时空沙龙'
//   },
//   type: 'AVG',
//   command: [
//     "ccs"
//   ]
// }

// export const 卡门美国时空之旅: Typings.GameInfo = {
//   translates: {
//     cn: '卡门美国时空之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "runme.exe"
//   ]
// }

// export const 卡门美国之旅: Typings.GameInfo = {
//   translates: {
//     cn: '卡门美国之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "carmen.exe"
//   ]
// }

// export const 卡门时空之旅: Typings.GameInfo = {
//   translates: {
//     cn: '卡门时空之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "carmen.exe"
//   ]
// }

// export const 卡门世界之旅: Typings.GameInfo = {
//   translates: {
//     cn: '卡门世界之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "carmen.exe"
//   ]
// }

// export const 卡门太空之旅: Typings.GameInfo = {
//   translates: {
//     cn: '卡门太空之旅'
//   },
//   type: 'PUZ',
//   command: [
//     "carmen.exe"
//   ]
// }

// export const 卡耐鸡人生指南: Typings.GameInfo = {
//   translates: {
//     cn: '卡耐鸡人生指南'
//   },
//   type: 'SIM',
//   command: [
//     "kng.exe"
//   ]
// }

// export const 卡诺夫: Typings.GameInfo = {
//   translates: {
//     cn: '卡诺夫'
//   },
//   type: 'ACT',
//   command: [
//     "karnov.exe"
//   ]
// }

// export const 卡通快打: Typings.GameInfo = {
//   translates: {
//     cn: '卡通快打'
//   },
//   type: 'ACT',
//   command: [
//     "pee.exe 2"
//   ]
// }

// export const 卡通快打SP: Typings.GameInfo = {
//   translates: {
//     cn: '卡通快打SP'
//   },
//   type: 'ACT',
//   command: [
//     "pee.bat"
//   ]
// }

// export const 卡通赛车: Typings.GameInfo = {
//   translates: {
//     cn: '卡通赛车'
//   },
//   type: 'SIM',
//   command: [
//     "ww.exe"
//   ]
// }

// export const 开球96: Typings.GameInfo = {
//   translates: {
//     cn: '开球96'
//   },
//   type: 'SIM',
//   command: [
//     "ko96"
//   ]
// }

// export const 开球97: Typings.GameInfo = {
//   translates: {
//     cn: '开球97'
//   },
//   type: 'SIM',
//   command: [
//     "ko97"
//   ]
// }

// export const 开膛手杰克: Typings.GameInfo = {
//   translates: {
//     cn: '开膛手杰克'
//   },
//   type: 'AVG',
//   command: [
//     "jack.bat"
//   ]
// }

// export const 凯兰蒂亚传奇3: Typings.GameInfo = {
//   translates: {
//     cn: '凯兰蒂亚传奇3'
//   },
//   type: 'AVG',
//   command: [
//     "runmain.exe"
//   ]
// }

// export const 凯兰蒂亚传奇: Typings.GameInfo = {
//   translates: {
//     cn: '凯兰蒂亚传奇'
//   },
//   type: 'AVG',
//   command: [
//     "main"
//   ]
// }

// export const 凯兰蒂亚传奇2: Typings.GameInfo = {
//   translates: {
//     cn: '凯兰蒂亚传奇2'
//   },
//   type: 'AVG',
//   command: [
//     "main.exe"
//   ]
// }

// export const 凯撒大帝: Typings.GameInfo = {
//   translates: {
//     cn: '凯撒大帝'
//   },
//   type: 'SLG',
//   command: [
//     "centurio.exe"
//   ]
// }

// export const 凯撒大帝2: Typings.GameInfo = {
//   translates: {
//     cn: '凯撒大帝2'
//   },
//   type: 'SLG',
//   command: [
//     "C2.bat"
//   ]
// }

// export const 凯撒立志传: Typings.GameInfo = {
//   translates: {
//     cn: '凯撒立志传'
//   },
//   type: 'SLG',
//   command: [
//     "kaiser"
//   ]
// }

// export const 科罗拉多: Typings.GameInfo = {
//   translates: {
//     cn: '科罗拉多'
//   },
//   type: 'ACT',
//   command: [
//     "colorado"
//   ]
// }

// export const 科曼奇2: Typings.GameInfo = {
//   translates: {
//     cn: '科曼奇2'
//   },
//   type: 'SIM',
//   command: [
//     "c.bat"
//   ]
// }

// export const 科学怪人: Typings.GameInfo = {
//   translates: {
//     cn: '科学怪人'
//   },
//   type: 'ACT',
//   command: [
//     "fr.exe"
//   ]
// }

// export const 科学小飞侠: Typings.GameInfo = {
//   translates: {
//     cn: '科学小飞侠'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 克莱德复仇: Typings.GameInfo = {
//   translates: {
//     cn: '克莱德复仇'
//   },
//   type: 'PUZ',
//   command: [
//     "revenge.exe"
//   ]
// }

// export const 克莱德冒险: Typings.GameInfo = {
//   translates: {
//     cn: '克莱德冒险'
//   },
//   type: 'PUZ',
//   command: [
//     "clyde1.exe"
//   ]
// }

// export const 克莱恩的黑暗女皇: Typings.GameInfo = {
//   translates: {
//     cn: '克莱恩的黑暗女皇'
//   },
//   type: 'RPG',
//   command: [
//     "dqk.exe"
//   ]
// }

// export const 克里姆林宫危机: Typings.GameInfo = {
//   translates: {
//     cn: '克里姆林宫危机'
//   },
//   type: 'SLG',
//   command: [
//     "CRISIS.EXE"
//   ]
// }

// export const 克苏鲁传说魔影哈雷: Typings.GameInfo = {
//   translates: {
//     cn: '克苏鲁传说魔影哈雷'
//   },
//   type: 'AVG',
//   command: [
//     "tatou.bat"
//   ]
// }

// export const 肯的迷宫: Typings.GameInfo = {
//   translates: {
//     cn: '肯的迷宫'
//   },
//   type: 'ACT',
//   command: [
//     "ken.exe"
//   ]
// }

// export const 空降游骑兵: Typings.GameInfo = {
//   translates: {
//     cn: '空降游骑兵'
//   },
//   type: 'ACT',
//   command: [
//     "ar.exe"
//   ]
// }

// export const 空军指挥官: Typings.GameInfo = {
//   translates: {
//     cn: '空军指挥官'
//   },
//   type: 'SLG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 空战黑骑士: Typings.GameInfo = {
//   translates: {
//     cn: '空战黑骑士'
//   },
//   type: 'SIM',
//   command: [
//     "bk.exe"
//   ]
// }

// export const 空战艺术: Typings.GameInfo = {
//   translates: {
//     cn: '空战艺术'
//   },
//   type: 'RTS',
//   command: [
//     "skies.exe"
//   ]
// }

// export const 空中决斗: Typings.GameInfo = {
//   translates: {
//     cn: '空中决斗'
//   },
//   type: 'SIM',
//   command: [
//     "fd.exe"
//   ]
// }

// export const 空中突击18: Typings.GameInfo = {
//   translates: {
//     cn: '空中突击18'
//   },
//   type: 'ACT',
//   command: [
//     "air18.exe"
//   ]
// }

// export const 空中巡逻: Typings.GameInfo = {
//   translates: {
//     cn: '空中巡逻'
//   },
//   type: 'SIM',
//   command: [
//     "CAP"
//   ]
// }

// export const 恐龙公园大亨: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙公园大亨'
//   },
//   type: 'SIM',
//   command: [
//     "dinopark"
//   ]
// }

// export const 恐龙归来: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙归来'
//   },
//   type: 'ACT',
//   command: [
//     "WRBK.EXE"
//   ]
// }

// export const 恐龙快打: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙快打'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 恐龙棋: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙棋'
//   },
//   type: 'PUZ',
//   command: [
//     "dino"
//   ]
// }

// export const 恐龙世纪: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙世纪'
//   },
//   type: 'SPG',
//   command: [
//     "play.exe"
//   ]
// }

// export const 恐龙益智问答: Typings.GameInfo = {
//   translates: {
//     cn: '恐龙益智问答'
//   },
//   type: 'PUZ',
//   command: [
//     "dino3d.bat"
//   ]
// }

// export const 苦难剧场: Typings.GameInfo = {
//   translates: {
//     cn: '苦难剧场'
//   },
//   type: 'ACT',
//   command: [
//     "PAIN.EXE"
//   ]
// }

// export const 跨越行星: Typings.GameInfo = {
//   translates: {
//     cn: '跨越行星'
//   },
//   type: 'SIM',
//   command: [
//     "star.bat"
//   ]
// }

// export const 快打至尊: Typings.GameInfo = {
//   translates: {
//     cn: '快打至尊'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 狂暴异形: Typings.GameInfo = {
//   translates: {
//     cn: '狂暴异形'
//   },
//   type: 'ACT',
//   command: [
//     "rampage.exe"
//   ]
// }

// export const 狂龙传: Typings.GameInfo = {
//   translates: {
//     cn: '狂龙传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 狂热车赛: Typings.GameInfo = {
//   translates: {
//     cn: '狂热车赛'
//   },
//   type: 'SIM',
//   command: [
//     "start"
//   ]
// }

// export const 狂热弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '狂热弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 狂野悖论: Typings.GameInfo = {
//   translates: {
//     cn: '狂野悖论'
//   },
//   type: 'HGA',
//   command: [
//     "start.bat"
//   ]
// }

// export const 狂野西部: Typings.GameInfo = {
//   translates: {
//     cn: '狂野西部'
//   },
//   type: 'SIM',
//   command: [
//     "www.bat"
//   ]
// }

// export const 蜡像馆之谜: Typings.GameInfo = {
//   translates: {
//     cn: '蜡像馆之谜'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 蓝冰: Typings.GameInfo = {
//   translates: {
//     cn: '蓝冰'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 蓝精灵: Typings.GameInfo = {
//   translates: {
//     cn: '蓝精灵'
//   },
//   type: 'ACT',
//   command: [
//     "smurfs"
//   ]
// }

// export const 蓝莫吉尼巡回赛: Typings.GameInfo = {
//   translates: {
//     cn: '蓝莫吉尼巡回赛'
//   },
//   type: 'SIM',
//   command: [
//     "drive.bat"
//   ]
// }

// export const 蓝色怪魔: Typings.GameInfo = {
//   translates: {
//     cn: '蓝色怪魔'
//   },
//   type: 'ACT',
//   command: [
//     "demon.exe"
//   ]
// }

// export const 蓝色行动: Typings.GameInfo = {
//   translates: {
//     cn: '蓝色行动'
//   },
//   type: 'SIM',
//   command: [
//     "blue"
//   ]
// }

// export const 蓝色马克思: Typings.GameInfo = {
//   translates: {
//     cn: '蓝色马克思'
//   },
//   type: 'SIM',
//   command: [
//     "bluemax"
//   ]
// }

// export const 蓝色石榴石: Typings.GameInfo = {
//   translates: {
//     cn: '蓝色石榴石'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 蓝色天使: Typings.GameInfo = {
//   translates: {
//     cn: '蓝色天使'
//   },
//   type: 'PUZ',
//   command: [
//     "BA69"
//   ]
// }

// export const 篮球经理: Typings.GameInfo = {
//   translates: {
//     cn: '篮球经理'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 懒虫大战: Typings.GameInfo = {
//   translates: {
//     cn: '懒虫大战'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 狼祸: Typings.GameInfo = {
//   translates: {
//     cn: '狼祸'
//   },
//   type: 'AVG',
//   command: [
//     "wlfsbane"
//   ]
// }

// export const 雷电: Typings.GameInfo = {
//   translates: {
//     cn: '雷电'
//   },
//   type: 'ACT',
//   command: [
//     "raiden"
//   ]
// }

// export const 雷电兔: Typings.GameInfo = {
//   translates: {
//     cn: '雷电兔'
//   },
//   type: 'ACT',
//   command: [
//     "quik"
//   ]
// }

// export const 雷击战机: Typings.GameInfo = {
//   translates: {
//     cn: '雷击战机'
//   },
//   type: 'SIM',
//   command: [
//     "ts.exe"
//   ]
// }

// export const 雷击战机2: Typings.GameInfo = {
//   translates: {
//     cn: '雷击战机2'
//   },
//   type: 'SIM',
//   command: [
//     "TH2.BAT"
//   ]
// }

// export const 雷景：艾登世界: Typings.GameInfo = {
//   translates: {
//     cn: '雷景:艾登世界'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 雷克斯: Typings.GameInfo = {
//   translates: {
//     cn: '雷克斯'
//   },
//   type: 'HGA',
//   command: [
//     "rex"
//   ]
// }

// export const 雷米兔传奇: Typings.GameInfo = {
//   translates: {
//     cn: '雷米兔传奇'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 雷鸟: Typings.GameInfo = {
//   translates: {
//     cn: '雷鸟'
//   },
//   type: 'SIM',
//   command: [
//     "game"
//   ]
// }

// export const 雷诺尼都纪事(迷城的国度): Typings.GameInfo = {
//   translates: {
//     cn: '雷诺尼都纪事(迷城的国度)'
//   },
//   type: 'RPG',
//   command: [
//     "xanadu.bat"
//   ]
// }

// export const 雷神: Typings.GameInfo = {
//   translates: {
//     cn: '雷神'
//   },
//   type: 'PUZ',
//   command: [
//     "GOT.EXE"
//   ]
// }

// export const 雷神之锤: Typings.GameInfo = {
//   translates: {
//     cn: '雷神之锤'
//   },
//   type: 'ACT',
//   command: [
//     "quake.exe"
//   ]
// }

// export const 镭射坦克: Typings.GameInfo = {
//   translates: {
//     cn: '镭射坦克'
//   },
//   type: 'ACT',
//   command: [
//     "tank1.exe"
//   ]
// }

// export const 擂台美少女／天使摔角: Typings.GameInfo = {
//   translates: {
//     cn: '擂台美少女/天使摔角'
//   },
//   type: 'SIM',
//   command: [
//     "play"
//   ]
// }

// export const 擂台美少女3／天使摔角3: Typings.GameInfo = {
//   translates: {
//     cn: '擂台美少女3/天使摔角3'
//   },
//   type: 'SIM',
//   command: [
//     "tt.com"
//   ]
// }

// export const 黎明特警: Typings.GameInfo = {
//   translates: {
//     cn: '黎明特警'
//   },
//   type: 'SIM',
//   command: [
//     "patrol"
//   ]
// }

// export const 黎明铁砧: Typings.GameInfo = {
//   translates: {
//     cn: '黎明铁砧'
//   },
//   type: 'RPG',
//   command: [
//     "anvil"
//   ]
// }

// export const 礼物: Typings.GameInfo = {
//   translates: {
//     cn: '礼物'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 里世界／狼女: Typings.GameInfo = {
//   translates: {
//     cn: '里世界/狼女'
//   },
//   type: 'ACT',
//   command: [
//     "iw.exe"
//   ]
// }

// export const 力之奴仆: Typings.GameInfo = {
//   translates: {
//     cn: '力之奴仆'
//   },
//   type: 'ACT',
//   command: [
//     "ps"
//   ]
// }

// export const 历史大战役: Typings.GameInfo = {
//   translates: {
//     cn: '历史大战役'
//   },
//   type: 'SLG',
//   command: [
//     "hl.exe"
//   ]
// }

// export const 立体俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '立体俄罗斯'
//   },
//   type: 'PUZ',
//   command: [
//     "3dpit.exe"
//   ]
// }

// export const 立体狂飚: Typings.GameInfo = {
//   translates: {
//     cn: '立体狂飚'
//   },
//   type: 'SIM',
//   command: [
//     "hioctane.bat"
//   ]
// }

// export const 丽兽: Typings.GameInfo = {
//   translates: {
//     cn: '丽兽'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 莲花赛车无限: Typings.GameInfo = {
//   translates: {
//     cn: '莲花赛车无限'
//   },
//   type: 'SIM',
//   command: [
//     "lotus.exe"
//   ]
// }

// export const 脸谱方块: Typings.GameInfo = {
//   translates: {
//     cn: '脸谱方块'
//   },
//   type: 'PUZ',
//   command: [
//     "faces"
//   ]
// }

// export const 炼狱飞行: Typings.GameInfo = {
//   translates: {
//     cn: '炼狱飞行'
//   },
//   type: 'SIM',
//   command: [
//     "inferno.bat"
//   ]
// }

// export const 恋爱试炼场: Typings.GameInfo = {
//   translates: {
//     cn: '恋爱试炼场'
//   },
//   type: 'AVG',
//   command: [
//     "play"
//   ]
// }

// export const 量子博士之岛: Typings.GameInfo = {
//   translates: {
//     cn: '量子博士之岛'
//   },
//   type: 'AVG',
//   command: [
//     "qisland"
//   ]
// }

// export const 聊斋志异: Typings.GameInfo = {
//   translates: {
//     cn: '聊斋志异'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 聊斋志异幽谷传奇: Typings.GameInfo = {
//   translates: {
//     cn: '聊斋志异幽谷传奇'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 烈焰钢狼传: Typings.GameInfo = {
//   translates: {
//     cn: '烈焰钢狼传'
//   },
//   type: 'SPG',
//   command: [
//     "testimg"
//   ]
// }

// export const 猎户座阴谋: Typings.GameInfo = {
//   translates: {
//     cn: '猎户座阴谋'
//   },
//   type: 'AVG',
//   command: [
//     "orion.bat"
//   ]
// }

// export const 猎杀红色十月: Typings.GameInfo = {
//   translates: {
//     cn: '猎杀红色十月'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 猎杀潜航: Typings.GameInfo = {
//   translates: {
//     cn: '猎杀潜航'
//   },
//   type: 'SIM',
//   command: [
//     "sh"
//   ]
// }

// export const 灵剑传奇: Typings.GameInfo = {
//   translates: {
//     cn: '灵剑传奇'
//   },
//   type: 'RPG',
//   command: [
//     "sword"
//   ]
// }

// export const 另一个世界: Typings.GameInfo = {
//   translates: {
//     cn: '另一个世界'
//   },
//   type: 'AVG',
//   command: [
//     "WORLD.exe"
//   ]
// }

// export const 刘备传: Typings.GameInfo = {
//   translates: {
//     cn: '刘备传'
//   },
//   type: 'SLG',
//   command: [
//     "liumain.exe"
//   ]
// }

// export const 刘伯温传奇: Typings.GameInfo = {
//   translates: {
//     cn: '刘伯温传奇'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 龙霸三合会: Typings.GameInfo = {
//   translates: {
//     cn: '龙霸三合会'
//   },
//   type: 'ACT',
//   command: [
//     "rott.exe"
//   ]
// }

// export const 龙霸三合会资料片: Typings.GameInfo = {
//   translates: {
//     cn: '龙霸三合会资料片'
//   },
//   type: 'ACT',
//   command: [
//     "setup.exe"
//   ]
// }

// export const 龙霸天下: Typings.GameInfo = {
//   translates: {
//     cn: '龙霸天下'
//   },
//   type: 'SLG',
//   command: [
//     "boot"
//   ]
// }

// export const 龙骑士3: Typings.GameInfo = {
//   translates: {
//     cn: '龙骑士3'
//   },
//   type: 'HGA',
//   command: [
//     "kx.bat"
//   ]
// }

// export const 龙骑士4: Typings.GameInfo = {
//   translates: {
//     cn: '龙骑士4'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 龙腾三国: Typings.GameInfo = {
//   translates: {
//     cn: '龙腾三国'
//   },
//   type: 'SPG',
//   command: [
//     "sanmain"
//   ]
// }

// export const 龙穴历险记: Typings.GameInfo = {
//   translates: {
//     cn: '龙穴历险记'
//   },
//   type: 'AVG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 龙穴历险记2: Typings.GameInfo = {
//   translates: {
//     cn: '龙穴历险记2'
//   },
//   type: 'AVG',
//   command: [
//     "timewarp.exe"
//   ]
// }

// export const 龙穴历险记3: Typings.GameInfo = {
//   translates: {
//     cn: '龙穴历险记3'
//   },
//   type: 'AVG',
//   command: [
//     "dl3"
//   ]
// }

// export const 龙战记X: Typings.GameInfo = {
//   translates: {
//     cn: '龙战记X'
//   },
//   type: 'ACT',
//   command: [
//     "xargon.bat"
//   ]
// }

// export const 龙之传奇: Typings.GameInfo = {
//   translates: {
//     cn: '龙之传奇'
//   },
//   type: 'ACT',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 龙之道: Typings.GameInfo = {
//   translates: {
//     cn: '龙之道'
//   },
//   type: 'RPG',
//   command: [
//     "drakkhen.com"
//   ]
// }

// export const 龙之崛起: Typings.GameInfo = {
//   translates: {
//     cn: '龙之崛起'
//   },
//   type: 'AVG',
//   command: [
//     "dragon"
//   ]
// }

// export const 龙之王国: Typings.GameInfo = {
//   translates: {
//     cn: '龙之王国'
//   },
//   type: 'AVG',
//   command: [
//     "dragon.bat"
//   ]
// }

// export const 卢夫的秘密武器: Typings.GameInfo = {
//   translates: {
//     cn: '卢夫的秘密武器'
//   },
//   type: 'SIM',
//   command: [
//     "sw.bat"
//   ]
// }

// export const 鹿鼎记: Typings.GameInfo = {
//   translates: {
//     cn: '鹿鼎记'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 乱世伏魔录: Typings.GameInfo = {
//   translates: {
//     cn: '乱世伏魔录'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 罗宾汉大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '罗宾汉大冒险'
//   },
//   type: 'AVG',
//   command: [
//     "robin"
//   ]
// }

// export const 罗恩骑士: Typings.GameInfo = {
//   translates: {
//     cn: '罗恩骑士'
//   },
//   type: 'SLG',
//   command: [
//     "rohan"
//   ]
// }

// export const 罗马权利之路: Typings.GameInfo = {
//   translates: {
//     cn: '罗马权利之路'
//   },
//   type: 'SLG',
//   command: [
//     "ROME.BAT"
//   ]
// }

// export const 罗马之墙+编辑器: Typings.GameInfo = {
//   translates: {
//     cn: '罗马之墙+编辑器'
//   },
//   type: 'SIM',
//   command: [
//     "walls.bat"
//   ]
// }

// export const 罗斯玛丽的占卜屋: Typings.GameInfo = {
//   translates: {
//     cn: '罗斯玛丽的占卜屋'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 罗特斯机械人: Typings.GameInfo = {
//   translates: {
//     cn: '罗特斯机械人'
//   },
//   type: 'ACT',
//   command: [
//     "rotox"
//   ]
// }

// export const 罗特战机: Typings.GameInfo = {
//   translates: {
//     cn: '罗特战机'
//   },
//   type: 'ACT',
//   command: [
//     "rotor.bat"
//   ]
// }

// export const 洛克人3: Typings.GameInfo = {
//   translates: {
//     cn: '洛克人3'
//   },
//   type: 'ACT',
//   command: [
//     "mm"
//   ]
// }

// export const 洛克人X: Typings.GameInfo = {
//   translates: {
//     cn: '洛克人X'
//   },
//   type: 'ACT',
//   command: [
//     "MMX.BAT"
//   ]
// }

// export const 麻将大师: Typings.GameInfo = {
//   translates: {
//     cn: '麻将大师'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 麻将情趣屋: Typings.GameInfo = {
//   translates: {
//     cn: '麻将情趣屋'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 麻将情趣屋2: Typings.GameInfo = {
//   translates: {
//     cn: '麻将情趣屋2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 麻将争霸: Typings.GameInfo = {
//   translates: {
//     cn: '麻将争霸'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 麻雀幻想曲2: Typings.GameInfo = {
//   translates: {
//     cn: '麻雀幻想曲2'
//   },
//   type: 'HGA',
//   command: [
//     "main"
//   ]
// }

// export const 麻雀幻想曲3: Typings.GameInfo = {
//   translates: {
//     cn: '麻雀幻想曲3'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 马玻的料理: Typings.GameInfo = {
//   translates: {
//     cn: '马玻的料理'
//   },
//   type: 'HGA',
//   command: [
//     "start.bat"
//   ]
// }

// export const 马场大亨: Typings.GameInfo = {
//   translates: {
//     cn: '马场大亨'
//   },
//   type: 'SIM',
//   command: [
//     "horse"
//   ]
// }

// export const 马里昂的赛车挑战: Typings.GameInfo = {
//   translates: {
//     cn: '马里昂的赛车挑战'
//   },
//   type: 'SIM',
//   command: [
//     "mario"
//   ]
// }

// export const 马里奥不见了: Typings.GameInfo = {
//   translates: {
//     cn: '马里奥不见了'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 马里奥教你打字: Typings.GameInfo = {
//   translates: {
//     cn: '马里奥教你打字'
//   },
//   type: 'PUZ',
//   command: [
//     "mario"
//   ]
// }

// export const 马里奥游戏展: Typings.GameInfo = {
//   translates: {
//     cn: '马里奥游戏展'
//   },
//   type: 'PUZ',
//   command: [
//     "mario.exe"
//   ]
// }

// export const 玛吉之环: Typings.GameInfo = {
//   translates: {
//     cn: '玛吉之环'
//   },
//   type: 'PUZ',
//   command: [
//     "rotm.exe"
//   ]
// }

// export const 玛丽姐妹: Typings.GameInfo = {
//   translates: {
//     cn: '玛丽姐妹'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 玛雅勇士的诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '玛雅勇士的诅咒'
//   },
//   type: 'AVG',
//   command: [
//     "jonny.bat"
//   ]
// }

// export const 麦当劳世界: Typings.GameInfo = {
//   translates: {
//     cn: '麦当劳世界'
//   },
//   type: 'ACT',
//   command: [
//     "MC.EXE"
//   ]
// }

// export const 曼联传奇: Typings.GameInfo = {
//   translates: {
//     cn: '曼联传奇'
//   },
//   type: 'SIM',
//   command: [
//     "go.exe"
//   ]
// }

// export const 盲战: Typings.GameInfo = {
//   translates: {
//     cn: '盲战'
//   },
//   type: 'PUZ',
//   command: [
//     "blindwar"
//   ]
// }

// export const 猫和老鼠: Typings.GameInfo = {
//   translates: {
//     cn: '猫和老鼠'
//   },
//   type: 'ACT',
//   command: [
//     "tj.exe"
//   ]
// }

// export const 猫和老鼠2: Typings.GameInfo = {
//   translates: {
//     cn: '猫和老鼠2'
//   },
//   type: 'ACT',
//   command: [
//     "tj2.exe"
//   ]
// }

// export const 冒险之魂: Typings.GameInfo = {
//   translates: {
//     cn: '冒险之魂'
//   },
//   type: 'RPG',
//   command: [
//     "SOA.BAT"
//   ]
// }

// export const 玫瑰骑士: Typings.GameInfo = {
//   translates: {
//     cn: '玫瑰骑士'
//   },
//   type: 'SIM',
//   command: [
//     "rose"
//   ]
// }

// export const 美杜莎归来: Typings.GameInfo = {
//   translates: {
//     cn: '美杜莎归来'
//   },
//   type: 'RPG',
//   command: [
//     "rom.bat"
//   ]
// }

// export const 美国噩梦: Typings.GameInfo = {
//   translates: {
//     cn: '美国噩梦'
//   },
//   type: 'SLG',
//   command: [
//     "ALOG"
//   ]
// }

// export const 美国海军战机: Typings.GameInfo = {
//   translates: {
//     cn: '美国海军战机'
//   },
//   type: 'SIM',
//   command: [
//     "MF.BAT"
//   ]
// }

// export const 美女拳: Typings.GameInfo = {
//   translates: {
//     cn: '美女拳'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 美女终结者: Typings.GameInfo = {
//   translates: {
//     cn: '美女终结者'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 美女综艺: Typings.GameInfo = {
//   translates: {
//     cn: '美女综艺'
//   },
//   type: 'PUZ',
//   command: [
//     "quiz"
//   ]
// }

// export const 美少女梦工厂: Typings.GameInfo = {
//   translates: {
//     cn: '美少女梦工厂'
//   },
//   type: 'SIM',
//   command: [
//     "pm.bat"
//   ]
// }

// export const 美少女扑克: Typings.GameInfo = {
//   translates: {
//     cn: '美少女扑克'
//   },
//   type: 'PUZ',
//   command: [
//     "pk1.exe"
//   ]
// }

// export const 美少女特勤组: Typings.GameInfo = {
//   translates: {
//     cn: '美少女特勤组'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 美少女战记: Typings.GameInfo = {
//   translates: {
//     cn: '美少女战记'
//   },
//   type: 'PUZ',
//   command: [
//     "girl"
//   ]
// }

// export const 魅力游戏: Typings.GameInfo = {
//   translates: {
//     cn: '魅力游戏'
//   },
//   type: 'HGA',
//   command: [
//     "go.bat"
//   ]
// }

// export const 门外世界三部曲: Typings.GameInfo = {
//   translates: {
//     cn: '门外世界三部曲'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 闷绝性技王传说: Typings.GameInfo = {
//   translates: {
//     cn: '闷绝性技王传说'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 猛鬼街: Typings.GameInfo = {
//   translates: {
//     cn: '猛鬼街'
//   },
//   type: 'ACT',
//   command: [
//     "dream.exe"
//   ]
// }

// export const 猛龙战机: Typings.GameInfo = {
//   translates: {
//     cn: '猛龙战机'
//   },
//   type: 'ACT',
//   command: [
//     "raptor.exe"
//   ]
// }

// export const 梦幻国度: Typings.GameInfo = {
//   translates: {
//     cn: '梦幻国度'
//   },
//   type: 'SLG',
//   command: [
//     "FANTASY.EXE"
//   ]
// }

// export const 梦幻天使: Typings.GameInfo = {
//   translates: {
//     cn: '梦幻天使'
//   },
//   type: 'SPG',
//   command: [
//     "pro2.exe"
//   ]
// }

// export const 梦见坡: Typings.GameInfo = {
//   translates: {
//     cn: '梦见坡'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 梦网: Typings.GameInfo = {
//   translates: {
//     cn: '梦网'
//   },
//   type: 'HGA',
//   command: [
//     "dreamweb"
//   ]
// }

// export const 梦魇怪物大作战: Typings.GameInfo = {
//   translates: {
//     cn: '梦魇怪物大作战'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 梦游小子: Typings.GameInfo = {
//   translates: {
//     cn: '梦游小子'
//   },
//   type: 'ACT',
//   command: [
//     "sleep.exe"
//   ]
// }

// export const 迷宫大师: Typings.GameInfo = {
//   translates: {
//     cn: '迷宫大师'
//   },
//   type: 'RPG',
//   command: [
//     "dm.exe"
//   ]
// }

// export const 迷宫大师2: Typings.GameInfo = {
//   translates: {
//     cn: '迷宫大师2'
//   },
//   type: 'RPG',
//   command: [
//     "dm2.bat"
//   ]
// }

// export const 迷宫罗格: Typings.GameInfo = {
//   translates: {
//     cn: '迷宫罗格'
//   },
//   type: 'RPG',
//   command: [
//     "hack.bat"
//   ]
// }

// export const 迷失洛杉矶: Typings.GameInfo = {
//   translates: {
//     cn: '迷失洛杉矶'
//   },
//   type: 'AVG',
//   command: [
//     "les2.bat"
//   ]
// }

// export const 迷走都市: Typings.GameInfo = {
//   translates: {
//     cn: '迷走都市'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 米兰斯纪事-圣域传奇: Typings.GameInfo = {
//   translates: {
//     cn: '米兰斯纪事-圣域传奇'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 妙狐神探: Typings.GameInfo = {
//   translates: {
//     cn: '妙狐神探'
//   },
//   type: 'AVG',
//   command: [
//     "aria.bat"
//   ]
// }

// export const 明日之星: Typings.GameInfo = {
//   translates: {
//     cn: '明日之星'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 明日之星2: Typings.GameInfo = {
//   translates: {
//     cn: '明日之星2'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 明星志愿: Typings.GameInfo = {
//   translates: {
//     cn: '明星志愿'
//   },
//   type: 'SIM',
//   command: [
//     "staropen"
//   ]
// }

// export const 冥界幻姬: Typings.GameInfo = {
//   translates: {
//     cn: '冥界幻姬'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 命令与征服: Typings.GameInfo = {
//   translates: {
//     cn: '命令与征服'
//   },
//   type: 'RTS',
//   command: [
//     "cc"
//   ]
// }

// export const 命令与征服整合版: Typings.GameInfo = {
//   translates: {
//     cn: '命令与征服整合版'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 命运战士／混沌引擎: Typings.GameInfo = {
//   translates: {
//     cn: '命运战士/混沌引擎'
//   },
//   type: 'ACT',
//   command: [
//     "chaos.exe"
//   ]
// }

// export const 命运之矛重制版: Typings.GameInfo = {
//   translates: {
//     cn: '命运之矛重制版'
//   },
//   type: 'ACT',
//   command: [
//     "spear.exe"
//   ]
// }

// export const 命运之战: Typings.GameInfo = {
//   translates: {
//     cn: '命运之战'
//   },
//   type: 'SLG',
//   command: [
//     "battles.bat"
//   ]
// }

// export const 模拟城市(1989): Typings.GameInfo = {
//   translates: {
//     cn: '模拟城市(1989)'
//   },
//   type: 'SIM',
//   command: [
//     "simcity.exe"
//   ]
// }

// export const 模拟城市2000增强版: Typings.GameInfo = {
//   translates: {
//     cn: '模拟城市2000增强版'
//   },
//   type: 'SIM',
//   command: [
//     "sc2000.bat"
//   ]
// }

// export const 模拟垂钓: Typings.GameInfo = {
//   translates: {
//     cn: '模拟垂钓'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 模拟大楼: Typings.GameInfo = {
//   translates: {
//     cn: '模拟大楼'
//   },
//   type: 'SIM',
//   command: [
//     "hr2.exe"
//   ]
// }

// export const 模拟地球: Typings.GameInfo = {
//   translates: {
//     cn: '模拟地球'
//   },
//   type: 'SIM',
//   command: [
//     "simearth.com"
//   ]
// }

// export const 模拟动物园: Typings.GameInfo = {
//   translates: {
//     cn: '模拟动物园'
//   },
//   type: 'SIM',
//   command: [
//     "zoo.exe"
//   ]
// }

// export const 模拟过山车: Typings.GameInfo = {
//   translates: {
//     cn: '模拟过山车'
//   },
//   type: 'SIM',
//   command: [
//     "coaster"
//   ]
// }

// export const 模拟蚂蚁: Typings.GameInfo = {
//   translates: {
//     cn: '模拟蚂蚁'
//   },
//   type: 'SIM',
//   command: [
//     "SIMANT.EXE"
//   ]
// }

// export const 模拟农场: Typings.GameInfo = {
//   translates: {
//     cn: '模拟农场'
//   },
//   type: 'SIM',
//   command: [
//     "simfarm.bat"
//   ]
// }

// export const 模拟潜艇: Typings.GameInfo = {
//   translates: {
//     cn: '模拟潜艇'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 模拟生命: Typings.GameInfo = {
//   translates: {
//     cn: '模拟生命'
//   },
//   type: 'SIM',
//   command: [
//     "simlife.bat"
//   ]
// }

// export const 模拟卫生: Typings.GameInfo = {
//   translates: {
//     cn: '模拟卫生'
//   },
//   type: 'SIM',
//   command: [
//     "health"
//   ]
// }

// export const 摩登原始人: Typings.GameInfo = {
//   translates: {
//     cn: '摩登原始人'
//   },
//   type: 'ACT',
//   command: [
//     "fred.exe"
//   ]
// }

// export const 摩托车越野赛: Typings.GameInfo = {
//   translates: {
//     cn: '摩托车越野赛'
//   },
//   type: 'ACT',
//   command: [
//     "across.exe"
//   ]
// }

// export const 摩托城市: Typings.GameInfo = {
//   translates: {
//     cn: '摩托城市'
//   },
//   type: 'SIM',
//   command: [
//     "IDMAS.EXE"
//   ]
// }

// export const 魔岛大富翁: Typings.GameInfo = {
//   translates: {
//     cn: '魔岛大富翁'
//   },
//   type: 'PUZ',
//   command: [
//     "money.exe"
//   ]
// }

// export const 魔道子: Typings.GameInfo = {
//   translates: {
//     cn: '魔道子'
//   },
//   type: 'ACT',
//   command: [
//     "play.exe"
//   ]
// }

// export const 魔动王子／黑色荆棘: Typings.GameInfo = {
//   translates: {
//     cn: '魔动王子/黑色荆棘'
//   },
//   type: 'ACT',
//   command: [
//     "bthorne.exe"
//   ]
// }

// export const 魔法大帝: Typings.GameInfo = {
//   translates: {
//     cn: '魔法大帝'
//   },
//   type: 'SIM',
//   command: [
//     "magic.exe"
//   ]
// }

// export const 魔法袋: Typings.GameInfo = {
//   translates: {
//     cn: '魔法袋'
//   },
//   type: 'ACT',
//   command: [
//     "POCKETS"
//   ]
// }

// export const 魔法飞毯: Typings.GameInfo = {
//   translates: {
//     cn: '魔法飞毯'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法飞毯2: Typings.GameInfo = {
//   translates: {
//     cn: '魔法飞毯2'
//   },
//   type: 'ACT',
//   command: [
//     "netherw.exe"
//   ]
// }

// export const 魔法飞毯PLUS: Typings.GameInfo = {
//   translates: {
//     cn: '魔法飞毯PLUS'
//   },
//   type: 'ACT',
//   command: [
//     "carpet.exe"
//   ]
// }

// export const 魔法伏击: Typings.GameInfo = {
//   translates: {
//     cn: '魔法伏击'
//   },
//   type: 'SLG',
//   command: [
//     "ambush"
//   ]
// }

// export const 魔法公主大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '魔法公主大冒险'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法皇冠: Typings.GameInfo = {
//   translates: {
//     cn: '魔法皇冠'
//   },
//   type: 'SLG',
//   command: [
//     "koei.com"
//   ]
// }

// export const 魔法军团: Typings.GameInfo = {
//   translates: {
//     cn: '魔法军团'
//   },
//   type: 'SPG',
//   command: [
//     "warlockd"
//   ]
// }

// export const 魔法门: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门'
//   },
//   type: 'RPG',
//   command: [
//     "mm"
//   ]
// }

// export const 魔法门2: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法门3幻岛历险记: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门3幻岛历险记'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法门3英版: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门3英版'
//   },
//   type: 'RPG',
//   command: [
//     "MM3"
//   ]
// }

// export const 魔法门4+5英版: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门4+5英版'
//   },
//   type: 'RPG',
//   command: [
//     "xeen"
//   ]
// }

// export const 魔法门4星云之谜: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门4星云之谜'
//   },
//   type: 'RPG',
//   command: [
//     "xeen.exe"
//   ]
// }

// export const 魔法门5黑暗魔君: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门5黑暗魔君'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法门星云之剑: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门星云之剑'
//   },
//   type: 'RPG',
//   command: [
//     "swords.exe"
//   ]
// }

// export const 魔法门英雄无敌: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门英雄无敌'
//   },
//   type: 'SLG',
//   command: [
//     "HEROES.EXE"
//   ]
// }

// export const 魔法门英雄无敌2: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门英雄无敌2'
//   },
//   type: 'SLG',
//   command: [
//     "heroes2.exe"
//   ]
// }

// export const 魔法门英雄无敌2中文: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门英雄无敌2中文'
//   },
//   type: 'SLG',
//   command: [
//     "heroes2.exe"
//   ]
// }

// export const 魔法门英雄无敌中文: Typings.GameInfo = {
//   translates: {
//     cn: '魔法门英雄无敌中文'
//   },
//   type: 'SLG',
//   command: [
//     "heroes"
//   ]
// }

// export const 魔法少年: Typings.GameInfo = {
//   translates: {
//     cn: '魔法少年'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔法师西蒙: Typings.GameInfo = {
//   translates: {
//     cn: '魔法师西蒙'
//   },
//   type: 'AVG',
//   command: [
//     "simon.bat"
//   ]
// }

// export const 魔法世纪: Typings.GameInfo = {
//   translates: {
//     cn: '魔法世纪'
//   },
//   type: 'SPG',
//   command: [
//     "mag1.exe"
//   ]
// }

// export const 魔法世纪2: Typings.GameInfo = {
//   translates: {
//     cn: '魔法世纪2'
//   },
//   type: 'SPG',
//   command: [
//     "mg2.exe"
//   ]
// }

// export const 魔法试炼: Typings.GameInfo = {
//   translates: {
//     cn: '魔法试炼'
//   },
//   type: 'ACT',
//   command: [
//     "run.bat"
//   ]
// }

// export const 魔法天师: Typings.GameInfo = {
//   translates: {
//     cn: '魔法天师'
//   },
//   type: 'SLG',
//   command: [
//     "magic"
//   ]
// }

// export const 魔法之镜: Typings.GameInfo = {
//   translates: {
//     cn: '魔法之镜'
//   },
//   type: 'PUZ',
//   command: [
//     "mirror"
//   ]
// }

// export const 魔宫救美宝石: Typings.GameInfo = {
//   translates: {
//     cn: '魔宫救美宝石'
//   },
//   type: 'HGA',
//   command: [
//     "play.com"
//   ]
// }

// export const 魔鬼推销员: Typings.GameInfo = {
//   translates: {
//     cn: '魔鬼推销员'
//   },
//   type: 'PUZ',
//   command: [
//     "kos.exe"
//   ]
// }

// export const 魔幻霸主: Typings.GameInfo = {
//   translates: {
//     cn: '魔幻霸主'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔幻将军: Typings.GameInfo = {
//   translates: {
//     cn: '魔幻将军'
//   },
//   type: 'SLG',
//   command: [
//     "fg.bat"
//   ]
// }

// export const 魔界圣女传: Typings.GameInfo = {
//   translates: {
//     cn: '魔界圣女传'
//   },
//   type: 'HGA',
//   command: [
//     "play"
//   ]
// }

// export const 魔界召唤: Typings.GameInfo = {
//   translates: {
//     cn: '魔界召唤'
//   },
//   type: 'RPG',
//   command: [
//     "summon"
//   ]
// }

// export const 魔界之泉动乱魔都: Typings.GameInfo = {
//   translates: {
//     cn: '魔界之泉动乱魔都'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔界之泉灰石传奇: Typings.GameInfo = {
//   translates: {
//     cn: '魔界之泉灰石传奇'
//   },
//   type: 'SPG',
//   command: [
//     "bgs"
//   ]
// }

// export const 魔境传说: Typings.GameInfo = {
//   translates: {
//     cn: '魔境传说'
//   },
//   type: 'ACT',
//   command: [
//     "rastan"
//   ]
// }

// export const 魔空霸传: Typings.GameInfo = {
//   translates: {
//     cn: '魔空霸传'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔龙纪事: Typings.GameInfo = {
//   translates: {
//     cn: '魔龙纪事'
//   },
//   type: 'HGA',
//   command: [
//     "dragon.exe"
//   ]
// }

// export const 魔魅大陆的诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '魔魅大陆的诅咒'
//   },
//   type: 'AVG',
//   command: [
//     "CURSE.EXE"
//   ]
// }

// export const 魔日传说: Typings.GameInfo = {
//   translates: {
//     cn: '魔日传说'
//   },
//   type: 'RPG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 魔神战记: Typings.GameInfo = {
//   translates: {
//     cn: '魔神战记'
//   },
//   type: 'RPG',
//   command: [
//     "mg1.exe"
//   ]
// }

// export const 魔神战记2: Typings.GameInfo = {
//   translates: {
//     cn: '魔神战记2'
//   },
//   type: 'RPG',
//   command: [
//     "mg2"
//   ]
// }

// export const 魔石英雄传说2: Typings.GameInfo = {
//   translates: {
//     cn: '魔石英雄传说2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔兽大战略: Typings.GameInfo = {
//   translates: {
//     cn: '魔兽大战略'
//   },
//   type: 'SLG',
//   command: [
//     "newslg"
//   ]
// }

// export const 魔兽争霸1: Typings.GameInfo = {
//   translates: {
//     cn: '魔兽争霸1'
//   },
//   type: 'RTS',
//   command: [
//     "war.exe"
//   ]
// }

// export const 魔兽争霸2: Typings.GameInfo = {
//   translates: {
//     cn: '魔兽争霸2'
//   },
//   type: 'RTS',
//   command: [
//     "war2"
//   ]
// }

// export const 魔兽争霸2中文版: Typings.GameInfo = {
//   translates: {
//     cn: '魔兽争霸2中文版'
//   },
//   type: 'RTS',
//   command: [
//     "war2"
//   ]
// }

// export const 魔兽争霸2资料篇: Typings.GameInfo = {
//   translates: {
//     cn: '魔兽争霸2资料篇'
//   },
//   type: 'RTS',
//   command: [
//     "war2.exe"
//   ]
// }

// export const 魔术彩球: Typings.GameInfo = {
//   translates: {
//     cn: '魔术彩球'
//   },
//   type: 'PUZ',
//   command: [
//     "vxrock.exe"
//   ]
// }

// export const 魔术方块: Typings.GameInfo = {
//   translates: {
//     cn: '魔术方块'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔胎: Typings.GameInfo = {
//   translates: {
//     cn: '魔胎'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔武王: Typings.GameInfo = {
//   translates: {
//     cn: '魔武王'
//   },
//   type: 'RPG',
//   command: [
//     "dks"
//   ]
// }

// export const 魔眼封印: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼封印'
//   },
//   type: 'RPG',
//   command: [
//     "seal.exe"
//   ]
// }

// export const 魔眼杀机: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼杀机'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 魔眼杀机2隐月传奇: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼杀机2隐月传奇'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 魔眼杀机3血战扎诺尔: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼杀机3血战扎诺尔'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔眼水晶: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼水晶'
//   },
//   type: 'RPG',
//   command: [
//     "legend.bat"
//   ]
// }

// export const 魔眼邪神: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼邪神'
//   },
//   type: 'SLG',
//   command: [
//     "koei.bat"
//   ]
// }

// export const 魔眼邪神英版: Typings.GameInfo = {
//   translates: {
//     cn: '魔眼邪神英版'
//   },
//   type: 'SLG',
//   command: [
//     "koei.bat"
//   ]
// }

// export const 魔异入侵: Typings.GameInfo = {
//   translates: {
//     cn: '魔异入侵'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 魔域传奇：石之预言者1.1: Typings.GameInfo = {
//   translates: {
//     cn: '魔域传奇:石之预言者1.1'
//   },
//   type: 'RPG',
//   command: [
//     "PROPHET.BAT"
//   ]
// }

// export const 魔域传奇：史特卡的财宝1.2: Typings.GameInfo = {
//   translates: {
//     cn: '魔域传奇:史特卡的财宝1.2'
//   },
//   type: 'RPG',
//   command: [
//     "rloft"
//   ]
// }

// export const 魔域迷踪: Typings.GameInfo = {
//   translates: {
//     cn: '魔域迷踪'
//   },
//   type: 'ACT',
//   command: [
//     "ecstatic.bat"
//   ]
// }

// export const 魔域迷踪2: Typings.GameInfo = {
//   translates: {
//     cn: '魔域迷踪2'
//   },
//   type: 'AVG',
//   command: [
//     "ECSTATIC2.bat"
//   ]
// }

// export const 魔栈: Typings.GameInfo = {
//   translates: {
//     cn: '魔栈'
//   },
//   type: 'RPG',
//   command: [
//     "start"
//   ]
// }

// export const 末日宝典: Typings.GameInfo = {
//   translates: {
//     cn: '末日宝典'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 末日战神: Typings.GameInfo = {
//   translates: {
//     cn: '末日战神'
//   },
//   type: 'ACT',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 末日之牛: Typings.GameInfo = {
//   translates: {
//     cn: '末日之牛'
//   },
//   type: 'ACT',
//   command: [
//     "cow.bat"
//   ]
// }

// export const 莫克塔历险记: Typings.GameInfo = {
//   translates: {
//     cn: '莫克塔历险记'
//   },
//   type: 'ACT',
//   command: [
//     "moktar.exe"
//   ]
// }

// export const 墓地丧尸: Typings.GameInfo = {
//   translates: {
//     cn: '墓地丧尸'
//   },
//   type: 'ACT',
//   command: [
//     "hzvga"
//   ]
// }

// export const 墓穴诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '墓穴诅咒'
//   },
//   type: 'ACT',
//   command: [
//     "run.bat"
//   ]
// }

// export const 那苏冒险: Typings.GameInfo = {
//   translates: {
//     cn: '那苏冒险'
//   },
//   type: 'ACT',
//   command: [
//     "nashua"
//   ]
// }

// export const 纳粹飞行秘史+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '纳粹飞行秘史+资料片'
//   },
//   type: 'SIM',
//   command: [
//     "sw.bat"
//   ]
// }

// export const 纳斯卡赛车1: Typings.GameInfo = {
//   translates: {
//     cn: '纳斯卡赛车1'
//   },
//   type: 'SIM',
//   command: [
//     "nascar"
//   ]
// }

// export const 纳斯卡赛车2: Typings.GameInfo = {
//   translates: {
//     cn: '纳斯卡赛车2'
//   },
//   type: 'SIM',
//   command: [
//     "n2.bat"
//   ]
// }

// export const 南海霸主: Typings.GameInfo = {
//   translates: {
//     cn: '南海霸主'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 南极冰怪: Typings.GameInfo = {
//   translates: {
//     cn: '南极冰怪'
//   },
//   type: 'AVG',
//   command: [
//     "ice640"
//   ]
// }

// export const 南极大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '南极大冒险'
//   },
//   type: 'ACT',
//   command: [
//     "antartic"
//   ]
// }

// export const 南宋英烈传: Typings.GameInfo = {
//   translates: {
//     cn: '南宋英烈传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 南与北: Typings.GameInfo = {
//   translates: {
//     cn: '南与北'
//   },
//   type: 'ACT',
//   command: [
//     "tatou.com"
//   ]
// }

// export const 脑博士之岛: Typings.GameInfo = {
//   translates: {
//     cn: '脑博士之岛'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.bat"
//   ]
// }

// export const 尼旁事务所: Typings.GameInfo = {
//   translates: {
//     cn: '尼旁事务所'
//   },
//   type: 'AVG',
//   command: [
//     "gioca"
//   ]
// }

// export const 逆玉王: Typings.GameInfo = {
//   translates: {
//     cn: '逆玉王'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 农奴城市: Typings.GameInfo = {
//   translates: {
//     cn: '农奴城市'
//   },
//   type: 'SIM',
//   command: [
//     "serf.exe"
//   ]
// }

// export const 怒之机翼: Typings.GameInfo = {
//   translates: {
//     cn: '怒之机翼'
//   },
//   type: 'ACT',
//   command: [
//     "wofe"
//   ]
// }

// export const 虐杀异形: Typings.GameInfo = {
//   translates: {
//     cn: '虐杀异形'
//   },
//   type: 'ACT',
//   command: [
//     "abuse.exe"
//   ]
// }

// export const 诺曼计划93: Typings.GameInfo = {
//   translates: {
//     cn: '诺曼计划93'
//   },
//   type: 'SIM',
//   command: [
//     "nomad.exe"
//   ]
// }

// export const 女皇杯(日): Typings.GameInfo = {
//   translates: {
//     cn: '女皇杯(日)'
//   },
//   type: 'HGA',
//   command: [
//     "start.bat"
//   ]
// }

// export const 女皇赌场: Typings.GameInfo = {
//   translates: {
//     cn: '女皇赌场'
//   },
//   type: 'PUZ',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 女神学院: Typings.GameInfo = {
//   translates: {
//     cn: '女神学院'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 女神之翼: Typings.GameInfo = {
//   translates: {
//     cn: '女神之翼'
//   },
//   type: 'AVG',
//   command: [
//     "made.exe"
//   ]
// }

// export const 欧陆战线: Typings.GameInfo = {
//   translates: {
//     cn: '欧陆战线'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 欧洲女皇扑克: Typings.GameInfo = {
//   translates: {
//     cn: '欧洲女皇扑克'
//   },
//   type: 'PUZ',
//   command: [
//     "ere"
//   ]
// }

// export const 欧洲巡回摔角: Typings.GameInfo = {
//   translates: {
//     cn: '欧洲巡回摔角'
//   },
//   type: 'ACT',
//   command: [
//     "wwf.com"
//   ]
// }

// export const 欧洲足球96: Typings.GameInfo = {
//   translates: {
//     cn: '欧洲足球96'
//   },
//   type: 'SIM',
//   command: [
//     "start.bat"
//   ]
// }

// export const 叛变克朗多: Typings.GameInfo = {
//   translates: {
//     cn: '叛变克朗多'
//   },
//   type: 'RPG',
//   command: [
//     "krondor.exe"
//   ]
// }

// export const 胖子之怒: Typings.GameInfo = {
//   translates: {
//     cn: '胖子之怒'
//   },
//   type: 'ACT',
//   command: [
//     "fatman"
//   ]
// }

// export const 炮灰(又名小兵立大功): Typings.GameInfo = {
//   translates: {
//     cn: '炮灰(又名小兵立大功)'
//   },
//   type: 'ACT',
//   command: [
//     "c.bat"
//   ]
// }

// export const 炮灰2: Typings.GameInfo = {
//   translates: {
//     cn: '炮灰2'
//   },
//   type: 'ACT',
//   command: [
//     "can2.exe"
//   ]
// }

// export const 喷气背包: Typings.GameInfo = {
//   translates: {
//     cn: '喷气背包'
//   },
//   type: 'ACT',
//   command: [
//     "jetpack"
//   ]
// }

// export const 碰美龙战士: Typings.GameInfo = {
//   translates: {
//     cn: '碰美龙战士'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 碰碰球: Typings.GameInfo = {
//   translates: {
//     cn: '碰碰球'
//   },
//   type: 'PUZ',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 披萨大亨: Typings.GameInfo = {
//   translates: {
//     cn: '披萨大亨'
//   },
//   type: 'SIM',
//   command: [
//     "pizza"
//   ]
// }

// export const 霹雳娇娃: Typings.GameInfo = {
//   translates: {
//     cn: '霹雳娇娃'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 霹雳幽灵剑: Typings.GameInfo = {
//   translates: {
//     cn: '霹雳幽灵剑'
//   },
//   type: 'RPG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 拼图大师: Typings.GameInfo = {
//   translates: {
//     cn: '拼图大师'
//   },
//   type: 'HGA',
//   command: [
//     "PUZZLER.exe"
//   ]
// }

// export const 拼图乒乓台: Typings.GameInfo = {
//   translates: {
//     cn: '拼图乒乓台'
//   },
//   type: 'HGA',
//   command: [
//     "uc"
//   ]
// }

// export const 拼字游戏: Typings.GameInfo = {
//   translates: {
//     cn: '拼字游戏'
//   },
//   type: 'PUZ',
//   command: [
//     "PHONICS.BAT"
//   ]
// }

// export const 破坏神传说: Typings.GameInfo = {
//   translates: {
//     cn: '破坏神传说'
//   },
//   type: 'RPG',
//   command: [
//     "zyca.bat"
//   ]
// }

// export const 扑克俱乐部: Typings.GameInfo = {
//   translates: {
//     cn: '扑克俱乐部'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 噗噗闯通关: Typings.GameInfo = {
//   translates: {
//     cn: '噗噗闯通关'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 七宝奇谋: Typings.GameInfo = {
//   translates: {
//     cn: '七宝奇谋'
//   },
//   type: 'ACT',
//   command: [
//     "goonies"
//   ]
// }

// export const 七大黄金之城: Typings.GameInfo = {
//   translates: {
//     cn: '七大黄金之城'
//   },
//   type: 'SLG',
//   command: [
//     "7cities.exe"
//   ]
// }

// export const 七喜小子: Typings.GameInfo = {
//   translates: {
//     cn: '七喜小子'
//   },
//   type: 'ACT',
//   command: [
//     "sload.exe"
//   ]
// }

// export const 七星魔法使: Typings.GameInfo = {
//   translates: {
//     cn: '七星魔法使'
//   },
//   type: 'ACT',
//   command: [
//     "sierra"
//   ]
// }

// export const 七英雄外传王者之师: Typings.GameInfo = {
//   translates: {
//     cn: '七英雄外传王者之师'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 七英雄物语: Typings.GameInfo = {
//   translates: {
//     cn: '七英雄物语'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 七英雄物语2: Typings.GameInfo = {
//   translates: {
//     cn: '七英雄物语2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 齐天大圣: Typings.GameInfo = {
//   translates: {
//     cn: '齐天大圣'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 其普斯的挑战: Typings.GameInfo = {
//   translates: {
//     cn: '其普斯的挑战'
//   },
//   type: 'PUZ',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 奇幻游戏三合一: Typings.GameInfo = {
//   translates: {
//     cn: '奇幻游戏三合一'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 奇门遁甲之九五真龙: Typings.GameInfo = {
//   translates: {
//     cn: '奇门遁甲之九五真龙'
//   },
//   type: 'RPG',
//   command: [
//     "main.exe"
//   ]
// }

// export const 奇妙的扎克: Typings.GameInfo = {
//   translates: {
//     cn: '奇妙的扎克'
//   },
//   type: 'AVG',
//   command: [
//     "ZACK.EXE"
//   ]
// }

// export const 奇探加杰特全球恐慌: Typings.GameInfo = {
//   translates: {
//     cn: '奇探加杰特全球恐慌'
//   },
//   type: 'AVG',
//   command: [
//     "gadget.exe"
//   ]
// }

// export const 麒麟传说: Typings.GameInfo = {
//   translates: {
//     cn: '麒麟传说'
//   },
//   type: 'RPG',
//   command: [
//     "play.exe"
//   ]
// }

// export const 汽车大亨: Typings.GameInfo = {
//   translates: {
//     cn: '汽车大亨'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 千兆轰炸: Typings.GameInfo = {
//   translates: {
//     cn: '千兆轰炸'
//   },
//   type: 'ACT',
//   command: [
//     "kilo.bat"
//   ]
// }

// export const 前线药剂师: Typings.GameInfo = {
//   translates: {
//     cn: '前线药剂师'
//   },
//   type: 'AVG',
//   command: [
//     "fpfp.bat"
//   ]
// }

// export const 枪神: Typings.GameInfo = {
//   translates: {
//     cn: '枪神'
//   },
//   type: 'HGA',
//   command: [
//     "tgun"
//   ]
// }

// export const 强手棋: Typings.GameInfo = {
//   translates: {
//     cn: '强手棋'
//   },
//   type: 'PUZ',
//   command: [
//     "MONOPOLY.BAT"
//   ]
// }

// export const 桥牌: Typings.GameInfo = {
//   translates: {
//     cn: '桥牌'
//   },
//   type: 'PUZ',
//   command: [
//     "db.exe"
//   ]
// }

// export const 桥牌MVP: Typings.GameInfo = {
//   translates: {
//     cn: '桥牌MVP'
//   },
//   type: 'PUZ',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 切克斯历险记: Typings.GameInfo = {
//   translates: {
//     cn: '切克斯历险记'
//   },
//   type: 'ACT',
//   command: [
//     "chex"
//   ]
// }

// export const 切克斯历险记2: Typings.GameInfo = {
//   translates: {
//     cn: '切克斯历险记2'
//   },
//   type: 'ACT',
//   command: [
//     "chex2"
//   ]
// }

// export const 青涩的果实: Typings.GameInfo = {
//   translates: {
//     cn: '青涩的果实'
//   },
//   type: 'PUZ',
//   command: [
//     "marry"
//   ]
// }

// export const 青少棒扬威记: Typings.GameInfo = {
//   translates: {
//     cn: '青少棒扬威记'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 清白无罪: Typings.GameInfo = {
//   translates: {
//     cn: '清白无罪'
//   },
//   type: 'AVG',
//   command: [
//     "iuc"
//   ]
// }

// export const 清白无罪2: Typings.GameInfo = {
//   translates: {
//     cn: '清白无罪2'
//   },
//   type: 'AVG',
//   command: [
//     "guilty.bat"
//   ]
// }

// export const 蚯蚓吉姆: Typings.GameInfo = {
//   translates: {
//     cn: '蚯蚓吉姆'
//   },
//   type: 'ACT',
//   command: [
//     "ewj"
//   ]
// }

// export const 蚯蚓吉姆2: Typings.GameInfo = {
//   translates: {
//     cn: '蚯蚓吉姆2'
//   },
//   type: 'ACT',
//   command: [
//     "ewj2.exe"
//   ]
// }

// export const 求婚365日: Typings.GameInfo = {
//   translates: {
//     cn: '求婚365日'
//   },
//   type: 'PUZ',
//   command: [
//     "365.exe"
//   ]
// }

// export const 区域掠夺: Typings.GameInfo = {
//   translates: {
//     cn: '区域掠夺'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 趣怪小巫师: Typings.GameInfo = {
//   translates: {
//     cn: '趣怪小巫师'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 权利之战: Typings.GameInfo = {
//   translates: {
//     cn: '权利之战'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 全球效应: Typings.GameInfo = {
//   translates: {
//     cn: '全球效应'
//   },
//   type: 'SLG',
//   command: [
//     "globv.exe"
//   ]
// }

// export const 拳斗士: Typings.GameInfo = {
//   translates: {
//     cn: '拳斗士'
//   },
//   type: 'ACT',
//   command: [
//     "fight.exe"
//   ]
// }

// export const 雀之塔: Typings.GameInfo = {
//   translates: {
//     cn: '雀之塔'
//   },
//   type: 'PUZ',
//   command: [
//     "TOMJ.EXE"
//   ]
// }

// export const 燃烧时刻: Typings.GameInfo = {
//   translates: {
//     cn: '燃烧时刻'
//   },
//   type: 'SLG',
//   command: [
//     "BT.BAT"
//   ]
// }

// export const 热带雨林的秘密: Typings.GameInfo = {
//   translates: {
//     cn: '热带雨林的秘密'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.bat"
//   ]
// }

// export const 热力车赛: Typings.GameInfo = {
//   translates: {
//     cn: '热力车赛'
//   },
//   type: 'SIM',
//   command: [
//     "mandos.exe"
//   ]
// }

// export const 热能战机: Typings.GameInfo = {
//   translates: {
//     cn: '热能战机'
//   },
//   type: 'ACT',
//   command: [
//     "grav.bat"
//   ]
// }

// export const 热血硬派: Typings.GameInfo = {
//   translates: {
//     cn: '热血硬派'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 人间道少年燕赤霞: Typings.GameInfo = {
//   translates: {
//     cn: '人间道少年燕赤霞'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 人类进化1+2: Typings.GameInfo = {
//   translates: {
//     cn: '人类进化1+2'
//   },
//   type: 'PUZ',
//   command: [
//     "runme.exe"
//   ]
// }

// export const 人类进化3: Typings.GameInfo = {
//   translates: {
//     cn: '人类进化3'
//   },
//   type: 'PUZ',
//   command: [
//     "evo.exe"
//   ]
// }

// export const 人面蛾: Typings.GameInfo = {
//   translates: {
//     cn: '人面蛾'
//   },
//   type: 'AVG',
//   command: [
//     "mothcd"
//   ]
// }

// export const 人生剧场: Typings.GameInfo = {
//   translates: {
//     cn: '人生剧场'
//   },
//   type: 'PUZ',
//   command: [
//     "jones.bat"
//   ]
// }

// export const 忍: Typings.GameInfo = {
//   translates: {
//     cn: '忍'
//   },
//   type: 'ACT',
//   command: [
//     "sh.exe"
//   ]
// }

// export const 忍者龙剑传1: Typings.GameInfo = {
//   translates: {
//     cn: '忍者龙剑传1'
//   },
//   type: 'ACT',
//   command: [
//     "ninja.exe"
//   ]
// }

// export const 忍者龙剑传2: Typings.GameInfo = {
//   translates: {
//     cn: '忍者龙剑传2'
//   },
//   type: 'ACT',
//   command: [
//     "ninja.exe"
//   ]
// }

// export const 忍者山洞人: Typings.GameInfo = {
//   translates: {
//     cn: '忍者山洞人'
//   },
//   type: 'ACT',
//   command: [
//     "caveman"
//   ]
// }

// export const 忍者神龟: Typings.GameInfo = {
//   translates: {
//     cn: '忍者神龟'
//   },
//   type: 'ACT',
//   command: [
//     "go"
//   ]
// }

// export const 忍者神龟2曼哈顿之战: Typings.GameInfo = {
//   translates: {
//     cn: '忍者神龟2曼哈顿之战'
//   },
//   type: 'ACT',
//   command: [
//     "TMNT2.EXE"
//   ]
// }

// export const 忍者神龟3: Typings.GameInfo = {
//   translates: {
//     cn: '忍者神龟3'
//   },
//   type: 'ACT',
//   command: [
//     "TURTLES"
//   ]
// }

// export const 忍者兔: Typings.GameInfo = {
//   translates: {
//     cn: '忍者兔'
//   },
//   type: 'ACT',
//   command: [
//     "game.bat"
//   ]
// }

// export const 日本之战: Typings.GameInfo = {
//   translates: {
//     cn: '日本之战'
//   },
//   type: 'SLG',
//   command: [
//     "conquest"
//   ]
// }

// export const 日没: Typings.GameInfo = {
//   translates: {
//     cn: '日没'
//   },
//   type: 'RTS',
//   command: [
//     "play"
//   ]
// }

// export const 日蚀: Typings.GameInfo = {
//   translates: {
//     cn: '日蚀'
//   },
//   type: 'SLG',
//   command: [
//     "ECP"
//   ]
// }

// export const 荣耀战场: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀战场'
//   },
//   type: 'SLG',
//   command: [
//     "fog"
//   ]
// }

// export const 荣耀之剑: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀之剑'
//   },
//   type: 'ACT',
//   command: [
//     "soh_sp"
//   ]
// }

// export const 荣耀之路1: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀之路1'
//   },
//   type: 'AVG',
//   command: [
//     "hero.bat"
//   ]
// }

// export const 荣耀之路2: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀之路2'
//   },
//   type: 'AVG',
//   command: [
//     "sierra"
//   ]
// }

// export const 荣耀之路3: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀之路3'
//   },
//   type: 'AVG',
//   command: [
//     "sierra"
//   ]
// }

// export const 荣耀之路4: Typings.GameInfo = {
//   translates: {
//     cn: '荣耀之路4'
//   },
//   type: 'AVG',
//   command: [
//     "sierra"
//   ]
// }

// export const 如来金刚拳传奇: Typings.GameInfo = {
//   translates: {
//     cn: '如来金刚拳传奇'
//   },
//   type: 'RPG',
//   command: [
//     "book.bat"
//   ]
// }

// export const 萨巴巴指挥官: Typings.GameInfo = {
//   translates: {
//     cn: '萨巴巴指挥官'
//   },
//   type: 'ACT',
//   command: [
//     "commando.exe"
//   ]
// }

// export const 赛博滑板小子: Typings.GameInfo = {
//   translates: {
//     cn: '赛博滑板小子'
//   },
//   type: 'ACT',
//   command: [
//     "_cyril.exe"
//   ]
// }

// export const 赛博战警: Typings.GameInfo = {
//   translates: {
//     cn: '赛博战警'
//   },
//   type: 'ACT',
//   command: [
//     "cl.exe"
//   ]
// }

// export const 赛尔达经典版: Typings.GameInfo = {
//   translates: {
//     cn: '赛尔达经典版'
//   },
//   type: 'ACT',
//   command: [
//     "zelda"
//   ]
// }

// export const 赛马: Typings.GameInfo = {
//   translates: {
//     cn: '赛马'
//   },
//   type: 'SIM',
//   command: [
//     "GTF.EXE"
//   ]
// }

// export const 三国风云: Typings.GameInfo = {
//   translates: {
//     cn: '三国风云'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 三国麻将: Typings.GameInfo = {
//   translates: {
//     cn: '三国麻将'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 三国演义1加强版: Typings.GameInfo = {
//   translates: {
//     cn: '三国演义1加强版'
//   },
//   type: 'SLG',
//   command: [
//     "ASV"
//   ]
// }

// export const 三国演义2: Typings.GameInfo = {
//   translates: {
//     cn: '三国演义2'
//   },
//   type: 'SLG',
//   command: [
//     "san2"
//   ]
// }

// export const 三国英杰传: Typings.GameInfo = {
//   translates: {
//     cn: '三国英杰传'
//   },
//   type: 'SPG',
//   command: [
//     "reko3"
//   ]
// }

// export const 三国英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '三国英雄传'
//   },
//   type: 'SPG',
//   command: [
//     "san.exe"
//   ]
// }

// export const 三国志1: Typings.GameInfo = {
//   translates: {
//     cn: '三国志1'
//   },
//   type: 'SLG',
//   command: [
//     "sangoku"
//   ]
// }

// export const 三国志4加强版: Typings.GameInfo = {
//   translates: {
//     cn: '三国志4加强版'
//   },
//   type: 'SLG',
//   command: [
//     "san4.com"
//   ]
// }

// export const 三国志5加强版: Typings.GameInfo = {
//   translates: {
//     cn: '三国志5加强版'
//   },
//   type: 'SLG',
//   command: [
//     "san586.com"
//   ]
// }

// export const 三国志雄霸天下: Typings.GameInfo = {
//   translates: {
//     cn: '三国志雄霸天下'
//   },
//   type: 'SPG',
//   command: [
//     "play"
//   ]
// }

// export const 三姐妹: Typings.GameInfo = {
//   translates: {
//     cn: '三姐妹'
//   },
//   type: 'HGA',
//   command: [
//     "3SIS.BAT"
//   ]
// }

// export const 三界论-邦沛之谜: Typings.GameInfo = {
//   translates: {
//     cn: '三界论-邦沛之谜'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 伞兵大战: Typings.GameInfo = {
//   translates: {
//     cn: '伞兵大战'
//   },
//   type: 'ACT',
//   command: [
//     "niteraid"
//   ]
// }

// export const 扫雷: Typings.GameInfo = {
//   translates: {
//     cn: '扫雷'
//   },
//   type: 'PUZ',
//   command: [
//     "MINERVA.EXE"
//   ]
// }

// export const 森林救火员: Typings.GameInfo = {
//   translates: {
//     cn: '森林救火员'
//   },
//   type: 'SIM',
//   command: [
//     "fssw2k.exe"
//   ]
// }

// export const 森林小精灵: Typings.GameInfo = {
//   translates: {
//     cn: '森林小精灵'
//   },
//   type: 'PUZ',
//   command: [
//     "pick.bat"
//   ]
// }

// export const 森塔勇士: Typings.GameInfo = {
//   translates: {
//     cn: '森塔勇士'
//   },
//   type: 'RPG',
//   command: [
//     "kx"
//   ]
// }

// export const 杀出机械城: Typings.GameInfo = {
//   translates: {
//     cn: '杀出机械城'
//   },
//   type: 'ACT',
//   command: [
//     "x.exe"
//   ]
// }

// export const 杀戮机器: Typings.GameInfo = {
//   translates: {
//     cn: '杀戮机器'
//   },
//   type: 'ACT',
//   command: [
//     "amok.bat"
//   ]
// }

// export const 杀生异形: Typings.GameInfo = {
//   translates: {
//     cn: '杀生异形'
//   },
//   type: 'ACT',
//   command: [
//     "xpr.bat"
//   ]
// }

// export const 沙暴: Typings.GameInfo = {
//   translates: {
//     cn: '沙暴'
//   },
//   type: 'ACT',
//   command: [
//     "sand.exe"
//   ]
// }

// export const 沙克狼: Typings.GameInfo = {
//   translates: {
//     cn: '沙克狼'
//   },
//   type: 'ACT',
//   command: [
//     "shakii"
//   ]
// }

// export const 沙拉那之剑: Typings.GameInfo = {
//   translates: {
//     cn: '沙拉那之剑'
//   },
//   type: 'AVG',
//   command: [
//     "shannara.exe"
//   ]
// }

// export const 沙漠勇士: Typings.GameInfo = {
//   translates: {
//     cn: '沙漠勇士'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 沙丘魔堡: Typings.GameInfo = {
//   translates: {
//     cn: '沙丘魔堡'
//   },
//   type: 'AVG',
//   command: [
//     "dune.bat"
//   ]
// }

// export const 沙丘魔堡2: Typings.GameInfo = {
//   translates: {
//     cn: '沙丘魔堡2'
//   },
//   type: 'RTS',
//   command: [
//     "dune2.exe"
//   ]
// }

// export const 沙丘魔堡2光碟版1.07: Typings.GameInfo = {
//   translates: {
//     cn: '沙丘魔堡2光碟版1.07'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 沙丘魔堡2加强版: Typings.GameInfo = {
//   translates: {
//     cn: '沙丘魔堡2加强版'
//   },
//   type: 'RTS',
//   command: [
//     "sd2.bat"
//   ]
// }

// export const 沙丘魔堡光碟版: Typings.GameInfo = {
//   translates: {
//     cn: '沙丘魔堡光碟版'
//   },
//   type: 'AVG',
//   command: [
//     "dune.bat"
//   ]
// }

// export const 沙之战线: Typings.GameInfo = {
//   translates: {
//     cn: '沙之战线'
//   },
//   type: 'SLG',
//   command: [
//     "lsand"
//   ]
// }

// export const 纱之器: Typings.GameInfo = {
//   translates: {
//     cn: '纱之器'
//   },
//   type: 'AVG',
//   command: [
//     "loom.exe"
//   ]
// }

// export const 山海经: Typings.GameInfo = {
//   translates: {
//     cn: '山海经'
//   },
//   type: 'SPG',
//   command: [
//     "dosbox.bat"
//   ]
// }

// export const 山姆和马克思: Typings.GameInfo = {
//   translates: {
//     cn: '山姆和马克思'
//   },
//   type: 'AVG',
//   command: [
//     "samnmax.exe"
//   ]
// }

// export const 闪回-追寻记忆之旅: Typings.GameInfo = {
//   translates: {
//     cn: '闪回-追寻记忆之旅'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 商业王子: Typings.GameInfo = {
//   translates: {
//     cn: '商业王子'
//   },
//   type: 'SIM',
//   command: [
//     "merchant.exe"
//   ]
// }

// export const 上帝: Typings.GameInfo = {
//   translates: {
//     cn: '上帝'
//   },
//   type: 'SIM',
//   command: [
//     "god.exe"
//   ]
// }

// export const 上帝也疯狂: Typings.GameInfo = {
//   translates: {
//     cn: '上帝也疯狂'
//   },
//   type: 'RTS',
//   command: [
//     "pop.bat"
//   ]
// }

// export const 上帝也疯狂2: Typings.GameInfo = {
//   translates: {
//     cn: '上帝也疯狂2'
//   },
//   type: 'RTS',
//   command: [
//     "go.bat"
//   ]
// }

// export const 上帝之锤: Typings.GameInfo = {
//   translates: {
//     cn: '上帝之锤'
//   },
//   type: 'SLG',
//   command: [
//     "hammer.bat"
//   ]
// }

// export const 上古卷轴1豪华版: Typings.GameInfo = {
//   translates: {
//     cn: '上古卷轴1豪华版'
//   },
//   type: 'RPG',
//   command: [
//     "arena.bat"
//   ]
// }

// export const 上古卷轴1竞技场: Typings.GameInfo = {
//   translates: {
//     cn: '上古卷轴1竞技场'
//   },
//   type: 'RPG',
//   command: [
//     "arena.bat"
//   ]
// }

// export const 上古卷轴2匕首雨: Typings.GameInfo = {
//   translates: {
//     cn: '上古卷轴2匕首雨'
//   },
//   type: 'RPG',
//   command: [
//     "dagger"
//   ]
// }

// export const 上古卷轴传奇: Typings.GameInfo = {
//   translates: {
//     cn: '上古卷轴传奇'
//   },
//   type: 'ACT',
//   command: [
//     "spire.bat"
//   ]
// }

// export const 上古神兵: Typings.GameInfo = {
//   translates: {
//     cn: '上古神兵'
//   },
//   type: 'SLG',
//   command: [
//     "cc.bat"
//   ]
// }

// export const 上古英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '上古英雄传'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 上海麻将接龙: Typings.GameInfo = {
//   translates: {
//     cn: '上海麻将接龙'
//   },
//   type: 'PUZ',
//   command: [
//     "de"
//   ]
// }

// export const 少年侦探: Typings.GameInfo = {
//   translates: {
//     cn: '少年侦探'
//   },
//   type: 'AVG',
//   command: [
//     "teenagnt"
//   ]
// }

// export const 蛇女: Typings.GameInfo = {
//   translates: {
//     cn: '蛇女'
//   },
//   type: 'AVG',
//   command: [
//     "SERPENTS"
//   ]
// }

// export const 射波: Typings.GameInfo = {
//   translates: {
//     cn: '射波'
//   },
//   type: 'PUZ',
//   command: [
//     "ball.exe"
//   ]
// }

// export const 射雕英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '射雕英雄传'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 射豆: Typings.GameInfo = {
//   translates: {
//     cn: '射豆'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 射门95: Typings.GameInfo = {
//   translates: {
//     cn: '射门95'
//   },
//   type: 'SIM',
//   command: [
//     "striker.bat"
//   ]
// }

// export const 深海泰坦尼克: Typings.GameInfo = {
//   translates: {
//     cn: '深海泰坦尼克'
//   },
//   type: 'ACT',
//   command: [
//     "titvga"
//   ]
// }

// export const 深入虎穴: Typings.GameInfo = {
//   translates: {
//     cn: '深入虎穴'
//   },
//   type: 'ACT',
//   command: [
//     "main.exe"
//   ]
// }

// export const 神雕侠侣: Typings.GameInfo = {
//   translates: {
//     cn: '神雕侠侣'
//   },
//   type: 'RPG',
//   command: [
//     "eagle"
//   ]
// }

// export const 神剑传说: Typings.GameInfo = {
//   translates: {
//     cn: '神剑传说'
//   },
//   type: 'RPG',
//   command: [
//     "liar"
//   ]
// }

// export const 神剑封魔: Typings.GameInfo = {
//   translates: {
//     cn: '神剑封魔'
//   },
//   type: 'RPG',
//   command: [
//     "zeliard.exe"
//   ]
// }

// export const 神剑游侠传: Typings.GameInfo = {
//   translates: {
//     cn: '神剑游侠传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 神经弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '神经弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "psycho"
//   ]
// }

// export const 神秘博物馆: Typings.GameInfo = {
//   translates: {
//     cn: '神秘博物馆'
//   },
//   type: 'PUZ',
//   command: [
//     "mystery"
//   ]
// }

// export const 神秘之歌: Typings.GameInfo = {
//   translates: {
//     cn: '神秘之歌'
//   },
//   type: 'RPG',
//   command: [
//     "msong"
//   ]
// }

// export const 神秘之塔: Typings.GameInfo = {
//   translates: {
//     cn: '神秘之塔'
//   },
//   type: 'ACT',
//   command: [
//     "TOWERS.EXE"
//   ]
// }

// export const 神奇王国: Typings.GameInfo = {
//   translates: {
//     cn: '神奇王国'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 神示录背叛与毁灭: Typings.GameInfo = {
//   translates: {
//     cn: '神示录背叛与毁灭'
//   },
//   type: 'RPG',
//   command: [
//     "play"
//   ]
// }

// export const 神谕: Typings.GameInfo = {
//   translates: {
//     cn: '神谕'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 神州八剑: Typings.GameInfo = {
//   translates: {
//     cn: '神州八剑'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 生化悍将: Typings.GameInfo = {
//   translates: {
//     cn: '生化悍将'
//   },
//   type: 'ACT',
//   command: [
//     "cyberia.bat"
//   ]
// }

// export const 生化情人: Typings.GameInfo = {
//   translates: {
//     cn: '生化情人'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 生化威胁: Typings.GameInfo = {
//   translates: {
//     cn: '生化威胁'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 生死决斗2097: Typings.GameInfo = {
//   translates: {
//     cn: '生死决斗2097'
//   },
//   type: 'ACT',
//   command: [
//     "omf"
//   ]
// }

// export const 生物游戏: Typings.GameInfo = {
//   translates: {
//     cn: '生物游戏'
//   },
//   type: 'PUZ',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 圣城劫: Typings.GameInfo = {
//   translates: {
//     cn: '圣城劫'
//   },
//   type: 'RPG',
//   command: [
//     "drago.bat"
//   ]
// }

// export const 圣诞残杀: Typings.GameInfo = {
//   translates: {
//     cn: '圣诞残杀'
//   },
//   type: 'ACT',
//   command: [
//     "cc.exe"
//   ]
// }

// export const 圣诞小旅鼠: Typings.GameInfo = {
//   translates: {
//     cn: '圣诞小旅鼠'
//   },
//   type: 'PUZ',
//   command: [
//     "vgalemmi"
//   ]
// }

// export const 圣光岛: Typings.GameInfo = {
//   translates: {
//     cn: '圣光岛'
//   },
//   type: 'RPG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 圣经队长: Typings.GameInfo = {
//   translates: {
//     cn: '圣经队长'
//   },
//   type: 'ACT',
//   command: [
//     "cb"
//   ]
// }

// export const 圣少女战队: Typings.GameInfo = {
//   translates: {
//     cn: '圣少女战队'
//   },
//   type: 'SPG',
//   command: [
//     "san.exe"
//   ]
// }

// export const 圣少女战队2: Typings.GameInfo = {
//   translates: {
//     cn: '圣少女战队2'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 圣少女战队3: Typings.GameInfo = {
//   translates: {
//     cn: '圣少女战队3'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 圣域传说: Typings.GameInfo = {
//   translates: {
//     cn: '圣域传说'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 圣战风云录: Typings.GameInfo = {
//   translates: {
//     cn: '圣战风云录'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 圣战录: Typings.GameInfo = {
//   translates: {
//     cn: '圣战录'
//   },
//   type: 'AVG',
//   command: [
//     "ash.bat"
//   ]
// }

// export const 圣战物语: Typings.GameInfo = {
//   translates: {
//     cn: '圣战物语'
//   },
//   type: 'SLG',
//   command: [
//     "ds.bat"
//   ]
// }

// export const 失控驾驶2: Typings.GameInfo = {
//   translates: {
//     cn: '失控驾驶2'
//   },
//   type: 'SIM',
//   command: [
//     "ff.bat"
//   ]
// }

// export const 失落的大地: Typings.GameInfo = {
//   translates: {
//     cn: '失落的大地'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 失落的封印: Typings.GameInfo = {
//   translates: {
//     cn: '失落的封印'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 失落的氏族: Typings.GameInfo = {
//   translates: {
//     cn: '失落的氏族'
//   },
//   type: 'AVG',
//   command: [
//     "tribe.exe"
//   ]
// }

// export const 失落的王国: Typings.GameInfo = {
//   translates: {
//     cn: '失落的王国'
//   },
//   type: 'AVG',
//   command: [
//     "armaeth.bat"
//   ]
// }

// export const 失落的维京人: Typings.GameInfo = {
//   translates: {
//     cn: '失落的维京人'
//   },
//   type: 'ACT',
//   command: [
//     "vikings"
//   ]
// }

// export const 失落的维京人2: Typings.GameInfo = {
//   translates: {
//     cn: '失落的维京人2'
//   },
//   type: 'ACT',
//   command: [
//     "lv2.bat"
//   ]
// }

// export const 失落之地英雄时代: Typings.GameInfo = {
//   translates: {
//     cn: '失落之地英雄时代'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 狮子安必斯: Typings.GameInfo = {
//   translates: {
//     cn: '狮子安必斯'
//   },
//   type: 'ACT',
//   command: [
//     "abmis"
//   ]
// }

// export const 狮子王: Typings.GameInfo = {
//   translates: {
//     cn: '狮子王'
//   },
//   type: 'ACT',
//   command: [
//     "LIONKING.EXE"
//   ]
// }

// export const 十六张姬麻将: Typings.GameInfo = {
//   translates: {
//     cn: '十六张姬麻将'
//   },
//   type: 'HGA',
//   command: [
//     "GMJ.BAT"
//   ]
// }

// export const 十面埋伏: Typings.GameInfo = {
//   translates: {
//     cn: '十面埋伏'
//   },
//   type: 'RTS',
//   command: [
//     "ambush"
//   ]
// }

// export const 十字军权利之战: Typings.GameInfo = {
//   translates: {
//     cn: '十字军权利之战'
//   },
//   type: 'SLG',
//   command: [
//     "crusade.com"
//   ]
// }

// export const 石堡: Typings.GameInfo = {
//   translates: {
//     cn: '石堡'
//   },
//   type: 'RPG',
//   command: [
//     "sk.exe"
//   ]
// }

// export const 石器时代: Typings.GameInfo = {
//   translates: {
//     cn: '石器时代'
//   },
//   type: 'PUZ',
//   command: [
//     "stone.bat"
//   ]
// }

// export const 石与钻: Typings.GameInfo = {
//   translates: {
//     cn: '石与钻'
//   },
//   type: 'PUZ',
//   command: [
//     "rocks"
//   ]
// }

// export const 石中剑的复仇: Typings.GameInfo = {
//   translates: {
//     cn: '石中剑的复仇'
//   },
//   type: 'SIM',
//   command: [
//     "vex.exe"
//   ]
// }

// export const 时空悖论: Typings.GameInfo = {
//   translates: {
//     cn: '时空悖论'
//   },
//   type: 'AVG',
//   command: [
//     "start"
//   ]
// }

// export const 时空游侠: Typings.GameInfo = {
//   translates: {
//     cn: '时空游侠'
//   },
//   type: 'ACT',
//   command: [
//     "timeco"
//   ]
// }

// export const 时空迷航: Typings.GameInfo = {
//   translates: {
//     cn: '时空迷航'
//   },
//   type: 'AVG',
//   command: [
//     "lost.exe"
//   ]
// }

// export const 时空杀戮: Typings.GameInfo = {
//   translates: {
//     cn: '时空杀戮'
//   },
//   type: 'ACT',
//   command: [
//     "ts.exe"
//   ]
// }

// export const 时空特勤组: Typings.GameInfo = {
//   translates: {
//     cn: '时空特勤组'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 时空异变: Typings.GameInfo = {
//   translates: {
//     cn: '时空异变'
//   },
//   type: 'RPG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 时空战士: Typings.GameInfo = {
//   translates: {
//     cn: '时空战士'
//   },
//   type: 'ACT',
//   command: [
//     "HARRIER"
//   ]
// }

// export const 实体: Typings.GameInfo = {
//   translates: {
//     cn: '实体'
//   },
//   type: 'ACT',
//   command: [
//     "ENTITY.BAT"
//   ]
// }

// export const 史诗弹珠台: Typings.GameInfo = {
//   translates: {
//     cn: '史诗弹珠台'
//   },
//   type: 'PUZ',
//   command: [
//     "pinball"
//   ]
// }

// export const 史诗星战: Typings.GameInfo = {
//   translates: {
//     cn: '史诗星战'
//   },
//   type: 'SIM',
//   command: [
//     "epic"
//   ]
// }

// export const 世纪末商业革命: Typings.GameInfo = {
//   translates: {
//     cn: '世纪末商业革命'
//   },
//   type: 'SIM',
//   command: [
//     "tsc.bat"
//   ]
// }

// export const 世界大战: Typings.GameInfo = {
//   translates: {
//     cn: '世界大战'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 世界拳击经理: Typings.GameInfo = {
//   translates: {
//     cn: '世界拳击经理'
//   },
//   type: 'SIM',
//   command: [
//     "boxing"
//   ]
// }

// export const 世界摔角联盟: Typings.GameInfo = {
//   translates: {
//     cn: '世界摔角联盟'
//   },
//   type: 'ACT',
//   command: [
//     "wwfiyh"
//   ]
// }

// export const 世界巡回车赛2: Typings.GameInfo = {
//   translates: {
//     cn: '世界巡回车赛2'
//   },
//   type: 'SIM',
//   command: [
//     "GP2.EXE"
//   ]
// }

// export const 世界巡回公路赛: Typings.GameInfo = {
//   translates: {
//     cn: '世界巡回公路赛'
//   },
//   type: 'SIM',
//   command: [
//     "go.bat"
//   ]
// }

// export const 世界巡回赛车: Typings.GameInfo = {
//   translates: {
//     cn: '世界巡回赛车'
//   },
//   type: 'SIM',
//   command: [
//     "f1gp.bat"
//   ]
// }

// export const 势不两立: Typings.GameInfo = {
//   translates: {
//     cn: '势不两立'
//   },
//   type: 'RPG',
//   command: [
//     "badb"
//   ]
// }

// export const 试验驾驶: Typings.GameInfo = {
//   translates: {
//     cn: '试验驾驶'
//   },
//   type: 'SIM',
//   command: [
//     "runme"
//   ]
// }

// export const 试验驾驶2: Typings.GameInfo = {
//   translates: {
//     cn: '试验驾驶2'
//   },
//   type: 'SIM',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 试验驾驶3: Typings.GameInfo = {
//   translates: {
//     cn: '试验驾驶3'
//   },
//   type: 'SIM',
//   command: [
//     "td3"
//   ]
// }

// export const 首饰和盔甲: Typings.GameInfo = {
//   translates: {
//     cn: '首饰和盔甲'
//   },
//   type: 'RPG',
//   command: [
//     "aa.bat"
//   ]
// }

// export const 首席执行官: Typings.GameInfo = {
//   translates: {
//     cn: '首席执行官'
//   },
//   type: 'SIM',
//   command: [
//     "A4.BAT"
//   ]
// }

// export const 狩魔猎人: Typings.GameInfo = {
//   translates: {
//     cn: '狩魔猎人'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.exe"
//   ]
// }

// export const 兽乡守卫者: Typings.GameInfo = {
//   translates: {
//     cn: '兽乡守卫者'
//   },
//   type: 'RPG',
//   command: [
//     "LG.BAT"
//   ]
// }

// export const 兽爪快打: Typings.GameInfo = {
//   translates: {
//     cn: '兽爪快打'
//   },
//   type: 'ACT',
//   command: [
//     "brutal"
//   ]
// }

// export const 舒克达的魔法城堡: Typings.GameInfo = {
//   translates: {
//     cn: '舒克达的魔法城堡'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 蜀山剑侠传之紫菁双剑录: Typings.GameInfo = {
//   translates: {
//     cn: '蜀山剑侠传之紫菁双剑录'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 束缚之馆: Typings.GameInfo = {
//   translates: {
//     cn: '束缚之馆'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 数学大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '数学大冒险'
//   },
//   type: 'PUZ',
//   command: [
//     "run.bat"
//   ]
// }

// export const 数学大作战: Typings.GameInfo = {
//   translates: {
//     cn: '数学大作战'
//   },
//   type: 'PUZ',
//   command: [
//     "MEGAMATH.EXE"
//   ]
// }

// export const 摔角联盟1995: Typings.GameInfo = {
//   translates: {
//     cn: '摔角联盟1995'
//   },
//   type: 'ACT',
//   command: [
//     "wwf"
//   ]
// }

// export const 双截龙: Typings.GameInfo = {
//   translates: {
//     cn: '双截龙'
//   },
//   type: 'ACT',
//   command: [
//     "dragon.bat"
//   ]
// }

// export const 双截龙2: Typings.GameInfo = {
//   translates: {
//     cn: '双截龙2'
//   },
//   type: 'ACT',
//   command: [
//     "dragon.exe"
//   ]
// }

// export const 双截龙3: Typings.GameInfo = {
//   translates: {
//     cn: '双截龙3'
//   },
//   type: 'ACT',
//   command: [
//     "dd3.exe"
//   ]
// }

// export const 双陆棋: Typings.GameInfo = {
//   translates: {
//     cn: '双陆棋'
//   },
//   type: 'PUZ',
//   command: [
//     "ugam"
//   ]
// }

// export const 双子城命运: Typings.GameInfo = {
//   translates: {
//     cn: '双子城命运'
//   },
//   type: 'RPG',
//   command: [
//     "twinion.exe"
//   ]
// }

// export const 双子星传奇／大小不良: Typings.GameInfo = {
//   translates: {
//     cn: '双子星传奇/大小不良'
//   },
//   type: 'AVG',
//   command: [
//     "RELENT.EXE"
//   ]
// }

// export const 双子星传奇2: Typings.GameInfo = {
//   translates: {
//     cn: '双子星传奇2'
//   },
//   type: 'AVG',
//   command: [
//     "lba2"
//   ]
// }

// export const 谁陷害了兔子罗杰: Typings.GameInfo = {
//   translates: {
//     cn: '谁陷害了兔子罗杰'
//   },
//   type: 'ACT',
//   command: [
//     "start"
//   ]
// }

// export const 水管工: Typings.GameInfo = {
//   translates: {
//     cn: '水管工'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 水管马里奥: Typings.GameInfo = {
//   translates: {
//     cn: '水管马里奥'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 水果大亨: Typings.GameInfo = {
//   translates: {
//     cn: '水果大亨'
//   },
//   type: 'PUZ',
//   command: [
//     "fruit.exe"
//   ]
// }

// export const 水浒传: Typings.GameInfo = {
//   translates: {
//     cn: '水浒传'
//   },
//   type: 'SLG',
//   command: [
//     "koei.bat"
//   ]
// }

// export const 水浒传少年英雄: Typings.GameInfo = {
//   translates: {
//     cn: '水浒传少年英雄'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 水浒传之梁山英雄: Typings.GameInfo = {
//   translates: {
//     cn: '水浒传之梁山英雄'
//   },
//   type: 'ACT',
//   command: [
//     "water.exe"
//   ]
// }

// export const 水浒英雄传之火之魂: Typings.GameInfo = {
//   translates: {
//     cn: '水浒英雄传之火之魂'
//   },
//   type: 'AVG',
//   command: [
//     "heroes.exe"
//   ]
// }

// export const 水晶迷宫: Typings.GameInfo = {
//   translates: {
//     cn: '水晶迷宫'
//   },
//   type: 'PUZ',
//   command: [
//     "cmaze.exe"
//   ]
// }

// export const 顺时针谜题: Typings.GameInfo = {
//   translates: {
//     cn: '顺时针谜题'
//   },
//   type: 'PUZ',
//   command: [
//     "clock.bat"
//   ]
// }

// export const 斯大林格勒: Typings.GameInfo = {
//   translates: {
//     cn: '斯大林格勒'
//   },
//   type: 'SLG',
//   command: [
//     "stalin.exe"
//   ]
// }

// export const 斯科奇赛: Typings.GameInfo = {
//   translates: {
//     cn: '斯科奇赛'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 斯特拉七号: Typings.GameInfo = {
//   translates: {
//     cn: '斯特拉七号'
//   },
//   type: 'SIM',
//   command: [
//     "s7.bat"
//   ]
// }

// export const 死亡岛: Typings.GameInfo = {
//   translates: {
//     cn: '死亡岛'
//   },
//   type: 'ACT',
//   command: [
//     "IOD.BAT"
//   ]
// }

// export const 死亡祷告: Typings.GameInfo = {
//   translates: {
//     cn: '死亡祷告'
//   },
//   type: 'ACT',
//   command: [
//     "pray"
//   ]
// }

// export const 死亡飞车: Typings.GameInfo = {
//   translates: {
//     cn: '死亡飞车'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 死亡剧场: Typings.GameInfo = {
//   translates: {
//     cn: '死亡剧场'
//   },
//   type: 'RTS',
//   command: [
//     "tod.exe"
//   ]
// }

// export const 死亡拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: '死亡拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "rally.exe"
//   ]
// }

// export const 死亡骑士: Typings.GameInfo = {
//   translates: {
//     cn: '死亡骑士'
//   },
//   type: 'RPG',
//   command: [
//     "start"
//   ]
// }

// export const 死亡赛车: Typings.GameInfo = {
//   translates: {
//     cn: '死亡赛车'
//   },
//   type: 'SIM',
//   command: [
//     "dracer.exe"
//   ]
// }

// export const 死亡之门: Typings.GameInfo = {
//   translates: {
//     cn: '死亡之门'
//   },
//   type: 'AVG',
//   command: [
//     "dgate"
//   ]
// }

// export const 死亡之夜: Typings.GameInfo = {
//   translates: {
//     cn: '死亡之夜'
//   },
//   type: 'AVG',
//   command: [
//     "don.exe"
//   ]
// }

// export const 死星战将: Typings.GameInfo = {
//   translates: {
//     cn: '死星战将'
//   },
//   type: 'ACT',
//   command: [
//     "!start!"
//   ]
// }

// export const 死刑之剑: Typings.GameInfo = {
//   translates: {
//     cn: '死刑之剑'
//   },
//   type: 'ACT',
//   command: [
//     "db.exe"
//   ]
// }

// export const 四川省2: Typings.GameInfo = {
//   translates: {
//     cn: '四川省2'
//   },
//   type: 'PUZ',
//   command: [
//     "playv.bat"
//   ]
// }

// export const 四川省3: Typings.GameInfo = {
//   translates: {
//     cn: '四川省3'
//   },
//   type: 'PUZ',
//   command: [
//     "TT.EXE"
//   ]
// }

// export const 四海冒险家: Typings.GameInfo = {
//   translates: {
//     cn: '四海冒险家'
//   },
//   type: 'RPG',
//   command: [
//     "VOD.EXE"
//   ]
// }

// export const 四人车赛: Typings.GameInfo = {
//   translates: {
//     cn: '四人车赛'
//   },
//   type: 'SIM',
//   command: [
//     "super"
//   ]
// }

// export const 四人车赛圣诞版: Typings.GameInfo = {
//   translates: {
//     cn: '四人车赛圣诞版'
//   },
//   type: 'SIM',
//   command: [
//     "super"
//   ]
// }

// export const 松鼠奥斯卡: Typings.GameInfo = {
//   translates: {
//     cn: '松鼠奥斯卡'
//   },
//   type: 'ACT',
//   command: [
//     "oscar"
//   ]
// }

// export const 送报童: Typings.GameInfo = {
//   translates: {
//     cn: '送报童'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 速度球: Typings.GameInfo = {
//   translates: {
//     cn: '速度球'
//   },
//   type: 'SIM',
//   command: [
//     "ega"
//   ]
// }

// export const 速度球2: Typings.GameInfo = {
//   translates: {
//     cn: '速度球2'
//   },
//   type: 'SIM',
//   command: [
//     "sb2"
//   ]
// }

// export const 隋唐英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '隋唐英雄传'
//   },
//   type: 'SLG',
//   command: [
//     "TMARK.EXE"
//   ]
// }

// export const 塔罗斯的警觉: Typings.GameInfo = {
//   translates: {
//     cn: '塔罗斯的警觉'
//   },
//   type: 'ACT',
//   command: [
//     "vig1"
//   ]
// }

// export const 台海防卫战: Typings.GameInfo = {
//   translates: {
//     cn: '台海防卫战'
//   },
//   type: 'SLG',
//   command: [
//     "game.bat"
//   ]
// }

// export const 台湾模拟选战: Typings.GameInfo = {
//   translates: {
//     cn: '台湾模拟选战'
//   },
//   type: 'SIM',
//   command: [
//     "play.exe"
//   ]
// }

// export const 太空蝙蝠大战: Typings.GameInfo = {
//   translates: {
//     cn: '太空蝙蝠大战'
//   },
//   type: 'ACT',
//   command: [
//     "bats"
//   ]
// }

// export const 太空第9计划: Typings.GameInfo = {
//   translates: {
//     cn: '太空第9计划'
//   },
//   type: 'AVG',
//   command: [
//     "plan9"
//   ]
// }

// export const 太空计划: Typings.GameInfo = {
//   translates: {
//     cn: '太空计划'
//   },
//   type: 'SIM',
//   command: [
//     "BARIS"
//   ]
// }

// export const 太空鲁宾逊: Typings.GameInfo = {
//   translates: {
//     cn: '太空鲁宾逊'
//   },
//   type: 'RPG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 太空女妖: Typings.GameInfo = {
//   translates: {
//     cn: '太空女妖'
//   },
//   type: 'HGA',
//   command: [
//     "sexvixen"
//   ]
// }

// export const 太空勇士鼠: Typings.GameInfo = {
//   translates: {
//     cn: '太空勇士鼠'
//   },
//   type: 'ACT',
//   command: [
//     "gwr"
//   ]
// }

// export const 太平天国: Typings.GameInfo = {
//   translates: {
//     cn: '太平天国'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 太平洋公爵: Typings.GameInfo = {
//   translates: {
//     cn: '太平洋公爵'
//   },
//   type: 'SIM',
//   command: [
//     "start.exe"
//   ]
// }

// export const 太平洋突击: Typings.GameInfo = {
//   translates: {
//     cn: '太平洋突击'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 太平洋王牌飞行员: Typings.GameInfo = {
//   translates: {
//     cn: '太平洋王牌飞行员'
//   },
//   type: 'SIM',
//   command: [
//     "aces"
//   ]
// }

// export const 太平洋王牌飞行员+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '太平洋王牌飞行员+资料片'
//   },
//   type: 'SIM',
//   command: [
//     "ACES.COM"
//   ]
// }

// export const 泰克战争: Typings.GameInfo = {
//   translates: {
//     cn: '泰克战争'
//   },
//   type: 'ACT',
//   command: [
//     "tekwar"
//   ]
// }

// export const 泰拉之火: Typings.GameInfo = {
//   translates: {
//     cn: '泰拉之火'
//   },
//   type: 'ACT',
//   command: [
//     "tf"
//   ]
// }

// export const 贪食蛇: Typings.GameInfo = {
//   translates: {
//     cn: '贪食蛇'
//   },
//   type: 'ACT',
//   command: [
//     "amazon"
//   ]
// }

// export const 贪欲诉求: Typings.GameInfo = {
//   translates: {
//     cn: '贪欲诉求'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 坦克大决战: Typings.GameInfo = {
//   translates: {
//     cn: '坦克大决战'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 螳螂战机: Typings.GameInfo = {
//   translates: {
//     cn: '螳螂战机'
//   },
//   type: 'SIM',
//   command: [
//     "crack"
//   ]
// }

// export const 逃离地狱: Typings.GameInfo = {
//   translates: {
//     cn: '逃离地狱'
//   },
//   type: 'RPG',
//   command: [
//     "escape.exe"
//   ]
// }

// export const 逃离疯人院: Typings.GameInfo = {
//   translates: {
//     cn: '逃离疯人院'
//   },
//   type: 'AVG',
//   command: [
//     "delirium"
//   ]
// }

// export const 逃离脑博士的城堡: Typings.GameInfo = {
//   translates: {
//     cn: '逃离脑博士的城堡'
//   },
//   type: 'AVG',
//   command: [
//     "brain.exe"
//   ]
// }

// export const 淘金者: Typings.GameInfo = {
//   translates: {
//     cn: '淘金者'
//   },
//   type: 'PUZ',
//   command: [
//     "LODERUNN.EXE"
//   ]
// }

// export const 特工盖之毁灭水晶: Typings.GameInfo = {
//   translates: {
//     cn: '特工盖之毁灭水晶'
//   },
//   type: 'ACT',
//   command: [
//     "guyspy.exe"
//   ]
// }

// export const 特技驾驶员: Typings.GameInfo = {
//   translates: {
//     cn: '特技驾驶员'
//   },
//   type: 'SIM',
//   command: [
//     "stunt.bat"
//   ]
// }

// export const 特技赛车: Typings.GameInfo = {
//   translates: {
//     cn: '特技赛车'
//   },
//   type: 'SIM',
//   command: [
//     "stunt.com"
//   ]
// }

// export const 特技之岛: Typings.GameInfo = {
//   translates: {
//     cn: '特技之岛'
//   },
//   type: 'SIM',
//   command: [
//     "crack"
//   ]
// }

// export const 特警判官: Typings.GameInfo = {
//   translates: {
//     cn: '特警判官'
//   },
//   type: 'ACT',
//   command: [
//     "play"
//   ]
// }

// export const 特蕾莎: Typings.GameInfo = {
//   translates: {
//     cn: '特蕾莎'
//   },
//   type: 'HGA',
//   command: [
//     "TERESA.BAT"
//   ]
// }

// export const 特勤机甲队: Typings.GameInfo = {
//   translates: {
//     cn: '特勤机甲队'
//   },
//   type: 'SPG',
//   command: [
//     "pds"
//   ]
// }

// export const 特勤机甲队2: Typings.GameInfo = {
//   translates: {
//     cn: '特勤机甲队2'
//   },
//   type: 'SPG',
//   command: [
//     "pds2"
//   ]
// }

// export const 特勤机甲队2增强版: Typings.GameInfo = {
//   translates: {
//     cn: '特勤机甲队2增强版'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 特种部队: Typings.GameInfo = {
//   translates: {
//     cn: '特种部队'
//   },
//   type: 'RTS',
//   command: [
//     "FORCES.bat"
//   ]
// }

// export const 提督之决断2: Typings.GameInfo = {
//   translates: {
//     cn: '提督之决断2'
//   },
//   type: 'SLG',
//   command: [
//     "tek2.com"
//   ]
// }

// export const 提尔战机: Typings.GameInfo = {
//   translates: {
//     cn: '提尔战机'
//   },
//   type: 'ACT',
//   command: [
//     "tyrian.exe"
//   ]
// }

// export const 提尔战机2000: Typings.GameInfo = {
//   translates: {
//     cn: '提尔战机2000'
//   },
//   type: 'ACT',
//   command: [
//     "tyrian2k"
//   ]
// }

// export const 天才宝宝大进击: Typings.GameInfo = {
//   translates: {
//     cn: '天才宝宝大进击'
//   },
//   type: 'PUZ',
//   command: [
//     "genius"
//   ]
// }

// export const 天蚕变: Typings.GameInfo = {
//   translates: {
//     cn: '天蚕变'
//   },
//   type: 'HGA',
//   command: [
//     "silk.exe"
//   ]
// }

// export const 天地无用: Typings.GameInfo = {
//   translates: {
//     cn: '天地无用'
//   },
//   type: 'AVG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 天帝之子: Typings.GameInfo = {
//   translates: {
//     cn: '天帝之子'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天龙八部: Typings.GameInfo = {
//   translates: {
//     cn: '天龙八部'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天路赛车: Typings.GameInfo = {
//   translates: {
//     cn: '天路赛车'
//   },
//   type: 'SIM',
//   command: [
//     "skyroads"
//   ]
// }

// export const 天路赛车圣诞版: Typings.GameInfo = {
//   translates: {
//     cn: '天路赛车圣诞版'
//   },
//   type: 'SIM',
//   command: [
//     "skyxmas"
//   ]
// }

// export const 天晴传: Typings.GameInfo = {
//   translates: {
//     cn: '天晴传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天师钟馗: Typings.GameInfo = {
//   translates: {
//     cn: '天师钟馗'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天使Q女学院: Typings.GameInfo = {
//   translates: {
//     cn: '天使Q女学院'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天使帝国2: Typings.GameInfo = {
//   translates: {
//     cn: '天使帝国2'
//   },
//   type: 'SPG',
//   command: [
//     "play"
//   ]
// }

// export const 天使任务: Typings.GameInfo = {
//   translates: {
//     cn: '天使任务'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 天堂和人间: Typings.GameInfo = {
//   translates: {
//     cn: '天堂和人间'
//   },
//   type: 'SIM',
//   command: [
//     "heaven.exe"
//   ]
// }

// export const 天外剑圣录: Typings.GameInfo = {
//   translates: {
//     cn: '天外剑圣录'
//   },
//   type: 'RPG',
//   command: [
//     "game"
//   ]
// }

// export const 天下无敌: Typings.GameInfo = {
//   translates: {
//     cn: '天下无敌'
//   },
//   type: 'ACT',
//   command: [
//     "start"
//   ]
// }

// export const 天下一统: Typings.GameInfo = {
//   translates: {
//     cn: '天下一统'
//   },
//   type: 'SLG',
//   command: [
//     "TG.EXE"
//   ]
// }

// export const 天旋地转: Typings.GameInfo = {
//   translates: {
//     cn: '天旋地转'
//   },
//   type: 'ACT',
//   command: [
//     "descent.bat"
//   ]
// }

// export const 天旋地转2: Typings.GameInfo = {
//   translates: {
//     cn: '天旋地转2'
//   },
//   type: 'ACT',
//   command: [
//     "descent2"
//   ]
// }

// export const 跳跳跳: Typings.GameInfo = {
//   translates: {
//     cn: '跳跳跳'
//   },
//   type: 'ACT',
//   command: [
//     "jump"
//   ]
// }

// export const 铁锤男孩: Typings.GameInfo = {
//   translates: {
//     cn: '铁锤男孩'
//   },
//   type: 'ACT',
//   command: [
//     "dinamic.exe"
//   ]
// }

// export const 铁钩船长: Typings.GameInfo = {
//   translates: {
//     cn: '铁钩船长'
//   },
//   type: 'AVG',
//   command: [
//     "roland"
//   ]
// }

// export const 铁甲神兵: Typings.GameInfo = {
//   translates: {
//     cn: '铁甲神兵'
//   },
//   type: 'SPG',
//   command: [
//     "fmj.exe"
//   ]
// }

// export const 铁甲战舰: Typings.GameInfo = {
//   translates: {
//     cn: '铁甲战舰'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 铁路A计划+资料篇: Typings.GameInfo = {
//   translates: {
//     cn: '铁路A计划+资料篇'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 铁路大亨豪华版: Typings.GameInfo = {
//   translates: {
//     cn: '铁路大亨豪华版'
//   },
//   type: 'SIM',
//   command: [
//     "rrt"
//   ]
// }

// export const 铁锁的星群: Typings.GameInfo = {
//   translates: {
//     cn: '铁锁的星群'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 铁血橄榄球: Typings.GameInfo = {
//   translates: {
//     cn: '铁血橄榄球'
//   },
//   type: 'SIM',
//   command: [
//     "bb.exe"
//   ]
// }

// export const 铁血联盟: Typings.GameInfo = {
//   translates: {
//     cn: '铁血联盟'
//   },
//   type: 'SLG',
//   command: [
//     "ja.exe"
//   ]
// }

// export const 铁血联盟死亡游戏: Typings.GameInfo = {
//   translates: {
//     cn: '铁血联盟死亡游戏'
//   },
//   type: 'SLG',
//   command: [
//     "dg"
//   ]
// }

// export const 铁血农夫1: Typings.GameInfo = {
//   translates: {
//     cn: '铁血农夫1'
//   },
//   type: 'ACT',
//   command: [
//     "setup"
//   ]
// }

// export const 铁血农夫再度出击: Typings.GameInfo = {
//   translates: {
//     cn: '铁血农夫再度出击'
//   },
//   type: 'ACT',
//   command: [
//     "again.bat"
//   ]
// }

// export const 铁血佣兵: Typings.GameInfo = {
//   translates: {
//     cn: '铁血佣兵'
//   },
//   type: 'RPG',
//   command: [
//     "hardnova.bat"
//   ]
// }

// export const 铁血战士2: Typings.GameInfo = {
//   translates: {
//     cn: '铁血战士2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 通道: Typings.GameInfo = {
//   translates: {
//     cn: '通道'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 通路1: Typings.GameInfo = {
//   translates: {
//     cn: '通路1'
//   },
//   type: 'AVG',
//   command: [
//     "gate.exe"
//   ]
// }

// export const 通路2: Typings.GameInfo = {
//   translates: {
//     cn: '通路2'
//   },
//   type: 'AVG',
//   command: [
//     "home.exe"
//   ]
// }

// export const 同级生1: Typings.GameInfo = {
//   translates: {
//     cn: '同级生1'
//   },
//   type: 'HGA',
//   command: [
//     "nanpa.bat"
//   ]
// }

// export const 童话新编: Typings.GameInfo = {
//   translates: {
//     cn: '童话新编'
//   },
//   type: 'AVG',
//   command: [
//     "sierra"
//   ]
// }

// export const 童梦失魂夜／迷儿城: Typings.GameInfo = {
//   translates: {
//     cn: '童梦失魂夜/迷儿城'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 偷金子: Typings.GameInfo = {
//   translates: {
//     cn: '偷金子'
//   },
//   type: 'ACT',
//   command: [
//     "lr.com"
//   ]
// }

// export const 头骨与骷髅十字: Typings.GameInfo = {
//   translates: {
//     cn: '头骨与骷髅十字'
//   },
//   type: 'ACT',
//   command: [
//     "skull"
//   ]
// }

// export const 头号通缉犯: Typings.GameInfo = {
//   translates: {
//     cn: '头号通缉犯'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 秃鹰疑案: Typings.GameInfo = {
//   translates: {
//     cn: '秃鹰疑案'
//   },
//   type: 'AVG',
//   command: [
//     "play"
//   ]
// }

// export const 突击: Typings.GameInfo = {
//   translates: {
//     cn: '突击'
//   },
//   type: 'RTS',
//   command: [
//     "off.exe"
//   ]
// }

// export const 突击美少女: Typings.GameInfo = {
//   translates: {
//     cn: '突击美少女'
//   },
//   type: 'ACT',
//   command: [
//     "tmix.com"
//   ]
// }

// export const 突击士兵: Typings.GameInfo = {
//   translates: {
//     cn: '突击士兵'
//   },
//   type: 'ACT',
//   command: [
//     "assault.bat"
//   ]
// }

// export const 突破2: Typings.GameInfo = {
//   translates: {
//     cn: '突破2'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 突破3: Typings.GameInfo = {
//   translates: {
//     cn: '突破3'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 突袭之翼: Typings.GameInfo = {
//   translates: {
//     cn: '突袭之翼'
//   },
//   type: 'ACT',
//   command: [
//     "awing.exe"
//   ]
// }

// export const 突袭指挥官: Typings.GameInfo = {
//   translates: {
//     cn: '突袭指挥官'
//   },
//   type: 'SIM',
//   command: [
//     "sc"
//   ]
// }

// export const 团聚: Typings.GameInfo = {
//   translates: {
//     cn: '团聚'
//   },
//   type: 'RTS',
//   command: [
//     "start"
//   ]
// }

// export const 吞豆人: Typings.GameInfo = {
//   translates: {
//     cn: '吞豆人'
//   },
//   type: 'ACT',
//   command: [
//     "gobman.exe"
//   ]
// }

// export const 吞食天地1: Typings.GameInfo = {
//   translates: {
//     cn: '吞食天地1'
//   },
//   type: 'RPG',
//   command: [
//     "sango.bat"
//   ]
// }

// export const 吞食天地2: Typings.GameInfo = {
//   translates: {
//     cn: '吞食天地2'
//   },
//   type: 'RPG',
//   command: [
//     "main.exe"
//   ]
// }

// export const 吞食天地3: Typings.GameInfo = {
//   translates: {
//     cn: '吞食天地3'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 吞食天地4: Typings.GameInfo = {
//   translates: {
//     cn: '吞食天地4'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 吞食天地青衫版: Typings.GameInfo = {
//   translates: {
//     cn: '吞食天地青衫版'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 外太空: Typings.GameInfo = {
//   translates: {
//     cn: '外太空'
//   },
//   type: 'SIM',
//   command: [
//     "OUTRIE.EXE"
//   ]
// }

// export const 外星奥林匹克: Typings.GameInfo = {
//   translates: {
//     cn: '外星奥林匹克'
//   },
//   type: 'SIM',
//   command: [
//     "alieno"
//   ]
// }

// export const 外星大富翁: Typings.GameInfo = {
//   translates: {
//     cn: '外星大富翁'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 外星悍将2: Typings.GameInfo = {
//   translates: {
//     cn: '外星悍将2'
//   },
//   type: 'ACT',
//   command: [
//     "TURRICAN.BAT"
//   ]
// }

// export const 湾岸作战: Typings.GameInfo = {
//   translates: {
//     cn: '湾岸作战'
//   },
//   type: 'ACT',
//   command: [
//     "desert.exe"
//   ]
// }

// export const 完美将军2: Typings.GameInfo = {
//   translates: {
//     cn: '完美将军2'
//   },
//   type: 'SLG',
//   command: [
//     "DOSBOX.BAT"
//   ]
// }

// export const 顽皮猫: Typings.GameInfo = {
//   translates: {
//     cn: '顽皮猫'
//   },
//   type: 'ACT',
//   command: [
//     "cat.exe"
//   ]
// }

// export const 顽皮小精灵: Typings.GameInfo = {
//   translates: {
//     cn: '顽皮小精灵'
//   },
//   type: 'AVG',
//   command: [
//     "go.bat"
//   ]
// }

// export const 顽皮小精灵2: Typings.GameInfo = {
//   translates: {
//     cn: '顽皮小精灵2'
//   },
//   type: 'AVG',
//   command: [
//     "go.bat"
//   ]
// }

// export const 顽皮小精灵3: Typings.GameInfo = {
//   translates: {
//     cn: '顽皮小精灵3'
//   },
//   type: 'AVG',
//   command: [
//     "gob3.exe"
//   ]
// }

// export const 万里长城边城奇侠: Typings.GameInfo = {
//   translates: {
//     cn: '万里长城边城奇侠'
//   },
//   type: 'RPG',
//   command: [
//     "play.exe"
//   ]
// }

// export const 亡魂复仇: Typings.GameInfo = {
//   translates: {
//     cn: '亡魂复仇'
//   },
//   type: 'ACT',
//   command: [
//     "cadaver"
//   ]
// }

// export const 王牌潜艇+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '王牌潜艇+资料片'
//   },
//   type: 'SIM',
//   command: [
//     "AOD.BAT"
//   ]
// }

// export const 王位继承者: Typings.GameInfo = {
//   translates: {
//     cn: '王位继承者'
//   },
//   type: 'SLG',
//   command: [
//     "start.exe"
//   ]
// }

// export const 王子传奇: Typings.GameInfo = {
//   translates: {
//     cn: '王子传奇'
//   },
//   type: 'RPG',
//   command: [
//     "prince"
//   ]
// }

// export const 网络拉力赛: Typings.GameInfo = {
//   translates: {
//     cn: '网络拉力赛'
//   },
//   type: 'SIM',
//   command: [
//     "rally.exe"
//   ]
// }

// export const 网球训练: Typings.GameInfo = {
//   translates: {
//     cn: '网球训练'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 危机特勤组: Typings.GameInfo = {
//   translates: {
//     cn: '危机特勤组'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 危险丛林: Typings.GameInfo = {
//   translates: {
//     cn: '危险丛林'
//   },
//   type: 'ACT',
//   command: [
//     "risky"
//   ]
// }

// export const 危险的里克1: Typings.GameInfo = {
//   translates: {
//     cn: '危险的里克1'
//   },
//   type: 'ACT',
//   command: [
//     "rick.com"
//   ]
// }

// export const 危险的里克2: Typings.GameInfo = {
//   translates: {
//     cn: '危险的里克2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 危险街道: Typings.GameInfo = {
//   translates: {
//     cn: '危险街道'
//   },
//   type: 'ACT',
//   command: [
//     "dan"
//   ]
// }

// export const 威利的暑假: Typings.GameInfo = {
//   translates: {
//     cn: '威利的暑假'
//   },
//   type: 'AVG',
//   command: [
//     "willy"
//   ]
// }

// export const 威兹兔: Typings.GameInfo = {
//   translates: {
//     cn: '威兹兔'
//   },
//   type: 'ACT',
//   command: [
//     "go.exe"
//   ]
// }

// export const 微城争霸: Typings.GameInfo = {
//   translates: {
//     cn: '微城争霸'
//   },
//   type: 'RTS',
//   command: [
//     "siege"
//   ]
// }

// export const 微城争霸英版+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '微城争霸英版+资料片'
//   },
//   type: 'RTS',
//   command: [
//     "play.bat"
//   ]
// }

// export const 微城争霸战狗(中文): Typings.GameInfo = {
//   translates: {
//     cn: '微城争霸战狗(中文)'
//   },
//   type: 'RTS',
//   command: [
//     "PLAYC.BAT"
//   ]
// }

// export const 微光2000: Typings.GameInfo = {
//   translates: {
//     cn: '微光2000'
//   },
//   type: 'RPG',
//   command: [
//     "2000.com"
//   ]
// }

// export const 微软飞行模拟+3个资料片: Typings.GameInfo = {
//   translates: {
//     cn: '微软飞行模拟+3个资料片'
//   },
//   type: 'SIM',
//   command: [
//     "FS.BAT"
//   ]
// }

// export const 微软太空模拟: Typings.GameInfo = {
//   translates: {
//     cn: '微软太空模拟'
//   },
//   type: 'SIM',
//   command: [
//     "SS1.EXE"
//   ]
// }

// export const 微型机器1: Typings.GameInfo = {
//   translates: {
//     cn: '微型机器1'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 微型机器2: Typings.GameInfo = {
//   translates: {
//     cn: '微型机器2'
//   },
//   type: 'ACT',
//   command: [
//     "mm2"
//   ]
// }

// export const 韦恩的预言: Typings.GameInfo = {
//   translates: {
//     cn: '韦恩的预言'
//   },
//   type: 'AVG',
//   command: [
//     "go"
//   ]
// }

// export const 围棋大战: Typings.GameInfo = {
//   translates: {
//     cn: '围棋大战'
//   },
//   type: 'PUZ',
//   command: [
//     "GOHERC.BAT"
//   ]
// }

// export const 围棋精华: Typings.GameInfo = {
//   translates: {
//     cn: '围棋精华'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 维京战争: Typings.GameInfo = {
//   translates: {
//     cn: '维京战争'
//   },
//   type: 'SLG',
//   command: [
//     "vikings.exe"
//   ]
// }

// export const 维特自由赛车: Typings.GameInfo = {
//   translates: {
//     cn: '维特自由赛车'
//   },
//   type: 'SIM',
//   command: [
//     "vette.exe"
//   ]
// }

// export const 未来战争时间旅者: Typings.GameInfo = {
//   translates: {
//     cn: '未来战争时间旅者'
//   },
//   type: 'AVG',
//   command: [
//     "fw.exe"
//   ]
// }

// export const 文明: Typings.GameInfo = {
//   translates: {
//     cn: '文明'
//   },
//   type: 'SIM',
//   command: [
//     "CIV.BAT"
//   ]
// }

// export const 我是米恩: Typings.GameInfo = {
//   translates: {
//     cn: '我是米恩'
//   },
//   type: 'ACT',
//   command: [
//     "immeen"
//   ]
// }

// export const 乌龙院: Typings.GameInfo = {
//   translates: {
//     cn: '乌龙院'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 乌托邦国家崛起: Typings.GameInfo = {
//   translates: {
//     cn: '乌托邦国家崛起'
//   },
//   type: 'SLG',
//   command: [
//     "utopia"
//   ]
// }

// export const 巫魔天境: Typings.GameInfo = {
//   translates: {
//     cn: '巫魔天境'
//   },
//   type: 'ACT',
//   command: [
//     "wh.exe"
//   ]
// }

// export const 巫魔天境2: Typings.GameInfo = {
//   translates: {
//     cn: '巫魔天境2'
//   },
//   type: 'ACT',
//   command: [
//     "wh2"
//   ]
// }

// export const 巫师大坩埚: Typings.GameInfo = {
//   translates: {
//     cn: '巫师大坩埚'
//   },
//   type: 'ACT',
//   command: [
//     "loader"
//   ]
// }

// export const 巫师学校1追女记: Typings.GameInfo = {
//   translates: {
//     cn: '巫师学校1追女记'
//   },
//   type: 'AVG',
//   command: [
//     "s101"
//   ]
// }

// export const 巫师学校2入学记: Typings.GameInfo = {
//   translates: {
//     cn: '巫师学校2入学记'
//   },
//   type: 'AVG',
//   command: [
//     "s201"
//   ]
// }

// export const 巫师学校3春假: Typings.GameInfo = {
//   translates: {
//     cn: '巫师学校3春假'
//   },
//   type: 'AVG',
//   command: [
//     "s301"
//   ]
// }

// export const 巫术1: Typings.GameInfo = {
//   translates: {
//     cn: '巫术1'
//   },
//   type: 'RPG',
//   command: [
//     "wiz1.bat"
//   ]
// }

// export const 巫术2: Typings.GameInfo = {
//   translates: {
//     cn: '巫术2'
//   },
//   type: 'RPG',
//   command: [
//     "wiz2.bat"
//   ]
// }

// export const 巫术3: Typings.GameInfo = {
//   translates: {
//     cn: '巫术3'
//   },
//   type: 'RPG',
//   command: [
//     "wiz3"
//   ]
// }

// export const 巫术4: Typings.GameInfo = {
//   translates: {
//     cn: '巫术4'
//   },
//   type: 'RPG',
//   command: [
//     "wiz4.bat"
//   ]
// }

// export const 巫术5: Typings.GameInfo = {
//   translates: {
//     cn: '巫术5'
//   },
//   type: 'RPG',
//   command: [
//     "wiz5.bat"
//   ]
// }

// export const 巫术6: Typings.GameInfo = {
//   translates: {
//     cn: '巫术6'
//   },
//   type: 'RPG',
//   command: [
//     "playbane.bat"
//   ]
// }

// export const 巫术7失落的加帝亚: Typings.GameInfo = {
//   translates: {
//     cn: '巫术7失落的加帝亚'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 无敌飞狼: Typings.GameInfo = {
//   translates: {
//     cn: '无敌飞狼'
//   },
//   type: 'SIM',
//   command: [
//     "start.bat"
//   ]
// }

// export const 无悔的十字军: Typings.GameInfo = {
//   translates: {
//     cn: '无悔的十字军'
//   },
//   type: 'ACT',
//   command: [
//     "crusader"
//   ]
// }

// export const 无悔的十字军2: Typings.GameInfo = {
//   translates: {
//     cn: '无悔的十字军2'
//   },
//   type: 'ACT',
//   command: [
//     "regret"
//   ]
// }

// export const 无尽的黑暗: Typings.GameInfo = {
//   translates: {
//     cn: '无尽的黑暗'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 无尽的黑暗2: Typings.GameInfo = {
//   translates: {
//     cn: '无尽的黑暗2'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 无尽的黑暗3: Typings.GameInfo = {
//   translates: {
//     cn: '无尽的黑暗3'
//   },
//   type: 'AVG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 无尽的野心: Typings.GameInfo = {
//   translates: {
//     cn: '无尽的野心'
//   },
//   type: 'SLG',
//   command: [
//     "id"
//   ]
// }

// export const 无尽空间: Typings.GameInfo = {
//   translates: {
//     cn: '无尽空间'
//   },
//   type: 'SLG',
//   command: [
//     "ultimate.bat"
//   ]
// }

// export const 无名指的教科书: Typings.GameInfo = {
//   translates: {
//     cn: '无名指的教科书'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 无声狂啸: Typings.GameInfo = {
//   translates: {
//     cn: '无声狂啸'
//   },
//   type: 'AVG',
//   command: [
//     "scream.bat"
//   ]
// }

// export const 无限空间: Typings.GameInfo = {
//   translates: {
//     cn: '无限空间'
//   },
//   type: 'SIM',
//   command: [
//     "GENESIA.EXE"
//   ]
// }

// export const 无限制擂台赛: Typings.GameInfo = {
//   translates: {
//     cn: '无限制擂台赛'
//   },
//   type: 'ACT',
//   command: [
//     "kick.exe"
//   ]
// }

// export const 午夜领主: Typings.GameInfo = {
//   translates: {
//     cn: '午夜领主'
//   },
//   type: 'RPG',
//   command: [
//     "midnight"
//   ]
// }

// export const 伍子胥: Typings.GameInfo = {
//   translates: {
//     cn: '伍子胥'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 武道馆: Typings.GameInfo = {
//   translates: {
//     cn: '武道馆'
//   },
//   type: 'ACT',
//   command: [
//     "budo.com"
//   ]
// }

// export const 武姬神传说: Typings.GameInfo = {
//   translates: {
//     cn: '武姬神传说'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 武将争霸: Typings.GameInfo = {
//   translates: {
//     cn: '武将争霸'
//   },
//   type: 'ACT',
//   command: [
//     "play.exe"
//   ]
// }

// export const 武将争霸2: Typings.GameInfo = {
//   translates: {
//     cn: '武将争霸2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 武林奇侠传: Typings.GameInfo = {
//   translates: {
//     cn: '武林奇侠传'
//   },
//   type: 'RPG',
//   command: [
//     "v1"
//   ]
// }

// export const 武装还击: Typings.GameInfo = {
//   translates: {
//     cn: '武装还击'
//   },
//   type: 'ACT',
//   command: [
//     "xs"
//   ]
// }

// export const 武状元黄飞鸿: Typings.GameInfo = {
//   translates: {
//     cn: '武状元黄飞鸿'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 物竞天不择: Typings.GameInfo = {
//   translates: {
//     cn: '物竞天不择'
//   },
//   type: 'SIM',
//   command: [
//     "UNS.EXE"
//   ]
// }

// export const 西楚霸王: Typings.GameInfo = {
//   translates: {
//     cn: '西楚霸王'
//   },
//   type: 'RPG',
//   command: [
//     "wking.exe"
//   ]
// }

// export const 西洋封神榜: Typings.GameInfo = {
//   translates: {
//     cn: '西洋封神榜'
//   },
//   type: 'ACT',
//   command: [
//     "GODS.EXE"
//   ]
// }

// export const 西洋陆军棋: Typings.GameInfo = {
//   translates: {
//     cn: '西洋陆军棋'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 西洋跳棋(共享版): Typings.GameInfo = {
//   translates: {
//     cn: '西洋跳棋(共享版)'
//   },
//   type: 'PUZ',
//   command: [
//     "checkers.exe"
//   ]
// }

// export const 西游记: Typings.GameInfo = {
//   translates: {
//     cn: '西游记'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 西游记外传: Typings.GameInfo = {
//   translates: {
//     cn: '西游记外传'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 吸血鬼之塔: Typings.GameInfo = {
//   translates: {
//     cn: '吸血鬼之塔'
//   },
//   type: 'AVG',
//   command: [
//     "vtower.exe"
//   ]
// }

// export const 蜥蜴超人: Typings.GameInfo = {
//   translates: {
//     cn: '蜥蜴超人'
//   },
//   type: 'PUZ',
//   command: [
//     "lm.exe"
//   ]
// }

// export const 嬉笑春秋: Typings.GameInfo = {
//   translates: {
//     cn: '嬉笑春秋'
//   },
//   type: 'PUZ',
//   command: [
//     "play.exe"
//   ]
// }

// export const 系统震荡: Typings.GameInfo = {
//   translates: {
//     cn: '系统震荡'
//   },
//   type: 'ACT',
//   command: [
//     "sshock"
//   ]
// }

// export const 侠盗猎车手: Typings.GameInfo = {
//   translates: {
//     cn: '侠盗猎车手'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 侠客英雄传: Typings.GameInfo = {
//   translates: {
//     cn: '侠客英雄传'
//   },
//   type: 'RPG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 侠客英雄传3: Typings.GameInfo = {
//   translates: {
//     cn: '侠客英雄传3'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 侠客游2: Typings.GameInfo = {
//   translates: {
//     cn: '侠客游2'
//   },
//   type: 'RPG',
//   command: [
//     "luna2.exe"
//   ]
// }

// export const 侠影记: Typings.GameInfo = {
//   translates: {
//     cn: '侠影记'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 下级生(日): Typings.GameInfo = {
//   translates: {
//     cn: '下级生(日)'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 夏日物语: Typings.GameInfo = {
//   translates: {
//     cn: '夏日物语'
//   },
//   type: 'AVG',
//   command: [
//     "summer.bat"
//   ]
// }

// export const 仙剑奇侠传光盘版: Typings.GameInfo = {
//   translates: {
//     cn: '仙剑奇侠传光盘版'
//   },
//   type: 'RPG',
//   command: [
//     "pal"
//   ]
// }

// export const 仙剑奇侠传加强版: Typings.GameInfo = {
//   translates: {
//     cn: '仙剑奇侠传加强版'
//   },
//   type: 'RPG',
//   command: [
//     "pal!.exe"
//   ]
// }

// export const 仙剑奇侠传梦幻版: Typings.GameInfo = {
//   translates: {
//     cn: '仙剑奇侠传梦幻版'
//   },
//   type: 'RPG',
//   command: [
//     "pal!.exe"
//   ]
// }

// export const 仙境传奇1: Typings.GameInfo = {
//   translates: {
//     cn: '仙境传奇1'
//   },
//   type: 'RPG',
//   command: [
//     "FTE"
//   ]
// }

// export const 仙境传奇2亡者之庁: Typings.GameInfo = {
//   translates: {
//     cn: '仙境传奇2亡者之庁'
//   },
//   type: 'RPG',
//   command: [
//     "dosbox.bat"
//   ]
// }

// export const 氙星异形: Typings.GameInfo = {
//   translates: {
//     cn: '氙星异形'
//   },
//   type: 'ACT',
//   command: [
//     "xenon.bat"
//   ]
// }

// export const 氙星异形2: Typings.GameInfo = {
//   translates: {
//     cn: '氙星异形2'
//   },
//   type: 'ACT',
//   command: [
//     "xenon2"
//   ]
// }

// export const 线索: Typings.GameInfo = {
//   translates: {
//     cn: '线索'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 陷害之人: Typings.GameInfo = {
//   translates: {
//     cn: '陷害之人'
//   },
//   type: 'ACT',
//   command: [
//     "framed"
//   ]
// }

// export const 香蕉俱乐部: Typings.GameInfo = {
//   translates: {
//     cn: '香蕉俱乐部'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 项刘记: Typings.GameInfo = {
//   translates: {
//     cn: '项刘记'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 象棋大师3将族: Typings.GameInfo = {
//   translates: {
//     cn: '象棋大师3将族'
//   },
//   type: 'PUZ',
//   command: [
//     "cch.exe"
//   ]
// }

// export const 象棋俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '象棋俄罗斯'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 消防队: Typings.GameInfo = {
//   translates: {
//     cn: '消防队'
//   },
//   type: 'SIM',
//   command: [
//     "fireteam"
//   ]
// }

// export const 嚣张拳王: Typings.GameInfo = {
//   translates: {
//     cn: '嚣张拳王'
//   },
//   type: 'ACT',
//   command: [
//     "boxe"
//   ]
// }

// export const 小丑荷米: Typings.GameInfo = {
//   translates: {
//     cn: '小丑荷米'
//   },
//   type: 'AVG',
//   command: [
//     "homey"
//   ]
// }

// export const 小恶魔: Typings.GameInfo = {
//   translates: {
//     cn: '小恶魔'
//   },
//   type: 'AVG',
//   command: [
//     "divil.bat"
//   ]
// }

// export const 小飞侠: Typings.GameInfo = {
//   translates: {
//     cn: '小飞侠'
//   },
//   type: 'AVG',
//   command: [
//     "pan.exe"
//   ]
// }

// export const 小鬼当家: Typings.GameInfo = {
//   translates: {
//     cn: '小鬼当家'
//   },
//   type: 'ACT',
//   command: [
//     "ha.exe"
//   ]
// }

// export const 小鬼当家2: Typings.GameInfo = {
//   translates: {
//     cn: '小鬼当家2'
//   },
//   type: 'ACT',
//   command: [
//     "ha2.exe"
//   ]
// }

// export const 小惠的性知识: Typings.GameInfo = {
//   translates: {
//     cn: '小惠的性知识'
//   },
//   type: 'HGA',
//   command: [
//     "sex"
//   ]
// }

// export const 小精灵历险: Typings.GameInfo = {
//   translates: {
//     cn: '小精灵历险'
//   },
//   type: 'ACT',
//   command: [
//     "pee.bat"
//   ]
// }

// export const 小辣椒时空之旅: Typings.GameInfo = {
//   translates: {
//     cn: '小辣椒时空之旅'
//   },
//   type: 'AVG',
//   command: [
//     "pepper.bat"
//   ]
// }

// export const 小旅鼠俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '小旅鼠俄罗斯'
//   },
//   type: 'PUZ',
//   command: [
//     "lemris"
//   ]
// }

// export const 小蜜蜂: Typings.GameInfo = {
//   translates: {
//     cn: '小蜜蜂'
//   },
//   type: 'ACT',
//   command: [
//     "galaxia.bat"
//   ]
// }

// export const 小蜜蜂初代: Typings.GameInfo = {
//   translates: {
//     cn: '小蜜蜂初代'
//   },
//   type: 'ACT',
//   command: [
//     "inv78"
//   ]
// }

// export const 小魔怪2: Typings.GameInfo = {
//   translates: {
//     cn: '小魔怪2'
//   },
//   type: 'ACT',
//   command: [
//     "gremlins"
//   ]
// }

// export const 小魔星／蜘蛛恐惧症: Typings.GameInfo = {
//   translates: {
//     cn: '小魔星/蜘蛛恐惧症'
//   },
//   type: 'ACT',
//   command: [
//     "spider.exe"
//   ]
// }

// export const 小朋友齐打交: Typings.GameInfo = {
//   translates: {
//     cn: '小朋友齐打交'
//   },
//   type: 'ACT',
//   command: [
//     "lf1.bat"
//   ]
// }

// export const 小人物狂想曲: Typings.GameInfo = {
//   translates: {
//     cn: '小人物狂想曲'
//   },
//   type: 'AVG',
//   command: [
//     "king.bat"
//   ]
// }

// export const 小沙弥: Typings.GameInfo = {
//   translates: {
//     cn: '小沙弥'
//   },
//   type: 'RPG',
//   command: [
//     "game"
//   ]
// }

// export const 小妖精: Typings.GameInfo = {
//   translates: {
//     cn: '小妖精'
//   },
//   type: 'ACT',
//   command: [
//     "elf"
//   ]
// }

// export const 校园大富翁: Typings.GameInfo = {
//   translates: {
//     cn: '校园大富翁'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 笑傲江湖: Typings.GameInfo = {
//   translates: {
//     cn: '笑傲江湖'
//   },
//   type: 'RPG',
//   command: [
//     "SA"
//   ]
// }

// export const 邪灵世纪: Typings.GameInfo = {
//   translates: {
//     cn: '邪灵世纪'
//   },
//   type: 'RPG',
//   command: [
//     "play"
//   ]
// }

// export const 邪神: Typings.GameInfo = {
//   translates: {
//     cn: '邪神'
//   },
//   type: 'RPG',
//   command: [
//     "play"
//   ]
// }

// export const 邪神传说: Typings.GameInfo = {
//   translates: {
//     cn: '邪神传说'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 邪神大地: Typings.GameInfo = {
//   translates: {
//     cn: '邪神大地'
//   },
//   type: 'RPG',
//   command: [
//     "play.exe"
//   ]
// }

// export const 辛迪加战争: Typings.GameInfo = {
//   translates: {
//     cn: '辛迪加战争'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 辛普森大战外星人: Typings.GameInfo = {
//   translates: {
//     cn: '辛普森大战外星人'
//   },
//   type: 'ACT',
//   command: [
//     "simpsons.bat"
//   ]
// }

// export const 辛普森小丑屋: Typings.GameInfo = {
//   translates: {
//     cn: '辛普森小丑屋'
//   },
//   type: 'ACT',
//   command: [
//     "krusty.bat"
//   ]
// }

// export const 辛普森一家: Typings.GameInfo = {
//   translates: {
//     cn: '辛普森一家'
//   },
//   type: 'ACT',
//   command: [
//     "SIMPSONS.BAT"
//   ]
// }

// export const 辛普森一家2古怪之屋: Typings.GameInfo = {
//   translates: {
//     cn: '辛普森一家2古怪之屋'
//   },
//   type: 'ACT',
//   command: [
//     "S.BAT"
//   ]
// }

// export const 新狼人摩天楼: Typings.GameInfo = {
//   translates: {
//     cn: '新狼人摩天楼'
//   },
//   type: 'ACT',
//   command: [
//     "play"
//   ]
// }

// export const 新美女拳: Typings.GameInfo = {
//   translates: {
//     cn: '新美女拳'
//   },
//   type: 'HGA',
//   command: [
//     "beauty.exe"
//   ]
// }

// export const 新世纪兴亡史: Typings.GameInfo = {
//   translates: {
//     cn: '新世纪兴亡史'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 新世界征服者: Typings.GameInfo = {
//   translates: {
//     cn: '新世界征服者'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 新星9龙机归来: Typings.GameInfo = {
//   translates: {
//     cn: '新星9龙机归来'
//   },
//   type: 'SIM',
//   command: [
//     "nova"
//   ]
// }

// export const 信长之野望: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 信长之野望2: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望2'
//   },
//   type: 'SLG',
//   command: [
//     "koei.com"
//   ]
// }

// export const 信长之野望4: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望4'
//   },
//   type: 'SLG',
//   command: [
//     "main.exe"
//   ]
// }

// export const 信长之野望5: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望5'
//   },
//   type: 'SLG',
//   command: [
//     "koei.com"
//   ]
// }

// export const 信长之野望6: Typings.GameInfo = {
//   translates: {
//     cn: '信长之野望6'
//   },
//   type: 'SLG',
//   command: [
//     "tenshou.com"
//   ]
// }

// export const 星尘: Typings.GameInfo = {
//   translates: {
//     cn: '星尘'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 星城绿洲计划: Typings.GameInfo = {
//   translates: {
//     cn: '星城绿洲计划'
//   },
//   type: 'SIM',
//   command: [
//     "oasis"
//   ]
// }

// export const 星河舰长历险记: Typings.GameInfo = {
//   translates: {
//     cn: '星河舰长历险记'
//   },
//   type: 'SIM',
//   command: [
//     "starship.com"
//   ]
// }

// export const 星际霸主: Typings.GameInfo = {
//   translates: {
//     cn: '星际霸主'
//   },
//   type: 'SLG',
//   command: [
//     "start"
//   ]
// }

// export const 星际航舰: Typings.GameInfo = {
//   translates: {
//     cn: '星际航舰'
//   },
//   type: 'RPG',
//   command: [
//     "starflt.com"
//   ]
// }

// export const 星际联盟: Typings.GameInfo = {
//   translates: {
//     cn: '星际联盟'
//   },
//   type: 'SLG',
//   command: [
//     "fragile.exe"
//   ]
// }

// export const 星际迷航裁决仪式: Typings.GameInfo = {
//   translates: {
//     cn: '星际迷航裁决仪式'
//   },
//   type: 'AVG',
//   command: [
//     "rites.exe"
//   ]
// }

// export const 星际炮手: Typings.GameInfo = {
//   translates: {
//     cn: '星际炮手'
//   },
//   type: 'ACT',
//   command: [
//     "stargun.exe"
//   ]
// }

// export const 星际调查局: Typings.GameInfo = {
//   translates: {
//     cn: '星际调查局'
//   },
//   type: 'AVG',
//   command: [
//     "bat.exe"
//   ]
// }

// export const 星际调查局2: Typings.GameInfo = {
//   translates: {
//     cn: '星际调查局2'
//   },
//   type: 'AVG',
//   command: [
//     "bat2.bat"
//   ]
// }

// export const 星际统治者: Typings.GameInfo = {
//   translates: {
//     cn: '星际统治者'
//   },
//   type: 'SLG',
//   command: [
//     "imperium"
//   ]
// }

// export const 星际游骑兵: Typings.GameInfo = {
//   translates: {
//     cn: '星际游骑兵'
//   },
//   type: 'SIM',
//   command: [
//     "srangers.bat"
//   ]
// }

// export const 星际之锤: Typings.GameInfo = {
//   translates: {
//     cn: '星际之锤'
//   },
//   type: 'ACT',
//   command: [
//     "hammer.exe"
//   ]
// }

// export const 星球大战X战机: Typings.GameInfo = {
//   translates: {
//     cn: '星球大战X战机'
//   },
//   type: 'SIM',
//   command: [
//     "bwing"
//   ]
// }

// export const 星球大战暗影力量: Typings.GameInfo = {
//   translates: {
//     cn: '星球大战暗影力量'
//   },
//   type: 'ACT',
//   command: [
//     "dark.exe"
//   ]
// }

// export const 星球大战国际象棋: Typings.GameInfo = {
//   translates: {
//     cn: '星球大战国际象棋'
//   },
//   type: 'PUZ',
//   command: [
//     "swc.exe"
//   ]
// }

// export const 星球大战绝地反击: Typings.GameInfo = {
//   translates: {
//     cn: '星球大战绝地反击'
//   },
//   type: 'ACT',
//   command: [
//     "ssw.exe"
//   ]
// }

// export const 星球大战钛战机: Typings.GameInfo = {
//   translates: {
//     cn: '星球大战钛战机'
//   },
//   type: 'SIM',
//   command: [
//     "TIE.EXE"
//   ]
// }

// export const 星球裂痕: Typings.GameInfo = {
//   translates: {
//     cn: '星球裂痕'
//   },
//   type: 'ACT',
//   command: [
//     "rift"
//   ]
// }

// export const 星球突击: Typings.GameInfo = {
//   translates: {
//     cn: '星球突击'
//   },
//   type: 'ACT',
//   command: [
//     "planet.bat"
//   ]
// }

// export const 星球之火: Typings.GameInfo = {
//   translates: {
//     cn: '星球之火'
//   },
//   type: 'ACT',
//   command: [
//     "starfire.com"
//   ]
// }

// export const 星球指挥革命: Typings.GameInfo = {
//   translates: {
//     cn: '星球指挥革命'
//   },
//   type: 'RTS',
//   command: [
//     "starcom.exe"
//   ]
// }

// export const 星世纪战将: Typings.GameInfo = {
//   translates: {
//     cn: '星世纪战将'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 星月奇缘: Typings.GameInfo = {
//   translates: {
//     cn: '星月奇缘'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 杏林也疯狂(主题医院台版): Typings.GameInfo = {
//   translates: {
//     cn: '杏林也疯狂(主题医院台版)'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 幸福人生: Typings.GameInfo = {
//   translates: {
//     cn: '幸福人生'
//   },
//   type: 'PUZ',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 幸运赌场: Typings.GameInfo = {
//   translates: {
//     cn: '幸运赌场'
//   },
//   type: 'PUZ',
//   command: [
//     "BTH.EXE"
//   ]
// }

// export const 性别战争: Typings.GameInfo = {
//   translates: {
//     cn: '性别战争'
//   },
//   type: 'SLG',
//   command: [
//     "gw.bat"
//   ]
// }

// export const 性感俄罗斯: Typings.GameInfo = {
//   translates: {
//     cn: '性感俄罗斯'
//   },
//   type: 'HGA',
//   command: [
//     "sext.bat"
//   ]
// }

// export const 性感机器: Typings.GameInfo = {
//   translates: {
//     cn: '性感机器'
//   },
//   type: 'HGA',
//   command: [
//     "sexy"
//   ]
// }

// export const 性感战士: Typings.GameInfo = {
//   translates: {
//     cn: '性感战士'
//   },
//   type: 'HGA',
//   command: [
//     "sexy.exe"
//   ]
// }

// export const 熊猫大进击: Typings.GameInfo = {
//   translates: {
//     cn: '熊猫大进击'
//   },
//   type: 'PUZ',
//   command: [
//     "run.exe"
//   ]
// }

// export const 虚幻之地: Typings.GameInfo = {
//   translates: {
//     cn: '虚幻之地'
//   },
//   type: 'RPG',
//   command: [
//     "run.bat"
//   ]
// }

// export const 虚拟高尔夫: Typings.GameInfo = {
//   translates: {
//     cn: '虚拟高尔夫'
//   },
//   type: 'SIM',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 虚拟桌球: Typings.GameInfo = {
//   translates: {
//     cn: '虚拟桌球'
//   },
//   type: 'PUZ',
//   command: [
//     "pool.exe"
//   ]
// }

// export const 轩辕剑外传枫之舞: Typings.GameInfo = {
//   translates: {
//     cn: '轩辕剑外传枫之舞'
//   },
//   type: 'RPG',
//   command: [
//     "swda"
//   ]
// }

// export const 轩辕圣战录: Typings.GameInfo = {
//   translates: {
//     cn: '轩辕圣战录'
//   },
//   type: 'SPG',
//   command: [
//     "map.exe"
//   ]
// }

// export const 选举风云: Typings.GameInfo = {
//   translates: {
//     cn: '选举风云'
//   },
//   type: 'SLG',
//   command: [
//     "VOTE.EXE"
//   ]
// }

// export const 学园退魔传: Typings.GameInfo = {
//   translates: {
//     cn: '学园退魔传'
//   },
//   type: 'HGA',
//   command: [
//     "rk.exe"
//   ]
// }

// export const 雪猫: Typings.GameInfo = {
//   translates: {
//     cn: '雪猫'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 雪中出击: Typings.GameInfo = {
//   translates: {
//     cn: '雪中出击'
//   },
//   type: 'SIM',
//   command: [
//     "strike.exe"
//   ]
// }

// export const 血巢: Typings.GameInfo = {
//   translates: {
//     cn: '血巢'
//   },
//   type: 'AVG',
//   command: [
//     "bloodnet"
//   ]
// }

// export const 血祭: Typings.GameInfo = {
//   translates: {
//     cn: '血祭'
//   },
//   type: 'ACT',
//   command: [
//     "blood.exe"
//   ]
// }

// export const 血石矮人传奇: Typings.GameInfo = {
//   translates: {
//     cn: '血石矮人传奇'
//   },
//   type: 'RPG',
//   command: [
//     "blood.bat"
//   ]
// }

// export const 血巫: Typings.GameInfo = {
//   translates: {
//     cn: '血巫'
//   },
//   type: 'RPG',
//   command: [
//     "bwych"
//   ]
// }

// export const 血与魔法: Typings.GameInfo = {
//   translates: {
//     cn: '血与魔法'
//   },
//   type: 'RTS',
//   command: [
//     "bam"
//   ]
// }

// export const 寻找激流博士: Typings.GameInfo = {
//   translates: {
//     cn: '寻找激流博士'
//   },
//   type: 'ACT',
//   command: [
//     "riptide.exe"
//   ]
// }

// export const 寻找鲸鱼座: Typings.GameInfo = {
//   translates: {
//     cn: '寻找鲸鱼座'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 亚里士王物语: Typings.GameInfo = {
//   translates: {
//     cn: '亚里士王物语'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 亚马逊女皇之旅: Typings.GameInfo = {
//   translates: {
//     cn: '亚马逊女皇之旅'
//   },
//   type: 'AVG',
//   command: [
//     "AQ.BAT"
//   ]
// }

// export const 亚马逊小道: Typings.GameInfo = {
//   translates: {
//     cn: '亚马逊小道'
//   },
//   type: 'SIM',
//   command: [
//     "amazon.exe"
//   ]
// }

// export const 亚马逊伊甸园守卫者: Typings.GameInfo = {
//   translates: {
//     cn: '亚马逊伊甸园守卫者'
//   },
//   type: 'AVG',
//   command: [
//     "amazon.exe"
//   ]
// }

// export const 亚瑟王豪华版: Typings.GameInfo = {
//   translates: {
//     cn: '亚瑟王豪华版'
//   },
//   type: 'SLG',
//   command: [
//     "kort"
//   ]
// }

// export const 炎龙骑士团: Typings.GameInfo = {
//   translates: {
//     cn: '炎龙骑士团'
//   },
//   type: 'SPG',
//   command: [
//     "fd"
//   ]
// }

// export const 炎龙骑士团2: Typings.GameInfo = {
//   translates: {
//     cn: '炎龙骑士团2'
//   },
//   type: 'SPG',
//   command: [
//     "fd2"
//   ]
// }

// export const 炎龙骑士团外传: Typings.GameInfo = {
//   translates: {
//     cn: '炎龙骑士团外传'
//   },
//   type: 'SPG',
//   command: [
//     "fdps"
//   ]
// }

// export const 眼镜蛇任务: Typings.GameInfo = {
//   translates: {
//     cn: '眼镜蛇任务'
//   },
//   type: 'HGA',
//   command: [
//     "CM.EXE"
//   ]
// }

// export const 妖击队: Typings.GameInfo = {
//   translates: {
//     cn: '妖击队'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 妖魔道: Typings.GameInfo = {
//   translates: {
//     cn: '妖魔道'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 妖塔2189: Typings.GameInfo = {
//   translates: {
//     cn: '妖塔2189'
//   },
//   type: 'HGA',
//   command: [
//     "2189"
//   ]
// }

// export const 摇滚少林之七侠五义: Typings.GameInfo = {
//   translates: {
//     cn: '摇滚少林之七侠五义'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 要塞: Typings.GameInfo = {
//   translates: {
//     cn: '要塞'
//   },
//   type: 'SIM',
//   command: [
//     "strong.exe"
//   ]
// }

// export const 耶基战机: Typings.GameInfo = {
//   translates: {
//     cn: '耶基战机'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 野狼行动: Typings.GameInfo = {
//   translates: {
//     cn: '野狼行动'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 野人生存: Typings.GameInfo = {
//   translates: {
//     cn: '野人生存'
//   },
//   type: 'SIM',
//   command: [
//     "clonk"
//   ]
// }

// export const 野人生存2: Typings.GameInfo = {
//   translates: {
//     cn: '野人生存2'
//   },
//   type: 'SIM',
//   command: [
//     "clonk"
//   ]
// }

// export const 野人生存3: Typings.GameInfo = {
//   translates: {
//     cn: '野人生存3'
//   },
//   type: 'SIM',
//   command: [
//     "clonk"
//   ]
// }

// export const 夜之亡灵: Typings.GameInfo = {
//   translates: {
//     cn: '夜之亡灵'
//   },
//   type: 'AVG',
//   command: [
//     "dylandog.bat"
//   ]
// }

// export const 一步之遥: Typings.GameInfo = {
//   translates: {
//     cn: '一步之遥'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 一级方程式赛车: Typings.GameInfo = {
//   translates: {
//     cn: '一级方程式赛车'
//   },
//   type: 'SIM',
//   command: [
//     "GPU"
//   ]
// }

// export const 一角城市: Typings.GameInfo = {
//   translates: {
//     cn: '一角城市'
//   },
//   type: 'HGA',
//   command: [
//     "dime.bat"
//   ]
// }

// export const 一线生机: Typings.GameInfo = {
//   translates: {
//     cn: '一线生机'
//   },
//   type: 'SLG',
//   command: [
//     "danger.bat"
//   ]
// }

// export const 伊甸风暴: Typings.GameInfo = {
//   translates: {
//     cn: '伊甸风暴'
//   },
//   type: 'RTS',
//   command: [
//     "setup1.bat"
//   ]
// }

// export const 伊贡的假期: Typings.GameInfo = {
//   translates: {
//     cn: '伊贡的假期'
//   },
//   type: 'AVG',
//   command: [
//     "igor"
//   ]
// }

// export const 伊雷查历险记: Typings.GameInfo = {
//   translates: {
//     cn: '伊雷查历险记'
//   },
//   type: 'ACT',
//   command: [
//     "eracha"
//   ]
// }

// export const 伊忍道: Typings.GameInfo = {
//   translates: {
//     cn: '伊忍道'
//   },
//   type: 'RPG',
//   command: [
//     "koei.exe"
//   ]
// }

// export const 伊瑟比斯的阴影: Typings.GameInfo = {
//   translates: {
//     cn: '伊瑟比斯的阴影'
//   },
//   type: 'RPG',
//   command: [
//     "YSERBIUS.exe"
//   ]
// }

// export const 伊苏: Typings.GameInfo = {
//   translates: {
//     cn: '伊苏'
//   },
//   type: 'RPG',
//   command: [
//     "ys.exe"
//   ]
// }

// export const 医生也疯狂: Typings.GameInfo = {
//   translates: {
//     cn: '医生也疯狂'
//   },
//   type: 'SIM',
//   command: [
//     "LND"
//   ]
// }

// export const 医生也疯狂2: Typings.GameInfo = {
//   translates: {
//     cn: '医生也疯狂2'
//   },
//   type: 'SIM',
//   command: [
//     "ld2.exe"
//   ]
// }

// export const 遗迹1死亡守望: Typings.GameInfo = {
//   translates: {
//     cn: '遗迹1死亡守望'
//   },
//   type: 'RPG',
//   command: [
//     "go.bat"
//   ]
// }

// export const 遗迹2邪恶临近: Typings.GameInfo = {
//   translates: {
//     cn: '遗迹2邪恶临近'
//   },
//   type: 'RPG',
//   command: [
//     "begin"
//   ]
// }

// export const 遗作(日）: Typings.GameInfo = {
//   translates: {
//     cn: '遗作(日）'
//   },
//   type: 'HGA',
//   command: [
//     "isaku.bat"
//   ]
// }

// export const 以撒1英雄堡垒: Typings.GameInfo = {
//   translates: {
//     cn: '以撒1英雄堡垒'
//   },
//   type: 'RPG',
//   command: [
//     "start"
//   ]
// }

// export const 以撒2末日使者: Typings.GameInfo = {
//   translates: {
//     cn: '以撒2末日使者'
//   },
//   type: 'RPG',
//   command: [
//     "start"
//   ]
// }

// export const 以撒3永恒之门: Typings.GameInfo = {
//   translates: {
//     cn: '以撒3永恒之门'
//   },
//   type: 'RPG',
//   command: [
//     "start"
//   ]
// }

// export const 亿兆旅行者1: Typings.GameInfo = {
//   translates: {
//     cn: '亿兆旅行者1'
//   },
//   type: 'RPG',
//   command: [
//     "trav"
//   ]
// }

// export const 亿兆旅行者2: Typings.GameInfo = {
//   translates: {
//     cn: '亿兆旅行者2'
//   },
//   type: 'RPG',
//   command: [
//     "mt2.com"
//   ]
// }

// export const 艺妓: Typings.GameInfo = {
//   translates: {
//     cn: '艺妓'
//   },
//   type: 'HGA',
//   command: [
//     "GO.BAT"
//   ]
// }

// export const 异次元之旅: Typings.GameInfo = {
//   translates: {
//     cn: '异次元之旅'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 异次元之旅武者传说: Typings.GameInfo = {
//   translates: {
//     cn: '异次元之旅武者传说'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 异教徒: Typings.GameInfo = {
//   translates: {
//     cn: '异教徒'
//   },
//   type: 'ACT',
//   command: [
//     "heretic.exe"
//   ]
// }

// export const 异教巫师: Typings.GameInfo = {
//   translates: {
//     cn: '异教巫师'
//   },
//   type: 'ACT',
//   command: [
//     "hexen.exe"
//   ]
// }

// export const 异教巫师RPG: Typings.GameInfo = {
//   translates: {
//     cn: '异教巫师RPG'
//   },
//   type: 'RPG',
//   command: [
//     "hexx.bat"
//   ]
// }

// export const 异教巫师黑暗教堂的死神: Typings.GameInfo = {
//   translates: {
//     cn: '异教巫师黑暗教堂的死神'
//   },
//   type: 'ACT',
//   command: [
//     "HEXENDK"
//   ]
// }

// export const 异星病毒: Typings.GameInfo = {
//   translates: {
//     cn: '异星病毒'
//   },
//   type: 'AVG',
//   command: [
//     "av"
//   ]
// }

// export const 异星逻辑: Typings.GameInfo = {
//   translates: {
//     cn: '异星逻辑'
//   },
//   type: 'RPG',
//   command: [
//     "ALIEN.EXE"
//   ]
// }

// export const 异星搜奇: Typings.GameInfo = {
//   translates: {
//     cn: '异星搜奇'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 异星突击: Typings.GameInfo = {
//   translates: {
//     cn: '异星突击'
//   },
//   type: 'SPG',
//   command: [
//     "gc"
//   ]
// }

// export const 异星遗迹: Typings.GameInfo = {
//   translates: {
//     cn: '异星遗迹'
//   },
//   type: 'SLG',
//   command: [
//     "al.exe"
//   ]
// }

// export const 异形巴贡: Typings.GameInfo = {
//   translates: {
//     cn: '异形巴贡'
//   },
//   type: 'AVG',
//   command: [
//     "go"
//   ]
// }

// export const 异形残杀：万圣节哈利: Typings.GameInfo = {
//   translates: {
//     cn: '异形残杀:万圣节哈利'
//   },
//   type: 'ACT',
//   command: [
//     "HARRY.EXE"
//   ]
// }

// export const 异形大进击: Typings.GameInfo = {
//   translates: {
//     cn: '异形大进击'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 异形繁殖: Typings.GameInfo = {
//   translates: {
//     cn: '异形繁殖'
//   },
//   type: 'ACT',
//   command: [
//     "alien.exe"
//   ]
// }

// export const 异形繁殖2: Typings.GameInfo = {
//   translates: {
//     cn: '异形繁殖2'
//   },
//   type: 'ACT',
//   command: [
//     "TA.EXE"
//   ]
// }

// export const 异形方块: Typings.GameInfo = {
//   translates: {
//     cn: '异形方块'
//   },
//   type: 'PUZ',
//   command: [
//     "play"
//   ]
// }

// export const 异形恐惧症: Typings.GameInfo = {
//   translates: {
//     cn: '异形恐惧症'
//   },
//   type: 'ACT',
//   command: [
//     "phobia"
//   ]
// }

// export const 异形三部曲: Typings.GameInfo = {
//   translates: {
//     cn: '异形三部曲'
//   },
//   type: 'ACT',
//   command: [
//     "trilogy"
//   ]
// }

// export const 异形事件: Typings.GameInfo = {
//   translates: {
//     cn: '异形事件'
//   },
//   type: 'AVG',
//   command: [
//     "ai.com"
//   ]
// }

// export const 异形阴谋: Typings.GameInfo = {
//   translates: {
//     cn: '异形阴谋'
//   },
//   type: 'ACT',
//   command: [
//     "acabal.exe"
//   ]
// }

// export const 异域神兵诸神诅咒: Typings.GameInfo = {
//   translates: {
//     cn: '异域神兵诸神诅咒'
//   },
//   type: 'RPG',
//   command: [
//     "game.exe"
//   ]
// }

// export const 益智轨道: Typings.GameInfo = {
//   translates: {
//     cn: '益智轨道'
//   },
//   type: 'PUZ',
//   command: [
//     "loco"
//   ]
// }

// export const 益智问题集: Typings.GameInfo = {
//   translates: {
//     cn: '益智问题集'
//   },
//   type: 'PUZ',
//   command: [
//     "fun.exe"
//   ]
// }

// export const 意大利足球经理: Typings.GameInfo = {
//   translates: {
//     cn: '意大利足球经理'
//   },
//   type: 'SIM',
//   command: [
//     "CM.BAT"
//   ]
// }

// export const 因卡战机: Typings.GameInfo = {
//   translates: {
//     cn: '因卡战机'
//   },
//   type: 'SIM',
//   command: [
//     "inca"
//   ]
// }

// export const 因卡战机2: Typings.GameInfo = {
//   translates: {
//     cn: '因卡战机2'
//   },
//   type: 'SIM',
//   command: [
//     "inca2"
//   ]
// }

// export const 阴谋论: Typings.GameInfo = {
//   translates: {
//     cn: '阴谋论'
//   },
//   type: 'AVG',
//   command: [
//     "kgb.bat"
//   ]
// }

// export const 银多瑞传奇1: Typings.GameInfo = {
//   translates: {
//     cn: '银多瑞传奇1'
//   },
//   type: 'RPG',
//   command: [
//     "sw"
//   ]
// }

// export const 银多瑞传奇2: Typings.GameInfo = {
//   translates: {
//     cn: '银多瑞传奇2'
//   },
//   type: 'RPG',
//   command: [
//     "ch2.bat"
//   ]
// }

// export const 银多瑞传奇3: Typings.GameInfo = {
//   translates: {
//     cn: '银多瑞传奇3'
//   },
//   type: 'RPG',
//   command: [
//     "sw"
//   ]
// }

// export const 银河霸主(猎户座之王): Typings.GameInfo = {
//   translates: {
//     cn: '银河霸主(猎户座之王)'
//   },
//   type: 'SLG',
//   command: [
//     "orion.exe"
//   ]
// }

// export const 银河霸主2: Typings.GameInfo = {
//   translates: {
//     cn: '银河霸主2'
//   },
//   type: 'SLG',
//   command: [
//     "orion2.exe"
//   ]
// }

// export const 银河帝国传: Typings.GameInfo = {
//   translates: {
//     cn: '银河帝国传'
//   },
//   type: 'SLG',
//   command: [
//     "GLH"
//   ]
// }

// export const 银河飞将1: Typings.GameInfo = {
//   translates: {
//     cn: '银河飞将1'
//   },
//   type: 'SIM',
//   command: [
//     "wc.exe"
//   ]
// }

// export const 银河飞将2: Typings.GameInfo = {
//   translates: {
//     cn: '银河飞将2'
//   },
//   type: 'SIM',
//   command: [
//     "wc2"
//   ]
// }

// export const 银河飞将阿曼达: Typings.GameInfo = {
//   translates: {
//     cn: '银河飞将阿曼达'
//   },
//   type: 'SIM',
//   command: [
//     "armada"
//   ]
// }

// export const 银河飞将先锋+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '银河飞将先锋+资料片'
//   },
//   type: 'SIM',
//   command: [
//     "play"
//   ]
// }

// export const 银河飞将训练营: Typings.GameInfo = {
//   translates: {
//     cn: '银河飞将训练营'
//   },
//   type: 'SIM',
//   command: [
//     "wca"
//   ]
// }

// export const 银河风暴: Typings.GameInfo = {
//   translates: {
//     cn: '银河风暴'
//   },
//   type: 'SLG',
//   command: [
//     "rlegion.bat"
//   ]
// }

// export const 银河舰队: Typings.GameInfo = {
//   translates: {
//     cn: '银河舰队'
//   },
//   type: 'SLG',
//   command: [
//     "play"
//   ]
// }

// export const 银河太阳风: Typings.GameInfo = {
//   translates: {
//     cn: '银河太阳风'
//   },
//   type: 'RPG',
//   command: [
//     "run.bat"
//   ]
// }

// export const 银河英雄: Typings.GameInfo = {
//   translates: {
//     cn: '银河英雄'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 银河英雄传说3: Typings.GameInfo = {
//   translates: {
//     cn: '银河英雄传说3'
//   },
//   type: 'SLG',
//   command: [
//     "gin3.com"
//   ]
// }

// export const 银河英雄传说4EX: Typings.GameInfo = {
//   translates: {
//     cn: '银河英雄传说4EX'
//   },
//   type: 'SLG',
//   command: [
//     "g4x"
//   ]
// }

// export const 银河战士: Typings.GameInfo = {
//   translates: {
//     cn: '银河战士'
//   },
//   type: 'ACT',
//   command: [
//     "MACHINES.BAT"
//   ]
// }

// export const 银色弹球95: Typings.GameInfo = {
//   translates: {
//     cn: '银色弹球95'
//   },
//   type: 'PUZ',
//   command: [
//     "silver.exe"
//   ]
// }

// export const 印第安公主: Typings.GameInfo = {
//   translates: {
//     cn: '印第安公主'
//   },
//   type: 'ACT',
//   command: [
//     "poca.exe"
//   ]
// }

// export const 印第安那琼斯AtlantisAct: Typings.GameInfo = {
//   translates: {
//     cn: '印第安那琼斯AtlantisAct'
//   },
//   type: 'ACT',
//   command: [
//     "indy4A.exe"
//   ]
// }

// export const 印第安那琼斯亚特兰蒂斯: Typings.GameInfo = {
//   translates: {
//     cn: '印第安那琼斯亚特兰蒂斯'
//   },
//   type: 'AVG',
//   command: [
//     "atlantis"
//   ]
// }

// export const 英伦霸主: Typings.GameInfo = {
//   translates: {
//     cn: '英伦霸主'
//   },
//   type: 'SLG',
//   command: [
//     "lords"
//   ]
// }

// export const 英伦霸主2+资料片: Typings.GameInfo = {
//   translates: {
//     cn: '英伦霸主2+资料片'
//   },
//   type: 'SLG',
//   command: [
//     "l2d"
//   ]
// }

// export const 英雄传说1: Typings.GameInfo = {
//   translates: {
//     cn: '英雄传说1'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 英雄传说2: Typings.GameInfo = {
//   translates: {
//     cn: '英雄传说2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 英雄传说3: Typings.GameInfo = {
//   translates: {
//     cn: '英雄传说3'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 英雄传说4: Typings.GameInfo = {
//   translates: {
//     cn: '英雄传说4'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 英雄圣战: Typings.GameInfo = {
//   translates: {
//     cn: '英雄圣战'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 英雄使命: Typings.GameInfo = {
//   translates: {
//     cn: '英雄使命'
//   },
//   type: 'RPG',
//   command: [
//     "hero.exe"
//   ]
// }

// export const 英雄战记: Typings.GameInfo = {
//   translates: {
//     cn: '英雄战记'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 樱花的季节: Typings.GameInfo = {
//   translates: {
//     cn: '樱花的季节'
//   },
//   type: 'HGA',
//   command: [
//     "t_adv1.exe"
//   ]
// }

// export const 鹰眼传说：伦敦: Typings.GameInfo = {
//   translates: {
//     cn: '鹰眼传说:伦敦'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 佣兵1铁格部队: Typings.GameInfo = {
//   translates: {
//     cn: '佣兵1铁格部队'
//   },
//   type: 'SPG',
//   command: [
//     "mercs"
//   ]
// }

// export const 佣兵2突击部队: Typings.GameInfo = {
//   translates: {
//     cn: '佣兵2突击部队'
//   },
//   type: 'SPG',
//   command: [
//     "ss.bat"
//   ]
// }

// export const 永恒之烛1: Typings.GameInfo = {
//   translates: {
//     cn: '永恒之烛1'
//   },
//   type: 'RPG',
//   command: [
//     "mcandle.exe"
//   ]
// }

// export const 永恒之烛2: Typings.GameInfo = {
//   translates: {
//     cn: '永恒之烛2'
//   },
//   type: 'RPG',
//   command: [
//     "mc2"
//   ]
// }

// export const 永恒之烛3: Typings.GameInfo = {
//   translates: {
//     cn: '永恒之烛3'
//   },
//   type: 'RPG',
//   command: [
//     "mc3"
//   ]
// }

// export const 永远的蝙蝠侠: Typings.GameInfo = {
//   translates: {
//     cn: '永远的蝙蝠侠'
//   },
//   type: 'ACT',
//   command: [
//     "batman.exe"
//   ]
// }

// export const 永远的雷曼: Typings.GameInfo = {
//   translates: {
//     cn: '永远的雷曼'
//   },
//   type: 'ACT',
//   command: [
//     "rayman"
//   ]
// }

// export const 永远的雷曼自制关: Typings.GameInfo = {
//   translates: {
//     cn: '永远的雷曼自制关'
//   },
//   type: 'ACT',
//   command: [
//     "rayman.bat"
//   ]
// }

// export const 勇士传奇: Typings.GameInfo = {
//   translates: {
//     cn: '勇士传奇'
//   },
//   type: 'RPG',
//   command: [
//     "lov.bat"
//   ]
// }

// export const 勇者传说: Typings.GameInfo = {
//   translates: {
//     cn: '勇者传说'
//   },
//   type: 'RPG',
//   command: [
//     "hero"
//   ]
// }

// export const 勇者斗恶龙: Typings.GameInfo = {
//   translates: {
//     cn: '勇者斗恶龙'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 勇者斗恶龙2: Typings.GameInfo = {
//   translates: {
//     cn: '勇者斗恶龙2'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 勇者斗恶龙3: Typings.GameInfo = {
//   translates: {
//     cn: '勇者斗恶龙3'
//   },
//   type: 'RPG',
//   command: [
//     "dq3"
//   ]
// }

// export const 幽城宝藏: Typings.GameInfo = {
//   translates: {
//     cn: '幽城宝藏'
//   },
//   type: 'RPG',
//   command: [
//     "hillsfar.bat"
//   ]
// }

// export const 幽浮1未知敌人: Typings.GameInfo = {
//   translates: {
//     cn: '幽浮1未知敌人'
//   },
//   type: 'SLG',
//   command: [
//     "full.bat"
//   ]
// }

// export const 幽浮2深海之谜题: Typings.GameInfo = {
//   translates: {
//     cn: '幽浮2深海之谜题'
//   },
//   type: 'SLG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 幽浮3天启: Typings.GameInfo = {
//   translates: {
//     cn: '幽浮3天启'
//   },
//   type: 'SLG',
//   command: [
//     "xcomapoc"
//   ]
// }

// export const 幽浮3天启光碟版: Typings.GameInfo = {
//   translates: {
//     cn: '幽浮3天启光碟版'
//   },
//   type: 'SLG',
//   command: [
//     "xcomapoc.exe"
//   ]
// }

// export const 幽灵馆: Typings.GameInfo = {
//   translates: {
//     cn: '幽灵馆'
//   },
//   type: 'RPG',
//   command: [
//     "alone.exe"
//   ]
// }

// export const 悠悠大作战: Typings.GameInfo = {
//   translates: {
//     cn: '悠悠大作战'
//   },
//   type: 'ACT',
//   command: [
//     "yogho"
//   ]
// }

// export const 游轮凶案: Typings.GameInfo = {
//   translates: {
//     cn: '游轮凶案'
//   },
//   type: 'AVG',
//   command: [
//     "cruise.exe"
//   ]
// }

// export const 诱惑: Typings.GameInfo = {
//   translates: {
//     cn: '诱惑'
//   },
//   type: 'AVG',
//   command: [
//     "lure"
//   ]
// }

// export const 宇宙传奇7: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙传奇7'
//   },
//   type: 'AVG',
//   command: [
//     "sq4.bat"
//   ]
// }

// export const 宇宙大冒险: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙大冒险'
//   },
//   type: 'AVG',
//   command: [
//     "universe.exe"
//   ]
// }

// export const 宇宙方舟／太空巨人: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙方舟/太空巨人'
//   },
//   type: 'ACT',
//   command: [
//     "HULK.EXE"
//   ]
// }

// export const 宇宙神风号: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙神风号'
//   },
//   type: 'ACT',
//   command: [
//     "silpheed.bat"
//   ]
// }

// export const 宇宙十字军: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙十字军'
//   },
//   type: 'SPG',
//   command: [
//     "sc"
//   ]
// }

// export const 宇宙王牌: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙王牌'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 宇宙王牌2: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙王牌2'
//   },
//   type: 'ACT',
//   command: [
//     "sa2"
//   ]
// }

// export const 宇宙英雄: Typings.GameInfo = {
//   translates: {
//     cn: '宇宙英雄'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 雨果: Typings.GameInfo = {
//   translates: {
//     cn: '雨果'
//   },
//   type: 'ACT',
//   command: [
//     "hugo.exe"
//   ]
// }

// export const 雨果的恐怖之屋1: Typings.GameInfo = {
//   translates: {
//     cn: '雨果的恐怖之屋1'
//   },
//   type: 'AVG',
//   command: [
//     "hhh.exe"
//   ]
// }

// export const 雨果的恐怖之屋2: Typings.GameInfo = {
//   translates: {
//     cn: '雨果的恐怖之屋2'
//   },
//   type: 'AVG',
//   command: [
//     "hugo.exe"
//   ]
// }

// export const 雨果的恐怖之屋3: Typings.GameInfo = {
//   translates: {
//     cn: '雨果的恐怖之屋3'
//   },
//   type: 'AVG',
//   command: [
//     "hugo.exe"
//   ]
// }

// export const 玉米飞机大战外星人: Typings.GameInfo = {
//   translates: {
//     cn: '玉米飞机大战外星人'
//   },
//   type: 'SIM',
//   command: [
//     "corncob"
//   ]
// }

// export const 玉蒲团: Typings.GameInfo = {
//   translates: {
//     cn: '玉蒲团'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 预言: Typings.GameInfo = {
//   translates: {
//     cn: '预言'
//   },
//   type: 'AVG',
//   command: [
//     "go.bat"
//   ]
// }

// export const 预言维金之子: Typings.GameInfo = {
//   translates: {
//     cn: '预言维金之子'
//   },
//   type: 'ACT',
//   command: [
//     "vc.exe"
//   ]
// }

// export const 寓言: Typings.GameInfo = {
//   translates: {
//     cn: '寓言'
//   },
//   type: 'AVG',
//   command: [
//     "fable.exe"
//   ]
// }

// export const 元素球: Typings.GameInfo = {
//   translates: {
//     cn: '元素球'
//   },
//   type: 'PUZ',
//   command: [
//     "elements.exe"
//   ]
// }

// export const 原恒星战争前线: Typings.GameInfo = {
//   translates: {
//     cn: '原恒星战争前线'
//   },
//   type: 'SIM',
//   command: [
//     "proto.exe"
//   ]
// }

// export const 原始运输机: Typings.GameInfo = {
//   translates: {
//     cn: '原始运输机'
//   },
//   type: 'ACT',
//   command: [
//     "ugh.exe"
//   ]
// }

// export const 原子推箱子: Typings.GameInfo = {
//   translates: {
//     cn: '原子推箱子'
//   },
//   type: 'PUZ',
//   command: [
//     "game"
//   ]
// }

// export const 月亮石骑士: Typings.GameInfo = {
//   translates: {
//     cn: '月亮石骑士'
//   },
//   type: 'ACT',
//   command: [
//     "MS.EXE"
//   ]
// }

// export const 月球巡逻: Typings.GameInfo = {
//   translates: {
//     cn: '月球巡逻'
//   },
//   type: 'ACT',
//   command: [
//     "patrol.com"
//   ]
// }

// export const 月球指挥官: Typings.GameInfo = {
//   translates: {
//     cn: '月球指挥官'
//   },
//   type: 'SIM',
//   command: [
//     "lunar.exe"
//   ]
// }

// export const 云国小精灵: Typings.GameInfo = {
//   translates: {
//     cn: '云国小精灵'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 陨石射击: Typings.GameInfo = {
//   translates: {
//     cn: '陨石射击'
//   },
//   type: 'ACT',
//   command: [
//     "ASTRO.EXE"
//   ]
// }

// export const 陨星任务: Typings.GameInfo = {
//   translates: {
//     cn: '陨星任务'
//   },
//   type: 'ACT',
//   command: [
//     "meteor"
//   ]
// }

// export const 运镖天下: Typings.GameInfo = {
//   translates: {
//     cn: '运镖天下'
//   },
//   type: 'SLG',
//   command: [
//     "dart.bat"
//   ]
// }

// export const 运输大亨: Typings.GameInfo = {
//   translates: {
//     cn: '运输大亨'
//   },
//   type: 'SIM',
//   command: [
//     "TYCOON.EXE"
//   ]
// }

// export const 再度出击: Typings.GameInfo = {
//   translates: {
//     cn: '再度出击'
//   },
//   type: 'SIM',
//   command: [
//     "s2.exe"
//   ]
// }

// export const 赞斯的同伴: Typings.GameInfo = {
//   translates: {
//     cn: '赞斯的同伴'
//   },
//   type: 'AVG',
//   command: [
//     "XANTH.EXE"
//   ]
// }

// export const 扎克宇宙历险记: Typings.GameInfo = {
//   translates: {
//     cn: '扎克宇宙历险记'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 炸弹超人: Typings.GameInfo = {
//   translates: {
//     cn: '炸弹超人'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 炸弹队长: Typings.GameInfo = {
//   translates: {
//     cn: '炸弹队长'
//   },
//   type: 'ACT',
//   command: [
//     "dynamo.com"
//   ]
// }

// export const 炸弹人X: Typings.GameInfo = {
//   translates: {
//     cn: '炸弹人X'
//   },
//   type: 'HGA',
//   command: [
//     "bombx.bat"
//   ]
// }

// export const 詹姆斯庞德2: Typings.GameInfo = {
//   translates: {
//     cn: '詹姆斯庞德2'
//   },
//   type: 'ACT',
//   command: [
//     "robocod.bat"
//   ]
// }

// export const 斩3(日文): Typings.GameInfo = {
//   translates: {
//     cn: '斩3(日文)'
//   },
//   type: 'SLG',
//   command: [
//     "zan.bat"
//   ]
// }

// export const 斩草除根: Typings.GameInfo = {
//   translates: {
//     cn: '斩草除根'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战虫: Typings.GameInfo = {
//   translates: {
//     cn: '战虫'
//   },
//   type: 'RTS',
//   command: [
//     "bugs_cht.exe"
//   ]
// }

// export const 战地大亨: Typings.GameInfo = {
//   translates: {
//     cn: '战地大亨'
//   },
//   type: 'PUZ',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 战地日记: Typings.GameInfo = {
//   translates: {
//     cn: '战地日记'
//   },
//   type: 'RTS',
//   command: [
//     "game.exe"
//   ]
// }

// export const 战斗大师: Typings.GameInfo = {
//   translates: {
//     cn: '战斗大师'
//   },
//   type: 'ACT',
//   command: [
//     "BM.EXE"
//   ]
// }

// export const 战斗行动: Typings.GameInfo = {
//   translates: {
//     cn: '战斗行动'
//   },
//   type: 'SLG',
//   command: [
//     "combat.exe"
//   ]
// }

// export const 战斗行动2: Typings.GameInfo = {
//   translates: {
//     cn: '战斗行动2'
//   },
//   type: 'SLG',
//   command: [
//     "combat2.exe"
//   ]
// }

// export const 战斗起司: Typings.GameInfo = {
//   translates: {
//     cn: '战斗起司'
//   },
//   type: 'SLG',
//   command: [
//     "bc.exe"
//   ]
// }

// export const 战斗巫师: Typings.GameInfo = {
//   translates: {
//     cn: '战斗巫师'
//   },
//   type: 'RPG',
//   command: [
//     "WW1"
//   ]
// }

// export const 战斗之怒: Typings.GameInfo = {
//   translates: {
//     cn: '战斗之怒'
//   },
//   type: 'ACT',
//   command: [
//     "wrath.bat"
//   ]
// }

// export const 战斧: Typings.GameInfo = {
//   translates: {
//     cn: '战斧'
//   },
//   type: 'ACT',
//   command: [
//     "goldaxe.exe"
//   ]
// }

// export const 战国时代: Typings.GameInfo = {
//   translates: {
//     cn: '战国时代'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战机少女: Typings.GameInfo = {
//   translates: {
//     cn: '战机少女'
//   },
//   type: 'ACT',
//   command: [
//     "ML.BAT"
//   ]
// }

// export const 战机突袭: Typings.GameInfo = {
//   translates: {
//     cn: '战机突袭'
//   },
//   type: 'ACT',
//   command: [
//     "js.bat"
//   ]
// }

// export const 战甲：月鹰复仇: Typings.GameInfo = {
//   translates: {
//     cn: '战甲:月鹰复仇'
//   },
//   type: 'SLG',
//   command: [
//     "revenge"
//   ]
// }

// export const 战利品: Typings.GameInfo = {
//   translates: {
//     cn: '战利品'
//   },
//   type: 'SLG',
//   command: [
//     "start.bat"
//   ]
// }

// export const 战棋1-国际象棋: Typings.GameInfo = {
//   translates: {
//     cn: '战棋1-国际象棋'
//   },
//   type: 'PUZ',
//   command: [
//     "chess.exe"
//   ]
// }

// export const 战棋2-中国象棋: Typings.GameInfo = {
//   translates: {
//     cn: '战棋2-中国象棋'
//   },
//   type: 'PUZ',
//   command: [
//     "chess2.exe"
//   ]
// }

// export const 战棋4000: Typings.GameInfo = {
//   translates: {
//     cn: '战棋4000'
//   },
//   type: 'PUZ',
//   command: [
//     "bc4000.exe"
//   ]
// }

// export const 战神: Typings.GameInfo = {
//   translates: {
//     cn: '战神'
//   },
//   type: 'SLG',
//   command: [
//     "warlords.exe"
//   ]
// }

// export const 战神2: Typings.GameInfo = {
//   translates: {
//     cn: '战神2'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战神2豪华版: Typings.GameInfo = {
//   translates: {
//     cn: '战神2豪华版'
//   },
//   type: 'SLG',
//   command: [
//     "WAR2.BAT"
//   ]
// }

// export const 战神2英版+编辑器: Typings.GameInfo = {
//   translates: {
//     cn: '战神2英版+编辑器'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战术飞行试验: Typings.GameInfo = {
//   translates: {
//     cn: '战术飞行试验'
//   },
//   type: 'SIM',
//   command: [
//     "TFX"
//   ]
// }

// export const 战线: Typings.GameInfo = {
//   translates: {
//     cn: '战线'
//   },
//   type: 'ACT',
//   command: [
//     "LW2.COM"
//   ]
// }

// export const 战线1981: Typings.GameInfo = {
//   translates: {
//     cn: '战线1981'
//   },
//   type: 'ACT',
//   command: [
//     "BZONE.COM"
//   ]
// }

// export const 战争王国: Typings.GameInfo = {
//   translates: {
//     cn: '战争王国'
//   },
//   type: 'SLG',
//   command: [
//     "cdkaw.exe"
//   ]
// }

// export const 战争游戏: Typings.GameInfo = {
//   translates: {
//     cn: '战争游戏'
//   },
//   type: 'SLG',
//   command: [
//     "air.bat"
//   ]
// }

// export const 战争游戏合集: Typings.GameInfo = {
//   translates: {
//     cn: '战争游戏合集'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战争之岛: Typings.GameInfo = {
//   translates: {
//     cn: '战争之岛'
//   },
//   type: 'SPG',
//   command: [
//     "DESERT.EXE"
//   ]
// }

// export const 战争之岛1993: Typings.GameInfo = {
//   translates: {
//     cn: '战争之岛1993'
//   },
//   type: 'SPG',
//   command: [
//     "MOON.EXE"
//   ]
// }

// export const 战争之岛2020: Typings.GameInfo = {
//   translates: {
//     cn: '战争之岛2020'
//   },
//   type: 'SPG',
//   command: [
//     "BI2.BAT"
//   ]
// }

// export const 战争之旗: Typings.GameInfo = {
//   translates: {
//     cn: '战争之旗'
//   },
//   type: 'SPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 战争之人: Typings.GameInfo = {
//   translates: {
//     cn: '战争之人'
//   },
//   type: 'SLG',
//   command: [
//     "mow"
//   ]
// }

// export const 长弓传说－罗宾汉: Typings.GameInfo = {
//   translates: {
//     cn: '长弓传说－罗宾汉'
//   },
//   type: 'AVG',
//   command: [
//     "robin"
//   ]
// }

// export const 长枪英雄: Typings.GameInfo = {
//   translates: {
//     cn: '长枪英雄'
//   },
//   type: 'ACT',
//   command: [
//     "start.exe"
//   ]
// }

// export const 折纸迷宫: Typings.GameInfo = {
//   translates: {
//     cn: '折纸迷宫'
//   },
//   type: 'PUZ',
//   command: [
//     "origamo"
//   ]
// }

// export const 侦探劳拉2: Typings.GameInfo = {
//   translates: {
//     cn: '侦探劳拉2'
//   },
//   type: 'AVG',
//   command: [
//     "sierra.bat"
//   ]
// }

// export const 珍宝珠小子: Typings.GameInfo = {
//   translates: {
//     cn: '珍宝珠小子'
//   },
//   type: 'ACT',
//   command: [
//     "start"
//   ]
// }

// export const 珍宝珠小子2: Typings.GameInfo = {
//   translates: {
//     cn: '珍宝珠小子2'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 真红的杀意: Typings.GameInfo = {
//   translates: {
//     cn: '真红的杀意'
//   },
//   type: 'AVG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 真人快打: Typings.GameInfo = {
//   translates: {
//     cn: '真人快打'
//   },
//   type: 'ACT',
//   command: [
//     "mk.exe"
//   ]
// }

// export const 真人快打2: Typings.GameInfo = {
//   translates: {
//     cn: '真人快打2'
//   },
//   type: 'ACT',
//   command: [
//     "mk2.exe"
//   ]
// }

// export const 真人快打3: Typings.GameInfo = {
//   translates: {
//     cn: '真人快打3'
//   },
//   type: 'ACT',
//   command: [
//     "mk3.exe"
//   ]
// }

// export const 真实足球: Typings.GameInfo = {
//   translates: {
//     cn: '真实足球'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 真实足球俱乐部版: Typings.GameInfo = {
//   translates: {
//     cn: '真实足球俱乐部版'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 镇暴特遣队: Typings.GameInfo = {
//   translates: {
//     cn: '镇暴特遣队'
//   },
//   type: 'SLG',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 争分夺秒: Typings.GameInfo = {
//   translates: {
//     cn: '争分夺秒'
//   },
//   type: 'PUZ',
//   command: [
//     "clock.bat"
//   ]
// }

// export const 征服：AD1086: Typings.GameInfo = {
//   translates: {
//     cn: '征服：AD1086'
//   },
//   type: 'SLG',
//   command: [
//     "conquer"
//   ]
// }

// export const 正宗台湾16张麻将: Typings.GameInfo = {
//   translates: {
//     cn: '正宗台湾16张麻将'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 正宗台湾16张麻将2: Typings.GameInfo = {
//   translates: {
//     cn: '正宗台湾16张麻将2'
//   },
//   type: 'PUZ',
//   command: [
//     "play"
//   ]
// }

// export const 支配力量: Typings.GameInfo = {
//   translates: {
//     cn: '支配力量'
//   },
//   type: 'SLG',
//   command: [
//     "ascend"
//   ]
// }

// export const 直升机救援队: Typings.GameInfo = {
//   translates: {
//     cn: '直升机救援队'
//   },
//   type: 'ACT',
//   command: [
//     "AIRLIFT.EXE"
//   ]
// }

// export const 直升机搜敌记: Typings.GameInfo = {
//   translates: {
//     cn: '直升机搜敌记'
//   },
//   type: 'ACT',
//   command: [
//     "seek.exe"
//   ]
// }

// export const 职业棒球联赛: Typings.GameInfo = {
//   translates: {
//     cn: '职业棒球联赛'
//   },
//   type: 'SIM',
//   command: [
//     "gm.exe"
//   ]
// }

// export const 殖民帝国: Typings.GameInfo = {
//   translates: {
//     cn: '殖民帝国'
//   },
//   type: 'SLG',
//   command: [
//     "colonize.bat"
//   ]
// }

// export const 殖民世纪: Typings.GameInfo = {
//   translates: {
//     cn: '殖民世纪'
//   },
//   type: 'SIM',
//   command: [
//     "colony.exe"
//   ]
// }

// export const 指环王: Typings.GameInfo = {
//   translates: {
//     cn: '指环王'
//   },
//   type: 'AVG',
//   command: [
//     "lord.exe"
//   ]
// }

// export const 指环王2: Typings.GameInfo = {
//   translates: {
//     cn: '指环王2'
//   },
//   type: 'AVG',
//   command: [
//     "towers.exe"
//   ]
// }

// export const 指挥官基恩1: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩1'
//   },
//   type: 'ACT',
//   command: [
//     "keen1"
//   ]
// }

// export const 指挥官基恩10民间版: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩10民间版'
//   },
//   type: 'ACT',
//   command: [
//     "CKxBM"
//   ]
// }

// export const 指挥官基恩2: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩2'
//   },
//   type: 'ACT',
//   command: [
//     "keen2"
//   ]
// }

// export const 指挥官基恩3: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩3'
//   },
//   type: 'ACT',
//   command: [
//     "keen3"
//   ]
// }

// export const 指挥官基恩3.5: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩3.5'
//   },
//   type: 'ACT',
//   command: [
//     "kdreams"
//   ]
// }

// export const 指挥官基恩4: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩4'
//   },
//   type: 'ACT',
//   command: [
//     "keen4e"
//   ]
// }

// export const 指挥官基恩5: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩5'
//   },
//   type: 'ACT',
//   command: [
//     "keen5e"
//   ]
// }

// export const 指挥官基恩6: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩6'
//   },
//   type: 'ACT',
//   command: [
//     "keen6c"
//   ]
// }

// export const 指挥官基恩7民间版: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩7民间版'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 指挥官基恩8民间版: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩8民间版'
//   },
//   type: 'ACT',
//   command: [
//     "keen8"
//   ]
// }

// export const 指挥官基恩9民间版: Typings.GameInfo = {
//   translates: {
//     cn: '指挥官基恩9民间版'
//   },
//   type: 'ACT',
//   command: [
//     "KEEN9"
//   ]
// }

// export const 至高跆拳道冠军赛: Typings.GameInfo = {
//   translates: {
//     cn: '至高跆拳道冠军赛'
//   },
//   type: 'ACT',
//   command: [
//     "kick.exe"
//   ]
// }

// export const 致命车赛: Typings.GameInfo = {
//   translates: {
//     cn: '致命车赛'
//   },
//   type: 'SIM',
//   command: [
//     "fatal.exe"
//   ]
// }

// export const 致命毒药: Typings.GameInfo = {
//   translates: {
//     cn: '致命毒药'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 致命挑战: Typings.GameInfo = {
//   translates: {
//     cn: '致命挑战'
//   },
//   type: 'ACT',
//   command: [
//     "kar.exe"
//   ]
// }

// export const 智冠杯灌篮大赛: Typings.GameInfo = {
//   translates: {
//     cn: '智冠杯灌篮大赛'
//   },
//   type: 'ACT',
//   command: [
//     "ball.exe"
//   ]
// }

// export const 智慧弹珠: Typings.GameInfo = {
//   translates: {
//     cn: '智慧弹珠'
//   },
//   type: 'PUZ',
//   command: [
//     "play.bat"
//   ]
// }

// export const 智圣鲜师: Typings.GameInfo = {
//   translates: {
//     cn: '智圣鲜师'
//   },
//   type: 'SIM',
//   command: [
//     "school.bat"
//   ]
// }

// export const 中关村启示录: Typings.GameInfo = {
//   translates: {
//     cn: '中关村启示录'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 中国: Typings.GameInfo = {
//   translates: {
//     cn: '中国'
//   },
//   type: 'SIM',
//   command: [
//     "china.exe"
//   ]
// }

// export const 中国民航: Typings.GameInfo = {
//   translates: {
//     cn: '中国民航'
//   },
//   type: 'SIM',
//   command: [
//     "CAAC.BAT"
//   ]
// }

// export const 中国之心: Typings.GameInfo = {
//   translates: {
//     cn: '中国之心'
//   },
//   type: 'AVG',
//   command: [
//     "hoc.exe"
//   ]
// }

// export const 中华职棒: Typings.GameInfo = {
//   translates: {
//     cn: '中华职棒'
//   },
//   type: 'SIM',
//   command: [
//     "cpb.bat"
//   ]
// }

// export const 中央情报局: Typings.GameInfo = {
//   translates: {
//     cn: '中央情报局'
//   },
//   type: 'SLG',
//   command: [
//     "CI.BAT"
//   ]
// }

// export const 中原镖局: Typings.GameInfo = {
//   translates: {
//     cn: '中原镖局'
//   },
//   type: 'SPG',
//   command: [
//     "cwar"
//   ]
// }

// export const 终端恐惧: Typings.GameInfo = {
//   translates: {
//     cn: '终端恐惧'
//   },
//   type: 'ACT',
//   command: [
//     "start"
//   ]
// }

// export const 终极快打: Typings.GameInfo = {
//   translates: {
//     cn: '终极快打'
//   },
//   type: 'ACT',
//   command: [
//     "play.bat"
//   ]
// }

// export const 终极任务: Typings.GameInfo = {
//   translates: {
//     cn: '终极任务'
//   },
//   type: 'SPG',
//   command: [
//     "um"
//   ]
// }

// export const 终极速度: Typings.GameInfo = {
//   translates: {
//     cn: '终极速度'
//   },
//   type: 'SIM',
//   command: [
//     "tv"
//   ]
// }

// export const 终极战士: Typings.GameInfo = {
//   translates: {
//     cn: '终极战士'
//   },
//   type: 'ACT',
//   command: [
//     "mars"
//   ]
// }

// export const 终结者2029: Typings.GameInfo = {
//   translates: {
//     cn: '终结者2029'
//   },
//   type: 'ACT',
//   command: [
//     "2029"
//   ]
// }

// export const 终结者2射击版: Typings.GameInfo = {
//   translates: {
//     cn: '终结者2射击版'
//   },
//   type: 'ACT',
//   command: [
//     "t2"
//   ]
// }

// export const 种族灭绝: Typings.GameInfo = {
//   translates: {
//     cn: '种族灭绝'
//   },
//   type: 'SLG',
//   command: [
//     "genocide"
//   ]
// }

// export const 仲裁者: Typings.GameInfo = {
//   translates: {
//     cn: '仲裁者'
//   },
//   type: 'ACT',
//   command: [
//     "interpos.exe"
//   ]
// }

// export const 重返德军总部3D: Typings.GameInfo = {
//   translates: {
//     cn: '重返德军总部3D'
//   },
//   type: 'ACT',
//   command: [
//     "WOLF3D.EXE"
//   ]
// }

// export const 重甲机神: Typings.GameInfo = {
//   translates: {
//     cn: '重甲机神'
//   },
//   type: 'ACT',
//   command: [
//     "go"
//   ]
// }

// export const 重力战机: Typings.GameInfo = {
//   translates: {
//     cn: '重力战机'
//   },
//   type: 'SIM',
//   command: [
//     "deltav.bat"
//   ]
// }

// export const 咒语锻造: Typings.GameInfo = {
//   translates: {
//     cn: '咒语锻造'
//   },
//   type: 'RPG',
//   command: [
//     "sc.exe"
//   ]
// }

// export const 咒语交叉: Typings.GameInfo = {
//   translates: {
//     cn: '咒语交叉'
//   },
//   type: 'SPG',
//   command: [
//     "spelcros"
//   ]
// }

// export const 侏罗纪公园: Typings.GameInfo = {
//   translates: {
//     cn: '侏罗纪公园'
//   },
//   type: 'ACT',
//   command: [
//     "jp.exe"
//   ]
// }

// export const 侏罗纪圣战: Typings.GameInfo = {
//   translates: {
//     cn: '侏罗纪圣战'
//   },
//   type: 'RTS',
//   command: [
//     "PLAY.BAT"
//   ]
// }

// export const 诸神的黄昏: Typings.GameInfo = {
//   translates: {
//     cn: '诸神的黄昏'
//   },
//   type: 'RPG',
//   command: [
//     "dusk.bat"
//   ]
// }

// export const 诸神封印: Typings.GameInfo = {
//   translates: {
//     cn: '诸神封印'
//   },
//   type: 'RPG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 主题公园磁碟版: Typings.GameInfo = {
//   translates: {
//     cn: '主题公园磁碟版'
//   },
//   type: 'SIM',
//   command: [
//     "park.bat"
//   ]
// }

// export const 主题公园光碟版: Typings.GameInfo = {
//   translates: {
//     cn: '主题公园光碟版'
//   },
//   type: 'SIM',
//   command: [
//     "theme.bat"
//   ]
// }

// export const 筑城大师: Typings.GameInfo = {
//   translates: {
//     cn: '筑城大师'
//   },
//   type: 'SIM',
//   command: [
//     "castles1"
//   ]
// }

// export const 筑城大师2: Typings.GameInfo = {
//   translates: {
//     cn: '筑城大师2'
//   },
//   type: 'SIM',
//   command: [
//     "play.bat"
//   ]
// }

// export const 抓住他们: Typings.GameInfo = {
//   translates: {
//     cn: '抓住他们'
//   },
//   type: 'ACT',
//   command: [
//     "runme.bat"
//   ]
// }

// export const 专业网球巡回赛: Typings.GameInfo = {
//   translates: {
//     cn: '专业网球巡回赛'
//   },
//   type: 'SIM',
//   command: [
//     "PTT2.EXE"
//   ]
// }

// export const 转校生: Typings.GameInfo = {
//   translates: {
//     cn: '转校生'
//   },
//   type: 'HGA',
//   command: [
//     "play.exe"
//   ]
// }

// export const 转校生-天使们的午后: Typings.GameInfo = {
//   translates: {
//     cn: '转校生-天使们的午后'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 转校生-天使们的午后2: Typings.GameInfo = {
//   translates: {
//     cn: '转校生-天使们的午后2'
//   },
//   type: 'HGA',
//   command: [
//     "play.bat"
//   ]
// }

// export const 装甲守护: Typings.GameInfo = {
//   translates: {
//     cn: '装甲守护'
//   },
//   type: 'SIM',
//   command: [
//     "run.bat"
//   ]
// }

// export const 装甲雄狮: Typings.GameInfo = {
//   translates: {
//     cn: '装甲雄狮'
//   },
//   type: 'SIM',
//   command: [
//     "tank"
//   ]
// }

// export const 装甲元帅: Typings.GameInfo = {
//   translates: {
//     cn: '装甲元帅'
//   },
//   type: 'SLG',
//   command: [
//     "pg.bat"
//   ]
// }

// export const 壮志凌云: Typings.GameInfo = {
//   translates: {
//     cn: '壮志凌云'
//   },
//   type: 'SIM',
//   command: [
//     "topgun"
//   ]
// }

// export const 撞球补习班: Typings.GameInfo = {
//   translates: {
//     cn: '撞球补习班'
//   },
//   type: 'PUZ',
//   command: [
//     "play_ad.bat"
//   ]
// }

// export const 捉鬼敢死队2: Typings.GameInfo = {
//   translates: {
//     cn: '捉鬼敢死队2'
//   },
//   type: 'ACT',
//   command: [
//     "gb2"
//   ]
// }

// export const 字符世界历险记: Typings.GameInfo = {
//   translates: {
//     cn: '字符世界历险记'
//   },
//   type: 'ACT',
//   command: [
//     "zzt"
//   ]
// }

// export const 纵横七海: Typings.GameInfo = {
//   translates: {
//     cn: '纵横七海'
//   },
//   type: 'RPG',
//   command: [
//     "sea.exe"
//   ]
// }

// export const 走廊：异形入侵: Typings.GameInfo = {
//   translates: {
//     cn: '走廊:异形入侵'
//   },
//   type: 'ACT',
//   command: [
//     "CORR7.BAT"
//   ]
// }

// export const 足球超级明星: Typings.GameInfo = {
//   translates: {
//     cn: '足球超级明星'
//   },
//   type: 'SIM',
//   command: [
//     "GO.BAT"
//   ]
// }

// export const 足球帝国: Typings.GameInfo = {
//   translates: {
//     cn: '足球帝国'
//   },
//   type: 'SIM',
//   command: [
//     "soccer"
//   ]
// }

// export const 足球经理人: Typings.GameInfo = {
//   translates: {
//     cn: '足球经理人'
//   },
//   type: 'SIM',
//   command: [
//     "EC"
//   ]
// }

// export const 足球小子: Typings.GameInfo = {
//   translates: {
//     cn: '足球小子'
//   },
//   type: 'ACT',
//   command: [
//     "kid.exe"
//   ]
// }

// export const 卒业: Typings.GameInfo = {
//   translates: {
//     cn: '卒业'
//   },
//   type: 'SIM',
//   command: [
//     "josi.com"
//   ]
// }

// export const 卒业旅行: Typings.GameInfo = {
//   translates: {
//     cn: '卒业旅行'
//   },
//   type: 'HGA',
//   command: [
//     "ryk"
//   ]
// }

// export const 钻地小精灵: Typings.GameInfo = {
//   translates: {
//     cn: '钻地小精灵'
//   },
//   type: 'ACT',
//   command: [
//     "digit.exe"
//   ]
// }

// export const 最后的忍者: Typings.GameInfo = {
//   translates: {
//     cn: '最后的忍者'
//   },
//   type: 'ACT',
//   command: [
//     "ninja"
//   ]
// }

// export const 最后的武士: Typings.GameInfo = {
//   translates: {
//     cn: '最后的武士'
//   },
//   type: 'ACT',
//   command: [
//     "goblins.exe"
//   ]
// }

// export const 最后期限: Typings.GameInfo = {
//   translates: {
//     cn: '最后期限'
//   },
//   type: 'SLG',
//   command: [
//     "play.bat"
//   ]
// }

// export const 最后武力: Typings.GameInfo = {
//   translates: {
//     cn: '最后武力'
//   },
//   type: 'SPG',
//   command: [
//     "game.bat"
//   ]
// }

// export const 罪恶都市: Typings.GameInfo = {
//   translates: {
//     cn: '罪恶都市'
//   },
//   type: 'AVG',
//   command: [
//     "city.bat"
//   ]
// }

// export const 罪恶克星: Typings.GameInfo = {
//   translates: {
//     cn: '罪恶克星'
//   },
//   type: 'PUZ',
//   command: [
//     "crime.exe"
//   ]
// }

// export const 佐罗: Typings.GameInfo = {
//   translates: {
//     cn: '佐罗'
//   },
//   type: 'ACT',
//   command: [
//     "zorro.exe"
//   ]
// }

// export const 作战集团: Typings.GameInfo = {
//   translates: {
//     cn: '作战集团'
//   },
//   type: 'ACT',
//   command: [
//     "corp"
//   ]
// }
