// NEXT-SPRINT: Stripe / Analytics

'use client';

import { motion } from 'framer-motion';
import { BackgroundBeams } from './ui/background-beams';

export default function EnhancedFooter() {
  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/100xft', icon: '𝕏' },
    { name: 'Telegram', href: 'https://t.me/I00xclub', icon: '✈️' },
    { name: 'Instagram', href: 'https://www.instagram.com/100xft/', icon: '📷' }
  ];

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      // Press removed
      { name: 'Contact', href: 'mailto:contact@100xft.com' }
    ],
    Trading: [
      { name: 'Challenge Rules', href: '/rules' },
      { name: 'Profit Splits', href: '/profit-splits' },
      { name: 'Platforms', href: '/platforms' },
      { name: 'FAQ', href: '/faq' }
    ],
    Legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Risk Disclosure', href: '/risk-disclosure' }
    ],
    Support: [
      { name: 'Help Center', href: '/faq' }
    ]
  } as const;

  return (
    <footer className="relative overflow-hidden bg-neutral-950">
      {/* Background Beams matching hero */}
      <BackgroundBeams className="opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                {/* Brand logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Untitled%20design.svg"
                  alt="100XFT logo"
                  className="h-10 w-auto mb-3 drop-shadow-[0_2px_12px_rgba(255,0,0,0.25)]"
                />
                 <p className="text-gray-300 text-sm leading-relaxed">
                   Morocco's first prop trading firm. Empowering traders worldwide with elite challenges and up to 90% profit splits.
                 </p>
              </div>
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-500/30 rounded-full text-xs mb-4">
                <span className="text-lg">🇲🇦</span>
                <span className="text-green-400 font-medium text-xs">Made in Morocco</span>
                <span className="text-gray-400">—</span>
                <span className="text-lg">🇺🇸</span>
                <span className="text-blue-400 font-medium text-xs">US Welcome</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-10 h-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-brand-500/50 hover:bg-brand-600/10 transition-all duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <h4 className="text-white font-semibold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-brand-400 transition-all duration-200 text-xs"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-xs">
              © 2025 100XFT. All rights reserved.
            </div>

            {/* Launch Status */}
            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 font-medium text-xs">Launching Q4 2025</span>
            </div>

            {/* Risk Disclaimer */}
            <div className="text-gray-500 text-xs text-center md:text-right max-w-md">
              100XFT does not offer investment advice. Trading carries risk.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}