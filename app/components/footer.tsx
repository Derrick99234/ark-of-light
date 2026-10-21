import Image from "next/image";
import Link from "next/link";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Pillars", href: "/#pillars" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Giving & Partnership", href: "/give" },
  { label: "Contact & Visit", href: "/contact" },
];

const pillarServices = [
  { label: "Sanctuary of Refuge", href: "/pillars/sanctuary-of-refuge" },
  { label: "Ark Food Bank", href: "/pillars/food-bank" },
  { label: "Emergency Response Centre", href: "/pillars/emergency-response" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/17HHd3SoU3/",
    icon: (
      <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" fill="currentColor" stroke="none" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gospelpillars",
    icon: (
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" />
        <circle cx="12" cy="12" r="4" fill="none" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gospelpillarsinternational",
    icon: (
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="none" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gospelpillarsintl",
    icon: (
      <path d="M16 3c.4 2.3 2 4.2 4.3 4.6v3.1c-1.6 0-3.1-.5-4.3-1.4v6.2a6.2 6.2 0 1 1-6.2-6.2c.3 0 .7 0 1 .1v3.2a3.1 3.1 0 1 0 2.1 2.9V3H16z" fill="currentColor" stroke="none" />
    ),
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=2348090111194",
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4zm-3.5 4.2c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.2.2 1.9 2.9 4.5 4 .7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.7-2.3-1.2a8 8 0 0 1-1.9-2c-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5v-.5L10 8.7c-.2-.4-.4-.3-.6-.3h-.5z" fill="currentColor" stroke="none" />
    ),
  },
];

const locations = ["Nigeria", "United Kingdom", "United States", "Canada", "Philippines"];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/">
            <Image
              src="/ark-logo.png"
              alt="Ark of Light for All Nations — home"
              width={56}
              height={35}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            A city of refuge for all nations — founded by Prophet Isaiah
            Macwealth, and a beacon of hope and a lifeline to those in need.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-full border border-zinc-200 text-zinc-500 transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-amber-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Site">
          <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Explore
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Our Lifelines
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            {pillarServices.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="transition-colors hover:text-amber-600 dark:hover:text-amber-400">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Locations
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {locations.join(" · ")}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
            Contact &amp; Visit
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>11C Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria</li>
            <li>
              <a href="tel:+2348090111194" className="transition-colors hover:text-amber-600">
                +234 809 011 1194
              </a>
            </li>
            <li>
              <a href="mailto:info@arkoflightforallnations.com" className="transition-colors hover:text-amber-600">
                info@arkoflightforallnations.com
              </a>
            </li>
            <li className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
              Africa +27 73 110 9815 · UK +44 7493 345 240
              <br />
              Canada +1 647 563 8691 · USA +1 682 410 0027
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-zinc-500 sm:flex-row dark:text-zinc-500">
          <span>© 2026 Ark of Light for All Nations. All rights reserved.</span>
          <span className="font-medium text-zinc-400 dark:text-zinc-500">
            &ldquo;Where God is.&rdquo;
          </span>
        </div>
      </div>
    </footer>
  );
}
