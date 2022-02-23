export interface GameAssets {
  iconUrl: string;
  titleUrl: string;
  coverUrl: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  dateModified: string;
  assets: GameAssets;
  status: number;
  apiStatus: number;
}
