import Image from "next/image";
import Link from "next/link";

export default function Vehicles() {
  const categories = [
    { name: "German", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop" },
    { name: "British", img: "https://images.unsplash.com/photo-1606016159991-efa14b8bd641?q=80&w=800&auto=format&fit=crop" },
    { name: "Japanese", img: "https://images.unsplash.com/photo-1611821064430-0d40221e4f98?q=80&w=800&auto=format&fit=crop" },
    { name: "Performance", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=800&auto=format&fit=crop" },
    { name: "Hybrid & EV", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" },
    { name: "Light Commercial", img: "https://images.unsplash.com/photo-1563124508-2e06f5287e07?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, i) => (
        <Link href="/book" key={i} className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 cursor-pointer block">
          <Image
            src={cat.img}
            alt={cat.name}
            fill
            className="object-cover object-center opacity-60 group-hover:opacity-90 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80 z-10" />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <h3 className="text-white text-sm font-bold tracking-widest uppercase flex items-center justify-between">
              {cat.name}
              <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">→</span>
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
