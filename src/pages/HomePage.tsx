import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)',
          }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-300 rounded-full blur-3xl animate-pulse opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 animate-fadeIn border border-white/30">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-spin-slow" />
                <span className="text-white text-base font-semibold">Transform Your Outdoor Space Today</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 animate-slideUp leading-tight">
                Your Dream
                <br />
                <span className="bg-gradient-to-r from-emerald-200 to-green-100 bg-clip-text text-transparent">
                  Garden Awaits
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-slideUp animation-delay-200">
                Professional landscaping and garden design services that transform ordinary spaces into extraordinary outdoor sanctuaries
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
                <Link
                  to="/services"
                  className="group bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group bg-transparent border-3 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Get Free Consultation
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
                {[
                  { number: '500+', label: 'Projects' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '100%', label: 'Satisfied Clients' },
                ].map((stat, i) => (
                  <div key={i} className="text-center animate-slideUp" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                    <div className="text-3xl md:text-4xl font-black text-white">{stat.number}</div>
                    <div className="text-white/80 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose GreenScape?
            </h2>
            <p className="text-lg text-gray-600">
              We combine expertise, creativity, and passion to deliver exceptional landscaping solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Expert Design',
                description: 'Award-winning designers with 15+ years creating stunning gardens',
              },
              {
                icon: TrendingUp,
                title: 'Quality Guaranteed',
                description: 'Premium materials and meticulous attention to every detail',
              },
              {
                icon: Sparkles,
                title: 'Eco-Friendly',
                description: 'Sustainable practices protecting our environment',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-green-400"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
