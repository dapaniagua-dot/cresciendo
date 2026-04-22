import { motion } from "framer-motion";
import { Brain, Eye, Calendar, Lightbulb, Shield, Star } from "lucide-react";

const beneficios = [
  { icon: Brain, label: "Mantener la memoria activa" },
  { icon: Eye, label: "Sostener la atención" },
  { icon: Calendar, label: "Mejorar la organización y planificación" },
  { icon: Lightbulb, label: "Favorecer la toma de decisiones" },
  { icon: Shield, label: "Reducir la frustración ante errores" },
  { icon: Star, label: "Aumentar la seguridad y la autonomía" },
];

export default function Talleres() {
  return (
    <section id="talleres" className="py-12 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Taller de Estimulación Cognitiva<br />
              <span className="text-teal-300">para Adultos Mayores</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Porque el cerebro también necesita entrenamiento. Así como trabajamos el cuerpo para mantener movilidad y fuerza, la mente necesita desafíos para sostener sus funciones.
            </p>
            <div className="bg-white/5 border border-teal-500/30 rounded-2xl px-6 py-4 inline-block">
              <p className="text-teal-300 font-semibold text-sm">📅 Jueves 13hs</p>
              <p className="text-slate-300 text-sm mt-1">Centro Cresciendo · San Miguel</p>
              <a
                href="https://wa.me/5491140622102?text=Quiero%20info%20sobre%20el%20taller%20de%20estimulaci%C3%B3n%20cognitiva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-teal-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-400 transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Derecha */}
          <div className="space-y-4">
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">La estimulación cognitiva ayuda a:</p>
            {beneficios.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-5 py-3 border border-white/10"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <b.icon className="text-teal-400" size={17} />
                </div>
                <p className="text-slate-200 text-sm">{b.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}