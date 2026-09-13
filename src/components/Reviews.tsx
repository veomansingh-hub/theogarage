"use client";

import { useState } from "react";
import { ShieldCheck, Star, ExternalLink } from "lucide-react";

export default function Reviews() {
  const [activeTab, setActiveTab] = useState("all");

  const previews = [
    {
      id: "google",
      platform: "Google Business Profile",
      description: "Live verified rating sync displaying star ratings, recent customer comments, and owner responses directly on your site.",
      tag: "API Integration Ready",
      stats: "4.9 ★ Rating (140+ Verified Reviews)",
      color: "text-amber-500"
    },
    {
      id: "trustpilot",
      platform: "Trustpilot Platform Feed",
      description: "Automated review widget integration showcasing real-time customer satisfaction scores and verified feedback badges.",
      tag: "Third-Party Sync",
      stats: "4.9 / 5.0 Excellent Rating",
      color: "text-emerald-600"
    },
    {
      id: "custom",
      platform: "Custom Review Module",
      description: "Filterable review showcase highlighting specific service categories such as major servicing, diagnostics, or MOT preparation.",
      tag: "Bespoke Filter Module",
      stats: "100% Verified Customer Scope",
      color: "text-accent"
    }
  ];

  const filteredPreviews = activeTab === "all" ? previews : previews.filter(p => p.id === activeTab);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
            activeTab === "all" ? "bg-foreground text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          All Integrations
        </button>
        <button
          onClick={() => setActiveTab("google")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
            activeTab === "google" ? "bg-foreground text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          Google Business
        </button>
        <button
          onClick={() => setActiveTab("trustpilot")}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
            activeTab === "trustpilot" ? "bg-foreground text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          Trustpilot Feed
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPreviews.map((item, i) => (
          <div key={i} className="bg-white p-8 border border-border flex flex-col justify-between h-full shadow-sm hover:border-accent transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-neutral-100 text-neutral-600 px-3 py-1.5 border border-neutral-200">
                  {item.tag}
                </span>
                <div className="flex text-amber-400 gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground uppercase tracking-wider text-base mb-2">
                {item.platform}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-400 mb-4">
                {item.stats}
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} /> Live API Ready
              </span>
              <ExternalLink size={14} className="text-neutral-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
