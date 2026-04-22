import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Talleres", href: "#talleres" },
  { label: "Contacto", href: "#contacto" },
];

const handleNavClick = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offset = 72; // navbar height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 shadow-sm" style={{backgroundColor: '#f8f9f3'}}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Cresciendo Logo"
            className="h-16 w-auto object-contain"
          />
          <span className="text-xs font-semibold tracking-widest uppercase leading-tight hidden sm:block text-teal-700">
            Centro Interdisciplinario de Salud
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm transition-colors font-medium text-slate-500 hover:text-teal-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491140622102?text=Me%20contacto%20desde%20el%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-colors font-medium"
          >
            Turno
          </a>
        </nav>

        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => { handleNavClick(e, l.href); setOpen(false); }}
              className="text-sm text-slate-600 hover:text-teal-700 font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}