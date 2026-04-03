import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import FadeIn from '../animations/FadeIn';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: '3x', label: 'Faster Delivery' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '100%', label: 'On-Time Delivery' },
    { value: '5★', label: 'Average Rating' },
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <Quote className="w-6 h-6 text-primary mx-auto mb-4" />
            <h2 className="text-4xl text-white mb-4">
              Trusted by forward-thinking teams
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4">
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">

                    {/* Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full md:w-1/3 h-72 object-cover rounded-xl"
                    />

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Quote className="w-6 h-6 text-primary mb-3" />
                        <p className="text-white text-lg">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <h4 className="text-white font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>

                        {/* Stars */}
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button onClick={prevTestimonial}>
              <ChevronLeft />
            </button>

            <button onClick={nextTestimonial}>
              <ChevronRight />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
                                                    
