export type MatchStatus = "scheduled" | "live" | "halftime" | "finished";

export type LiveScore = {
  home: number;
  away: number;
};

export type LiveMatch = {
  id: string;
  status: MatchStatus;
  minute?: number;
  date: string;
  time: string;
  home: { name: string; code: string };
  away: { name: string; code: string };
  venue: string;
  city: string;
  stage: string;
  score: LiveScore;
  events?: { minute: number; type: "goal" | "yellow" | "red"; player: string; team: "home" | "away" }[];
};

/** Seed data — swap via /api/live when tournament kicks off */
export const LIVE_MATCHES: LiveMatch[] = [
  {
    id: "m1",
    status: "live",
    minute: 67,
    date: "Jun 11",
    time: "3:00 PM ET",
    home: { name: "Mexico", code: "mx" },
    away: { name: "South Africa", code: "za" },
    venue: "Estadio Azteca",
    city: "Mexico City",
    stage: "Group A · Opening Match",
    score: { home: 2, away: 1 },
    events: [
      { minute: 23, type: "goal", player: "Lozano", team: "home" },
      { minute: 41, type: "goal", player: "Promes", team: "away" },
      { minute: 58, type: "goal", player: "Giménez", team: "home" },
    ],
  },
  {
    id: "m2",
    status: "halftime",
    minute: 45,
    date: "Jun 12",
    time: "6:00 PM ET",
    home: { name: "Canada", code: "ca" },
    away: { name: "Bosnia & Herzegovina", code: "ba" },
    venue: "BMO Field",
    city: "Toronto",
    stage: "Group B",
    score: { home: 1, away: 0 },
    events: [{ minute: 34, type: "goal", player: "Davies", team: "home" }],
  },
  {
    id: "m3",
    status: "scheduled",
    date: "Jun 12",
    time: "9:00 PM ET",
    home: { name: "USA", code: "us" },
    away: { name: "Paraguay", code: "py" },
    venue: "SoFi Stadium",
    city: "Los Angeles",
    stage: "Group D",
    score: { home: 0, away: 0 },
  },
  {
    id: "m4",
    status: "finished",
    date: "Jun 13",
    time: "3:00 PM ET",
    home: { name: "Brazil", code: "br" },
    away: { name: "Morocco", code: "ma" },
    venue: "Mercedes-Benz Stadium",
    city: "Atlanta",
    stage: "Group C",
    score: { home: 3, away: 1 },
    events: [
      { minute: 12, type: "goal", player: "Vinícius Jr", team: "home" },
      { minute: 55, type: "goal", player: "Ziyech", team: "away" },
      { minute: 71, type: "goal", player: "Rodrygo", team: "home" },
      { minute: 88, type: "goal", player: "Paquetá", team: "home" },
    ],
  },
  {
    id: "m5",
    status: "scheduled",
    date: "Jun 14",
    time: "8:00 PM ET",
    home: { name: "England", code: "gb-eng" },
    away: { name: "Croatia", code: "hr" },
    venue: "MetLife Stadium",
    city: "East Rutherford, NJ",
    stage: "Group L",
    score: { home: 0, away: 0 },
  },
];

export function getLiveCount(): number {
  return LIVE_MATCHES.filter((m) => m.status === "live" || m.status === "halftime").length;
}
