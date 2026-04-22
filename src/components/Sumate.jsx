import { Send } from "lucide-react";

export default function Sumate() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10">
            <span className="text-teal-300 text-sm font-semibold tracking-widest uppercase mb-4 block">¿Sos profesional de la salud?</span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              Sumate a nuestro equipo
            </h2>
            <p className="text-teal-100/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Si querés unirte a nuestro centro interdisciplinario, podés enviarnos tu curriculum vitae. Siempre estamos creciendo juntos.
            </p>
            <a
              href="mailto:centrocresciendo@gmail.com?subject=ENVIO%20DE%20CV%20DESDE%20EL%20SITIO%20WEB"
              className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-colors text-sm"
            >
              <Send size={16} />
              Enviar mi C.V.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}