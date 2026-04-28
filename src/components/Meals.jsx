import SectionHeading from "./SectionHeading.jsx";
import { meals, diets } from "../data/site.js";

const tagColors = {
  emerald: "bg-emerald-100 text-emerald-800",
  amber: "bg-amber-100 text-amber-800",
};

function MealCard({ meal }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-neutral-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {meal.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${tagColors[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-bold text-neutral-900">{meal.name}</h3>
        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          {meal.stats.map((stat) => (
            <li key={stat.text} className="flex items-center gap-3">
              <i className={`bx ${stat.icon} text-lg text-brand-500`}></i>
              <span>{stat.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function DietList() {
  return (
    <div className="rounded-2xl bg-brand-50 p-6 sm:p-8">
      <h3 className="text-xl font-bold text-neutral-900">Works with any diet:</h3>
      <ul className="mt-4 space-y-3">
        {diets.map((diet) => (
          <li key={diet} className="flex items-center gap-3 text-neutral-700">
            <i className="bx bx-check text-xl text-brand-500"></i>
            <span>{diet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Meals() {
  return (
    <section id="meals" className="bg-neutral-50 py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Meals"
          title="Omnifood AI chooses from 5,000+ recipes"
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {meals.map((meal) => (
            <MealCard key={meal.name} meal={meal} />
          ))}
          <DietList />
        </div>

        <p className="mt-12 text-center text-base text-neutral-700">
          See all recipes <a href="#" className="font-semibold text-brand-600 hover:text-brand-700">→</a>
        </p>
      </div>
    </section>
  );
}
