import { customerAvatars } from "../data/site.js";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-50 pb-20 pt-12 lg:pb-28 lg:pt-16"
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
            Now in 14+ cities
          </span>

          <h1 className="text-balance text-4xl font-bold leading-[1.1] text-neutral-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            A healthy meal delivered to your door,{" "}
            <span className="text-brand-600">every single day</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs — we delivered{" "}
            <span className="font-semibold text-neutral-900">250,000+ meals</span>{" "}
            last year.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Start eating well
            </a>
            <a
              href="#how"
              className="rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-brand-400 hover:text-brand-600"
            >
              Learn more <span aria-hidden>↓</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {customerAvatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-11 w-11 rounded-full border-[3px] border-brand-50 object-cover"
                  style={{ zIndex: customerAvatars.length - i }}
                />
              ))}
            </div>
            <p className="text-sm text-neutral-700">
              <span className="font-bold text-brand-700">250,000+</span> meals
              delivered last year!
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-full bg-brand-200/60 blur-3xl"
          />
          <img
            src="images/hero.png"
            alt="Person enjoying a fresh, healthy meal"
            className="mx-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
