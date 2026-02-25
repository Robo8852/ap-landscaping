import { Shield, Star, ThumbsUp } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border border-stone-100">
        <div className="flex items-start space-x-4">
          <div className="bg-ap-forest/10 p-3 rounded-xl text-ap-forest">
            <Shield size={28} />
          </div>
          <div>
            <h3 className="font-bold text-ap-bark text-lg">Licensed &amp; Insured</h3>
            <p className="text-ap-stone text-sm mt-1">Full coverage for your peace of mind and property protection.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-ap-green/10 p-3 rounded-xl text-ap-green">
            <Star size={28} />
          </div>
          <div>
            <h3 className="font-bold text-ap-bark text-lg">Expert Team</h3>
            <p className="text-ap-stone text-sm mt-1">Years of experience in local horticulture and landscape design.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="bg-ap-forest/10 p-3 rounded-xl text-ap-forest">
            <ThumbsUp size={28} />
          </div>
          <div>
            <h3 className="font-bold text-ap-bark text-lg">100% Satisfaction</h3>
            <p className="text-ap-stone text-sm mt-1">We don&apos;t stop until your outdoor space looks exactly how you want it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
