export interface TempusResponse {
  player_info: PlayerInfo;
  rank_info: RankInfo;
  class_rank_info: ClassRankInfo;
}
export interface PlayerInfo {
  steamid: string;
  first_seen: number;
  last_seen: number;
  id: number;
  name: string;
  country: string;
}
export interface RankInfo {
  total_ranked: number;
  points: number;
  rank: number;
}
export interface ClassRankInfo {
  [key:string]: ThreeOrFour;
}

export interface ThreeOrFour {
  total_ranked: number;
  points: number;
  rank: number;
  title: string;
}
