const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { label: "X", href: "https://x.com/your-handle" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-muted-foreground">
        Add your contact details so visitors can reach out quickly.
      </p>

      <a
        href="mailto:you@example.com"
        className="mt-5 inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
      >
        you@example.com
      </a>

      <ul className="mt-5 flex flex-wrap gap-2">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:opacity-90"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}