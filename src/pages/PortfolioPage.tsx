import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hardscape',
    category: 'LANDSCAPE DESIGN',
    location: 'Nashville, TN',
    description: 'Complete softscape and hardscape transformation',
    images: [
      '/img/1.6.jpg',
      '/img/1.7.jpg',
      '/img/1.3.jpg',
      '/img/1.5.jpg',
      '/img/1.jpg',
      '/img/1.2.jpg',
    ],
    services: ['Softscape', 'Hardscape', 'Garden Construction']
  },
  {
    id: 2,
    title: 'Hardscape', 
    category: 'LANDSCAPE DESIGN',
    location: 'Nashville, TN',
    description: 'Complete softscape and hardscape transformation',
    images: [
      '/img/2.jpg',
      '/img/2.1.jpg',
      '/img/2.3.jpg',
      '/img/2.4.jpg',
    ],
    services: ['Tree Trimming', 'Health Assessment', 'Storm Prevention']
  },
  {
    id: 3,
    title: 'Tree trimming',
    category: 'TREE SERVICES', 
    location: 'Nashville, TN',
    description: 'Tree trimming',
    images: [
      '/img/3.jpg',
      '/img/3.2.jpg'
    ],
    services: ['Tree Trimming', 'Health Assessment', 'Storm Prevention']
  },
  {
    id: 4,
    title: 'SOFTSCAPE',
    category: 'SOFTSCAPE', 
    location: 'Nashville, TN',
    description: 'SOFTSCAPE',
    images: [
      '/img/4.jpg',
      '/img/4.1.jpg',
      '/img/4.2.jpg',
      '/img/4.3.jpg',
    ],
    services: ['Size Control Pruning', 'Formal Garden Pruning', 'Formal Garden Pruning']
  },
];

const categories = ['All', 'LANDSCAPE DESIGN', 'TREE SERVICES', 'SOFTSCAPE']; // Corregido: sin espacio

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((project) => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="pt-20">
      {/* Modal Simple */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Galería de Imágenes */}
              <div className="relative">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Información del Proyecto */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-600 text-sm">• {selectedProject.location}</span>
                </div>

                <p className="text-gray-700 mb-6">
                  {selectedProject.description}
                </p>

                {/* Servicios */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Services Included:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Miniaturas de Imágenes */}
                {selectedProject.images.length > 1 && (
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">More Photos:</h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden transition-all ${
                            index === currentImageIndex ? 'border-green-500' : 'border-gray-300'
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección Hero */}
      <section className="py-24 bg-gradient-to-b from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-green-100">
              Explore our professional landscape design and tree service projects
            </p>
          </div>
        </div>
      </section>

      {/* Filtros y Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  filter === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {project.location}
                  </p>

                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>

                  <button 
                    onClick={() => openModal(project)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
