export default function SectionHeading({ eyebrow, title, align = "left" }) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <header className={`mb-12 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-2 text-balance">{title}</h2>
    </header>
  );
}
