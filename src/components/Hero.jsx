import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.png"
          alt=""
          className="w-full object-contain"
          style={{ mixBlendMode: "screen", opacity: 0.08 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-teal-300 text-sm tracking-[0.3em] uppercase font-medium mb-6">
            ATENCIÓN A OBRAS SOCIALES
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Pedir ayuda<br />
            <span className="text-teal-300">es el primer paso</span>
          </h1>
          <p className="text-lg md:text-xl text-teal-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Somos un grupo interdisciplinario de profesionales de la salud. Acompañamos a niños, adolescentes y adultos en su desarrollo y bienestar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491140622102?text=Me%20contacto%20desde%20el%20sitio%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-900 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-colors text-sm tracking-wide"
            >
              Pedí tu turno
            </a>
            <a
              href="#especialidades"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm tracking-wide"
            >
              Ver especialidades
            </a>
          </div>
        </motion.div>
      </div>


    </section>
  );
}