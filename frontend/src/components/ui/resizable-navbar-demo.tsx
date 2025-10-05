"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CryptoNavbarDemo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      name: "Features",
      link: "#features",
      onClick: () => scrollToSection('features'),
    },
    {
      name: "Network Pulse",
      link: "#network-pulse",
      onClick: () => scrollToSection('network-pulse'),
    },
    {
      name: "AI Engine",
      link: "#ai-engine",
      onClick: () => scrollToSection('ai-engine'),
    },
    {
      name: "Ecosystem",
      link: "#ecosystem",
      onClick: () => scrollToSection('ecosystem'),
    },
    {
      name: "Security",
      link: "#security",
      onClick: () => scrollToSection('security'),
    },
    {
      name: "Roadmap",
      link: "#roadmap",
      onClick: () => scrollToSection('roadmap'),
    },
    {
      name: "FAQ",
      link: "#faq",
      onClick: () => scrollToSection('faq'),
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="relative text-white hover:text-blue-400 cursor-pointer"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
