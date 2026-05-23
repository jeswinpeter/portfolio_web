"use client";
import React, { useEffect, useRef, useState } from "react";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "#",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhMtDgMzSHAs-nD10QvtNeLutIQdYqnN_Mee6oj7ZlUl2aFVb_tOguq4CNAGN_mHoTItMfkfyDlGAaNxd34BN2VpF3f2AQb5Xc8Owqo5VMQCDsCtBF77vBBK74PSzVo5Z4TAsagrjvsk2BT5nFebIrTkkY3xxJbELfuz0iaz6cciXG2L8HoPDVT79r4EmjlkF50rpaUHixLfEOTq-Ol1FqNH3Kzz566v7P44G1MtSyKkltX_37VPM5bJleCBGS23VN7gPncuxYtUhF",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Hi7ZjxqCvYZTjAdkH5x4oAYdbwnSzJR_2OrDxNYS_PESWYM_d1pLlgOmG8gUFg0cMjAWq1-gIDp5w5iLgxhxR9lbktOYrez1miQVlMBwe-cuk-J91qeHTsmidDPYSXhaevgUBJN2YfCgVAvdYP8iKTr2LlUDoa3V32ZxG3slAbngLeKuKTR35mlUQ_qIozELBgWHirh3NWHUwc_MOYzMlSVVfjpjUAkkQlLRxXGv6bUk5RPf2wWsawuOaj_AiAhhWZLtQdkVckMt",
  },
  {
    name: "GitHub",
    href: "#",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCA74FKZjcxX7ytw9MyIQl7hqdE3WTc1HAo6uRH53jvWpp_AzzOmH1BYehssPkl1990nwKXJHAhD1zCQdB6nfIo3FZhjo8gSJJEHZ3WLTxa3rT4ZMdAV2OTle3gqyxg66_AsnEeCmFwa4Onveb9mhaojNqt-gfOi1w9DHJCpnUChjZ5onH0qhQcxVux84h_TWx8jN9JFRjGpi-ZsCmhptQcgPJHOuNYRtEL5_VGWiS66IaZguexgtIT24UAo5SM2vbS6QmYNdG20CF8",
  },
];

const QUICK_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Timeline", href: "/#timeline" },
];

type SubmitState = "idle" | "sending" | "sent";

const SpinnerIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M12 2a10 10 0 0 1 10 10h-3.2a6.8 6.8 0 0 0-6.8-6.8V2z"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 11.5l17-7-6.6 7 6.6 7-17-7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 12.5l4 4 8-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ContactSection() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") {
      return;
    }

    const form = event.currentTarget;
    setStatus("sending");

    const sendingTimeout = window.setTimeout(() => {
      setStatus("sent");
      form.reset();

      const resetTimeout = window.setTimeout(() => {
        setStatus("idle");
      }, 3000);

      timeoutsRef.current.push(resetTimeout);
    }, 1500);

    timeoutsRef.current.push(sendingTimeout);
  };

  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col bg-[linear-gradient(135deg,#f3f7ff_0%,#f9f5ff_100%)] text-[#1b1b1f]"
    >
      <main className="mx-auto flex w-full max-w-none flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)] md:gap-16 lg:gap-24">
          <div className="space-y-8 md:justify-self-center md:w-full md:max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-[#1b1b1f] md:text-6xl">
                Get in Touch
              </h1>
              <p className="max-w-md text-base text-[#49454f]">
                Have a project in mind or just want to say hello? I'm always
                open to discussing new opportunities and creative ideas.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="group flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1b1f] transition-colors group-focus-within:text-[#6750a4]"
                    htmlFor="name"
                  >
                    Name <span className="text-[#6750a4]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    className="rounded-sm border border-[#d1d5db] bg-white px-4 py-3 text-[#1b1b1f] shadow-sm transition-all focus:border-[#6750a4] focus:outline-none focus:ring-1 focus:ring-[#6750a4]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="group flex flex-col gap-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1b1f] transition-colors group-focus-within:text-[#6750a4]"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="rounded-sm border border-[#d1d5db] bg-white px-4 py-3 text-[#1b1b1f] shadow-sm transition-all focus:border-[#6750a4] focus:outline-none focus:ring-1 focus:ring-[#6750a4]"
                    />
                  </div>

                  <div className="group flex flex-col gap-2">
                    <label
                      className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1b1f] transition-colors group-focus-within:text-[#6750a4]"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      className="rounded-sm border border-[#d1d5db] bg-white px-4 py-3 text-[#1b1b1f] shadow-sm transition-all focus:border-[#6750a4] focus:outline-none focus:ring-1 focus:ring-[#6750a4]"
                    />
                  </div>
                </div>

                <div className="group flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1b1b1f] transition-colors group-focus-within:text-[#6750a4]"
                    htmlFor="message"
                  >
                    Message <span className="text-[#6750a4]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="resize-none rounded-sm border border-[#d1d5db] bg-white px-4 py-3 text-[#1b1b1f] shadow-sm transition-all focus:border-[#6750a4] focus:outline-none focus:ring-1 focus:ring-[#6750a4]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98] active:opacity-90 md:w-auto ${
                  isSent ? "bg-[#ffdbcf] text-[#360f00]" : "bg-[#6750a4]"
                }`}
              >
                {isSending ? (
                  <>
                    <SpinnerIcon />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <CheckIcon />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="hidden self-stretch bg-[#d1d5db]/60 md:block" />

          <div className="space-y-10 md:justify-self-center md:w-full md:max-w-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-[#6750a4]" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6750a4]">
                  Email
                </h3>
              </div>
              <a
                className="group block"
                href="mailto:hello@obsidian.design"
              >
                <p className="text-2xl font-semibold text-[#1b1b1f] transition-colors group-hover:text-[#6750a4]">
                  hello@obsidian.design
                </p>
                <div className="h-0.5 w-0 bg-[#6750a4] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#49454f]">
                Socials
              </h3>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-4 text-[#49454f] transition-all hover:text-[#6750a4]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7e9ed] transition-colors group-hover:bg-[#6750a4] group-hover:text-white">
                      <img
                        src={link.icon}
                        alt={link.name}
                        className="h-5 w-5"
                        loading="lazy"
                      />
                    </span>
                    <span className="text-base underline decoration-[#d1d5db] underline-offset-4 transition-all group-hover:decoration-[#6750a4]">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#49454f]">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[#49454f] transition-all hover:text-[#6750a4] hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mx-auto flex w-full max-w-none flex-col items-center justify-between gap-4 border-t border-[#d1d5db]/60 px-6 py-10 text-xs text-[#49454f] sm:px-10 lg:px-16 md:flex-row">
        <div>© 2024 ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <a
            href="#"
            className="underline underline-offset-4 transition-all duration-300 hover:text-[#6750a4]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="underline underline-offset-4 transition-all duration-300 hover:text-[#6750a4]"
          >
            Terms
          </a>
          <a
            href="#"
            className="underline underline-offset-4 transition-all duration-300 hover:text-[#6750a4]"
          >
            Cookies
          </a>
        </div>
      </footer>
    </section>
  );
}