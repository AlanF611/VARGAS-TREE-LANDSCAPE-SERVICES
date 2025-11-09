import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Trees, Flower2, Hammer, Droplets, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Trees,
    title: 'LANDSCAPE DESIGN',
    description: 'Custom garden layouts that maximize beauty and functionality',
    features: [
      'Softscape (Natural Elements / Plants & Gardens)',
      'Hardscape (Structural Elements / Garden Construction)',
    ],
    images: ['/img/4.3.jpg', '/img/1.jpg', '/img/2.jpg'] // Múltiples imágenes
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
    images: ['/img/3.jpg', '/img/3.1.jpg', '/img/3.2.jpg'] // Múltiples imágenes
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
              <ServiceCard key={i} service={service} index={i} />
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
          <Link to="/contact">
            <button className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all inline-flex items-center space-x-3 hover:scale-105 shadow-2xl">
              <span>Schedule Your Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Componente separado para cada tarjeta de servicio con carrusel
function ServiceCard({ service, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === service.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [service.images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-green-500 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Sección de imagen con carrusel */}
      <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
        <img 
          src={service.images[currentImageIndex]} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
        />
        
        {/* Indicadores del carrusel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {service.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex 
                  ? 'bg-white w-4' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {currentImageIndex + 1} / {service.images.length}
        </div>

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

        <Link to="/portfolio">
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}