import { featuredLogos } from "../data/site.js";

export default function FeaturedIn() {
  return (
    <section className="border-y border-neutral-100 bg-white py-10">
      <div className="container-x">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {featuredLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-5 w-auto grayscale transition hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
