import { omit } from '@/utils'
import type { Game } from '@/types'
import jyqxz from './jyqxz'
import xjqxz from './xjqxz'

export const Games = { jyqxz, xjqxz }
export const GameInfos = new Map<keyof typeof Games, Game>()

export async function fetchGames() {
  const exists = Array.from(GameInfos.keys())
  const list = omit(Games, exists)
  const games = Object.entries(list)

  if (games.length > 0) {
    const infos: [keyof typeof Games, Game][] = []
    await Promise.allSettled(
      Object.entries(list).map(async ([id, load]) => {
        const name = id as keyof typeof Games
        const game = await load()
        infos.push([name, game])
      })
    )

    for (const [name, game] of infos.sort((a, b) => a[0].localeCompare(b[0]))) {
      GameInfos.set(name, game)
    }
  }

  return GameInfos
}

export function isGameName(name: string): name is keyof typeof Games {
  return name in Games
}
