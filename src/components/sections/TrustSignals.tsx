import { ShieldCheck, BadgeCheck, Wrench, Clock } from "lucide-react";

export const TrustSignals = () => {
  const signals = [
    { icon: ShieldCheck, text: "100% Satisfaction" },
    { icon: BadgeCheck, text: "Genuine Parts" },
    { icon: Wrench, text: "Verified Technicians" },
    { icon: Clock, text: "60 Min Response" }
  ];

  return (
    <div className="bg-white py-8 border-b border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-slate-600">
              <item.icon className="text-primary" size={24} />
              <span className="fs-14 font-semibold uppercase tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
