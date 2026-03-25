const socialLinks = [
  { label: "GitHub", href: "https://github.com/jeswinpeter" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeswin-peter-019873294" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact Me</h2>
        

        <a
          href="mailto:you@example.com"
          className="mt-5 inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          jeswinpeter92@gmail.com
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
      </div>
    </section>
  );
}