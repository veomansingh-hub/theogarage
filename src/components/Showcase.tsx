"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const items = [
    { title: "Brake Overhaul", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop" },
    { title: "Diagnostic Work", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop" },
    { title: "Suspension Replacement", img: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1200&auto=format&fit=crop" },
    { title: "Routine Servicing", img: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop" },
    { title: "Engine Inspection", img: "https://images.unsplash.com/photo-1523983388277-336a66bf9bc1?q=80&w=1200&auto=format&fit=crop" },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden bg-background py-32">
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
          Attention to Detail.<br />
          <span className="text-muted">In Every Job.</span>
        </h2>
      </div>
      
      <div className="flex pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <motion.div style={{ x }} className="flex gap-6 min-w-max">
          {items.map((item, i) => (
            <div key={i} className="w-[300px] md:w-[500px] flex flex-col gap-4">
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200 group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 500px"
                />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-foreground">{item.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
