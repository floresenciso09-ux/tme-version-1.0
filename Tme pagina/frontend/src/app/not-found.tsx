export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-space px-6 text-center text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-surface p-10 shadow-glow">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Página no encontrada</p>
        <h1 className="mt-6 text-5xl font-semibold">404</h1>
        <p className="mt-4 text-lg text-slate-300">
          Esta sección aún está en construcción. Regresa al inicio para explorar los servicios de TME.
        </p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-electric px-6 py-3 text-sm font-semibold text-black">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
