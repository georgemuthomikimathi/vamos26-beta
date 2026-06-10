"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, type LucideIcon } from "lucide-react";
import { DEFENDERS_TO_WATCH, PLAYMAKERS_TO_WATCH } from "@/lib/watchlist";
import type { WatchPlayer } from "@/lib/watchlist";
import TeamFlagWithFallback from "@/components/TeamFlag";

function PlayerGrid({
  players,
  title,
  icon: Icon,
  subtitle,
}: {
  players: WatchPlayer[];
  title: string;
  icon: LucideIcon;
  subtitle: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Icon size={28} className="text-pitch" />
        <div>
          <h3 className="font-display text-3xl md:text-4xl text-white">{title}</h3>
          <p className="text-sm text-muted">{subtitle}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {players.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative bg-card border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-pitch/30 transition-all"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}
            />
            <div className="relative flex items-start gap-4">
              <TeamFlagWithFallback code={p.code} name={p.country} size={80} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl text-pitch/50">#{p.number}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted bg-white/5 px-2 py-0.5 rounded-full">
                    {p.position}
                  </span>
                </div>
                <h4 className="font-display text-2xl text-white mt-1">{p.name}</h4>
                <p className="text-xs text-muted">
                  {p.country} · {p.club}
                </p>
              </div>
            </div>
            <p className="relative text-sm text-muted mt-4 leading-relaxed">{p.tagline}</p>
            <div className="relative mt-3 inline-block bg-pitch/10 text-pitch text-xs font-semibold px-3 py-1 rounded-full">
              {p.stat}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function WatchlistSection() {
  return (
    <section id="watchlist" className="relative py-24 bg-navy-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-pitch uppercase tracking-[0.4em] text-xs font-semibold mb-3">
            Scouting Report
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white">
            PLAYERS <span className="text-gradient-pitch">TO WATCH</span>
          </h2>
        </motion.div>

        <PlayerGrid
          players={DEFENDERS_TO_WATCH}
          title="Defenders"
          icon={Shield}
          subtitle="The walls — center-backs and fullbacks dominating the tournament"
        />
        <PlayerGrid
          players={PLAYMAKERS_TO_WATCH}
          title="Playmakers"
          icon={Sparkles}
          subtitle="The architects — creators who unlock every defense"
        />
      </div>
    </section>
  );
}
