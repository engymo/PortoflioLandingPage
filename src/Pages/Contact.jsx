import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const contactItems = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+64 21 123 4567",
  },
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "hello@haylo.nz",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Auckland, New Zealand",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* معلومات التواصل */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can take your business to the next level.  
              I work exclusively with established business owners who are ready
              to invest in growth.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <Icon className="w-7 h-7 text-amber-950" />
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* فورم التواصل */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none text-sm"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none text-sm"
                />
              </div>

              <select
                required
                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none text-gray-600 text-sm"
              >
                {[
                  "Select Service Interest",
                  "Strategic Planning",
                  "Customer Acquisition",
                  "Brand Development",
                  "Digital Marketing",
                ].map((service, idx) => (
                  <option key={idx} value={service.toLowerCase().replace(/\s/g, "-")}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Tell me about your business and growth goals..."
                rows="4"
                required
                className="border border-gray-200 rounded-xl px-4 py-3 w-full focus:none outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-lime-950 text-white px-6 py-3 rounded hover:bg-lime-900 transition shadow-md"
              >
                Start the Conversation
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
