"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Hardware", href: "/category/hardware" },
  { name: "Software", href: "/category/software" },
  { name: "Cybersecurity", href: "/category/cybersecurity" },
  { name: "Cloud Computing", href: "/category/cloud" },
  { name: "Artificial Intelligence", href: "/category/ai" },
  { name: "Digital Transformation", href: "/category/digital-transformation" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/contact" },
  { name: "AI Demo", href: "/ai-demo" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="font-bold text-2xl">
                <span className="text-primary">TECH</span>
                <span className="text-accent-foreground">AID</span>
                <span className="text-primary">pro</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Your trusted source for the latest technology news, reviews, and insights to help you navigate the digital world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Have a question or feedback? We'd love to hear from you.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center text-primary hover:underline"
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@techaidpro.com
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              &copy; {new Date().getFullYear()} TECHAIDpro. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link 
                      href="#"
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
