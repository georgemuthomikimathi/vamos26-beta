"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Truck, ExternalLink, MapPin } from "lucide-react";
import { CITY_PRODUCTS, DROPSHIP_PARTNERS } from "@/lib/dropship";

export default function DropshipSection() {
  const [filter, setFilter] = useState<string>("all");

  const states = ["all", ...new Set(CITY_PRODUCTS.map((p) => p.state))];
  const filtered =
    filter === "all" ? CITY_PRODUCTS : CITY_PRODUCTS.filter((p) => p.state === filter);

  return (
    <section id="shop" className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-usa-blue/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3">
            US Host City Gear
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">
            CITY <span className="text-gradient-gold">SHOP</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Empire State, Garden State, Magic City & more — themed merch from
            vetted US dropshippers with 4.5+ ratings and 2–7 day domestic shipping.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {states.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === s
                  ? "tab-active"
                  : "border-white/10 text-muted hover:text-white hover:bg-white/5"
              }`}
            >
              {s === "all" ? "All Cities" : s}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all hover:shadow-lg hover:shadow-gold/5"
            >
              <div
                className={`h-36 bg-gradient-to-br ${product.gradient} relative flex items-center justify-center`}
              >
                <ShoppingBag size={48} className="text-white/20" />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-gold text-navy text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[10px] text-muted mb-2">
                  <MapPin size={10} className="text-pitch" />
                  {product.city}, {product.state} · {product.theme}
                </div>
                <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">{product.tagline}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-display text-2xl text-pitch">${product.price}</span>
                  <span className="text-[10px] text-muted">via {product.partner}</span>
                </div>
                <button className="w-full mt-4 bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold rounded-xl py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-muted uppercase tracking-[0.3em] text-xs font-semibold mb-6">
            Vetted US Fulfillment Partners
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DROPSHIP_PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card/60 border border-white/10 rounded-2xl p-5 hover:border-pitch/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display text-xl text-white group-hover:text-pitch transition-colors">
                    {partner.name}
                  </h4>
                  <ExternalLink size={14} className="text-muted" />
                </div>
                <div className="flex items-center gap-1 text-gold text-sm mb-2">
                  <Star size={14} fill="currentColor" />
                  {partner.rating} · {partner.reviews} reviews
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted mb-2">
                  <Truck size={12} className="text-pitch" />
                  {partner.avgShipDays}
                </div>
                <p className="text-[10px] text-muted leading-relaxed">{partner.usFulfillment}</p>
                <p className="text-xs text-pitch/80 mt-2">{partner.specialty}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
