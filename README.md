# VAMOS26 Beta

Next-generation FIFA World Cup 2026 fan site with live match updates, stadium guide, tournament stats, player watchlists, and US host city dropship shop.

## New in Beta

- **Live Match Center** — real-time scores with 30s auto-refresh via `/api/live`
- **Stadium Guide** — all 16 host venues with capacity, match counts, city nicknames
- **Stats Board** — top scorers, assists, clean sheets
- **Watchlist** — defenders and playmakers to watch
- **City Shop** — themed merch for US host cities (Empire State, Garden State, Magic City, etc.) via vetted US dropshippers

## Quick Start

```bash
npm install
npm run dev      # http://127.0.0.1:3040
npm run build
npm run start:prod  # http://127.0.0.1:3041
```

## Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/vamos26-beta.git
git push -u origin main
```

## Live Data

Update `src/lib/live.ts` during the tournament, or wire `/api/live` to a sports data provider.
