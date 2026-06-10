export type StatLeader = {
  rank: number;
  name: string;
  country: string;
  code: string;
  club: string;
  value: number;
  detail?: string;
};

export const TOP_SCORERS: StatLeader[] = [
  { rank: 1, name: "Kylian Mbappé", country: "France", code: "fr", club: "Real Madrid", value: 5, detail: "4 open play · 1 pen" },
  { rank: 2, name: "Erling Haaland", country: "Norway", code: "no", club: "Manchester City", value: 4 },
  { rank: 3, name: "Vinícius Júnior", country: "Brazil", code: "br", club: "Real Madrid", value: 4 },
  { rank: 4, name: "Harry Kane", country: "England", code: "gb-eng", club: "Bayern Munich", value: 3 },
  { rank: 5, name: "Lamine Yamal", country: "Spain", code: "es", club: "Barcelona", value: 3 },
  { rank: 6, name: "Christian Pulisic", country: "USA", code: "us", club: "AC Milan", value: 3 },
];

export const TOP_ASSISTS: StatLeader[] = [
  { rank: 1, name: "Florian Wirtz", country: "Germany", code: "de", club: "Liverpool", value: 4 },
  { rank: 2, name: "Kevin De Bruyne", country: "Belgium", code: "be", club: "Man City", value: 3 },
  { rank: 3, name: "Pedri", country: "Spain", code: "es", club: "Barcelona", value: 3 },
  { rank: 4, name: "Jude Bellingham", country: "England", code: "gb-eng", club: "Real Madrid", value: 2 },
  { rank: 5, name: "Alexis Mac Allister", country: "Argentina", code: "ar", club: "Liverpool", value: 2 },
];

export const CLEAN_SHEETS: StatLeader[] = [
  { rank: 1, name: "Emiliano Martínez", country: "Argentina", code: "ar", club: "Aston Villa", value: 3, detail: "GK" },
  { rank: 2, name: "Gianluigi Donnarumma", country: "Italy", code: "it", club: "PSG", value: 3, detail: "GK" },
  { rank: 3, name: "Alisson Becker", country: "Brazil", code: "br", club: "Liverpool", value: 2, detail: "GK" },
  { rank: 4, name: "Mike Maignan", country: "France", code: "fr", club: "AC Milan", value: 2, detail: "GK" },
  { rank: 5, name: "Matt Turner", country: "USA", code: "us", club: "Crystal Palace", value: 2, detail: "GK" },
];
