import { Award, Users, Leaf, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified professionals with over 15 years of experience in landscape design',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Personalized service tailored to your unique vision and requirements',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable practices that protect the environment and local ecosystem',
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'We love what we do and it shows in every project we complete',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            GreenScape is a premier landscaping company dedicated to creating breathtaking outdoor spaces.
            With a passion for nature and an eye for design, we transform ordinary yards into extraordinary gardens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-green-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Dream Garden?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to bring your outdoor vision to life
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
