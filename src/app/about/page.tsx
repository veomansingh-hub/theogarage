import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About | Theo Garage",
  description:
    "Learn about Theo Garage's independent workshop philosophy — dealer-level diagnostics, skilled craftsmanship, and transparent communication.",
};

const values = [
  {
    title: "Independent Philosophy",
    body: "Premium vehicle care shouldn't mean poor communication or unnecessary complexity. We built this workshop because we wanted customers to understand exactly what is happening with their vehicles — and for technicians to have the time and equipment to do the job properly.",
  },
  {
    title: "Modern Diagnostics & Craftsmanship",
    body: "The modern motor vehicle is a complex network of computers and sensors. We invest heavily in dealer-level diagnostic equipment and continuous training. But we also believe in fundamental mechanical skill — the ability to physically inspect components, understand how they fail, and repair them properly rather than fitting unnecessary new parts.",
  },
  {
    title: "Transparent Communication",
    body: "Trust is built on transparency. No work is carried out without your prior authorisation. We provide clear, itemised estimates and will happily show you the worn components we replace. You are always in control of your vehicle's maintenance.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">About Theo Garage</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] mb-6">
              A Better Way To<br />
              <span className="text-muted">Maintain Your Vehicle.</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed">
              Theo Garage was established to provide a genuine alternative to the main dealer network — an independent workshop combining traditional mechanical craftsmanship with modern diagnostic capability.
            </p>
          </div>
        </div>
      </section>

      {/* Story Image + Values */}
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="aspect-[4/5] bg-neutral-200 relative overflow-hidden group sticky top-24">
              <Image
                src="https://images.unsplash.com/photo-1503375894024-783262fb0eb2?q=80&w=1200&auto=format&fit=crop"
                alt="Workshop technician at work"
                fill
                className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Values */}
            <div className="space-y-12 lg:pt-4">
              {values.map((v, i) => (
                <div key={i} className="border-t border-border pt-10">
                  <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">{v.title}</h2>
                  <p className="text-muted leading-relaxed text-lg">{v.body}</p>
                </div>
              ))}

              {/* Commitment bullets */}
              <div className="border-t border-border pt-10">
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Our Commitments</h2>
                <ul className="space-y-3">
                  {[
                    "No work carried out without your prior authorisation",
                    "Itemised estimates before every job",
                    "OEM-quality parts as standard",
                    "Dealer-level diagnostics at independent prices",
                    "Digital service records updated correctly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] text-white py-24 text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-6">
            Experience The Standard.
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Bring your vehicle to an independent workshop that cares about the details.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
