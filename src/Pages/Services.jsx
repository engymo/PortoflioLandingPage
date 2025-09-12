import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

function Services() {
  const servicesData = [
    {
      title: "Strategic Planning",
      description:
        "Comprehensive marketing strategies that align with your business goals and target market.",
      features: [
        "Market Analysis",
        "Competitor Research",
        "Growth Roadmap",
        "ROI Projections",
      ],
      cardBg: "bg-rose-50 border-rose-200",
    },
    {
      title: "Customer Acquisition",
      description:
        "Proven systems to attract and convert high-quality leads into loyal customers.",
      features: [
        "Lead Generation",
        "Conversion Optimization",
        "Sales Funnel Development",
      ],
      cardBg: "bg-green-50 border-green-200",
    },
    {
      title: "Brand Development",
      description:
        "Build a strong brand presence that resonates with your target audience.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
      cardBg: "bg-brown-50 border-brown-200",
    },
    {
      title: "Digital Marketing",
      description:
        "Modern digital strategies to expand your reach and engage your audience.",
      features: [
        "Social Media Strategy",
        "Content Marketing",
        "Email Campaigns",
      ],
      cardBg: "bg-white border-green-200",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-700">
            Services That Drive Growth
          </h2>
          <p className="mt-3 text-lg text-brown-700">
            Comprehensive marketing solutions designed for ambitious business owners
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`${service.cardBg} p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border`}
            >
              <h3 className="text-xl font-semibold text-brown-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-green-700">
                    <CheckIcon className="w-5 h-5 text-rose-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
