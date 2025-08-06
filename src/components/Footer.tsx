// NEXT-SPRINT: Stripe + Analytics

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    Legal: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Risk Disclaimer', href: '#' }
    ],
    Community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white red-text-glow">
                100<span className="text-red-500">X</span>FT
              </h3>
              <p className="text-gray-400 mt-2">
                Funded Trading Redefined
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elite prop trading opportunities with industry-leading profit splits, 
              zero profit caps, and instant funding options.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  📱
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  🐦
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  💬
                </div>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get the latest updates on our launch and exclusive offers</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-[300px]">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 text-sm"
              />
              <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 100XFT. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs leading-relaxed max-w-md">
                ⚠️ <strong>Risk Disclaimer:</strong> 100XFT does not offer investment advice. 
                Trading carries significant risk of loss and may not be suitable for all investors. 
                Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}