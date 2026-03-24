import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 ">
      {/* Container*/}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ---LOGO START --- */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-lg"></div> */}
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              NexaFlow
            </span>
          </div>
        </div>
        {/* ---LOGO END --- */}

        {/* --- BAGIAN TENGAH: MENU (Desktop) START --- */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition duration-200 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* --- BAGIAN TENGAH: MENU (Desktop) END --- */}

        {/* --- BAGIAN KANAN: ACTION BUTTON & HAMBURGER START--- */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Button ini hanya muncul di Desktop (md ke atas) */}
          <button className="hidden md:block bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition duration-300 cursor-pointer active:scale-95">
            Get Started
          </button>
          {/* --- BAGIAN KANAN: ACTION BUTTON & HAMBURGER END--- */}

          {/* Tombol Hamburger (Hanya muncul di Mobile) START */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition duration-300 focus:outline-none cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      {/* Tombol Hamburger (Hanya muncul di Mobile) END */}

      {/* --- OVERLAY KLIK DI LUAR MENU (MOBILE) --- */}
      <div 
        className={`md:hidden fixed inset-x-0 bottom-0 top-16 bg-slate-900/10 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- MENU MOBILE DROPDOWN START --- */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "max-h-[400px] opacity-100 border-b border-slate-200" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-600 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-slate-100" />
          <button className="w-max px-5 text-sm bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-bold hover:opacity-90 transition duration-300 active:scale-95 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
      {/* --- MENU MOBILE DROPDOWN END --- */}
    </nav>
  );
};

export default Navbar;
