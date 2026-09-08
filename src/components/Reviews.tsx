import { MessageSquare, ShieldCheck, Star } from "lucide-react";

export default function Reviews() {
  const previews = [
    {
      platform: "Google Business Profile",
      description: "Live verified rating sync displaying star ratings, recent customer comments, and owner responses directly on your site.",
      tag: "API Integration Ready"
    },
    {
      platform: "Trustpilot / Platform Feeds",
      description: "Automated review widget integration showcasing real-time customer satisfaction scores and verified feedback badges.",
      tag: "Third-Party Sync"
    },
    {
      platform: "Custom Review Presentation",
      description: "Filterable review showcase highlighting specific service categories such as major servicing, diagnostics, or MOT preparation.",
      tag: "Bespoke Filter Module"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {previews.map((item, i) => (
        <div key={i} className="bg-white p-8 border border-border flex flex-col justify-between h-full shadow-sm hover:border-accent transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-neutral-100 text-neutral-600 px-3 py-1.5 border border-neutral-200">
                {item.tag}
              </span>
              <div className="flex text-neutral-300 gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
            </div>
            <h3 className="font-bold text-foreground uppercase tracking-wider text-base mb-3">
              {item.platform}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {item.description}
            </p>
          </div>
          <div className="border-t border-border pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <ShieldCheck size={16} /> Verified Platform Preview
          </div>
        </div>
      ))}
    </div>
  );
}
