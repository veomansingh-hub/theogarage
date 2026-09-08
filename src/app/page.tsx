import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Settings, PenTool as Tool, BatteryCharging, Wind, CarFront, Check } from "lucide-react";
import Vehicles from "@/components/Vehicles";
import Showcase from "@/components/Showcase";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2940&auto=format&fit=crop"
            alt="Hartwell Motorworks Workshop"
            fill
            priority
            className="object-cover object-[75%_center] md:object-[center_center] opacity-70 mix-blend-luminosity"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-6 max-w-7xl mt-16 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase leading-[0.95] mb-6">
              Your Car.<br />
              <span className="text-neutral-300">Looked After Properly.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed">
              Servicing, diagnostics and maintenance from an independent workshop built around straightforward advice, skilled technicians and meticulous workmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book"
                className="bg-white text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors text-center"
              >
                Book a Service
              </Link>
              <Link
                href="#services"
                className="border border-white/30 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-400 tracking-wide uppercase">
              <span>Clear advice</span>
              <span className="hidden sm:block w-1 h-1 bg-accent rounded-full" />
              <span>Quality parts</span>
              <span className="hidden sm:block w-1 h-1 bg-accent rounded-full" />
              <span>Experienced technicians</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-white">
        <div className="container mx-auto px-6 max-w-7xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center md:text-left">
            {[
              "Independent Workshop",
              "Qualified Technicians",
              "Quality Parts",
              "Clear Pricing",
              "Meticulous Workmanship"
            ].map((trust, i) => (
              <div key={i} className="flex items-center justify-center md:justify-start gap-3 text-sm font-semibold tracking-wide uppercase text-foreground">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span>{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-6">
              Everything Your Car Needs.<br />
              <span className="text-muted">Under One Roof.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[
              { id: "01", slug: "servicing", title: "Servicing", desc: "Routine and manufacturer-scheduled servicing designed to keep vehicles performing at their best.", icon: <Settings size={28} strokeWidth={1.5} /> },
              { id: "02", slug: "mot-preparation", title: "MOT Preparation", desc: "Pre-MOT checks and repairs to help get vehicles ready for inspection.", icon: <Check size={28} strokeWidth={1.5} /> },
              { id: "03", slug: "diagnostics", title: "Diagnostics", desc: "Modern electronic diagnostics to identify faults accurately before unnecessary parts are replaced.", icon: <Tool size={28} strokeWidth={1.5} /> },
              { id: "04", slug: "brakes-suspension", title: "Brakes & Suspension", desc: "Inspection, repair and replacement of braking and suspension components.", icon: <CarFront size={28} strokeWidth={1.5} /> },
              { id: "05", slug: "air-conditioning", title: "Air Conditioning", desc: "Air-conditioning inspection, servicing and recharge.", icon: <Wind size={28} strokeWidth={1.5} /> },
              { id: "06", slug: "tyres-wheel-care", title: "Tyres & Wheel Care", desc: "Tyres, balancing and vehicle safety checks.", icon: <Settings size={28} strokeWidth={1.5} /> },
              { id: "07", slug: "hybrid-ev", title: "Hybrid & EV", desc: "Maintenance and diagnostic support for modern hybrid and electric vehicles.", icon: <BatteryCharging size={28} strokeWidth={1.5} /> },
              { id: "08", slug: "fleet", title: "Fleet Maintenance", desc: "Reliable servicing and maintenance support for business vehicles.", icon: <CarFront size={28} strokeWidth={1.5} /> },
            ].map((s) => (
              <Link href={`/services/${s.slug}`} key={s.id} className="group cursor-pointer block">
                <div className="text-accent mb-6 bg-white w-14 h-14 flex items-center justify-center border border-border shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div className="text-xs font-bold text-muted mb-2 tracking-widest">{s.id}</div>
                <h3 className="text-xl font-bold tracking-tight uppercase mb-3 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-accent transition-colors">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION SECTION */}
      <section className="py-32 bg-[#111] text-white">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none mb-8">
              Not sure what your car needs?
            </h2>
            <p className="text-xl text-neutral-400 mb-12">
              Tell us what you're experiencing and we'll help determine the right next step.
            </p>
            <Link
              href="/book"
              className="inline-block bg-accent text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Tell Us What's Wrong
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-20 text-center">
            Straightforward<br />Automotive Care.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "No Unnecessary Work", desc: "We explain what needs attention, what can wait and why." },
              { title: "Skilled Technicians", desc: "Modern diagnostic equipment combined with practical workshop experience." },
              { title: "Quality Components", desc: "Parts selected for reliability and longevity rather than simply the cheapest option." },
              { title: "Clear Communication", desc: "Customers know what is happening before additional work is undertaken." },
              { title: "Built Around Trust", desc: "A workshop built for long-term relationships and clear advice." }
            ].map((point, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{point.title}</h3>
                <p className="text-muted leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLES SECTION */}
      <section id="vehicles" className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none text-center">
            From Daily Drivers<br />
            <span className="text-muted">To Performance Models.</span>
          </h2>
        </div>
        <div className="container mx-auto px-6 max-w-7xl">
          <Vehicles />
        </div>
      </section>

      {/* WORKSHOP STORY (Split Screen) */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-8">
                Independent<br />By Choice.
              </h2>
              <div className="space-y-6 text-lg text-muted">
                <p>
                  Hartwell Motorworks was established around a simple principle: independent automotive workshops can combine straightforward service with the standards, diagnostics and care expected from contemporary vehicle specialists.
                </p>
                <p>
                  We believe good vehicle care starts with good communication — diagnose properly, explain clearly, and execute the work with precision.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 mt-10 text-sm font-bold tracking-widest uppercase text-foreground hover:text-accent transition-colors pb-1 border-b-2 border-foreground hover:border-accent">
                Read Our Story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 aspect-square md:aspect-[4/3] bg-neutral-200 relative overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2000&auto=format&fit=crop"
                alt="Hartwell Motorworks Workshop Diagnostics"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-20">
            Service Without<br />The Guesswork.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Book", desc: "Choose the service you need or tell us what the vehicle is doing." },
              { num: "02", title: "Inspect", desc: "The vehicle is inspected and the issue diagnosed." },
              { num: "03", title: "Approve", desc: "Recommended work is explained before proceeding." },
              { num: "04", title: "Drive", desc: "Collect your vehicle with a clear understanding of the work completed." }
            ].map((step) => (
              <div key={step.num} className="relative p-6 border border-border bg-white hover:border-accent transition-colors duration-300">
                <div className="text-4xl font-light text-neutral-200 mb-6 font-mono">{step.num}</div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                <p className="text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <Showcase />

      {/* REVIEWS INTEGRATION PREVIEW SECTION */}
      <section className="py-32 bg-white border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-4">
              Review Integration<br />Preview
            </h2>
            <p className="text-xs text-muted uppercase tracking-widest max-w-lg mx-auto">
              Demonstrating live Google Business Profile and platform review feed integration for client websites.
            </p>
          </div>
          <Reviews />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
              Common Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-[#111] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=2000&auto=format&fit=crop"
            alt="BMW Headlight"
            fill
            className="object-cover object-center opacity-20 mix-blend-luminosity"
            sizes="100vw"
            quality={80}
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-none mb-8 max-w-4xl mx-auto">
            Your Car Deserves<br />Better Than Guesswork.
          </h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Book your next service or tell us what the vehicle is doing.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  );
}
