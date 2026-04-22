import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const equipo = [
  {
    nombre: "Lic. Graciela Gauto",
    especialidad: "Psicopedagoga",
    iniciales: "GG",
    desc: "Especialista en dificultades de aprendizaje y desarrollo cognitivo en niños y adolescentes.",
  },
  {
    nombre: "Lic. Jessica Boscana",
    especialidad: "Psicóloga",
    iniciales: "JB",
    desc: "Acompañamiento psicológico para niños, adolescentes y adultos con enfoque integrador.",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">Profesionales</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Nuestro equipo</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Profesionales comprometidos con el bienestar y el desarrollo de cada persona.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {equipo.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl font-bold text-white">{p.iniciales}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{p.nombre}</h3>
              <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <GraduationCap size={12} />
                {p.especialidad}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}