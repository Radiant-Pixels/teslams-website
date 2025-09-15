"use client";

import Hero from "@/components/Pages/Hero";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/#hero",
    },
    {
      name: "Events",
      link: "/#events",
    },
    {
      name: "Committee",
      link: "/#committee",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <Navbar className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-6 py-2 transition-all duration-300 w-[95%] max-w-6xl">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Register Now!</NavbarButton>
          </div>
        </NavBody>

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
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Register Now!
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <main className="smooth-scroll">
        <Hero />
        <section
          id="events"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
        >
          Events
        </section>
        <section
          id="committee"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
        >
          Committee
        </section>
        <section
          id="contact"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6"
        >
          Contact
        </section>
      </main>
    </>
  );
}
