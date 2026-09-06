import Image from "next/image";
import Link from "next/link";

export default function Vehicles() {
  const categories = [
    { name: "European", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" }, // Lamborghini/European luxury
    { name: "German", img: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=800&auto=format&fit=crop" }, // BMW M
    { name: "British", img: "https://images.unsplash.com/photo-1606016159991-efa14b8bd641?q=80&w=800&auto=format&fit=crop" }, // Range Rover
    { name: "Japanese", img: "https://images.unsplash.com/photo-1611821064430-0d40221e4f98?q=80&w=800&auto=format&fit=crop" }, // Nissan GTR
    { name: "Hybrid & EV", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" }, // EV Charging
    { name: "Light Commercial", img: "https://images.unsplash.com/photo-1563124508-2e06f5287e07?q=80&w=800&auto=format&fit=crop" }, // Premium Van / VW Transporter style
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((cat, i) => (
        <Link href="/book" key={i} className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 cursor-pointer block">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-90 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
            style={{ backgroundImage: `url(${cat.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
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
