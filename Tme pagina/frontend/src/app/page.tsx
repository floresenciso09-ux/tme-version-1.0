"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Desarrollo Web",
    description: "Plataformas corporativas modernas, comercio electrónico y portales B2B.",
    accent: "Azul Eléctrico"
  },
  {
    title: "Inteligencia Artificial",
    description: "Modelos personalizados, automatización inteligente y analítica predictiva.",
    accent: "Cian"
  },
  {
    title: "Automatización",
    description: "Procesos empresariales eficientes, RPA y workflows inteligentes.",
    accent: "Morado"
  },
  {
    title: "Videojuegos",
    description: "Experiencias inmersivas multiplataforma y soluciones Unity/Unreal.",
    accent: "Violeta"
  }
];

const projects = [
  {
    name: "Lunar Platform",
    description: "Marketplace B2B para soluciones tecnológicas modulares.",
    status: "En producción",
    tech: "Next.js · NestJS · PostgreSQL"
  },
  {
    name: "Nova AI",
    description: "Motor de recomendaciones y automatización para empresas.",
    status: "Activo",
    tech: "Python · Prisma · Cloud"
  },
  {
    name: "Orbit Studio",
    description: "Portal de desarrolladores para videojuegos y experiencias interactivas.",
    status: "Beta",
    tech: "React · WebGL · Tailwind"
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(42,124,255,0.25),transparent_40%)] pointer-events-none" />
      <section className="min-h-screen px-6 py-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200">
                Innovación + Confianza
              </span>
              <h1 className="mt-8 text-5xl font-semibold leading-tight text-white lg:text-6xl">
                Construimos el futuro digital de las empresas con tecnología premium.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Tecnología Moon Entertainment crea soluciones de software, inteligencia artificial, videojuegos y comercio electrónico para clientes globales.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-electric px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Contacto
                </a>
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-cyan-200"
                >
                  Ver proyectos
                </a>
              </div>
            </div>
            <div className="relative hidden w-full max-w-md lg:block">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl" />
              <div className="relative z-10 rounded-[2rem] bg-[#0b122b] p-8 shadow-glow">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                  Experiencia en
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Diseño de ecosistemas digitales</h2>
                <p className="mt-4 text-slate-300">
                  Entregamos interfaces de alto impacto, animaciones suaves y experiencias accesibles para cada producto.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="servicios" className="space-y-8 px-6 pb-20 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Servicios</p>
          <h2 className="mt-3 text-4xl font-semibold text-white">Soluciones diseñadas para escalar</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <motion.article
                key={service.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-surface p-6 shadow-glow"
              >
                <span className="text-sm text-cyan-200">{service.accent}</span>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="bg-[#08102a] px-6 pb-20 pt-16 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Portafolio</p>
          <h2 className="mt-3 text-4xl font-semibold text-white">Proyectos estratégicos</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                whileHover={{ scale: 1.02 }}
                className="rounded-[2rem] border border-white/10 bg-[#09132e] p-6 shadow-glow"
              >
                <div className="h-52 rounded-3xl bg-white/5" />
                <div className="mt-6">
                  <span className="text-sm uppercase tracking-[0.2em] text-cyan-200">{project.status}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-slate-300">{project.description}</p>
                  <p className="mt-4 text-sm text-slate-400">{project.tech}</p>
                  <a className="mt-6 inline-flex items-center text-sm font-semibold text-electric" href="#">
                    Ver más →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
