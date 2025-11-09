import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #166534 0%, #15803d 50%, #16a34a 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Premium Garden Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slideUp">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slideUp animation-delay-200">
            Professional landscaping and garden design services that bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
            <button
              onClick={scrollToContact}
              className="group bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Portfolio
            </button>
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
  );
}
