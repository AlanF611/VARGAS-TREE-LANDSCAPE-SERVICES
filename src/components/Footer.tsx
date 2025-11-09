import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t-4 border-green-600">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-black">GreenScape</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transforming outdoor spaces into breathtaking sanctuaries. We create beautiful, sustainable gardens that enhance your lifestyle and property value.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-br hover:from-green-400 hover:to-emerald-500 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
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
            <h4 className="text-lg font-black mb-6 text-green-400">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Landscape Design</li>
              <li>Hardscape Installation</li>
              <li>Garden Maintenance</li>
              <li>Tree Services</li>
              <li>Irrigation Systems</li>
              <li>Eco Solutions</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 py-8 border-t-2 border-gray-800">
          {[
            { icon: Phone, label: '(615) 646-0334', text: 'Call us' },
            { icon: Mail, label: 'vargastreelandscape@gmail.com', text: 'Email us' },
            { icon: MapPin, label: '330 Stonecrest Way, Nashville TN 37209', text: 'Visit us' },
          ].map((contact, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-all">
                <contact.icon className="w-6 h-6 text-green-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{contact.text}</p>
                <p className="font-semibold text-white">{contact.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} GreenScape. All rights reserved. | Designed with passion for beautiful outdoor spaces
          </p>
        </div>
      </div>
    </footer>
  );
}
