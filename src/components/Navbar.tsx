"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "الخدمات", href: "/services" },
  { name: "الأسعار", href: "/pricing" },
  { name: "اتصل بنا", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-border/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex flex-row-reverse justify-between items-center h-14">
          {/* Brand Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-black text-xl shadow-lg shadow-accent/20">
                إ
              </div>
              <span>ارتقاء</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row-reverse items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 relative ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-1.5 right-0 left-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-foreground text-background px-6 py-2.5 rounded-xl font-medium active:scale-95 transition-all hover:bg-foreground/90 shadow-sm"
            >
              تواصل معنا
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
              aria-label="Open Mobile Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85%] bg-background z-[70] p-6 shadow-2xl flex flex-col justify-between border-l border-border"
            >
              <div>
                <div className="flex items-center justify-between flex-row-reverse mb-10">
                  <div className="text-2xl font-bold flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-black text-xl">
                      إ
                    </div>
                    ارتقاء
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col gap-2 text-right">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-lg py-3 px-4 rounded-xl transition-colors ${
                          isActive
                            ? "bg-accent/10 text-accent font-semibold"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="pt-6 border-t border-border mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center bg-foreground text-background px-6 py-4 rounded-xl font-medium active:scale-95 transition-all shadow-sm"
                >
                  تواصل معنا
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
