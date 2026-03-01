import { HeadphonesIcon, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import data from "../../data/db.json";

export const PostService = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <SectionHeading 
          title="Reach Us After Service" 
          subtitle="Your satisfaction is our priority. We are here to help even after the job is done."
          light
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <HeadphonesIcon size={40} className="mx-auto mb-6" />
            <h4 className="fs-22 mb-4">Dedicated Helpline</h4>
            <p className="text-white/80 mb-6">Any issues within 15 days? Call us immediately for priority support.</p>
            <a href={`tel:${data.businessInfo.phone}`} className="fs-24 font-bold hover:underline">
              {data.businessInfo.phone}
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <ShieldCheck size={40} className="mx-auto mb-6" />
            <h4 className="fs-22 mb-4">Service Warranty</h4>
            <p className="text-white/80 mb-6">We provide a 30-day service guarantee on all our repairs and maintenance.</p>
            <div className="fs-18 font-bold uppercase tracking-widest">100% Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
