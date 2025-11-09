import { useState } from 'react';
import { Image } from 'lucide-react';

const projects = [
  {
    title: 'Modern Zen Garden',
    category: 'Residential',
    description: 'A peaceful retreat featuring minimalist design and natural stone elements',
  },
  {
    title: 'Tropical Paradise',
    category: 'Residential',
    description: 'Lush tropical landscaping with exotic plants and water features',
  },
  {
    title: 'Corporate Landscape',
    category: 'Commercial',
    description: 'Professional outdoor space for a Fortune 500 company headquarters',
  },
  {
    title: 'English Garden',
    category: 'Residential',
    description: 'Classic English garden with perennial borders and formal pathways',
  },
  {
    title: 'Rooftop Oasis',
    category: 'Commercial',
    description: 'Urban rooftop garden with sustainable irrigation and native plants',
  },
  {
    title: 'Mediterranean Estate',
    category: 'Residential',
    description: 'Sun-soaked Mediterranean landscape with terracotta and olive trees',
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial','Softscape '];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600">
            Explore our collection of stunning garden transformations and landscape projects
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative overflow-hidden">
                <Image className="w-16 h-16 text-white/50" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
