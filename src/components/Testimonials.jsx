import SectionHeading from "./SectionHeading.jsx";
import Gallery from "./Gallery.jsx";
import { testimonials } from "../data/site.js";

function TestimonialCard({ t }) {
  return (
    <figure className="rounded-xl">
      <img
        src={t.avatar}
        alt={t.name}
        className="h-16 w-16 rounded-full object-cover"
      />
      <blockquote className="mt-4 text-[15px] leading-relaxed text-neutral-700">
        <i className="bx bxs-quote-alt-left mr-1 text-brand-400"></i>
        {t.quote}
      </blockquote>
      <figcaption className="mt-3 text-sm font-semibold text-neutral-900">
        — {t.name}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-50 py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Testimonials"
            title="Once you try it, you can't go back"
          />
          <div className="grid gap-10 sm:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>

        <Gallery />
      </div>
    </section>
  );
}
