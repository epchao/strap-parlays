export interface Player {
  name: string;
  tag: string;
  icon?: string;
  level: number;
  soloDuoRank: string;
  soloDuoRankImage?: string;
  flexRank: string;
  flexRankImage?: string;
  champion: string;
  championImage?: string;
  avgKda: number;
  avgCs: number;
}

export const allies: Player[] = [
  {
    name: "beerman562",
    tag: "NA1",
    icon: "https://static.bigbrain.gg/assets/lol/riot_static/14.24.1/img/profileicon/1439.png",
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage:
      "https://cdn3.emoji.gg/emojis/2370-lol-border9-challenger.png",
    flexRank: "Challenger",
    flexRankImage:
      "https://cdn3.emoji.gg/emojis/2370-lol-border9-challenger.png",
    champion: "Warwick",
    championImage:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
    avgKda: 3.25,
    avgCs: 7.0,
  },
  {
    name: "ShadowHunter",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Rumble",
    championImage: undefined,
    avgKda: 4.54,
    avgCs: 5.6,
  },
  {
    name: "DragonSlayer",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Zed",
    championImage: undefined,
    avgKda: 1.74,
    avgCs: 7.1,
  },
  {
    name: "Warrior123",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Vayne",
    championImage: undefined,
    avgKda: 3.89,
    avgCs: 7.4,
  },
  {
    name: "MysticMage",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Soraka",
    championImage: undefined,
    avgKda: 1.3,
    avgCs: 6.7,
  },
];

export const enemies: Player[] = [
  {
    name: "SilentAssassin",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Wukong",
    championImage: undefined,
    avgKda: 3.45,
    avgCs: 6.9,
  },
  {
    name: "FrostyFox",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Jayce",
    championImage: undefined,
    avgKda: 1.45,
    avgCs: 6.7,
  },
  {
    name: "LightningBolt",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Yasuo",
    championImage: undefined,
    avgKda: 3.63,
    avgCs: 4.7,
  },
  {
    name: "IronClad",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Xayah",
    championImage: undefined,
    avgKda: 4.45,
    avgCs: 5.9,
  },
  {
    name: "StormCaller",
    tag: "NA1",
    icon: undefined,
    level: 1000,
    soloDuoRank: "Challenger",
    soloDuoRankImage: undefined,
    flexRank: "Challenger",
    flexRankImage: undefined,
    champion: "Rakan",
    championImage: undefined,
    avgKda: 4.73,
    avgCs: 6.6,
  },
];
