import { Link } from 'react-router-dom';
import { TreePine, Facebook, Instagram, Star, MapPin, Phone, Mail, Home } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t-4 border-green-600">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black">Vargas Tree</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Creating safe, beautiful, and well-maintained outdoor spaces in Nashville. Professional tree care, landscaping, and property maintenance services you can trust.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/vargastreelandscaping?igsh=em5tbXQxYnYwdzdm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/p/Vargas-Tree-Landscaping-Services-61574446057446/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://m.yelp.com/biz/vargas-tree-landscaping-services-nashville-davidson-metropolitan-government-balance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Yelp"
              >
                <Star className="w-6 h-6" />
              </a>
              <a
                href="https://nextdoor.com/page-admin/ads-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Nextdoor"
              >
                <Home className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 text-green-400">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-green-400 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-6 text-green-400">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-green-400 transition-colors">Tree Services</li>
              <li className="hover:text-green-400 transition-colors">Landscape Design</li>
              <li className="hover:text-green-400 transition-colors">Property Maintenance</li>
              <li className="hover:text-green-400 transition-colors">Emergency Services</li>
              <li className="hover:text-green-400 transition-colors">Seasonal Clean-ups</li>
              <li className="hover:text-green-400 transition-colors">Commercial Landscaping</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 py-8 border-t-2 border-gray-800">
          {[
            { 
              icon: Phone, 
              label: '(615) 646-0334', 
              text: 'Call us',
              href: 'tel:6156460334'
            },
            { 
              icon: Mail, 
              label: 'vargastreelandscape@gmail.com', 
              text: 'Email us',
              href: 'mailto:vargastreelandscape@gmail.com'
            },
            { 
              icon: MapPin, 
              label: '330 Stonecrest Way, Nashville TN 37209', 
              text: 'Visit us',
              href: 'https://maps.google.com/?q=330+Stonecrest+Way+Nashville+TN+37209'
            },
          ].map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex items-center gap-4 group hover:bg-gray-800/50 p-4 rounded-lg transition-all"
            >
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-all">
                <contact.icon className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{contact.text}</p>
                <p className="font-semibold text-white">{contact.label}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t-2 border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Vargas Tree Landscaping Services. All rights reserved. | Serving Nashville and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}