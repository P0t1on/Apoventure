export type ID = number;

/**
 * dir
 *  1 2 3
 *  4 0 5
 *  6 7 8
 */
export type SpriteProps = {
  type: string;
  color: string;
} & (
  | {
      auto: false;
    }
  | {
      auto: true;
      dir: [0b00000000];
    }
);

/**
 * sprite - 스프라이트맵에서 가져오는 ID
 * opacity - 빛 투명도
 * density - 탄성력  * 물리처리에 사용
 * friction - 마찰력 * 물리처리에 사용
 * glow - 빛 세기
 */
export type TileDefProps = {
  name: string;
  sprite: string;
  opacity?: number;
  density?: number;
  friciton?: number;
  glow?: number;
};

export type TileDef = {
  name: string;
  sprite: ID;
  opacity: number;
  density: number;
  friction: number;
  glow: number;
};

export type TileType = {
  def: ID;
};

export type TileMapType = {};
