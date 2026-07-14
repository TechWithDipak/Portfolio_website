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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-8"
        )}
      >
        <div className="mx-auto max-w-5xl px-6 flex justify-center">
          <div className={clsx(
            "flex items-center justify-between rounded-full px-6 py-2 transition-all duration-500 w-full max-w-full",
            isScrolled ? "glass-panel glass-edge inner-glow" : "bg-transparent border border-transparent"
          )}>
            <a href="#" className="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
              DK.
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium text-graphite-300 transition-colors hover:text-white"
                  >
                    {link.name}
                    {hoveredLink === link.name && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-white/10 mx-2" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 px-5 py-2.5 text-sm font-medium text-accent-indigo transition-all hover:bg-accent-indigo hover:text-white hover:shadow-[0_0_20px_rgba(94,92,230,0.4)]"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-graphite-300 hover:text-white transition-colors"
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
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 bg-background/90 pt-32 px-6 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-graphite-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-12 h-px bg-white/10 my-4" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 rounded-full bg-accent-indigo px-8 py-4 text-lg font-medium text-white shadow-[0_0_20px_rgba(94,92,230,0.4)] transition-transform active:scale-95"
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
