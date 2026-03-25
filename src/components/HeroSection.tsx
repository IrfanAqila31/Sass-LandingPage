import dashboard from "../assets/dashboard.png";
const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 text-center">
      <span className="mb-4 inline-block px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
        🚀 New: Smart workflow automation
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Streamline Your Business Workflow
      </h1>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
        NexaFlow helps teams manage tasks and boost productivity in one place.
      </p>
      <div className="mt-6 flex justify-center gap-5">
        <button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 px-5 text-sm lg:text-lg rounded-full font-semibold cursor-pointer shadow-md hover:opacity-90 transition duration-300 active:scale-95">
          Start Free Trial
        </button>
        <button className="border px-5 py-2 text-sm lg:text-lg rounded-full font-semibold hover:bg-linear-to-r hover:bg-zinc-100 hover:text-slate-900 cursor-pointer active:scale-95 transition duration-300">
          Book Demo
        </button>
      </div>
      <div className="mt-10 flex justify-center">
        <img
          src={dashboard}
          alt="dashboard"
          className="rounded-lg shadow-lg max-w-5xl w-full"
        />
      </div>
    </section>
  );
};
export default HeroSection;
