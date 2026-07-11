"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className={clsx(
            "flex items-center justify-between rounded-2xl border border-white/10 px-6 py-3 backdrop-blur-xl transition-all duration-300",
            isScrolled ? "bg-slate-900/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-slate-900/40"
          )}>
            <a href="#" className="text-xl font-bold tracking-tighter text-white">
              DK.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="h-4 w-px bg-slate-700" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 pt-32 px-6 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-slate-300 hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-px bg-slate-800 my-4" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-6 py-3 text-lg font-medium text-emerald-400 hover:bg-emerald-500/20"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
