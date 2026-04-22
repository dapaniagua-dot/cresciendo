import { motion } from "framer-motion";
import { Brain, Heart, Ear, Baby, Activity, Scale, Hand, AudioLines, Music, Dumbbell, Zap, Search, Users } from "lucide-react";

const especialidades = [
  { icon: Brain, label: "Psicología", desc: "Evaluación y acompañamiento psicológico para todas las edades. Abordaje de emociones, conducta y bienestar mental. Espacios individuales y grupales de escucha." },
  { icon: Activity, label: "Psicopedagogía", desc: "Diagnóstico y tratamiento de dificultades de aprendizaje. Evaluación de procesos cognitivos y estrategias de estudio. Orientación a docentes y familias." },
  { icon: AudioLines, label: "Fonoaudiología", desc: "Trastornos del habla, lenguaje y comunicación. Intervención en deglución, voz y lectoescritura. Atención a niños, adolescentes y adultos." },
  { icon: Zap, label: "Psicomotricidad", desc: "Abordaje del desarrollo psicomotor en niños y adolescentes. Estimulación del esquema corporal, coordinación y equilibrio. Trabajo integrado con otras disciplinas del equipo." },
  { icon: Baby, label: "Pediatría", desc: "Atención integral del crecimiento y desarrollo infantil. Seguimiento del peso, talla e hitos madurativos. Controles periódicos y orientación a las familias." },
  { icon: Dumbbell, label: "Kinesiología", desc: "Rehabilitación física y motora de distintas patologías. Tratamiento del dolor, lesiones y disfunciones musculoesqueléticas. Seguimiento postoperatorio y recuperación funcional." },
  { icon: Music, label: "Musicoterapia", desc: "Uso terapéutico de la música para el desarrollo emocional y cognitivo. Intervención en comunicación, vínculos y expresión. Indicada para diversas edades y diagnósticos." },
  { icon: Hand, label: "Terapia Ocupacional", desc: "Rehabilitación y promoción de la autonomía en actividades cotidianas. Estimulación sensorial y motriz fina. Integración en contextos escolares y familiares." },
  { icon: Brain, label: "Neurólogo Infantil", desc: "Evaluación neurológica del desarrollo en niños. Diagnóstico de trastornos del neurodesarrollo como TEA y TDAH. Seguimiento y orientación terapéutica." },
  { icon: Heart, label: "Psiquiatría Infantil/Adultos", desc: "Atención psiquiátrica infantil, adolescente y de adultos. Diagnóstico y tratamiento farmacológico cuando es necesario. Trabajo articulado con el resto del equipo." },
  { icon: Search, label: "Evaluaciones Neurocognitivas", desc: "Evaluación integral de funciones cognitivas: atención, memoria y lenguaje. Diagnóstico diferencial para distintos trastornos del neurodesarrollo. Informes para uso clínico y escolar." },
  { icon: Users, label: "Estimulación Cognitiva para Adultos Mayores", desc: "Programas de estimulación para preservar y mejorar las funciones cognitivas. Prevención del deterioro cognitivo en adultos mayores. Acompañamiento a familias y cuidadores." },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-8 bg-teal-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-teal-600 text-sm font-semibold tracking-widest uppercase">Nuestras áreas</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3">Especialidades</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">Un equipo completo para acompañarte en cada etapa de la vida.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((e, i) => (
            <motion.div
              key={e.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group bg-white p-7 rounded-2xl border border-teal-200 hover:shadow-lg hover:border-teal-400 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center flex-shrink-0 transition-colors">
                  <e.icon className="text-teal-600" size={22} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight">{e.label}</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}