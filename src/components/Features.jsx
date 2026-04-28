import { features } from "../data/site.js";

export default function Features() {
  return (
    <section className="bg-white pb-24">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100">
              <i className={`bx ${feature.icon} text-2xl text-brand-600`}></i>
            </div>
            <h3 className="mb-2 text-lg font-bold text-neutral-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
