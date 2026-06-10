"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Clock, MapPin } from "lucide-react";
import type { LiveMatch } from "@/lib/live";
import TeamFlagWithFallback from "@/components/TeamFlag";

function StatusBadge({ status, minute }: { status: LiveMatch["status"]; minute?: number }) {
  if (status === "live")
    return (
      <span className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-400 border border-red-500/40 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse">
        <Radio size={12} /> Live {minute}&apos;
      </span>
    );
  if (status === "halftime")
    return (
      <span className="inline-flex items-center gap-1.5 bg-gold/20 text-gold border border-gold/40 rounded-full px-3 py-1 text-xs font-bold uppercase">
        HT {minute}&apos;
      </span>
    );
  if (status === "finished")
    return (
      <span className="bg-white/10 text-muted border border-white/10 rounded-full px-3 py-1 text-xs font-bold uppercase">
        FT
      </span>
    );
  return (
    <span className="bg-pitch/10 text-pitch border border-pitch/30 rounded-full px-3 py-1 text-xs font-bold uppercase">
      Upcoming
    </span>
  );
}

export default function LiveMatchCenter() {
  const [matches, setMatches] = useState<LiveMatch[]>([]);
  const [liveCount, setLiveCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const res = await fetch("/api/live");
        const data = await res.json();
        setMatches(data.matches);
        setLiveCount(data.liveCount);
        setLastUpdate(new Date(data.updatedAt).toLocaleTimeString());
      } catch {
        /* fallback silent */
      }
    };
    fetchLive();
    const interval = setInterval(fetchLive, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-pitch/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-red-400 uppercase tracking-[0.4em] text-xs font-semibold mb-3 flex items-center gap-2">
              {liveCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              )}
              Match Center
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white">
              LIVE <span className="text-gradient-pitch">SCORES</span>
            </h2>
            <p className="text-muted mt-3 max-w-xl">
              Real-time updates as matches play. Auto-refreshes every 30 seconds.
              {lastUpdate && (
                <span className="text-pitch/70 block text-sm mt-1">
                  Last updated {lastUpdate}
                </span>
              )}
            </p>
          </div>
          {liveCount > 0 && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl px-6 py-4 text-center">
              <div className="font-display text-4xl text-red-400">{liveCount}</div>
              <div className="text-xs uppercase tracking-wider text-muted">Live Now</div>
            </div>
          )}
        </motion.div>

        <div className="grid gap-4">
          <AnimatePresence mode="popLayout">
            {matches.map((match, i) => (
              <motion.div
                key={match.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`bg-card border rounded-2xl p-5 md:p-6 transition-colors ${
                  match.status === "live" || match.status === "halftime"
                    ? "border-red-500/30 shadow-lg shadow-red-500/5"
                    : "border-white/10 hover:border-pitch/20"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <StatusBadge status={match.status} minute={match.minute} />
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {match.stage}
                  </span>
                </div>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                  <div className="flex items-center gap-3 justify-end md:justify-end order-1">
                    <span className="font-semibold text-right hidden sm:block">{match.home.name}</span>
                    <TeamFlagWithFallback code={match.home.code} name={match.home.name} size={40} />
                  </div>

                  <div className="text-center order-2">
                    <div className="font-display text-4xl md:text-5xl text-white tracking-widest">
                      {match.score.home} – {match.score.away}
                    </div>
                    <div className="flex items-center justify-center gap-3 text-xs text-muted mt-1">
                      <Clock size={12} />
                      {match.date} · {match.time}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 order-3">
                    <TeamFlagWithFallback code={match.away.code} name={match.away.name} size={40} />
                    <span className="font-semibold hidden sm:block">{match.away.name}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-muted justify-center">
                  <MapPin size={12} className="text-pitch" />
                  {match.venue} · {match.city}
                </div>

                {match.events && match.events.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2 justify-center">
                    {match.events.map((e, j) => (
                      <span
                        key={j}
                        className="text-xs bg-white/5 rounded-full px-3 py-1 text-muted"
                      >
                        {e.minute}&apos; ⚽ {e.player}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
