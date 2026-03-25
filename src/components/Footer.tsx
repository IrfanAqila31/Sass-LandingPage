const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo & Brand */}
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-white">NexaFlow</span>
          <p className="text-sm text-slate-400">
            Streamline your workflow and collaboration.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white">Links</h4>
          <a href="#features" className="hover:text-blue-500">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-500">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-blue-500">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Social / Info */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-white">Follow us</h4>
          <div className="flex gap-3">
            <a href="#" className="hover:text-blue-500">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-500">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-500">
              GitHub
            </a>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            © 2026 NexaFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
