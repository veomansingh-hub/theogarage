import { Cpu, Gauge, Zap, Disc, Award, ShieldAlert } from "lucide-react";

export default function Capabilities() {
  const specs = [
    {
      icon: <Cpu size={24} className="text-accent" />,
      title: "Dealer Diagnostic Suite",
      desc: "Manufacturer-level OBD-II scanning, live sensor telemetry, ECU adaptation, and software module coding."
    },
    {
      icon: <Zap size={24} className="text-accent" />,
      title: "High-Voltage EV Isolation",
      desc: "Qualified IMI Level 3 high-voltage safety isolation, battery management telemetry, and thermal loop service."
    },
    {
      icon: <Gauge size={24} className="text-accent" />,
      title: "Oscilloscope Signal Tracing",
      desc: "Deep electrical fault finding for intermittent CAN-bus, sensor waveform, and ignition system anomalies."
    },
    {
      icon: <Disc size={24} className="text-accent" />,
      title: "3D Laser Wheel Alignment",
      desc: "4-wheel CCD laser geometry alignment measuring camber, caster, and toe to factory tolerances."
    },
    {
      icon: <ShieldAlert size={24} className="text-accent" />,
      title: "Block Exemption Safe",
      desc: "Official servicing maintaining manufacturer warranty validity through OEM specification compliance."
    },
    {
      icon: <Award size={24} className="text-accent" />,
      title: "Digital History Logging",
      desc: "Official service record entries updated directly to manufacturer digital service portals."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {specs.map((item, idx) => (
        <div 
          key={idx} 
          className="bg-white p-8 border border-border hover:border-accent transition-all duration-300 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-neutral-50 border border-border flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-100 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Hartwell Standard 0{idx + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
