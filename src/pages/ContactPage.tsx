import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, Instagram, Facebook, Star, Home } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '+16156460334';
    const serviceText = formData.service ? `\nService: ${formData.service}` : '';
    const message = `Hello! I'm ${formData.name}%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone}${serviceText}%0A%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-green-100">
              Ready to transform your outdoor space? Get in touch with our team today
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Phone
                      </h3>
                      <p className="text-lg text-gray-600">(615) 646-0334</p>
                      <p className="text-sm text-gray-500">Available 24/7 via WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Email
                      </h3>
                      <p className="text-lg text-gray-600">vargastreelandscape@gmail.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Location
                      </h3>
                      <p className="text-lg text-gray-600">330 Stonecrest Way, Nashville TN 37209</p>
                      <p className="text-sm text-gray-500">Serving Greater Nashville Area</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Office Hours
                      </h3>
                      <p className="text-lg text-gray-600">Mon - Fri: 7AM - 3PM</p>
                      <p className="text-sm text-gray-500">Sat: 8AM - 2PM | Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg bg-white p-6">
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">North of Nashville</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Springfield</li>
                        <li>• White House</li>
                        <li>• Portland</li>
                        <li>• Gallatin</li>
                        <li>• Hendersonville</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">East of Nashville</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Lebanon</li>
                        <li>• Mount Juliet</li>
                        <li>• Hartsville</li>
                        <li>• Carthage</li>
                        <li>• Watertown</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">South of Nashville</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Franklin</li>
                        <li>• Brentwood</li>
                        <li>• Murfreesboro</li>
                        <li>• Spring Hill</li>
                        <li>• Columbia</li>
                        <li>• Shelbyville</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-green-700 mb-3">West of Nashville</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Dickson</li>
                        <li>• Fairview</li>
                        <li>• Kingston Springs</li>
                        <li>• Ashland City</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://www.instagram.com/vargastreelandscaping?igsh=em5tbXQxYnYwdzdm&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/p/Vargas-Tree-Landscaping-Services-61574446057446/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  
                  <a
                    href="https://m.yelp.com/biz/vargas-tree-landscaping-services-nashville-davidson-metropolitan-government-balance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Star className="w-5 h-5" />
                    <span>Yelp</span>
                  </a>

                  <a
                    href="https://nextdoor.com/page-admin/ads-management/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Home className="w-5 h-5" />
                    <span>Nextdoor</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border-2 border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-green-600" />
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
                    placeholder="(615) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Tree Services">Tree Services</option>
                    <option value="Landscape Design">Landscape Design</option>
                    <option value="Property Maintenance">Property Maintenance</option>
                    <option value="Emergency Services">Emergency Services</option>
                    <option value="Seasonal Clean-ups">Seasonal Clean-ups</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all resize-none bg-white"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-3 group"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Why Reach Out Today?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Free Estimate',
                description:
                  'Get a detailed quote with no obligation',
              },
              {
                title: 'Quick Response',
                description: 'We reply within 24 hours to all inquiries',
              },
              {
                title: 'Local Experts',
                description:
                  'Nashville-based team with years of experience',
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border-2 border-green-200 text-center hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
