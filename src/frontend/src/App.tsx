import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import {
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Target,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

/* ─────────────────────────────────────────────
   Enterprise Header
───────────────────────────────────────────── */
function Header({ onLoginClick }: { onLoginClick: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", ocid: "nav.home.link", href: "#home" },
    { label: "About", ocid: "nav.about.link", href: "#about" },
    { label: "Services", ocid: "nav.services.link", href: "#services" },
    { label: "Contact", ocid: "nav.contact.link", href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "oklch(0.10 0 0)",
        borderColor: "oklch(0.75 0.14 85 / 30%)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Wordmark */}
        <div className="flex items-center gap-4">
          {/* Monogram Badge */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
            style={{
              backgroundColor: "oklch(0.75 0.14 85 / 12%)",
              borderColor: "oklch(0.75 0.14 85 / 50%)",
            }}
          >
            <span
              className="font-heading font-bold text-sm tracking-widest"
              style={{ color: "oklch(0.75 0.14 85)" }}
            >
              PJE
            </span>
          </div>
          {/* Wordmark */}
          <div>
            <div
              className="font-heading font-semibold tracking-[0.18em] uppercase text-sm leading-none"
              style={{ color: "oklch(0.75 0.14 85)" }}
            >
              Pathak Ji Enterprises
            </div>
            <div
              className="font-body text-[10px] tracking-[0.3em] uppercase mt-0.5"
              style={{ color: "oklch(0.55 0.07 85)" }}
            >
              Est. Since Inception
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.ocid}
              href={link.href}
              data-ocid={link.ocid}
              className="font-body text-sm tracking-wide transition-colors duration-200"
              style={{ color: "oklch(0.72 0 0)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "oklch(0.75 0.14 85)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "oklch(0.72 0 0)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Agent Login CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="header.login_button"
            onClick={onLoginClick}
            className="hidden md:flex items-center gap-2 px-5 py-2 font-body font-semibold text-sm tracking-wide rounded transition-all duration-200 border"
            style={{
              backgroundColor: "oklch(0.75 0.14 85)",
              color: "oklch(0.10 0 0)",
              borderColor: "oklch(0.75 0.14 85)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "oklch(0.82 0.14 85)";
              el.style.borderColor = "oklch(0.82 0.14 85)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "oklch(0.75 0.14 85)";
              el.style.borderColor = "oklch(0.75 0.14 85)";
            }}
          >
            Agent Login
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded"
            style={{ color: "oklch(0.75 0.14 85)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t"
            style={{
              borderColor: "oklch(0.75 0.14 85 / 20%)",
              backgroundColor: "oklch(0.12 0 0)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.ocid}
                  href={link.href}
                  data-ocid={link.ocid}
                  className="font-body text-sm tracking-wide py-1"
                  style={{ color: "oklch(0.72 0 0)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onLoginClick();
                }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 font-body font-semibold text-sm tracking-wide rounded border w-full"
                style={{
                  backgroundColor: "oklch(0.75 0.14 85)",
                  color: "oklch(0.10 0 0)",
                  borderColor: "oklch(0.75 0.14 85)",
                }}
              >
                Agent Login
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Login Dialog
───────────────────────────────────────────── */
function LoginDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Login functionality coming soon.", {
      description: "The Partner Portal is currently under setup.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-ocid="login.dialog"
        className="max-w-md border"
        style={{
          backgroundColor: "oklch(0.12 0 0)",
          borderColor: "oklch(0.75 0.14 85 / 30%)",
          boxShadow:
            "0 25px 60px oklch(0 0 0 / 60%), 0 0 0 1px oklch(0.75 0.14 85 / 10%)",
        }}
      >
        <DialogHeader className="text-center space-y-2 pb-2">
          {/* Gold divider top */}
          <div
            className="mx-auto w-12 h-0.5 rounded mb-3"
            style={{ backgroundColor: "oklch(0.75 0.14 85)" }}
          />
          <DialogTitle
            className="font-heading text-2xl font-semibold tracking-wide"
            style={{ color: "oklch(0.75 0.14 85)" }}
          >
            Partner Portal
          </DialogTitle>
          <DialogDescription
            className="font-body text-sm tracking-widest uppercase"
            style={{ color: "oklch(0.50 0.06 85)" }}
          >
            Authorized Agents Only
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="font-body text-xs uppercase tracking-widest"
              style={{ color: "oklch(0.65 0.10 85)" }}
            >
              Username
            </Label>
            <Input
              id="username"
              data-ocid="login.username.input"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="font-body h-11 rounded border"
              style={{
                backgroundColor: "oklch(0.16 0 0)",
                borderColor: "oklch(0.28 0 0)",
                color: "oklch(0.92 0 0)",
              }}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="font-body text-xs uppercase tracking-widest"
              style={{ color: "oklch(0.65 0.10 85)" }}
            >
              Password
            </Label>
            <Input
              id="password"
              data-ocid="login.password.input"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="font-body h-11 rounded border"
              style={{
                backgroundColor: "oklch(0.16 0 0)",
                borderColor: "oklch(0.28 0 0)",
                color: "oklch(0.92 0 0)",
              }}
            />
          </div>

          <button
            type="submit"
            data-ocid="login.submit_button"
            className="w-full h-11 font-body font-semibold tracking-widest uppercase text-sm rounded transition-all duration-200"
            style={{
              backgroundColor: "oklch(0.75 0.14 85)",
              color: "oklch(0.10 0 0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "oklch(0.82 0.14 85)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "oklch(0.75 0.14 85)";
            }}
          >
            Sign In
          </button>

          <p
            className="font-body text-xs text-center leading-relaxed"
            style={{ color: "oklch(0.42 0 0)" }}
          >
            Forgot credentials? Contact your administrator.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
function Hero({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.10 0 0)" }}
    >
      {/* Background geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            oklch(0.75 0.14 85),
            oklch(0.75 0.14 85) 1px,
            transparent 1px,
            transparent 80px
          ), repeating-linear-gradient(
            90deg,
            oklch(0.75 0.14 85),
            oklch(0.75 0.14 85) 1px,
            transparent 1px,
            transparent 80px
          )`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, oklch(0.75 0.14 85 / 6%) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative top rule */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div
              className="h-px w-16"
              style={{ backgroundColor: "oklch(0.75 0.14 85 / 40%)" }}
            />
            <span
              className="font-body text-xs tracking-[0.4em] uppercase"
              style={{ color: "oklch(0.55 0.08 85)" }}
            >
              Established with Purpose
            </span>
            <div
              className="h-px w-16"
              style={{ backgroundColor: "oklch(0.75 0.14 85 / 40%)" }}
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-heading font-semibold italic leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "oklch(0.75 0.14 85)",
              textShadow: "0 0 60px oklch(0.75 0.14 85 / 20%)",
            }}
          >
            Powering Enterprise Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-body text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "oklch(0.65 0 0)" }}
          >
            Pathak Ji Enterprises — A Global Leader in Trade, Commerce &amp;
            Strategic Partnerships
          </motion.p>

          {/* Gold horizontal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mb-10 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.75 0.14 85), transparent)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              data-ocid="hero.primary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-200"
              style={{
                backgroundColor: "oklch(0.75 0.14 85)",
                color: "oklch(0.10 0 0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "oklch(0.82 0.14 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "oklch(0.75 0.14 85)";
              }}
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-body font-semibold text-sm tracking-widest uppercase rounded transition-all duration-200 border"
              style={{
                backgroundColor: "transparent",
                color: "oklch(0.75 0.14 85)",
                borderColor: "oklch(0.75 0.14 85 / 60%)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "oklch(0.75 0.14 85 / 10%)";
                el.style.borderColor = "oklch(0.75 0.14 85)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "oklch(0.75 0.14 85 / 60%)";
              }}
            >
              Contact Us
            </a>
          </motion.div>

          {/* Mobile login link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 md:hidden"
          >
            <button
              type="button"
              onClick={onLoginClick}
              className="font-body text-sm underline underline-offset-4"
              style={{ color: "oklch(0.55 0.08 85)" }}
            >
              Agent Login →
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.75 0.14 85 / 60%), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   About / Services Strip
───────────────────────────────────────────── */
const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver world-class trade solutions and strategic partnerships that empower businesses across India and beyond.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Operating across Asia, the Middle East, and Europe — with dedicated liaison offices in key commercial hubs.",
  },
  {
    icon: Users,
    title: "Partner Network",
    description:
      "A curated ecosystem of verified agents, distributors, and institutional partners driving mutual growth.",
  },
];

function ServicesStrip() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "oklch(0.12 0 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="font-body text-xs tracking-[0.4em] uppercase block mb-3"
            style={{ color: "oklch(0.55 0.08 85)" }}
          >
            What We Stand For
          </span>
          <h2
            className="font-heading font-semibold text-3xl md:text-4xl mb-4"
            style={{ color: "oklch(0.75 0.14 85)" }}
          >
            Built on Three Foundations
          </h2>
          <div
            className="mx-auto w-12 h-0.5 rounded"
            style={{ backgroundColor: "oklch(0.75 0.14 85 / 40%)" }}
          />
        </div>

        <div id="about" className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 rounded-sm border relative overflow-hidden"
                style={{
                  backgroundColor: "oklch(0.14 0 0)",
                  borderColor: "oklch(0.22 0 0)",
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, oklch(0.75 0.14 85), transparent)",
                  }}
                />
                <div
                  className="w-12 h-12 rounded flex items-center justify-center mb-5 border"
                  style={{
                    backgroundColor: "oklch(0.75 0.14 85 / 10%)",
                    borderColor: "oklch(0.75 0.14 85 / 25%)",
                  }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "oklch(0.75 0.14 85)" }}
                  />
                </div>
                <h3
                  className="font-heading font-semibold text-xl mb-3"
                  style={{ color: "oklch(0.75 0.14 85)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.58 0 0)" }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer — Global HQ + Map
───────────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: "oklch(0.09 0 0)" }}>
      {/* Top gold rule */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.75 0.14 85 / 40%), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Section 1: Global HQ */}
          <div>
            <div
              className="font-body text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-3"
              style={{ color: "oklch(0.55 0.08 85)" }}
            >
              <div
                className="h-px w-6"
                style={{ backgroundColor: "oklch(0.55 0.08 85)" }}
              />
              Global Headquarters
            </div>

            <h3
              className="font-heading font-semibold text-2xl mb-6"
              style={{ color: "oklch(0.75 0.14 85)" }}
            >
              Pathak Ji Enterprises
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.65 0.10 85)" }}
                />
                <address
                  className="font-body text-sm leading-relaxed not-italic"
                  style={{ color: "oklch(0.60 0 0)" }}
                >
                  12, Commerce Tower, Sector 18
                  <br />
                  Noida, Uttar Pradesh 201301
                  <br />
                  India
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(0.65 0.10 85)" }}
                />
                <a
                  href="tel:+911204567890"
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.60 0 0)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.75 0.14 85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.60 0 0)";
                  }}
                >
                  +91 120 456 7890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(0.65 0.10 85)" }}
                />
                <a
                  href="mailto:contact@pathakjienterprises.com"
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.60 0 0)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.75 0.14 85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.60 0 0)";
                  }}
                >
                  contact@pathakjienterprises.com
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Embedded Map */}
          <div>
            <div
              className="font-body text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-3"
              style={{ color: "oklch(0.55 0.08 85)" }}
            >
              <div
                className="h-px w-6"
                style={{ backgroundColor: "oklch(0.55 0.08 85)" }}
              />
              Location
            </div>
            <div
              className="rounded-sm overflow-hidden border"
              style={{ borderColor: "oklch(0.22 0 0)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3261!3d28.5677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709900000000"
                width="100%"
                height="300"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(0.85)",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pathak Ji Enterprises — Global Headquarters, Sector 18 Noida"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(0.20 0 0)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs" style={{ color: "oklch(0.38 0 0)" }}>
            © {new Date().getFullYear()} Pathak Ji Enterprises. All Rights
            Reserved.
          </p>
          <div
            className="flex items-center gap-4 font-body text-xs"
            style={{ color: "oklch(0.38 0 0)" }}
          >
            <a
              href="/privacy-policy"
              className="transition-colors duration-150 hover:text-foreground"
              style={{ color: "oklch(0.38 0 0)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.65 0.08 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.38 0 0)";
              }}
            >
              Privacy Policy
            </a>
            <span style={{ color: "oklch(0.28 0 0)" }}>|</span>
            <a
              href="/terms-of-service"
              className="transition-colors duration-150"
              style={{ color: "oklch(0.38 0 0)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.65 0.08 85)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "oklch(0.38 0 0)";
              }}
            >
              Terms of Service
            </a>
            <span style={{ color: "oklch(0.28 0 0)" }}>|</span>
            <span>
              Built with ♥ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors duration-150"
                style={{ color: "oklch(0.45 0.06 85)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(0.65 0.10 85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "oklch(0.45 0.06 85)";
                }}
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   App Root
───────────────────────────────────────────── */
export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Toaster richColors position="top-right" />
      <Header onLoginClick={() => setLoginOpen(true)} />
      <main className="flex-1">
        <Hero onLoginClick={() => setLoginOpen(true)} />
        <ServicesStrip />
      </main>
      <Footer />
      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </div>
  );
}
