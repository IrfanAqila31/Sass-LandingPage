import { Zap, BarChart3, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-20 px-6 text-center bg-linear-to-b from-white to-slate-100">
        
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Powerful Features to Boost Your Workflow
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Everything you need to manage, automate, and scale your business in one
        platform.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="Smart Automation"
          description="Automate Repetitive taks and save hour of work every week"
          icon={<Zap size={24} />}
        />
        <FeatureCard
          title="Real-time Analytics"
          description="Get insights instantly and make better decisions faster."
          icon={<BarChart3 size={24} />}
        />
        <FeatureCard
          title="Team Collaboration"
          description="Work together seamlessly with your team in one platform."
          icon={<Users size={24} />}
        />
      </div>
    </section>
  );
};
export default Features;
