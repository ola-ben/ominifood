import { footerSections } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-16">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src="images/omnifood-logo.png"
            alt="Omnifood"
            className="h-9 w-auto"
          />
          <div className="mt-6 flex gap-4 text-2xl text-neutral-500">
            <a href="#" aria-label="Instagram" className="hover:text-brand-500">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-brand-500">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-brand-500">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <p className="mt-8 text-xs text-neutral-500">
            Copyright © {new Date().getFullYear()} by Omnifood, Inc. All
            rights reserved.
          </p>
        </div>

        <div>
          <h6 className="mb-4 text-sm font-semibold text-neutral-900">
            Contact us
          </h6>
          <address className="not-italic text-sm leading-relaxed text-neutral-600">
            23 Harrison St., 2nd Floor
            <br />
            San Francisco, CA 94107
          </address>
          <p className="mt-4 text-sm text-neutral-600">
            <a href="tel:+18141254851" className="hover:text-brand-600">
              +1 (814) 125-4851
            </a>
            <br />
            <a href="mailto:hello@omnifood.com" className="hover:text-brand-600">
              hello@omnifood.com
            </a>
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h6 className="mb-4 text-sm font-semibold text-neutral-900">
              {section.title}
            </h6>
            <ul className="space-y-2 text-sm text-neutral-600">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-brand-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
