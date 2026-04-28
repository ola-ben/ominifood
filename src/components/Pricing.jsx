import SectionHeading from "./SectionHeading.jsx";
import { pricingPlans } from "../data/site.js";

function PricingCard({ plan }) {
  const isHighlight = plan.highlight;
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl p-8 transition ${
        isHighlight
          ? "bg-brand-50 ring-2 ring-brand-400"
          : "border border-neutral-200 bg-white"
      }`}
    >
      {isHighlight && (
        <span className="absolute right-[-2.4rem] top-6 rotate-45 bg-amber-400 px-10 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-900 shadow-sm">
          Best value
        </span>
      )}

      <header className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">
          {plan.name}
        </p>
        <p className="mt-4 text-5xl font-bold text-neutral-900">
          <span className="align-top text-2xl font-semibold text-neutral-500">
            $
          </span>
          {plan.price}
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          per month — that's just{" "}
          <span className="font-semibold">${plan.perMeal} per meal</span>
        </p>
      </header>

      <ul className="mt-8 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li
            key={f.text}
            className={`flex items-center gap-3 ${
              f.included ? "text-neutral-700" : "text-neutral-400 line-through"
            }`}
          >
            <i
              className={`bx ${f.included ? "bx-check" : "bx-x"} text-xl ${
                f.included ? "text-brand-500" : "text-neutral-300"
              }`}
            ></i>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <a
          href="#cta"
          className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
            isHighlight
              ? "bg-brand-500 text-white hover:bg-brand-600"
              : "border border-neutral-300 bg-white text-neutral-900 hover:border-brand-400 hover:text-brand-600"
          }`}
        >
          Start eating well
        </a>
      </div>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pricing"
          title="Eating well without breaking the bank"
          align="center"
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-neutral-600">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>
    </section>
  );
}
