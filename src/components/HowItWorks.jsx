import SectionHeading from "./SectionHeading.jsx";
import { steps } from "../data/site.js";

function Step({ step, index }) {
  const reverse = index % 2 === 1;
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="flex justify-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 m-6 rounded-full bg-brand-100"
          />
          <img
            src={step.image}
            alt={`${step.title} screen`}
            className="w-44 sm:w-56 md:w-64"
          />
        </div>
      </div>

      <div>
        <p className="text-6xl font-bold text-neutral-200">{step.number}</p>
        <h3 className="mt-3 text-balance text-2xl font-bold text-neutral-900 sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-700">
          {step.body}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="Your daily dose of health in 3 simple steps"
        />
        <div className="space-y-20">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
