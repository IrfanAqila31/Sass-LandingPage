type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white ">
        {icon}
      </div>
      <h3 className="text-lg font-semibold  text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 ">{description}</p>
    </div>
  );
};
export default FeatureCard;
