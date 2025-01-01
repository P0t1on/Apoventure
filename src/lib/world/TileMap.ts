import {} from '@box2d/core';
import type { TileType } from './types';

export default function MapFactory(
  width: number,
  height: number,
  defaultTile1: TileType,
  defaultTile2: TileType
) {
  // construct map
  const layer1: TileType[] = [],
    layer2: TileType[] = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {}
  }

  // methods
}
