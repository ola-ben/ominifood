import { useEffect, useState } from "react";
import { navLinks } from "../data/site.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-50/90 shadow-sm backdrop-blur"
          : "bg-brand-50"
      }`}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="images/omnifood-logo.png"
            alt="Omnifood"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Try for free
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-2xl text-neutral-800 md:hidden"
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-200/60 bg-brand-50 md:hidden">
          <ul className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-base font-medium text-neutral-700 hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-full bg-brand-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Try for free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
