import { footer } from "framer-motion/client";
import {
  Instagram,
  Mail,
  MapPin,
  Linkedin,
  Bot,
  Phone,
} from "lucide-react";
import Link from "next/link";

const footerData = {
  company: {
    name: "TeslaMS",
    description: "Innovate. Inspire. Impact.",
    logo: "/images/teslams.png",
  },
  contact: {
    email2: "eeeams.in",
    phone1: "+91 xxxxx xxxxx",
    phone2: "+91 xxxxx xxxxx",
    address: `Aalim Muhammed Salegh College of Engineering<br/>
Avadi - IAF Road<br/>
Muthapudupet, Chennai - 600055<br/>
Tamil Nadu, India`,
  },
  socials: [
    {
      icon: Instagram,
      href: "https://www.instagram.com/teslams2k25/",
      label: "Instagram",
    },
    // {
    //   icon: Linkedin,
    //   href: "https://www.linkedin.com/company/teslams/",
    //   label: "LinkedIn",
    // },
    // {
    //   icon: Bot,
    //   href: "https://discord.gg/yourdiscordlink",
    //   label: "Discord",
    // },
  ],
  links: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/#events" },
    { label: "Committee", href: "/#committee" },
    { label: "Contact", href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 w-full mt-16 rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 lg:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center sm:justify-start">
              <img
                src={footerData.company.logo}
                alt={`${footerData.company.name} Logo`}
                className="h-24 w-24 object-fill rounded-full"
              />
            </div>
            <p className="max-w-md mx-auto sm:mx-0 leading-relaxed font-oswald font-3xl">{footerData.company.name}</p>
            <p className="mt-4 text-secondary-foreground/70 max-w-md mx-auto sm:mx-0 leading-relaxed">
              {footerData.company.description}
            </p>

            {/* Social Icons */}
            <ul className="mt-6 flex justify-center sm:justify-start gap-5">
              {footerData.socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="text-primary hover:text-primary/80 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 justify-items-center sm:justify-items-start">
              {footerData.links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-secondary-foreground/80 hover:text-primary transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              {/* Email */}
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="text-primary size-5" />
                <a
                  href={`mailto:${footerData.contact.email2}`}
                  className="text-secondary-foreground/80 hover:underline"
                >
                  {footerData.contact.email2}
                </a>
              </li>

              {/* Phones */}
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="text-primary size-5" />
                <div className="flex flex-col text-secondary-foreground/80">
                  <span>{footerData.contact.phone1}</span>
                  <span>{footerData.contact.phone2}</span>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="text-primary size-5 mt-0.5" />
                <span
                  className="text-secondary-foreground/80 text-left"
                  dangerouslySetInnerHTML={{
                    __html: footerData.contact.address,
                  }}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-secondary-foreground/70">
          &copy; 2025 {footerData.company.name}. All rights reserved.
            <p>
                Made with <span className="text-red-500">❤️</span> by{" "}
                <a
                    href="https://www.instagram.com/radiant_enterprises.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    >
                    Radiant Pixels
                </a>
            </p>
        </div>
      </div>
    </footer>
  );
}
