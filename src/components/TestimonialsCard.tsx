type Props = {
  name: string;
  role: string;
  message: string;
  avatar?: string;
  rating?: number;
};

const TestimonialsCard = ({ name, role, message, avatar, rating }: Props) => {
  return (
    <div
      id="testimonials"
      className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
    >
      {avatar && (
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      )}

      {/* Rating */}
      {/* Star Rating */}
      {rating && (
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < rating ? "text-yellow-400" : "text-slate-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      )}

      {/* Message */}
      <p className="text-slate-600 text-sm leading-relaxed">"{message}"</p>

      {/* User Info */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-900">{name}</h4>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </div>
  );
};
export default TestimonialsCard;
