import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us | Theo Garage",
  description: "Learn about our independent workshop philosophy, craftsmanship, modern diagnostics, and transparent communication.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95] mb-6">
            A Better Way To<br />
            <span className="text-muted">Maintain Your Vehicle.</span>
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Theo Garage was established to provide a genuine alternative to the main dealer network. An independent workshop combining traditional mechanical craftsmanship with modern diagnostic capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="aspect-[4/5] bg-neutral-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503375894024-783262fb0eb2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center grayscale" />
          </div>
          <div className="space-y-12 lg:pt-16">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Independent Philosophy</h2>
              <p className="text-muted leading-relaxed text-lg">
                We believe that premium vehicle care shouldn't come with a premium of poor communication. We started this workshop because we wanted to create an environment where customers understand exactly what is happening with their vehicles, and technicians have the time and equipment to do the job properly.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Modern Diagnostics & Craftsmanship</h2>
              <p className="text-muted leading-relaxed text-lg">
                The modern motor vehicle is a complex network of computers and sensors. We invest heavily in dealer-level diagnostic equipment and continuous training. But we also believe in fundamental mechanical skill—the ability to physically inspect components, understand how they fail, and repair them properly rather than simply fitting new parts unnecessarily.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Transparent Communication</h2>
              <p className="text-muted leading-relaxed text-lg">
                Trust is built on transparency. We operate a strict policy: no work is carried out without your prior authorisation. We provide clear, itemised estimates and will happily show you the worn components we replace. You are always in control of your vehicle's maintenance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#111] text-white p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-8">
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
      </div>
    </div>
  );
}
