import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 ">
      {/* Container Utama */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* --- BAGIAN KIRI: LOGO --- */}
        <div className="flex-1 flex items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* <div className="w-8 h-8 bg-blue-600 rounded-lg"></div> */}
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              NexaFlow
            </span>
          </div>
        </div>

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
          <button className="hidden md:block bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold transition cursor-pointer active:scale-95">
            Get Started
          </button>
          {/* --- BAGIAN KANAN: ACTION BUTTON & HAMBURGER END--- */}

          {/* Tombol Hamburger (Hanya muncul di Mobile) START */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Tombol Hamburger (Hanya muncul di Mobile) END */}

      {/* --- MENU MOBILE DROPDOWN START --- */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-2">
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
          <button className="w-max px-5 text-sm bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95 cursor-pointer">
            Get Started
          </button>
        </div>
      )}
      {/* --- MENU MOBILE DROPDOWN END --- */}
    </nav>
  );
};

export default Navbar;
