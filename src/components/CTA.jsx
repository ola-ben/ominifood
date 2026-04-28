import { useState } from "react";

const initial = { fullName: "", email: "", source: "" };

export default function CTA() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cta" className="bg-white py-20">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-brand-300 via-brand-400 to-brand-700 shadow-xl md:grid-cols-[1.2fr_1fr]">
          <div className="px-8 py-12 text-white sm:px-12 sm:py-14">
            <span className="eyebrow !text-brand-900">Get started</span>
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Get your first meal for free
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. Cancel or pause anytime — and the first meal is
              on us.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-white/40 bg-white/10 px-5 py-6 text-white backdrop-blur">
                <p className="text-lg font-semibold">
                  Thanks, {form.fullName.split(" ")[0] || "friend"} 🍽️
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Check {form.email || "your inbox"} — we just sent your first
                  meal voucher.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                <Field
                  label="Full name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="me@example.com"
                  required
                />
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-white/95">
                    Where did you hear from us?
                  </label>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-0 bg-white/95 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    <option value="" disabled>
                      Please choose one option
                    </option>
                    <option>Friends and family</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>YouTube</option>
                    <option>Podcast ad</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Sign up now
                </button>
              </form>
            )}
          </div>

          <div
            className="hidden bg-cover bg-center md:block"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(232,93,31,0.35), rgba(107,38,19,0.55)), url(images/eating.jpg)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-white/95">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border-0 bg-white/95 px-4 py-3 text-sm text-neutral-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
      />
    </div>
  );
}
