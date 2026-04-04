import React from 'react';
import { Wrench } from 'lucide-react';
import { services } from '../../data/services';
import FadeIn from '../animations/FadeIn';

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#6FE047]/20 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#6FE047]/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '34px 34px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6FE047]/35 bg-[#6FE047]/10 px-4 py-2">
              <Wrench className="h-4 w-4 text-[#6FE047]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6FE047]">
                What I Offer
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Services Crafted For <span className="text-[#6FE047]">Growth And Impact</span>
            </h2>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              From elegant frontends to scalable delivery pipelines, each service is designed to move your product forward with speed and precision.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <FadeIn key={service.id} delay={120 + index * 120}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#6FE047]/45 hover:shadow-[0_26px_85px_rgba(111,224,71,0.14)]">
                  <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#6FE047]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#6FE047]/35 bg-[#6FE047]/15">
                    <IconComponent className="h-8 w-8 text-[#6FE047]" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#95ff72]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/65">{service.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(2).map((service, index) => {
            const IconComponent = service.icon;

            return (
              <FadeIn key={service.id} delay={350 + index * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6FE047]/45 hover:shadow-[0_22px_75px_rgba(111,224,71,0.12)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#6FE047]/35 bg-[#6FE047]/15">
                    <IconComponent className="h-6 w-6 text-[#6FE047]" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#95ff72]">
                    {service.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/65">{service.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services; 


