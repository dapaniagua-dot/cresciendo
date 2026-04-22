import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Ubicacion() {
  return (
    <section id="contacto" className="py-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
              Todos son bienvenidos.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-2 text-justify">
              Somos una Asociación Civil denominada <strong className="text-slate-700">Grupo Interdisciplinario Cresciendo</strong>. Trabajamos con un enfoque integral para acompañar el desarrollo y la salud de niños, adolescentes y adultos.
            </p>
            <p className="text-slate-700 font-semibold text-sm mb-1">Nuestro Equipo Directivo</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 text-justify">El corazón de nuestra institución reside en la experiencia y vocación de quienes la coordinan:</p>
            <div className="flex gap-4 flex-wrap">
              {[
                { initials: "GG", nombre: "Lic. Graciela Gauto", especialidad: "Psicopedagoga", desc: "Especialista en dificultades de aprendizaje y desarrollo cognitivo en niños y adolescentes." },
                { initials: "JB", nombre: "Lic. Jessica Boscana", especialidad: "Psicóloga", desc: "Acompañamiento psicológico para niños, adolescentes y adultos con enfoque integrador." },
              ].map((p) => (
                <div key={p.nombre} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 flex-1 min-w-[200px]">
                  <div className="w-11 h-11 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {p.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{p.nombre}</p>
                    <p className="text-teal-600 text-xs font-medium mb-1">{p.especialidad}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-teal-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-teal-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm mb-1">Dirección</p>
                <a
                  href="https://www.google.com/maps/place/cresciendo/@-34.541011,-58.7171155,88m/data=!3m1!1e3!4m15!1m8!3m7!1s0x95bcbd6cfc1718cf:0xc22c1c1fb753637c!2sLeandro+N.+Alem+1868,+B1663GDO+GDO,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.5408651!4d-58.7168883!16s%2Fg%2F11gmz6506b!3m5!1s0x95bcbd6cfe22df21:0x797b3070c7aedfbd!8m2!3d-34.5409368!4d-58.7169523!16s%2Fg%2F11bbrnl94g?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 text-sm hover:underline"
                >
                  Alem 1868, San Miguel, Buenos Aires, Argentina
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-teal-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Phone className="text-teal-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm mb-1">Teléfono</p>
                <a href="tel:46676335" className="text-teal-600 text-sm hover:underline block">4667-6335</a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-teal-200 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Mail className="text-teal-600" size={20} />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm mb-1">Email</p>
                <a href="mailto:centrocresciendo@gmail.com" className="text-teal-600 text-sm hover:underline">
                  centrocresciendo@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-teal-700 rounded-2xl p-6 text-white flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">WhatsApp</p>
                <a href="https://wa.me/5491140622102?text=Me%20contacto%20desde%20el%20sitio%20web" target="_blank" rel="noopener noreferrer" className="text-teal-100 text-sm hover:text-white">(11) 4062-2102 → Escribinos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}