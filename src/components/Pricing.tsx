import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section id="pricing" className="py-26 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl  font-bold text-slate-900">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Choose the perfect plan to streamline your workflow and scale your
        business with NexaFlow
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <PricingCard
          title="Starter"
          price="$0"
          description="Perfect for individuals getting started"
          features={["Basic Analytics", "1 Project", "Email Support"]}
        />

        <PricingCard
          title="Growth"
          price="$19"
          description="Best for small teams and startups"
          popular={true}
          features={[
            "Advanced analytics",
            "Unlimited projects",
            "Priority support",
            "Team collaboration",
          ]}
        />

        <PricingCard
          title="Scale"
          price="$49"
          description="Advanced features for growing businesses"
          features={[
            "Everything in Growth",
            "Custom integrations",
            "Dedicated support",
          ]}
        />
      </div>
    </section>
  );
};
export default Pricing;
