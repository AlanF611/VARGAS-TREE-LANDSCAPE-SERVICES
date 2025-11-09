import { Award, Users, Target, Leaf, TreePine, Shield, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              About Vargas Tree
            </h1>
            <p className="text-xl text-green-100">
              Creating safe, beautiful, and well-maintained outdoor spaces with passion and expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Vargas Tree Landscaping Services, we are passionate about creating safe, beautiful, and well-maintained outdoor spaces. With years of experience in tree care, landscaping, and property maintenance, our team takes pride in providing reliable, high-quality service for every project — big or small.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every yard deserves attention, and our mission is to deliver exceptional results through professionalism, safety, and respect for nature. From tree trimming and removal to landscape design and seasonal clean-ups, we handle every detail with care to ensure your property always looks its best.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Vargas Tree, our clients are more than customers — they're our neighbors. We work with honesty, dedication, and a commitment to making every outdoor space thrive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '1000+', label: 'Trees Cared For' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Emergency Service' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-black text-green-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Why Choose Vargas Tree
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'We prioritize safety in every tree care and landscaping project',
              },
              {
                icon: TreePine,
                title: 'Expert Tree Care',
                description: 'Professional tree services from trimming to removal',
              },
              {
                icon: Sparkles,
                title: 'Quality Results',
                description: 'Exceptional landscaping that enhances your property',
              },
              {
                icon: Users,
                title: 'Local & Reliable',
                description: 'Your neighbors, dedicated to making your space thrive',
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all text-center hover:-translate-y-3"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t-4 border-green-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: 'Tree Services', 
                items: ['Tree Trimming', 'Tree Removal', 'Health Assessment', 'Storm Cleanup'] 
              },
              { 
                title: 'Landscape Design', 
                items: ['Softscape Design', 'Hardscape Installation', 'Garden Planning'] 
              },
              { 
                title: 'Property Maintenance', 
                items: ['Seasonal Clean-ups', 'Lawn Care', 'Ongoing Maintenance'] 
              },
              { 
                title: 'Specialized Care', 
                items: ['Emergency Services', 'Commercial Properties', 'Residential Care'] 
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for reliable tree care and landscaping services you can trust
          </p>
          <button className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all inline-flex items-center space-x-3 hover:scale-105 shadow-2xl">
            <span>Get Free Estimate</span>
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
}