import { browser } from '$app/environment';
import type { TileDef, TileDefProps } from './types';

let tiles: TileDef[];
let spritePathList: string[];

export const getTiles = () => tiles;
export const getSprites = () => {
  let result = [...spritePathList];
  return result;
};

export default function loadTileData(...props: TileDefProps[]) {
  // init
  console.info('loading tile contents...');
  tiles = [];
  spritePathList = [];

  // load

  function bindSprite(src: string) {
    spritePathList.push(src);
    return spritePathList.length - 1;
  }

  for (const prop of props) {
    const { name, sprite, opacity, density, friciton, glow } = prop;

    tiles.push({
      name,
      sprite: bindSprite(sprite),
      opacity: opacity ?? 10,
      density: density ?? 1,
      friction: friciton ?? 1,
      glow: glow ?? 0,
    });
  }

  return tiles;
}
