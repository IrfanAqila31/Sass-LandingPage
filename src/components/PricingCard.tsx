import { Check } from "lucide-react";

type Props = {
  title: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
};

const PricingCard = ({
  title,
  price,
  description,
  popular,
  features,
}: Props) => {
  return (
    <div
      className={`relative p-8 rounded-2xl border shadow-sm ${
        popular
          ? "bg-blue-600 text-white border-blue-600 scale-105"
          : "bg-white border-slate-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-white text-blue-600 rounded-full shadow">
          Most Popular
        </div>
      )}
      <h3
        className={`${popular ? "text-white" : "text-slate-900"} text-xl font-semibold`}
      >
        {title}
      </h3>

      <p
        className={`${popular ? "text-blue-100" : "text-slate-600"} mt-2 text-sm`}
      >
        {description}
      </p>

      <div
        className={`${popular ? "text-blue-100" : "text-slate-600"} mt-2 text-3xl font-semibold`}
      >
        {price}
        <span
          className={`${popular ? "text-blue-100" : "text-slate-600"} mt-2 text-base`}
        >
          /month
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {/* Icon check */}
            <Check
              size={18}
              strokeWidth={3}
              className={`${popular ? "text-white" : "text-blue-600"}`}
            />

            {/* Text */}
            <span
              className={`text-sm ${
                popular ? "text-blue-100" : "text-slate-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full py-3 rounded-xl font-semibold transition cursor-pointer ${
          popular
            ? "bg-white text-blue-600 hover:bg-blue-100"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {popular ? "Start Free Trial" : "Get Started"}
      </button>
    </div>
  );
};

export default PricingCard;
