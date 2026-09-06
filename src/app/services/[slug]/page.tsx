import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

// Mock database of services
const servicesData: Record<string, any> = {
  "servicing": {
    title: "Servicing",
    description: "Routine and manufacturer-schedule servicing designed to keep vehicles performing at their best.",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2000&auto=format&fit=crop",
    signs: ["Service light is on", "Milestone mileage reached", "Annual check required", "Vehicle feels sluggish"],
    process: [
      { step: "Initial inspection and diagnostic read", num: "01" },
      { step: "Oil and filter change with premium fluids", num: "02" },
      { step: "Comprehensive visual health check", num: "03" },
      { step: "Service light reset and record updated", num: "04" }
    ]
  },
  "diagnostics": {
    title: "Diagnostics",
    description: "Modern electronic diagnostics to identify faults accurately before unnecessary parts are replaced.",
    image: "https://images.unsplash.com/photo-1625047509168-a7006f815424?q=80&w=2000&auto=format&fit=crop",
    signs: ["Engine warning light", "ABS or airbag lights", "Running issues or misfires", "Limp mode active"],
    process: [
      { step: "Code read using dealer-level equipment", num: "01" },
      { step: "Live data analysis during test drive", num: "02" },
      { step: "Physical inspection of suspect components", num: "03" },
      { step: "Clear explanation and repair estimate", num: "04" }
    ]
  },
  "brakes-suspension": {
    title: "Brakes & Suspension",
    description: "Inspection, repair and replacement of braking and suspension components.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    signs: ["Squealing or grinding noises", "Spongy brake pedal", "Vehicle pulling to one side", "Knocking sounds over bumps"],
    process: [
      { step: "Road test to verify symptoms", num: "01" },
      { step: "Ramp inspection of pads, discs, and bushes", num: "02" },
      { step: "Report on wear levels and safety", num: "03" },
      { step: "Replacement using OEM quality parts", num: "04" }
    ]
  },
  "air-conditioning": {
    title: "Air Conditioning",
    description: "Air-conditioning inspection, servicing and recharge.",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2000&auto=format&fit=crop",
    signs: ["System blowing warm air", "Musty smells from vents", "Windows not demisting quickly", "Noisy compressor operation"],
    process: [
      { step: "System pressure and leak test", num: "01" },
      { step: "Recovery of old refrigerant", num: "02" },
      { step: "Vacuum test and antibacterial clean", num: "03" },
      { step: "Recharge with correct gas and PAG oil", num: "04" }
    ]
  },
  "hybrid-ev": {
    title: "Hybrid & EV",
    description: "Maintenance and diagnostic support for modern hybrid and electric vehicles.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    signs: ["High voltage system warnings", "Reduced battery range", "Cooling system issues", "Routine schedule maintenance"],
    process: [
      { step: "Safe isolation of HV systems if required", num: "01" },
      { step: "Battery health and cell balance check", num: "02" },
      { step: "Coolant and inverter system inspection", num: "03" },
      { step: "Update of digital vehicle records", num: "04" }
    ]
  },
  "fleet": {
    title: "Fleet Maintenance",
    description: "Reliable servicing and maintenance support for business vehicles.",
    image: "https://images.unsplash.com/photo-1583151833054-0495f51082c9?q=80&w=2000&auto=format&fit=crop",
    signs: ["Multiple vehicles requiring maintenance", "Need for predictable running costs", "Minimising vehicle downtime", "MOT schedule management"],
    process: [
      { step: "Dedicated account management", num: "01" },
      { step: "Priority booking system", num: "02" },
      { step: "Preventative maintenance planning", num: "03" },
      { step: "Clear monthly invoicing", num: "04" }
    ]
  },
  "mot-preparation": {
    title: "MOT Preparation",
    description: "Pre-MOT checks and repairs to help get vehicles ready for inspection.",
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2000&auto=format&fit=crop",
    signs: ["MOT due within 30 days", "Known issues needing repair first", "Wanting to avoid a failure record", "Combining with annual service"],
    process: [
      { step: "Comprehensive lights and levels check", num: "01" },
      { step: "Tyre, brake and suspension inspection", num: "02" },
      { step: "Emissions system visual check", num: "03" },
      { step: "Remedial work prior to formal test", num: "04" }
    ]
  },
  "tyres-wheel-care": {
    title: "Tyres & Wheel Care",
    description: "Tyres, balancing and vehicle safety checks.",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2000&auto=format&fit=crop",
    signs: ["Tread depth approaching 1.6mm", "Uneven tyre wear", "Vibration at motorway speeds", "Punctures or slow leaks"],
    process: [
      { step: "Tread depth and condition check", num: "01" },
      { step: "Removal and replacement of tyre", num: "02" },
      { step: "Computerised wheel balancing", num: "03" },
      { step: "New valve and safe torque setting", num: "04" }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return { title: "Service Not Found" };
  }
  
  return {
    title: `${service.title} | Theo Garage`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
            style={{ backgroundImage: `url(${service.image})` }}
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-6 max-w-7xl pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase leading-none mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed mb-8">
              {service.description}
            </p>
            <Link
              href="/book"
              className="inline-block bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Book this Service
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Signs you might need it */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-8">Signs You Might Need This</h2>
              <ul className="space-y-4">
                {service.signs.map((sign: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-4 border border-border bg-white">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-muted font-medium">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((p: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="text-3xl font-light text-neutral-300 font-mono shrink-0">
                      {p.num}
                    </div>
                    <div className="text-muted leading-relaxed pb-6 border-b border-border w-full">
                      {p.step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase leading-none mb-6">
            Ready to book your {service.title.toLowerCase()}?
          </h2>
          <p className="text-muted mb-10 max-w-2xl mx-auto">
            Contact our team to schedule an appointment or request an estimate. We're here to help keep your vehicle running perfectly.
          </p>
          <Link
            href="/book"
            className="inline-block bg-foreground text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors"
          >
            Request Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
