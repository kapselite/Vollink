import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

// Define the structure for footer links
interface FooterLink {
  name: string;
  href: string;
}

interface EmailContact {
  label: string;
  address: string;
}

interface FooterProps {
  companyName?: string;
  links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services: FooterLink[] = [
  { name: 'Graphic Designing', href: '#services' },
  { name: 'Printing', href: '#services' },
  { name: 'Signage & Branding', href: '#services' },
  { name: 'T-Shirt Printing', href: '#services' },
  { name: 'Promotional Gifts', href: '#services' },
  { name: 'Cartridges, Printers & Copiers', href: '#services' },
  { name: 'Printer Repair', href: '#services' },
  { name: 'Computers & Accessories', href: '#services' },
];

const emails: EmailContact[] = [
  { label: 'Sales', address: 'sales@vollink.co.zw' },
  { label: 'Printing', address: 'printing@vollink.co.zw' },
  { label: 'Repairs', address: 'repairs@vollink.co.zw' },
  { label: 'General', address: 'vollinksales@gmail.com' },
];

const phoneDisplay = '+263 773 732 447';
const phoneNumber = '263773732447';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=SecurityTrust+House+73+Kwame+Nkrumah+Avenue+Harare';

// Shared column heading with the red underline accent used across the brand
const ColumnHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold text-white">{children}</h3>
    <div className="mt-2 w-10 h-1 bg-[#f60400] rounded-full" />
  </div>
);

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Vollink (Pvt) Ltd',
  links = defaultLinks,
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#16123f] text-slate-300 overflow-hidden">
      {/* Brand gradient accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3c319f] via-[#00a5d8] to-[#f60400]" />

      {/* Soft background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-20 w-[420px] h-[420px] bg-[#3c319f]/40 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-0 w-[420px] h-[420px] bg-[#00a5d8]/15 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#"
              className="inline-flex items-center bg-white rounded-2xl px-5 py-3 shadow-lg shadow-black/20"
            >
              <img src={logo} alt="Vollink logo" className="h-14 w-auto" />
            </a>
            <p className="text-xs font-bold tracking-widest uppercase text-[#00a5d8]">
              Technology, Printing & Graphics Design
            </p>
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Your one-stop partner for printer, printing, graphic design and IT products and services, all under one roof.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f60400] text-white text-sm font-semibold shadow-lg shadow-red-500/20 hover:bg-[#d40300] transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to Isaac
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm hover:text-[#00a5d8] transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5 text-[#f60400] group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm hover:text-[#00a5d8] transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a5d8] shrink-0 group-hover:bg-[#f60400] transition-colors duration-200" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <ColumnHeading>Get in Touch</ColumnHeading>
            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#00a5d8] transition-colors duration-200"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#00a5d8] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">
                    1st Floor, Suite 3<br />
                    SecurityTrust House<br />
                    73 Kwame Nkrumah Avenue, Harare
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="flex items-center gap-3 hover:text-[#00a5d8] transition-colors duration-200"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#00a5d8] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#00a5d8] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <ul className="space-y-2 min-w-0">
                  {emails.map((email) => (
                    <li key={email.address} className="break-words">
                      <span className="block text-[11px] font-bold tracking-widest uppercase text-slate-500">
                        {email.label}
                      </span>
                      <a
                        href={`mailto:${email.address}`}
                        className="hover:text-[#00a5d8] transition-colors duration-200"
                      >
                        {email.address}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-bold tracking-widest uppercase text-white hover:bg-[#00a5d8] hover:border-[#00a5d8] transition-colors duration-200"
          >
            Back to top
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
