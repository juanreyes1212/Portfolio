export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hi, I'm Juan Reyes</h2>
        <p className="text-slate-600 dark:text-slate-400 flex-grow">a Front-End Developer and UI/UX Designer with 7+ years of experience creating accessible, scalable, and performance-optimized digital experiences. I specialize in modern web technologies like React, Vue, and design systems, with a strong focus on data-driven UX and ADA-compliant solutions.
          Outside of code, I find balance in photography, woodworking, and gaming — and yes, even caring for my cats (despite being a lifelong dog person until recently). 
          Whether crafting an interface or a coffee table, I'm driven by detail, form, and function.
          Let’s build something meaningful together.
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
