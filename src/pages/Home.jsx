import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, ArrowRight, CalendarDays } from 'lucide-react';

// ---- Edit these to change contact details ---------------------------------
const PHONE_TEL = 'tel:+94707803698';
const WHATSAPP_URL = 'https://wa.me/94707803698';
const EMAIL_URL = 'mailto:info@nadeesenanayake.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/nadee-senanayake/';
const WEBSITE_URL = 'https://nadeesenanayake.com';
// ---------------------------------------------------------------------------

const services = [
  'Brand Strategy & Market Positioning',
  'Social Media Research & Gap Analysis',
  'Social Listening, eWOM & Community Management',
  'Online Reputation & Digital Crisis Management',
  'Influencer & Digital Influence Strategy',
  'Paid Media Consulting (Meta Ads & Google Ads) – Non Education Industries',
  'Talent Development & Industry Placement',
  'Digital Marketing Operations & Supply Chain',
];

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.45 9.45 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.46 9.46zM20.52 3.45A11.4 11.4 0 0 0 12.04 0C5.73 0 .59 5.14.59 11.45c0 2.02.53 3.99 1.53 5.73L.5 24l6.97-1.83a11.43 11.43 0 0 0 5.46 1.39h.01c6.31 0 11.45-5.14 11.45-11.45 0-3.06-1.19-5.93-3.35-8.1z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452z" />
  </svg>
);

const pillBtn =
  'inline-flex items-center gap-2 rounded-full bg-[#9b1a3d] px-4 py-2.5 text-[13px] font-semibold text-white ' +
  'shadow-[0_6px_18px_rgba(155,26,61,0.35)] transition-colors hover:bg-[#b8204a] ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-5 sm:text-sm';

const socialBtn =
  'flex h-11 w-11 items-center justify-center rounded-full text-white transition-transform hover:scale-105 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const Home = () => {
  return (
    <main id="home" className="flex min-h-screen justify-center bg-[#08121a] font-sans text-white">
      <div className="relative w-full max-w-[880px] overflow-hidden bg-[#0e1a23]">
        {/* ---------- Banner ---------- */}
        <div
          className="relative h-[150px] sm:h-[190px]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 84%)' }}
        >
          <img
            src="/assets/profile-banner.jpg"
            alt=""
            className="absolute inset-y-0 right-0 h-full w-[88%] object-cover object-right"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 38%)',
              maskImage: 'linear-gradient(to right, transparent 0%, #000 38%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a23]/70 via-transparent to-transparent" />
        </div>

        {/* ---------- Profile ---------- */}
        <section className="px-5 pb-8 sm:px-10">
          <div className="flex items-start justify-between gap-3">
            <div className="-mt-[72px] h-[112px] w-[112px] shrink-0 overflow-hidden rounded-full border-[3px] border-white/90 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:-mt-[88px] sm:h-[144px] sm:w-[144px]">
              <img
                src="/assets/nadee-portrait.jpeg"
                alt="Nadee Senanayake"
                className="h-full w-full object-cover"
                style={{ objectPosition: '58% 12%', transform: 'scale(2.1)', transformOrigin: '56% 22%' }}
              />
            </div>

            <div className="flex flex-wrap justify-end gap-2.5 pt-5 sm:gap-3 sm:pt-6">
              <a href={PHONE_TEL} className={pillBtn}>
                <Phone size={16} aria-hidden="true" /> Call
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={pillBtn}>
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <h1 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.35rem]">
            Nadee Senanayake
          </h1>
          <p className="mt-1 text-base font-medium text-[#e5566f] sm:text-[1.05rem]">
            Digital Business Consultant
          </p>
          <p className="mt-3 max-w-[560px] text-[0.95rem] leading-relaxed text-[#b4bec6]">
            With{' '}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-[#e5566f] underline-offset-4 transition-colors hover:text-[#f2b7c0]"
            >
              5+ years of industry experience
            </a>
            , I help businesses turn audience insights and digital intelligence into clearer strategies,
            stronger brands, and meaningful growth across research, digital marketing, and community
            management.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${socialBtn} bg-[#25D366]`}>
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${socialBtn} bg-[#1a64d8]`}>
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href={EMAIL_URL} aria-label="Email" className={`${socialBtn} bg-[#2b343b]`}>
              <Mail size={20} aria-hidden="true" />
            </a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" aria-label="Website" className={`${socialBtn} bg-[#9b1a3d]`}>
              <Globe size={20} aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="h-px bg-white/[0.07]" />

        {/* ---------- Services ---------- */}
        <section id="services" className="px-5 py-8 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e5566f]">Services</p>
          <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight">What I can help with</h2>

          <ul className="mt-5 grid grid-cols-1 gap-3.5 min-[520px]:grid-cols-2">
            {services.map((title) => (
              <li key={title}>
                <Link
                  to="/contact"
                  className="group flex h-full min-h-[80px] items-center justify-between gap-4 rounded-[14px] border border-white/[0.08] bg-[#111f29] px-5 py-4 transition-colors hover:border-[#9b1a3d] hover:bg-[#14232e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="text-[0.95rem] font-medium leading-snug text-[#eef2f5]">{title}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#a3183f] text-white transition-colors group-hover:bg-[#a3183f]">
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Book a consultation ---------- */}
        <section id="contact" className="px-4 pb-10 pt-2 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#5b0f27] ring-1 ring-white/10">
            <img
              src="/assets/consult-book.jpg"
              alt=""
              className="absolute inset-y-0 right-0 h-full w-[60%] object-cover object-right opacity-90 max-sm:w-full max-sm:opacity-35"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 55%)',
                maskImage: 'linear-gradient(to right, transparent 0%, #000 55%)',
              }}
            />
            <div className="relative px-6 py-8 sm:px-9 sm:py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff7a96]">Contact</p>
              <h2 className="mt-2 text-[1.75rem] font-semibold tracking-tight sm:text-[2rem]">Book a Consultation</h2>
              <p className="mt-2 max-w-[360px] text-[0.95rem] leading-relaxed text-white/75">
                Let’s discuss your goals and explore how I can support your next stage of growth.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-[0.95rem] font-semibold text-[#8f1737] shadow-lg transition-colors hover:bg-[#fbe9ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <CalendarDays size={20} aria-hidden="true" />
                Book a Consultation
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
