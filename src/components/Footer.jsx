import { MapPin, Mail, Phone } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Talleres", href: "#talleres" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-white">Cresciendo</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Grupo interdisciplinario de profesionales de la salud comprometidos con tu bienestar.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-5">Navegación</p>
            <div className="grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-slate-500 hover:text-teal-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-5">Contacto</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-slate-500">Alem 1868, San Miguel</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:46676335" className="text-sm text-slate-500 hover:text-teal-400 transition-colors block">4667-6335</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="text-teal-500 flex-shrink-0" />
                <a href="mailto:centrocresciendo@gmail.com" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  centrocresciendo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Centro Cresciendo
          </p>
          <a
            href="https://wa.me/5491140622102?text=Me%20contacto%20desde%20el%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-teal-700/30 hover:bg-teal-700/50 text-teal-400 px-5 py-2 rounded-full transition-colors"
          >
            💬 Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}