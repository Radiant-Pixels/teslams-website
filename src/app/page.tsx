"use client";

import Contact from "@/components/Pages/Contact";
import Events from "@/components/Pages/Events";
import Hero from "@/components/Pages/Hero";
import { Map } from "@/components/Pages/Map";
import Team from "@/components/Pages/Team";
import DiagonalMarquee from "@/components/ui/diagonal-marquee";
import SingleMarquee from "@/components/ui/diagonal-marquee";
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
            <NavbarButton variant="primary" href="https://forms.gle/yYipx4suUdcMiMjU6">Register Now!</NavbarButton>
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
        <br />
        <br />
        <br />
        {/* <DiagonalMarquee /> */}
        <Events />
        <br />
        <br />
        <br />
        <Team />
        <Contact />
        {/* <Map /> */}
      </main>
    </>
  );
}
