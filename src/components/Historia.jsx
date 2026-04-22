import { motion } from "framer-motion";
import { HelpCircle, Clock, MapPin } from "lucide-react";

const bloques = [
  {
    icon: HelpCircle,
    badge: "AYUDA",
    pregunta: "¿Por qué Cresciendo?",
    texto:
      "El centro Cresciendo lleva su nombre por su significatividad en cuanto al ser y al crecer. Apostamos a la atención integral de las personas. Se acepta y entiende que la diversidad es patrimonio de lo humano, tomando lo diverso como una riqueza y no como un problema, por lo que aquella deja de ser una especie de patología a atender para ser parte de una riqueza recuperable.",
  },
  {
    icon: Clock,
    badge: "CONTENCIÓN",
    pregunta: "¿Desde cuándo?",
    texto:
      "El centro se creó el año 2000 con el fin de brindar atención diagnóstica y terapéutica a niños y jóvenes. En sus comienzos funcionaba en un único consultorio con tres especialidades. Con el tiempo, el espacio y el equipo fueron creciendo, sumando nuevas disciplinas y profesionales comprometidos con la salud integral. La meta siempre fue construir un trabajo verdaderamente interdisciplinario, donde cada especialidad se articule con las demás en beneficio del paciente.",
  },
  {
    icon: MapPin,
    badge: "APOYO",
    pregunta: "¿Dónde?",
    texto:
      "A raíz de este crecimiento se alquiló el lugar actual, acondicionado con tres consultorios en sus comienzos y que hoy cuenta con siete. El centro ha establecido redes de trabajo con escuelas públicas y privadas, servicio local, CPA, Cesppedh, hogares de niños y más. Cumple principalmente tareas clínicas atendiendo a pacientes de todas las edades, y también una tarea pedagógica a través de talleres para alumnos, padres, docentes y directivos.",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="pt-4 pb-8 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-teal-600 text-base font-semibold tracking-widest uppercase">Nuestra historia</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-1">
            Equipo Interdisciplinario de profesionales de la salud
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Más de 25 años acompañando a personas en su desarrollo y bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bloques.map((b, i) => (
            <motion.div
              key={b.badge}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl px-8 py-5 border border-teal-200 hover:shadow-lg hover:border-teal-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <b.icon className="text-teal-600" size={20} />
                </div>
                <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">{b.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 mt-2">{b.pregunta}</h3>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">{b.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}