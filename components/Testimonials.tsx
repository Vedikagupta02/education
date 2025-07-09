import { testimonials } from 'components/data/testimonials';

interface Testimonial {
  avatar: string;
  name: string;
  quote: string;
  class: string;
}

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Don't just take our word for it. Here's what our students have to say about our AI career guidance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              </div>
              <div className="mb-4">
                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">
                  {testimonial.class}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
