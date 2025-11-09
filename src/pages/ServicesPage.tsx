import { ArrowRight, CheckCircle, Trees, Flower2, Hammer, Droplets, Leaf } from 'lucide-react';

const services = [
  {
    icon: Trees,
    title: 'LANDSCAPE DESIGN',
    description: 'Custom garden layouts that maximize beauty and functionality',
    features: [
      'Softscape (Natural Elements / Plants & Gardens)',
      'Hardscape (Structural Elements / Garden Construction)',
    ],
    image: '/img/1.jpg'
  },
  {
    icon: Trees,
    title: 'TREE SERVICES',
    description: 'Expert tree care and management',
    features: [
      'Tree trimming & pruning',
      'Tree removal',
      'Health assessment',
      'Storm damage cleanup',
    ],
    image: '/img/3.jpg'
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              OUR AWESOME SERVICES
            </h1>
            <p className="text-xl text-green-100">
              Complete landscaping solutions designed to bring your vision to life
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-green-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Sección de imagen */}
                <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>

                {/* Sección de contenido */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-4 group-hover:translate-x-0 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t-2 border-gray-200">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation from our experts and discover what's possible for your outdoor space
          </p>
          <button className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all inline-flex items-center space-x-3 hover:scale-105 shadow-2xl">
            <span>Schedule Your Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}